import React from "react";
import { PieChart as MuiPieChart } from "@mui/x-charts";
import type { SxProps } from "../../../styles/stylesApi";
import styles from "./PieChart.module.scss";

export interface PieSlice {
  label: string;
  value: number;
  colorVar?: string; // CSS variable name like "--color-blue-6" or "--chart-series-1"
}

export interface PieChartProps {
  data: PieSlice[];
  width?: number;
  height?: number;
  title?: string;
  variant?: "pie" | "donut";
  innerRadius?: number; // for donut; if not provided, auto based on size
  sx?: SxProps;
}

const DEFAULT_SERIES_COLORS = [
  "var(--chart-series-1)",
  "var(--chart-series-2)",
  "var(--chart-series-3)",
  "var(--chart-series-4)",
  "var(--chart-series-5)",
];

export const PieChart: React.FC<PieChartProps> = ({
  data,
  width = 280,
  height = 220,
  title,
  variant = "pie",
  innerRadius,
  sx,
}) => {
  const seriesData = data.map((d, idx) => ({
    id: idx,
    value: d.value,
    label: d.label,
    color: d.colorVar
      ? `var(${d.colorVar})`
      : DEFAULT_SERIES_COLORS[idx % DEFAULT_SERIES_COLORS.length],
  }));

  const donutInnerRadius =
    variant === "donut" ? innerRadius ?? Math.min(width, height) * 0.28 : 0;

  return (
    <div className={styles.chartContainer} aria-label={title ?? "pie chart"}>
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      <MuiPieChart
        series={[
          {
            data: seriesData,
            innerRadius: donutInnerRadius,
          },
        ]}
        width={width}
        height={height}
        slotProps={
          {
            legend: {
              direction: "horizontal",
              position: { vertical: "bottom", horizontal: "center" },
            },
          }
        }
        sx={
          {
            "--ChartsLegend-labelColor": "var(--chart-legend-label-color)",
            "--ChartsTooltip-background": "var(--chart-tooltip-background)",
            "--ChartsTooltip-textColor": "var(--chart-tooltip-text)",
            "--ChartsTooltip-border": "var(--chart-tooltip-border)",
            "& .MuiChartsLegend-root, & .MuiChartsLegend-label": {
              color: "var(--chart-legend-label-color) !important",
              fill: "var(--chart-legend-label-color) !important",
            },
            "& text": {
              fill: "var(--chart-axis-label-color) !important",
            },
            ...(sx as object),
          } as SxProps
        }
      />
    </div>
  );
};

export default PieChart;
