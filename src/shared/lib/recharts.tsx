// src/shared/lib/recharts.tsx
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

// ✅ Recharts v3 기준 import
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// ✅ Cell은 루트에서 export되지 않으므로 내부 모듈 경로에서 import
import { Cell } from 'recharts/es6/component/Cell.js';

// ✅ 필요한 것만 export — 충돌 방지
export {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Cell,
};

// -------------------------------------------------------------------------------------

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

// ✅ 직접 구현된 ResponsiveContainer (커스텀 대응)
export const CustomResponsiveContainer = ({
  width = '100%',
  height = '100%',
  children,
}: ResponsiveContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateSize = () => {
      setSize({ width: element.clientWidth, height: element.clientHeight });
    };

    updateSize();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(updateSize);
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
        ? cloneElement(
            children as ReactElement<{ width?: number; height?: number }>,
            {
              width: size.width,
              height: size.height,
            }
          )
        : null}
    </div>
  );
};

// -------------------------------------------------------------------------------------

interface XAxisProps {
  dataKey: string;
  label?: { value: string; position?: string; offset?: number };
  tickFormatter?: (value: number) => string;
}

export const XAxisMock = (props: XAxisProps) => {
  void props;
  return null;
};

interface YAxisProps {
  tickFormatter?: (value: number) => string;
  label?: { value: string; angle?: number; position?: string };
}

export const YAxisMock = (props: YAxisProps) => {
  void props;
  return null;
};

interface CartesianGridProps {
  strokeDasharray?: string;
  opacity?: number;
}

export const CartesianGridMock = (props: CartesianGridProps) => {
  void props;
  return null;
};

// -------------------------------------------------------------------------------------

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

export const LineMock = (props: LineProps) => {
  void props;
  return null;
};

export interface TooltipProps {
  formatter?: (
    value: number,
    name: string
  ) => [string, string] | string | number;
  labelFormatter?: (value: string | number) => string;
}

export const TooltipMock = (props: TooltipProps) => {
  void props;
  return null;
};

export const LegendMock = () => null;

// -------------------------------------------------------------------------------------

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
type AxisLabel =
  | { value: string; position?: string; offset?: number }
  | undefined;
type YAxisLabel =
  | { value: string; angle?: number; position?: string }
  | undefined;
type TooltipRow = { name: string; value: ReactNode; color: string };

const ensureNumber = (value: unknown, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

// -------------------------------------------------------------------------------------

export const LineChartMock = ({
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

  const innerWidth = Math.max(
    0,
    width - marginWithDefaults.left - marginWithDefaults.right
  );
  const innerHeight = Math.max(
    0,
    height - marginWithDefaults.top - marginWithDefaults.bottom
  );

  const childrenArray = Children.toArray(children) as ReactElement[];

  const xAxisChild = childrenArray.find((child) => child.type === XAxisMock) as
    | ReactElement<XAxisProps>
    | undefined;
  const yAxisChild = childrenArray.find((child) => child.type === YAxisMock) as
    | ReactElement<YAxisProps>
    | undefined;

  const gridChild = childrenArray.find(
    (child) => child.type === CartesianGridMock
  ) as ReactElement<CartesianGridProps> | undefined;

  const tooltipChild = childrenArray.find(
    (child) => child.type === TooltipMock
  ) as ReactElement<TooltipProps> | undefined;

  const legendChild = childrenArray.find((child) => child.type === LegendMock);

  const lineChildren = childrenArray.filter(
    (child) => child.type === LineMock
  ) as ReactElement<LineProps>[];

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
  const xValues = useMemo(
    () =>
      data
        .map((item) => ensureNumber(item[xKey], Number.NaN))
        .filter((v) => Number.isFinite(v)),
    [data, xKey]
  );

  const yValues = useMemo(() => {
    const values: number[] = [];
    lineDefs.forEach((line) => {
      data.forEach((item) => {
        const maybeValue = ensureNumber(item[line.dataKey], Number.NaN);
        if (Number.isFinite(maybeValue)) values.push(maybeValue);
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

  const scaleX = (v: number) =>
    innerWidth === 0
      ? marginWithDefaults.left
      : marginWithDefaults.left + ((v - xMin) / (xMax - xMin)) * innerWidth;

  const scaleY = (v: number) =>
    innerHeight === 0
      ? marginWithDefaults.top
      : marginWithDefaults.top +
        innerHeight -
        ((v - yMin) / (yMax - yMin)) * innerHeight;

  const xTicks = useMemo(() => {
    const unique = Array.from(new Set(xValues)).sort((a, b) => a - b);
    if (unique.length <= 10) return unique;
    const step = Math.ceil(unique.length / 10);
    return unique.filter((_, i) => i % step === 0 || i === unique.length - 1);
  }, [xValues]);

  const yTicks = useMemo(() => {
    const ticks: number[] = [];
    const steps = 6;
    const span = yMax - yMin;
    const interval = span === 0 ? 1 : span / (steps - 1);
    for (let i = 0; i < steps; i++) ticks.push(yMin + interval * i);
    return ticks;
  }, [yMax, yMin]);

  const yTickFormatter = yAxisChild?.props.tickFormatter;
  const tooltipDef: TooltipDefinition = tooltipChild?.props;

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    setHoverIndex(null);
    setHoverPosition(null);
  }, [data, xKey]);

  if (innerWidth <= 0 || innerHeight <= 0) return null;

  const gridOpacity = gridChild?.props.opacity ?? 0.2;
  const gridStrokeDasharray = gridChild?.props.strokeDasharray ?? '4 4';

  return (
    <div style={{ position: 'relative', width, height }}>
      <svg width={width} height={height} role="img">
        <g>
          {/* Axes */}
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

          {/* Grid */}
          {xTicks.map((tick) => {
            const x = scaleX(tick);
            return (
              <line
                key={`x-${tick}`}
                x1={x}
                y1={marginWithDefaults.top}
                x2={x}
                y2={marginWithDefaults.top + innerHeight}
                stroke={`rgba(148, 163, 184, ${gridOpacity})`}
                strokeDasharray={gridStrokeDasharray}
              />
            );
          })}

          {yTicks.map((tick) => {
            const y = scaleY(tick);
            return (
              <line
                key={`y-${tick}`}
                x1={marginWithDefaults.left}
                y1={y}
                x2={marginWithDefaults.left + innerWidth}
                y2={y}
                stroke={`rgba(148, 163, 184, ${gridOpacity})`}
                strokeDasharray={gridStrokeDasharray}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
