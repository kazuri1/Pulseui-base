import React from "react";
import { SparkLineChart as MuiSparkLineChart } from "@mui/x-charts";
import type { SxProps } from "../../../styles/stylesApi";
import styles from "./Sparkline.module.scss";

export interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  title?: string;
  colorVar?: string; // CSS var like "--chart-series-1" or "--color-blue-6"
  showArea?: boolean;
  areaOpacity?: number; // 0..1, default 0.18
  curve?: "linear" | "monotoneX" | "step";
  sx?: SxProps;
}

export const Sparkline: React.FC<SparklineProps> = ({
  data,
  width = 160,
  height = 56,
  title,
  colorVar,
  showArea = false,
  areaOpacity = 0.18,
  curve = "monotoneX",
  sx,
}) => {
  const strokeColor = colorVar ? `var(${colorVar})` : "var(--chart-series-1)";

  return (
    <div className={styles.chartContainer} aria-label={title ?? "sparkline"}>
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      <MuiSparkLineChart
        data={data}
        width={width}
        height={height}
        curve={curve}
        color={strokeColor}
        area={showArea}
        sx={
          {
            "--ChartsTooltip-background": "var(--chart-tooltip-background)",
            "--ChartsTooltip-textColor": "var(--chart-tooltip-text)",
            "--ChartsTooltip-border": "var(--chart-tooltip-border)",
            "& path[stroke]": {
              stroke: `${strokeColor} !important`,
            },
            "& path[fill]": showArea
              ? {
                fill: `${strokeColor}`,
                fillOpacity: `${areaOpacity} !important`,
              }
              : {},
            ...(sx as object),
          } as SxProps
        }
      />
    </div>
  );
};

export default Sparkline;
