import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from 'react';

type Margin = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

interface ResponsiveContainerProps {
  width?: string | number;
  height?: string | number;
  children: ReactElement;
}

export const ResponsiveContainer = ({
  width = '100%',
  height = '100%',
  children,
}: ResponsiveContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const updateSize = () => {
      setSize({ width: element.clientWidth, height: element.clientHeight });
    };

    updateSize();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => {
        updateSize();
      });
      observer.observe(element);
      return () => observer.disconnect();
    }

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const style: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    position: 'relative',
  };

  return (
    <div ref={containerRef} style={style}>
      {size.width > 0 && size.height > 0
        ? cloneElement(children as ReactElement<{ width?: number; height?: number }>, {
            width: size.width,
            height: size.height,
          })
        : null}
    </div>
  );
};

interface XAxisProps {
  dataKey: string;
  label?: { value: string; position?: string; offset?: number };
  tickFormatter?: (value: number) => string;
}

export const XAxis = (props: XAxisProps) => {
  void props;
  return null;
};

interface YAxisProps {
  tickFormatter?: (value: number) => string;
  label?: { value: string; angle?: number; position?: string };
}

export const YAxis = (props: YAxisProps) => {
  void props;
  return null;
};

interface CartesianGridProps {
  strokeDasharray?: string;
  opacity?: number;
}

export const CartesianGrid = (props: CartesianGridProps) => {
  void props;
  return null;
};

interface LineProps {
  dataKey: string;
  stroke?: string;
  strokeWidth?: number;
  dot?: boolean;
  connectNulls?: boolean;
  name?: string;
  type?: string;
  isAnimationActive?: boolean;
}

export const Line = (props: LineProps) => {
  void props;
  return null;
};

interface TooltipProps {
  formatter?: (
    value: number,
    name: string
  ) => [string, string] | string | number;
  labelFormatter?: (value: string | number) => string;
}

export const Tooltip = (props: TooltipProps) => {
  void props;
  return null;
};

export const Legend = () => null;

interface LineChartProps {
  data: Record<string, number | string | undefined>[];
  margin?: Margin;
  width?: number;
  height?: number;
  children: ReactNode;
}

const DEFAULT_MARGIN: Required<Margin> = {
  top: 20,
  right: 24,
  bottom: 36,
  left: 48,
};

type LineDefinition = {
  dataKey: string;
  stroke: string;
  strokeWidth: number;
  dot: boolean;
  connectNulls: boolean;
  name: string;
  type?: string;
  isAnimationActive?: boolean;
};

type TooltipDefinition = TooltipProps | undefined;

type AxisLabel = { value: string; position?: string; offset?: number } | undefined;

type YAxisLabel = { value: string; angle?: number; position?: string } | undefined;

type TooltipRow = { name: string; value: ReactNode; color: string };

const ensureNumber = (value: unknown, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const LineChart = ({
  data,
  margin,
  width = 0,
  height = 0,
  children,
}: LineChartProps) => {
  const marginWithDefaults = {
    ...DEFAULT_MARGIN,
    ...margin,
  } as Required<Margin>;

  const innerWidth = Math.max(0, width - marginWithDefaults.left - marginWithDefaults.right);
  const innerHeight = Math.max(0, height - marginWithDefaults.top - marginWithDefaults.bottom);

  const childrenArray = Children.toArray(children) as ReactElement[];

  const xAxisChild = childrenArray.find((child) => child.type === XAxis) as
    | ReactElement<XAxisProps>
    | undefined;
  const yAxisChild = childrenArray.find((child) => child.type === YAxis) as
    | ReactElement<YAxisProps>
    | undefined;
  const gridChild = childrenArray.find((child) => child.type === CartesianGrid) as
    | ReactElement<CartesianGridProps>
    | undefined;
  const tooltipChild = childrenArray.find((child) => child.type === Tooltip) as
    | ReactElement<TooltipProps>
    | undefined;
  const legendChild = childrenArray.find((child) => child.type === Legend);

  const lineChildren = childrenArray.filter((child) => child.type === Line) as ReactElement<LineProps>[];

  const lineDefs: LineDefinition[] = lineChildren.map((child) => ({
    dataKey: child.props.dataKey,
    stroke: child.props.stroke ?? '#2563eb',
    strokeWidth: child.props.strokeWidth ?? 2,
    dot: child.props.dot ?? false,
    connectNulls: child.props.connectNulls ?? false,
    name: child.props.name ?? child.props.dataKey,
    type: child.props.type,
    isAnimationActive: child.props.isAnimationActive,
  }));

  const xKey = xAxisChild?.props.dataKey ?? 'x';

  const xValues = useMemo(() => {
    return data
      .map((item) => ensureNumber(item[xKey], Number.NaN))
      .filter((value) => Number.isFinite(value));
  }, [data, xKey]);

  const yValues = useMemo(() => {
    const values: number[] = [];
    lineDefs.forEach((line) => {
      data.forEach((item) => {
        const maybeValue = ensureNumber(item[line.dataKey], Number.NaN);
        if (Number.isFinite(maybeValue)) {
          values.push(maybeValue);
        }
      });
    });
    return values;
  }, [data, lineDefs]);

  const xMin = xValues.length > 0 ? Math.min(...xValues) : 0;
  const xMaxRaw = xValues.length > 0 ? Math.max(...xValues) : 1;
  const xMax = xMaxRaw === xMin ? xMin + 1 : xMaxRaw;

  const yMin = yValues.length > 0 ? Math.min(...yValues) : 0;
  const yMaxRaw = yValues.length > 0 ? Math.max(...yValues) : 1;
  const yMax = yMaxRaw === yMin ? yMin + 1 : yMaxRaw;

  const scaleX = (value: number) => {
    if (innerWidth === 0) {
      return marginWithDefaults.left;
    }
    return (
      marginWithDefaults.left +
      ((value - xMin) / (xMax - xMin)) * innerWidth
    );
  };

  const scaleY = (value: number) => {
    if (innerHeight === 0) {
      return marginWithDefaults.top;
    }
    return (
      marginWithDefaults.top +
      innerHeight -
      ((value - yMin) / (yMax - yMin)) * innerHeight
    );
  };

  const xTicks = useMemo(() => {
    const unique = Array.from(new Set(xValues)).sort((a, b) => a - b);
    if (unique.length <= 10) {
      return unique;
    }
    const step = Math.ceil(unique.length / 10);
    return unique.filter((_, index) => index % step === 0 || index === unique.length - 1);
  }, [xValues]);

  const yTicks = useMemo(() => {
    const ticks: number[] = [];
    const steps = 6;
    const span = yMax - yMin;
    const interval = span === 0 ? 1 : span / (steps - 1);
    for (let index = 0; index < steps; index += 1) {
      ticks.push(yMin + interval * index);
    }
    return ticks;
  }, [yMax, yMin]);

  const xAxisLabel: AxisLabel = xAxisChild?.props.label;
  const yAxisLabel: YAxisLabel = yAxisChild?.props.label;
  const yTickFormatter = yAxisChild?.props.tickFormatter;
  const tooltipDef: TooltipDefinition = tooltipChild?.props;

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setHoverIndex(null);
    setHoverPosition(null);
  }, [data, xKey]);

  if (innerWidth <= 0 || innerHeight <= 0) {
    return null;
  }

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (xValues.length === 0) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const xCoord = event.clientX - rect.left;
    const relativeX = Math.min(
      Math.max(xCoord - marginWithDefaults.left, 0),
      innerWidth
    );
    const xValue = xMin + (relativeX / innerWidth) * (xMax - xMin);
    const closestIndex = xValues.reduce((closest, value, index) => {
      const currentDistance = Math.abs(value - xValue);
      const bestDistance = Math.abs(xValues[closest] - xValue);
      return currentDistance < bestDistance ? index : closest;
    }, 0);
    setHoverIndex(closestIndex);
    setHoverPosition({ x: xCoord, y: event.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setHoverPosition(null);
  };

  const renderLines = () => {
    return lineDefs.map((line) => {
      const pathCommands: string[] = [];
      let started = false;
      data.forEach((datum) => {
        const rawValue = datum[line.dataKey];
        if (rawValue === undefined || rawValue === null || rawValue === '') {
          if (!line.connectNulls) {
            started = false;
          }
          return;
        }
        const numericValue = ensureNumber(rawValue, Number.NaN);
        if (!Number.isFinite(numericValue)) {
          return;
        }
        const xRaw = ensureNumber(datum[xKey], Number.NaN);
        if (!Number.isFinite(xRaw)) {
          return;
        }
        const x = scaleX(xRaw);
        const y = scaleY(numericValue);
        if (!started) {
          pathCommands.push(`M ${x} ${y}`);
          started = true;
        } else {
          pathCommands.push(`L ${x} ${y}`);
        }
      });
      return (
        <path
          key={line.dataKey}
          d={pathCommands.join(' ')}
          fill="none"
          stroke={line.stroke}
          strokeWidth={line.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    });
  };

  const legend = legendChild ? (
    <div
      style={{
        position: 'absolute',
        right: 16,
        top: 16,
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        background: 'rgba(15, 23, 42, 0.55)',
        color: '#fff',
        borderRadius: 8,
        padding: '6px 10px',
        fontSize: 12,
      }}
    >
      {lineDefs.map((line) => (
        <span key={line.dataKey} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: line.stroke,
            }}
          />
          {line.name}
        </span>
      ))}
    </div>
  ) : null;

  let tooltip: React.ReactNode = null;
  if (
    tooltipDef &&
    hoverIndex !== null &&
    hoverPosition &&
    data[hoverIndex] !== undefined
  ) {
    const datum = data[hoverIndex];
    const labelValue = datum[xKey] as string | number;
    const labelText = tooltipDef.labelFormatter
      ? tooltipDef.labelFormatter(labelValue)
      : String(labelValue);

    const rows: TooltipRow[] = lineDefs
      .map((line) => {
        const rawValue = datum[line.dataKey];
        if (rawValue === undefined || rawValue === null || rawValue === '') {
          return null;
        }
        const numericValue = ensureNumber(rawValue, Number.NaN);
        if (!Number.isFinite(numericValue)) {
          return null;
        }
        if (!tooltipDef.formatter) {
          return {
            name: line.name,
            value: `${numericValue.toFixed(3)}`,
            color: line.stroke,
          } satisfies TooltipRow;
        }
        const formatted = tooltipDef.formatter(numericValue, line.name);
        if (Array.isArray(formatted)) {
          return {
            name: (formatted[1] ?? line.name) as string,
            value: formatted[0] as ReactNode,
            color: line.stroke,
          } satisfies TooltipRow;
        }
        return {
          name: line.name,
          value: formatted as ReactNode,
          color: line.stroke,
        } satisfies TooltipRow;
      })
      .filter((item): item is TooltipRow => item !== null);

    tooltip = (
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          left: Math.min(Math.max(hoverPosition.x + 12, 8), width - 160),
          top: Math.min(Math.max(hoverPosition.y + 12, 8), height - 120),
          background: 'rgba(15, 23, 42, 0.85)',
          color: '#f8fafc',
          borderRadius: 8,
          padding: '8px 12px',
          fontSize: 12,
          minWidth: 120,
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.25)',
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 6 }}>{labelText}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {rows.map((row) => (
            <div key={row.name} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: row.color,
                }}
              />
              <span style={{ flex: 1 }}>{row.name}</span>
              <span style={{ fontVariantNumeric: 'tabular-nums' }}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const gridOpacity = gridChild?.props.opacity ?? 0.2;
  const gridStrokeDasharray = gridChild?.props.strokeDasharray ?? '4 4';

  return (
    <div style={{ position: 'relative', width, height }}>
      <svg
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        role="img"
      >
        <g>
          <line
            x1={marginWithDefaults.left}
            y1={marginWithDefaults.top + innerHeight}
            x2={marginWithDefaults.left + innerWidth}
            y2={marginWithDefaults.top + innerHeight}
            stroke="rgba(148, 163, 184, 0.5)"
          />
          <line
            x1={marginWithDefaults.left}
            y1={marginWithDefaults.top}
            x2={marginWithDefaults.left}
            y2={marginWithDefaults.top + innerHeight}
            stroke="rgba(148, 163, 184, 0.5)"
          />

          {xTicks.map((tick) => {
            const x = scaleX(tick);
            return (
              <g key={`x-${tick}`}>
                <line
                  x1={x}
                  y1={marginWithDefaults.top + innerHeight}
                  x2={x}
                  y2={marginWithDefaults.top + innerHeight + 6}
                  stroke="rgba(148, 163, 184, 0.6)"
                />
                <text
                  x={x}
                  y={marginWithDefaults.top + innerHeight + 20}
                  textAnchor="middle"
                  fontSize={11}
                  fill="rgba(148, 163, 184, 0.9)"
                >
                  {tick}
                </text>
                <line
                  x1={x}
                  y1={marginWithDefaults.top}
                  x2={x}
                  y2={marginWithDefaults.top + innerHeight}
                  stroke={`rgba(148, 163, 184, ${gridOpacity})`}
                  strokeDasharray={gridStrokeDasharray}
                />
              </g>
            );
          })}

          {yTicks.map((tick) => {
            const y = scaleY(tick);
            const formatted = yTickFormatter ? yTickFormatter(tick) : tick.toFixed(2);
            return (
              <g key={`y-${tick}`}>
                <line
                  x1={marginWithDefaults.left - 6}
                  y1={y}
                  x2={marginWithDefaults.left}
                  y2={y}
                  stroke="rgba(148, 163, 184, 0.6)"
                />
                <text
                  x={marginWithDefaults.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  fontSize={11}
                  fill="rgba(148, 163, 184, 0.9)"
                >
                  {formatted}
                </text>
                <line
                  x1={marginWithDefaults.left}
                  y1={y}
                  x2={marginWithDefaults.left + innerWidth}
                  y2={y}
                  stroke={`rgba(148, 163, 184, ${gridOpacity})`}
                  strokeDasharray={gridStrokeDasharray}
                />
              </g>
            );
          })}

          {renderLines()}

          {xAxisLabel ? (
            <text
              x={marginWithDefaults.left + innerWidth}
              y={marginWithDefaults.top + innerHeight + (xAxisLabel.offset ?? 32)}
              fontSize={12}
              textAnchor="end"
              fill="rgba(148, 163, 184, 0.9)"
            >
              {xAxisLabel.value}
            </text>
          ) : null}

          {yAxisLabel ? (
            <text
              x={marginWithDefaults.left - 40}
              y={marginWithDefaults.top}
              transform={`rotate(-90 ${marginWithDefaults.left - 40} ${marginWithDefaults.top + innerHeight / 2})`}
              fontSize={12}
              fill="rgba(148, 163, 184, 0.9)"
            >
              {yAxisLabel.value}
            </text>
          ) : null}
        </g>
      </svg>
      {legend}
      {tooltip}
    </div>
  );
};
