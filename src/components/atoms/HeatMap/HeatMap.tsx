import React, { useMemo } from "react";
import styles from "./HeatMap.module.scss";
import type { SxProps } from "../../../styles/stylesApi";

export interface HeatMapProps {
  title?: string;
  xLabels: string[]; // columns (e.g., days)
  yLabels: string[]; // rows (e.g., times)
  values: number[][]; // [row][col]
  colorVar?: string; // CSS var for base hue, defaults to --chart-series-1
  cellSize?: number; // px
  gap?: number; // px gap between cells
  minOpacity?: number; // 0..1
  maxOpacity?: number; // 0..1
  round?: number; // border radius in px
  sx?: SxProps; // not used in CSS Modules, reserved for future consistency
}

export const HeatMap: React.FC<HeatMapProps> = ({
  title,
  xLabels,
  yLabels,
  values,
  colorVar = "--chart-series-1",
  cellSize = 28,
  gap = 8,
  minOpacity = 0.16,
  maxOpacity = 1,
  round = 8,
}) => {
  const { min, max } = useMemo(() => {
    let localMin = Number.POSITIVE_INFINITY;
    let localMax = Number.NEGATIVE_INFINITY;
    for (const row of values) {
      for (const v of row) {
        if (v < localMin) localMin = v;
        if (v > localMax) localMax = v;
      }
    }
    if (!isFinite(localMin)) localMin = 0;
    if (!isFinite(localMax)) localMax = 1;
    if (localMin === localMax) {
      // Avoid divide by zero; expand range slightly
      localMin = 0;
      localMax = Math.max(1, localMax);
    }
    return { min: localMin, max: localMax };
  }, [values]);

  const mapToOpacity = (v: number) => {
    const t = (v - min) / (max - min);
    return minOpacity + t * (maxOpacity - minOpacity);
  };

  return (
    <div className={styles.wrapper} aria-label={title ?? "heat map"}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.gridBlock} style={{ gap }}>
        <div className={styles.rows} style={{ gap }}>
          {yLabels.map((label) => (
            <div
              key={label}
              className={styles.yLabel}
              style={{ height: cellSize }}
            >
              {label}
            </div>
          ))}
        </div>
        <div className={styles.grid} style={{ gap }}>
          {values.map((row, rowIdx) => (
            <div
              key={yLabels[rowIdx] ?? rowIdx}
              className={styles.row}
              style={{ gap }}
            >
              {row.map((v, colIdx) => {
                const opacity = mapToOpacity(v);
                const label = `${yLabels[rowIdx] ?? rowIdx} • ${
                  xLabels[colIdx] ?? colIdx
                }: ${v}`;
                return (
                  <div
                    key={`${rowIdx}-${colIdx}`}
                    className={styles.cell}
                    title={label}
                    style={{
                      width: cellSize,
                      height: cellSize,
                      borderRadius: round,
                      background: `var(${colorVar})`,
                      opacity,
                    }}
                  />
                );
              })}
            </div>
          ))}
          <div className={styles.xLabels} style={{ gap }}>
            {xLabels.map((label) => (
              <div
                key={label}
                className={styles.xLabel}
                style={{ width: cellSize }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
