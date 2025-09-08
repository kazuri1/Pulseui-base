import React from "react";
import { BarChart as MuiBarChart } from "@mui/x-charts";
import type { SxProps } from "../../../styles/stylesApi";
import styles from "./BarChart.module.scss";

export interface BarSeries {
  label: string;
  data: number[];
  colorVar?: string; // CSS variable name like "--color-blue-6"
}

export interface BarChartProps {
  xLabels: Array<string | number>;
  series: BarSeries[];
  height?: number;
  title?: string;
  sx?: SxProps;
  variant?: "basic" | "stacked"; // basic (grouped), stacked (same category sum)
}

const DEFAULT_SERIES_COLORS = [
  "var(--chart-series-1)",
  "var(--chart-series-2)",
  "var(--chart-series-3)",
  "var(--chart-series-4)",
  "var(--chart-series-5)",
];

export const BarChart: React.FC<BarChartProps> = ({
  xLabels,
  series,
  height = 320,
  title,
  sx,
  variant = "basic",
}) => {
  const muiSeries = series.map((s, index) => ({
    label: s.label,
    data: s.data,
    color: s.colorVar
      ? `var(${s.colorVar})`
      : DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length],
    ...(variant === "stacked" ? { stack: "total" } : {}),
  }));

  return (
    <div className={styles.chartContainer} aria-label={title ?? "bar chart"}>
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      <MuiBarChart
        xAxis={[{ data: xLabels, scaleType: "band" }]}
        series={muiSeries}
        height={height}
        slotProps={
          {
            legend: {
              direction: "horizontal",
              position: { vertical: "top", horizontal: "center" },
            },
          }
        }
        sx={
          {
            "--ChartsAxis-labelColor": "var(--chart-axis-label-color)",
            "--ChartsAxis-tickLabelColor": "var(--chart-axis-label-color)",
            "--ChartsAxis-lineColor": "var(--chart-grid-color)",
            "--ChartsGrid-lineColor": "var(--chart-grid-color)",
            "--ChartsLegend-labelColor": "var(--chart-legend-label-color)",
            "--ChartsTooltip-background": "var(--chart-tooltip-background)",
            "--ChartsTooltip-textColor": "var(--chart-tooltip-text)",
            "--ChartsTooltip-border": "var(--chart-tooltip-border)",
            "& .MuiChartsAxis-root .MuiChartsAxis-line": {
              stroke: "var(--chart-grid-color) !important",
            },
            "& .MuiChartsAxis-root .MuiChartsAxis-tick line": {
              stroke: "var(--chart-grid-color) !important",
            },
            "& .MuiChartsAxis-root text": {
              fill: "var(--chart-axis-label-color) !important",
            },
            "& .MuiChartsLegend-root, & .MuiChartsLegend-label, & .MuiChartsLegend-series .MuiChartsLegend-label":
              {
                color: "var(--chart-legend-label-color) !important",
                fill: "var(--chart-legend-label-color) !important",
              },
            ...(sx as object),
          } as SxProps
        }
      />
    </div>
  );
};

export default BarChart;
