import React from "react";
import { LineChart as MuiLineChart, LineSeries as MuiLineChartSeries } from "@mui/x-charts/LineChart";
import type { SxProps } from "../../../styles/stylesApi";
import styles from "./LineChart.module.scss";

export interface LineChartSeries {
  label: string;
  data: number[];
  colorVar?: string; // CSS variable name like "--color-blue-6"
}

export interface LineChartProps {
  xData: Array<string | number | Date>;
  series: LineChartSeries[];
  height?: number;
  title?: string;
  sx?: SxProps;
  animate?: boolean;
  animationDurationMs?: number;
  filledArea?: boolean; // show soft area under the line
  frontIndex?: number; // series index to render on top
}

const DEFAULT_SERIES_COLORS = [
  "var(--chart-series-1)",
  "var(--chart-series-2)",
  "var(--chart-series-3)",
  "var(--chart-series-4)",
  "var(--chart-series-5)",
];

export const LineChart: React.FC<LineChartProps> = ({
  xData,
  series,
  height = 320,
  title,
  sx,
  animate = true,
  animationDurationMs,
  filledArea = false,
  frontIndex,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const chartUid = React.useId();

  React.useEffect(() => {
    if (!animate) return;
    const root = containerRef.current;
    if (!root) return;
    const paths = root.querySelectorAll<SVGPathElement>("path[data-series-id]");
    const duration = `${animationDurationMs ?? 700}ms`;
    paths.forEach((pathEl) => {
      try {
        const totalLength = pathEl.getTotalLength();
        pathEl.style.transition = "none";
        pathEl.style.strokeDasharray = `${totalLength}`;
        pathEl.style.strokeDashoffset = `${totalLength}`;
        pathEl.style.opacity = "0.2";
        // force layout
        void pathEl.getBoundingClientRect();
        pathEl.style.transition = `stroke-dashoffset ${duration} ease-out, opacity ${duration} ease-out`;
        pathEl.style.strokeDashoffset = "0";
        pathEl.style.opacity = "1";
      } catch {
        // getTotalLength might fail for non-path elements; ignore
      }
    });
  }, [xData, series, animate, animationDurationMs]);

  const strokeColors = React.useMemo(() => {
    return series.map((s, index) =>
      s.colorVar
        ? `var(${s.colorVar})`
        : DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length]
    );
  }, [series]);

  // Inject subtle vertical gradients for filled areas using SVG defs (pre-paint)
  React.useLayoutEffect(() => {
    if (!filledArea) return;
    const root = containerRef.current;
    if (!root) return;
    const svg = root.querySelector("svg");
    if (!svg) return;
    let defs = svg.querySelector("defs");
    if (!defs) {
      defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      svg.prepend(defs);
    }
    strokeColors.forEach((color, i) => {
      const id = `${chartUid}-gradient-${i}`;
      let lg = defs!.querySelector(`#${id}`) as SVGLinearGradientElement | null;
      if (!lg) {
        lg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "linearGradient"
        );
        lg.setAttribute("id", id);
        lg.setAttribute("x1", "0");
        lg.setAttribute("y1", "0");
        lg.setAttribute("x2", "0");
        lg.setAttribute("y2", "1");
        defs!.appendChild(lg);
      } else {
        while (lg.firstChild) lg.removeChild(lg.firstChild);
      }
      const stop1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", color);
      stop1.setAttribute("stop-opacity", "0.28");
      const stop2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", color);
      stop2.setAttribute("stop-opacity", "0");
      lg.append(stop1, stop2);
    });

    // Apply the fill to the areas
    strokeColors.forEach((_, i) => {
      const selector = `.MuiAreaElement-series-pulseui-series-${i}`;
      root.querySelectorAll<SVGPathElement>(selector).forEach((el) => {
        el.setAttribute("fill", `url(#${chartUid}-gradient-${i})`);
      });
    });
  }, [filledArea, strokeColors, xData.length, chartUid]);

  // Reorder series so requested index is rendered last (on top)
  const ordered = React.useMemo(() => {
    const arr = [...series];
    let idx: number | undefined = undefined;
    if (
      typeof frontIndex === "number" &&
      frontIndex >= 0 &&
      frontIndex < arr.length
    ) {
      idx = frontIndex;
    } else {
      // Auto-detect blue series or Germany if present
      idx = arr.findIndex((s) => s.colorVar === "--color-blue-6");
      if (idx < 0) idx = arr.findIndex((s) => /germany/i.test(s.label || ""));
    }
    if (idx !== undefined && idx >= 0) {
      const [picked] = arr.splice(idx, 1);
      arr.push(picked);
    }
    return arr;
  }, [series, frontIndex]);

  const muiSeries = ordered.map((s, index) => {
    const strokeColor = strokeColors[index];
    return {
      id: `pulseui-series-${index}`,
      label: s.label,
      data: s.data,
      color: strokeColor,
      showMark: false,
      curve: "monotoneX",
      area: filledArea,
    } as MuiLineChartSeries;
  });

  // Force z-order by re-appending selected series SVG nodes
  React.useEffect(() => {
    // Move any path with stroke equal to the blue token to the top as fallback
    const root = containerRef.current;
    if (!root) return;
    const targetId = `pulseui-series-${ordered.length - 1}`; // rendered last in ordered
    const nodes = root.querySelectorAll(`[data-series-id="${targetId}"]`);
    nodes.forEach((n) => n.parentNode && n.parentNode.appendChild(n));
    const bluePaths = root.querySelectorAll(
      `path[stroke='var(--color-blue-6)'], path[stroke="var(--color-blue-6)"]`
    );
    bluePaths.forEach((p) => p.parentNode && p.parentNode.appendChild(p));
  }, [ordered.length, frontIndex, xData.length]);

  return (
    <div
      ref={containerRef}
      className={styles.chartContainer}
      aria-label={title ?? "line chart"}
    >
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      <MuiLineChart
        xAxis={[
          {
            data: xData,
            scaleType: "point",
            tickLabelStyle: { fill: "var(--chart-axis-label-color)" },
            labelStyle: { fill: "var(--chart-axis-label-color)" },
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: { fill: "var(--chart-axis-label-color)" },
            labelStyle: { fill: "var(--chart-axis-label-color)" },
          },
        ]}
        series={muiSeries}
        height={height}
        axisHighlight={{ x: "line" }}
        sx={
          {
            "--ChartsLegend-root-offset": "0px",

            // Axis & grid use DS tokens
            "--ChartsAxis-labelColor": "var(--chart-axis-label-color)",
            "--ChartsAxis-tickLabelColor": "var(--chart-axis-label-color)",
            "--ChartsAxis-lineColor": "var(--chart-grid-color)",
            "--ChartsAxis-tickColor": "var(--chart-grid-color)",
            "--ChartsGrid-lineColor": "var(--chart-grid-color)",
            "--ChartsLegend-labelColor": "var(--chart-legend-label-color)",
            "--ChartsTooltip-background": "var(--chart-tooltip-background)",
            "--ChartsTooltip-textColor": "var(--chart-tooltip-text)",
            "--ChartsTooltip-border": "var(--chart-tooltip-border)",

            // Hard overrides in case variables don't propagate in dark mode
            "& .MuiChartsAxis-root .MuiChartsAxis-line": {
              stroke: "var(--chart-grid-color) !important",
            },
            "& .MuiChartsAxis-root .MuiChartsAxis-tick line": {
              stroke: "var(--chart-grid-color) !important",
            },
            "& .MuiChartsAxis-root .MuiChartsAxis-tick": {
              stroke: "var(--chart-axis-label-color) !important",
            },
            "& .MuiChartsAxis-root text": {
              fill: "var(--chart-axis-label-color) !important",
            },

            // Legend text color enforcement
            "& .MuiChartsLegend-root": {
              flexDirection: "row",
              top: 0,
              justifyContent: "center",
            },
            "& .MuiChartsLegend-label, & .MuiChartsLegend-series .MuiChartsLegend-label":
              {
                color: "var(--chart-legend-label-color) !important",
                fill: "var(--chart-legend-label-color) !important",
              },

            // Crosshair / axis highlight dashed line color
            "& .MuiChartsAxisHighlight-root line": {
              stroke: "var(--chart-crosshair-color) !important",
            },
            "& .MuiChartsAxisHighlight-root": {
              color: "var(--chart-crosshair-color) !important",
            },

            // Series path color enforcement (fallback)
            "& path[data-series-id]": {
              strokeWidth: 2,
            },

            // No CSS override; fill is bound at render via areaStyle url(#id)

            // Merge external sx
            ...(sx as object),
          } as SxProps
        }
      />
    </div>
  );
};

export default LineChart;