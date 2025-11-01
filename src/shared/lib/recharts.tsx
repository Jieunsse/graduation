// import {
//   Children,
//   cloneElement,
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
//   type CSSProperties,
//   type MouseEvent,
//   type ReactElement,
//   type ReactNode,
// } from 'react';
//
// type Margin = {
//   top?: number;
//   right?: number;
//   bottom?: number;
//   left?: number;
// };
//
// interface ResponsiveContainerProps {
//   width?: string | number;
//   height?: string | number;
//   children: ReactElement;
// }
//
// const DEFAULT_MARGIN: Required<Margin> = {
//   top: 20,
//   right: 24,
//   bottom: 36,
//   left: 48,
// };
//
// const DEFAULT_FONT_FAMILY =
//   "'Inter', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
//
// const formatMaybeValue = (
//   formatter: ((value: number, name: string) => [string, string] | string | number) | undefined,
//   rawValue: number,
//   name: string
// ): { value: string; name: string } => {
//   if (!formatter) return { value: rawValue.toString(), name };
//
//   const formatted = formatter(rawValue, name);
//   if (Array.isArray(formatted)) {
//     const [value, label] = formatted;
//     return { value, name: label };
//   }
//
//   return { value: formatted.toString(), name };
// };
//
// const formatMaybeLabel = (
//   formatter: ((value: string | number) => string) | undefined,
//   raw: string | number
// ) => (formatter ? formatter(raw) : raw.toString());
//
// const ensureNumber = (value: unknown, fallback: number) => {
//   const parsed = Number(value);
//   return Number.isFinite(parsed) ? parsed : fallback;
// };
//
// const clamp = (value: number, min: number, max: number) =>
//   Math.min(Math.max(value, min), max);
//
// const mergeMargin = (margin?: Margin): Required<Margin> => ({
//   ...DEFAULT_MARGIN,
//   ...margin,
// });
//
// export const ResponsiveContainer = ({
//   width = '100%',
//   height = '100%',
//   children,
// }: ResponsiveContainerProps) => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [size, setSize] = useState({ width: 0, height: 0 });
//
//   useEffect(() => {
//     const element = containerRef.current;
//     if (!element) return;
//
//     const updateSize = () => {
//       setSize({ width: element.clientWidth, height: element.clientHeight });
//     };
//
//     updateSize();
//
//     if (typeof ResizeObserver !== 'undefined') {
//       const observer = new ResizeObserver(updateSize);
//       observer.observe(element);
//       return () => observer.disconnect();
//     }
//
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//
//   const style: CSSProperties = useMemo(
//     () => ({
//       width: typeof width === 'number' ? `${width}px` : width,
//       height: typeof height === 'number' ? `${height}px` : height,
//       position: 'relative',
//     }),
//     [height, width]
//   );
//
//   return (
//     <div ref={containerRef} style={style}>
//       {size.width > 0 && size.height > 0
//         ? cloneElement(children, {
//             width: size.width,
//             height: size.height,
//           })
//         : null}
//     </div>
//   );
// };
//
// interface BaseAxisProps {
//   stroke?: string;
//   style?: CSSProperties;
//   tickLine?: boolean;
//   axisLine?: boolean;
// }
//
// interface XAxisProps extends BaseAxisProps {
//   dataKey: string;
//   label?: { value: string; position?: string; offset?: number };
//   tickFormatter?: (value: number | string) => string;
// }
//
// export const XAxis = (props: XAxisProps) => {
//   void props;
//   return null;
// };
// XAxis.displayName = 'XAxis';
//
// interface YAxisProps extends BaseAxisProps {
//   tickFormatter?: (value: number) => string;
//   label?: { value: string; angle?: number; position?: string };
//   width?: number;
// }
//
// export const YAxis = (props: YAxisProps) => {
//   void props;
//   return null;
// };
// YAxis.displayName = 'YAxis';
//
// interface CartesianGridProps {
//   strokeDasharray?: string;
//   opacity?: number;
//   stroke?: string;
//   vertical?: boolean;
//   horizontal?: boolean;
// }
//
// export const CartesianGrid = (props: CartesianGridProps) => {
//   void props;
//   return null;
// };
// CartesianGrid.displayName = 'CartesianGrid';
//
// interface LineProps {
//   dataKey: string;
//   stroke?: string;
//   strokeWidth?: number;
//   dot?: boolean;
//   connectNulls?: boolean;
//   name?: string;
//   type?: string;
//   isAnimationActive?: boolean;
// }
//
// export const Line = (props: LineProps) => {
//   void props;
//   return null;
// };
// Line.displayName = 'Line';
//
// interface TooltipCursor {
//   fill?: string;
// }
//
// export interface TooltipProps {
//   formatter?: (value: number, name: string) => [string, string] | string | number;
//   labelFormatter?: (value: string | number) => string;
//   content?: ReactElement;
//   cursor?: TooltipCursor | boolean;
// }
//
// export const Tooltip = (props: TooltipProps) => {
//   void props;
//   return null;
// };
// Tooltip.displayName = 'Tooltip';
//
// export const Legend = () => null;
// Legend.displayName = 'Legend';
//
// interface CellProps {
//   fill: string;
// }
//
// export const Cell = (props: CellProps) => {
//   void props;
//   return null;
// };
// Cell.displayName = 'Cell';
//
// interface BarProps {
//   dataKey: string;
//   fill?: string;
//   radius?: number | [number, number, number, number];
//   children?: ReactNode;
// }
//
// export const Bar = (props: BarProps) => {
//   void props;
//   return null;
// };
// Bar.displayName = 'Bar';
//
// interface LineChartProps {
//   data: Record<string, number | string | undefined>[];
//   margin?: Margin;
//   width?: number;
//   height?: number;
//   children: ReactNode;
// }
//
// type LineDefinition = {
//   dataKey: string;
//   stroke: string;
//   strokeWidth: number;
//   dot: boolean;
//   connectNulls: boolean;
//   name: string;
//   type?: string;
// };
//
// type TooltipRow = { name: string; value: string; color: string };
//
// type TooltipPayload<T extends Record<string, unknown>> = Array<{
//   name: string;
//   color: string;
//   value: number;
//   payload: T;
// }>;
//
// const buildLinePath = (
//   points: Array<{ x: number; y: number }>,
//   connectNulls: boolean
// ) => {
//   let path = '';
//   let started = false;
//
//   points.forEach((point) => {
//     if (Number.isNaN(point.x) || Number.isNaN(point.y)) {
//       if (!connectNulls) started = false;
//       return;
//     }
//
//     if (!started) {
//       path += `M ${point.x} ${point.y}`;
//       started = true;
//     } else {
//       path += ` L ${point.x} ${point.y}`;
//     }
//   });
//
//   return path;
// };
//
// const renderAxisText = (
//   text: string,
//   x: number,
//   y: number,
//   anchor: 'start' | 'middle' | 'end',
//   style?: CSSProperties
// ) => (
//   <text
//     x={x}
//     y={y}
//     fill={style?.color ?? '#e2e8f0'}
//     fontSize={style?.fontSize ?? 12}
//     fontFamily={style?.fontFamily ?? DEFAULT_FONT_FAMILY}
//     textAnchor={anchor}
//   >
//     {text}
//   </text>
// );
//
// const renderLegend = (lines: LineDefinition[]) => {
//   if (lines.length === 0) return null;
//
//   return (
//     <div
//       style={{
//         position: 'absolute',
//         top: 8,
//         right: 12,
//         display: 'flex',
//         gap: 12,
//         fontSize: 12,
//         color: '#e2e8f0',
//       }}
//     >
//       {lines.map((line) => (
//         <span key={line.dataKey} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
//           <span
//             style={{
//               width: 10,
//               height: 10,
//               borderRadius: 9999,
//               background: line.stroke,
//               display: 'inline-block',
//             }}
//           />
//           {line.name}
//         </span>
//       ))}
//     </div>
//   );
// };
//
// export const LineChart = ({
//   data,
//   margin,
//   width = 0,
//   height = 0,
//   children,
// }: LineChartProps) => {
//   const marginWithDefaults = useMemo(() => mergeMargin(margin), [margin]);
//
//   const innerWidth = Math.max(
//     0,
//     width - marginWithDefaults.left - marginWithDefaults.right
//   );
//   const innerHeight = Math.max(
//     0,
//     height - marginWithDefaults.top - marginWithDefaults.bottom
//   );
//
//   const childrenArray = useMemo(
//     () => Children.toArray(children) as ReactElement[],
//     [children]
//   );
//
//   const xAxisChild = childrenArray.find((child) => child.type === XAxis) as
//     | ReactElement<XAxisProps>
//     | undefined;
//   const yAxisChild = childrenArray.find((child) => child.type === YAxis) as
//     | ReactElement<YAxisProps>
//     | undefined;
//
//   const gridChild = childrenArray.find(
//     (child) => child.type === CartesianGrid
//   ) as ReactElement<CartesianGridProps> | undefined;
//
//   const tooltipChild = childrenArray.find(
//     (child) => child.type === Tooltip
//   ) as ReactElement<TooltipProps> | undefined;
//
//   const legendChild = childrenArray.find((child) => child.type === Legend);
//
//   const lineChildren = childrenArray.filter(
//     (child) => child.type === Line
//   ) as ReactElement<LineProps>[];
//
//   const lineDefs = useMemo<LineDefinition[]>(
//     () =>
//       lineChildren.map((child) => ({
//         dataKey: child.props.dataKey,
//         stroke: child.props.stroke ?? '#2563eb',
//         strokeWidth: child.props.strokeWidth ?? 2,
//         dot: child.props.dot ?? false,
//         connectNulls: child.props.connectNulls ?? false,
//         name: child.props.name ?? child.props.dataKey,
//         type: child.props.type,
//       })),
//     [lineChildren]
//   );
//
//   const xKey = xAxisChild?.props.dataKey ?? 'x';
//
//   const parsedData = useMemo(() => {
//     return data.map((item) => {
//       const xRaw = item[xKey];
//       const xValue = ensureNumber(xRaw, Number.NaN);
//       const yValues = lineDefs.map((line) =>
//         ensureNumber(item[line.dataKey], Number.NaN)
//       );
//       return { original: item, xRaw, xValue, yValues };
//     });
//   }, [data, lineDefs, xKey]);
//
//   const xValues = useMemo(
//     () => parsedData.map((entry) => entry.xValue).filter((v) => Number.isFinite(v)),
//     [parsedData]
//   );
//
//   const yValues = useMemo(() => {
//     const values: number[] = [];
//     parsedData.forEach((entry) => {
//       entry.yValues.forEach((value) => {
//         if (Number.isFinite(value)) values.push(value);
//       });
//     });
//     return values;
//   }, [parsedData]);
//
//   const xMin = xValues.length > 0 ? Math.min(...xValues) : 0;
//   const xMaxRaw = xValues.length > 0 ? Math.max(...xValues) : 1;
//   const xMax = xMaxRaw === xMin ? xMin + 1 : xMaxRaw;
//
//   const yMin = yValues.length > 0 ? Math.min(...yValues) : 0;
//   const yMaxRaw = yValues.length > 0 ? Math.max(...yValues) : 1;
//   const yMax = yMaxRaw === yMin ? yMin + 1 : yMaxRaw;
//
//   const scaleX = useCallback(
//     (v: number) =>
//       innerWidth === 0
//         ? marginWithDefaults.left
//         : marginWithDefaults.left + ((v - xMin) / (xMax - xMin)) * innerWidth,
//     [innerWidth, marginWithDefaults.left, xMax, xMin]
//   );
//
//   const scaleY = useCallback(
//     (v: number) =>
//       innerHeight === 0
//         ? marginWithDefaults.top
//         : marginWithDefaults.top +
//           innerHeight -
//           ((v - yMin) / (yMax - yMin)) * innerHeight,
//     [innerHeight, marginWithDefaults.top, yMax, yMin]
//   );
//
//   const xTicks = useMemo(() => {
//     const unique = Array.from(new Set(xValues)).sort((a, b) => a - b);
//     if (unique.length === 0) return [] as number[];
//     if (unique.length <= 10) return unique;
//     const step = Math.ceil(unique.length / 10);
//     return unique.filter((_, i) => i % step === 0 || i === unique.length - 1);
//   }, [xValues]);
//
//   const yTicks = useMemo(() => {
//     if (yMin === yMax) return [yMin];
//     const ticks: number[] = [];
//     const steps = 6;
//     const span = yMax - yMin;
//     const interval = span === 0 ? 1 : span / (steps - 1);
//     for (let i = 0; i < steps; i += 1) ticks.push(yMin + interval * i);
//     return ticks;
//   }, [yMax, yMin]);
//
//   const yTickFormatter = yAxisChild?.props.tickFormatter;
//   const tooltipDef = tooltipChild?.props;
//
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//   const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(
//     null
//   );
//
//   useEffect(() => {
//     setHoverIndex(null);
//     setHoverPosition(null);
//   }, [data, xKey]);
//
//   if (innerWidth <= 0 || innerHeight <= 0) return null;
//
//   const gridOpacity = gridChild?.props.opacity ?? 0.2;
//   const gridStrokeDasharray = gridChild?.props.strokeDasharray ?? '4 4';
//   const gridStroke = gridChild?.props.stroke ?? 'rgba(148, 163, 184, 0.3)';
//
//   const handleMouseMove = useCallback(
//     (event: MouseEvent<SVGSVGElement>) => {
//       const rect = event.currentTarget.getBoundingClientRect();
//       const relativeX = event.clientX - rect.left - marginWithDefaults.left;
//       if (innerWidth <= 0) return;
//       const ratio = clamp(relativeX / innerWidth, 0, 1);
//       const approximateValue = xMin + (xMax - xMin) * ratio;
//
//       let closestIndex: number | null = null;
//       let closestDistance = Number.POSITIVE_INFINITY;
//
//       parsedData.forEach((entry, index) => {
//         if (!Number.isFinite(entry.xValue)) return;
//         const distance = Math.abs(entry.xValue - approximateValue);
//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestIndex = index;
//         }
//       });
//
//       if (closestIndex === null) {
//         setHoverIndex(null);
//         setHoverPosition(null);
//         return;
//       }
//
//       const entry = parsedData[closestIndex];
//       if (!Number.isFinite(entry.xValue)) return;
//
//       setHoverIndex(closestIndex);
//       setHoverPosition({
//         x: scaleX(entry.xValue),
//         y: marginWithDefaults.top,
//       });
//     },
//     [innerWidth, marginWithDefaults.left, marginWithDefaults.top, parsedData, scaleX, xMax, xMin]
//   );
//
//   const handleMouseLeave = useCallback(() => {
//     setHoverIndex(null);
//     setHoverPosition(null);
//   }, []);
//
//   const hoverData = hoverIndex === null ? null : parsedData[hoverIndex];
//
//   const tooltipRows: TooltipRow[] = useMemo(() => {
//     if (!hoverData) return [];
//     return lineDefs.map((line, index) => {
//       const rawValue = hoverData.yValues[index];
//       const formatted = formatMaybeValue(tooltipDef?.formatter, rawValue, line.name);
//       return { name: formatted.name, value: formatted.value, color: line.stroke };
//     });
//   }, [hoverData, lineDefs, tooltipDef?.formatter]);
//
//   const tooltipPayload: TooltipPayload<Record<string, unknown>> = useMemo(() => {
//     if (!hoverData) return [];
//     return lineDefs.map((line, index) => ({
//       name: line.name,
//       color: line.stroke,
//       value: hoverData.yValues[index],
//       payload: hoverData.original,
//     }));
//   }, [hoverData, lineDefs]);
//
//   const tooltipLabel = hoverData
//     ? formatMaybeLabel(tooltipDef?.labelFormatter, hoverData.xRaw ?? '')
//     : '';
//
//   const tooltipContent = (() => {
//     if (!hoverData || !hoverPosition) return null;
//
//     if (tooltipDef?.content) {
//       return cloneElement(tooltipDef.content, {
//         active: true,
//         payload: tooltipPayload,
//         label: tooltipLabel,
//         coordinate: hoverPosition,
//       });
//     }
//
//     if (tooltipRows.length === 0) return null;
//
//     return (
//       <div
//         style={{
//           position: 'absolute',
//           left: hoverPosition.x + 12,
//           top: hoverPosition.y + 12,
//           background: 'rgba(15, 23, 42, 0.92)',
//           borderRadius: 12,
//           padding: '12px 14px',
//           color: '#f8fafc',
//           fontSize: 12,
//           boxShadow: '0 18px 32px rgba(15, 23, 42, 0.45)',
//           pointerEvents: 'none',
//           minWidth: 120,
//         }}
//       >
//         <div style={{ fontWeight: 600, marginBottom: 6 }}>{tooltipLabel}</div>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
//           {tooltipRows.map((row) => (
//             <div key={row.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//               <span
//                 style={{
//                   width: 10,
//                   height: 10,
//                   borderRadius: 9999,
//                   background: row.color,
//                   display: 'inline-block',
//                 }}
//               />
//               <span style={{ flex: 1 }}>{row.name}</span>
//               <span style={{ fontVariantNumeric: 'tabular-nums' }}>{row.value}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   })();
//
//   return (
//     <div style={{ position: 'relative', width, height }}>
//       <svg
//         width={width}
//         height={height}
//         role="img"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{ touchAction: 'none' }}
//       >
//         <g>
//           <line
//             x1={marginWithDefaults.left}
//             y1={marginWithDefaults.top + innerHeight}
//             x2={marginWithDefaults.left + innerWidth}
//             y2={marginWithDefaults.top + innerHeight}
//             stroke={xAxisChild?.props.stroke ?? 'rgba(148, 163, 184, 0.5)'}
//           />
//           <line
//             x1={marginWithDefaults.left}
//             y1={marginWithDefaults.top}
//             x2={marginWithDefaults.left}
//             y2={marginWithDefaults.top + innerHeight}
//             stroke={yAxisChild?.props.stroke ?? 'rgba(148, 163, 184, 0.5)'}
//           />
//
//           {xTicks.map((tick) => {
//             const x = scaleX(tick);
//             return (
//               <g key={`x-${tick}`}>
//                 {gridChild?.props.vertical !== false && (
//                   <line
//                     x1={x}
//                     y1={marginWithDefaults.top}
//                     x2={x}
//                     y2={marginWithDefaults.top + innerHeight}
//                     stroke={gridStroke}
//                     strokeDasharray={gridStrokeDasharray}
//                     strokeOpacity={gridOpacity}
//                   />
//                 )}
//                 {renderAxisText(
//                   xAxisChild?.props.tickFormatter?.(tick) ?? tick.toString(),
//                   x,
//                   marginWithDefaults.top + innerHeight + 20,
//                   'middle',
//                   xAxisChild?.props.style
//                 )}
//               </g>
//             );
//           })}
//
//           {yTicks.map((tick) => {
//             const y = scaleY(tick);
//             return (
//               <g key={`y-${tick}`}>
//                 {gridChild?.props.horizontal !== false && (
//                   <line
//                     x1={marginWithDefaults.left}
//                     y1={y}
//                     x2={marginWithDefaults.left + innerWidth}
//                     y2={y}
//                     stroke={gridStroke}
//                     strokeDasharray={gridStrokeDasharray}
//                     strokeOpacity={gridOpacity}
//                   />
//                 )}
//                 {renderAxisText(
//                   yTickFormatter?.(tick) ?? tick.toFixed(0),
//                   marginWithDefaults.left - 12,
//                   y + 4,
//                   'end',
//                   yAxisChild?.props.style
//                 )}
//               </g>
//             );
//           })}
//
//           {yAxisChild?.props.label ? (
//             <text
//               x={marginWithDefaults.left - (yAxisChild.props.label.position === 'insideLeft' ? 36 : 48)}
//               y={marginWithDefaults.top + innerHeight / 2}
//               transform={`rotate(-90 ${
//                 marginWithDefaults.left - (yAxisChild.props.label.position === 'insideLeft' ? 36 : 48)
//               } ${marginWithDefaults.top + innerHeight / 2})`}
//               fill="#e2e8f0"
//               fontSize={12}
//               fontFamily={DEFAULT_FONT_FAMILY}
//               textAnchor="middle"
//             >
//               {yAxisChild.props.label.value}
//             </text>
//           ) : null}
//
//           {xAxisChild?.props.label ? (
//             <text
//               x={marginWithDefaults.left + innerWidth}
//               y={marginWithDefaults.top + innerHeight + 32 + (xAxisChild.props.label.offset ?? 0)}
//               fill="#e2e8f0"
//               fontSize={12}
//               fontFamily={DEFAULT_FONT_FAMILY}
//               textAnchor="end"
//             >
//               {xAxisChild.props.label.value}
//             </text>
//           ) : null}
//
//           {lineDefs.map((line, lineIndex) => {
//             const points = parsedData.map((entry) => ({
//               x: Number.isFinite(entry.xValue) ? scaleX(entry.xValue) : Number.NaN,
//               y: Number.isFinite(entry.yValues[lineIndex])
//                 ? scaleY(entry.yValues[lineIndex])
//                 : Number.NaN,
//             }));
//
//             const path = buildLinePath(points, line.connectNulls);
//
//             return (
//               <g key={line.dataKey}>
//                 <path
//                   d={path}
//                   fill="none"
//                   stroke={line.stroke}
//                   strokeWidth={line.strokeWidth}
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                 />
//                 {line.dot
//                   ? points.map((point, index) =>
//                       Number.isNaN(point.x) || Number.isNaN(point.y) ? null : (
//                         <circle
//                           key={`${line.dataKey}-${index}`}
//                           cx={point.x}
//                           cy={point.y}
//                           r={3.5}
//                           fill={line.stroke}
//                           stroke="#0f172a"
//                           strokeWidth={1}
//                         />
//                       )
//                     )
//                   : null}
//               </g>
//             );
//           })}
//
//           {hoverPosition && hoverData ? (
//             <line
//               x1={hoverPosition.x}
//               y1={marginWithDefaults.top}
//               x2={hoverPosition.x}
//               y2={marginWithDefaults.top + innerHeight}
//               stroke={tooltipDef?.cursor && typeof tooltipDef.cursor !== 'boolean'
//                 ? tooltipDef.cursor.fill ?? 'rgba(148, 163, 184, 0.35)'
//                 : 'rgba(148, 163, 184, 0.35)'}
//               strokeDasharray="4 4"
//             />
//           ) : null}
//         </g>
//       </svg>
//
//       {legendChild ? renderLegend(lineDefs) : null}
//       {tooltipContent}
//     </div>
//   );
// };
//
// interface BarChartProps {
//   data: Record<string, number | string | undefined>[];
//   margin?: Margin;
//   width?: number;
//   height?: number;
//   children: ReactNode;
// }
//
// type BarDefinition = {
//   dataKey: string;
//   fill: string;
//   radius: number | [number, number, number, number] | undefined;
//   cellFills: string[];
// };
//
// export const BarChart = ({
//   data,
//   margin,
//   width = 0,
//   height = 0,
//   children,
// }: BarChartProps) => {
//   const marginWithDefaults = useMemo(() => mergeMargin(margin), [margin]);
//
//   const innerWidth = Math.max(
//     0,
//     width - marginWithDefaults.left - marginWithDefaults.right
//   );
//   const innerHeight = Math.max(
//     0,
//     height - marginWithDefaults.top - marginWithDefaults.bottom
//   );
//
//   const childrenArray = useMemo(
//     () => Children.toArray(children) as ReactElement[],
//     [children]
//   );
//
//   const xAxisChild = childrenArray.find((child) => child.type === XAxis) as
//     | ReactElement<XAxisProps>
//     | undefined;
//   const yAxisChild = childrenArray.find((child) => child.type === YAxis) as
//     | ReactElement<YAxisProps>
//     | undefined;
//
//   const gridChild = childrenArray.find(
//     (child) => child.type === CartesianGrid
//   ) as ReactElement<CartesianGridProps> | undefined;
//
//   const tooltipChild = childrenArray.find(
//     (child) => child.type === Tooltip
//   ) as ReactElement<TooltipProps> | undefined;
//
//   const barChild = childrenArray.find((child) => child.type === Bar) as
//     | ReactElement<BarProps>
//     | undefined;
//
//   const cellFills = useMemo(() => {
//     if (!barChild) return [] as string[];
//     const barChildren = Children.toArray(barChild.props.children) as ReactElement<CellProps>[];
//     return barChildren.filter((child) => child.type === Cell).map((cell) => cell.props.fill);
//   }, [barChild]);
//
//   const barDef: BarDefinition | null = barChild
//     ? {
//         dataKey: barChild.props.dataKey,
//         fill: barChild.props.fill ?? '#2563eb',
//         radius: barChild.props.radius,
//         cellFills,
//       }
//     : null;
//
//   const xKey = xAxisChild?.props.dataKey ?? 'name';
//
//   const parsedData = useMemo(() => {
//     return data.map((item) => {
//       const xRaw = item[xKey];
//       const xValue = typeof xRaw === 'string' ? xRaw : String(xRaw ?? '');
//       const yValue = barDef ? ensureNumber(item[barDef.dataKey], Number.NaN) : Number.NaN;
//       return { original: item, xRaw, xValue, yValue };
//     });
//   }, [data, barDef, xKey]);
//
//   const yValues = useMemo(() => {
//     const values: number[] = [];
//     parsedData.forEach((entry) => {
//       if (Number.isFinite(entry.yValue)) values.push(entry.yValue);
//     });
//     return values;
//   }, [parsedData]);
//
//   const yMin = Math.min(0, yValues.length > 0 ? Math.min(...yValues) : 0);
//   const yMaxRaw = yValues.length > 0 ? Math.max(...yValues) : 1;
//   const yMax = yMaxRaw === yMin ? yMin + 1 : yMaxRaw;
//
//   const scaleX = useCallback(
//     (index: number) => {
//       if (parsedData.length === 0) return marginWithDefaults.left;
//       const step = innerWidth / parsedData.length;
//       return marginWithDefaults.left + step * index + step / 2;
//     },
//     [innerWidth, marginWithDefaults.left, parsedData.length]
//   );
//
//   const scaleY = useCallback(
//     (value: number) =>
//       innerHeight === 0
//         ? marginWithDefaults.top
//         : marginWithDefaults.top +
//           innerHeight -
//           ((value - yMin) / (yMax - yMin)) * innerHeight,
//     [innerHeight, marginWithDefaults.top, yMax, yMin]
//   );
//
//   const bandWidth = parsedData.length > 0 ? innerWidth / parsedData.length : 0;
//   const barWidth = bandWidth * 0.6;
//
//   const yTicks = useMemo(() => {
//     if (yMin === yMax) return [yMin];
//     const steps = 6;
//     const ticks: number[] = [];
//     const span = yMax - yMin;
//     const interval = span === 0 ? 1 : span / (steps - 1);
//     for (let i = 0; i < steps; i += 1) ticks.push(yMin + interval * i);
//     return ticks;
//   }, [yMax, yMin]);
//
//   const tooltipDef = tooltipChild?.props;
//   const yTickFormatter = yAxisChild?.props.tickFormatter;
//
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//   const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(
//     null
//   );
//
//   useEffect(() => {
//     setHoverIndex(null);
//     setHoverPosition(null);
//   }, [data, xKey]);
//
//   if (innerWidth <= 0 || innerHeight <= 0 || !barDef) return null;
//
//   const gridOpacity = gridChild?.props.opacity ?? 0.25;
//   const gridStrokeDasharray = gridChild?.props.strokeDasharray;
//   const gridStroke = gridChild?.props.stroke ?? 'rgba(148, 163, 184, 0.18)';
//
//   const handleBarHover = (index: number | null) => {
//     if (index === null) {
//       setHoverIndex(null);
//       setHoverPosition(null);
//       return;
//     }
//     const entry = parsedData[index];
//     if (!entry) return;
//     const x = scaleX(index);
//     const y = scaleY(Math.max(entry.yValue, 0));
//     setHoverIndex(index);
//     setHoverPosition({ x, y });
//   };
//
//   const tooltipPayload: TooltipPayload<Record<string, unknown>> = useMemo(() => {
//     if (hoverIndex === null) return [];
//     const entry = parsedData[hoverIndex];
//     if (!entry) return [];
//     return [
//       {
//         name: barDef.dataKey,
//         color: barDef.cellFills[hoverIndex] ?? barDef.fill,
//         value: entry.yValue,
//         payload: entry.original,
//       },
//     ];
//   }, [barDef.cellFills, barDef.dataKey, barDef.fill, hoverIndex, parsedData]);
//
//   const tooltipLabel = useMemo(() => {
//     if (hoverIndex === null) return '';
//     const entry = parsedData[hoverIndex];
//     if (!entry) return '';
//     return formatMaybeLabel(tooltipDef?.labelFormatter, entry.xRaw ?? '');
//   }, [hoverIndex, parsedData, tooltipDef?.labelFormatter]);
//
//   const tooltipContent = (() => {
//     if (hoverIndex === null || !hoverPosition) return null;
//
//     const entry = parsedData[hoverIndex];
//     if (!entry) return null;
//
//     if (tooltipDef?.content) {
//       return cloneElement(tooltipDef.content, {
//         active: true,
//         payload: tooltipPayload,
//         label: tooltipLabel,
//         coordinate: hoverPosition,
//       });
//     }
//
//     const formatted = formatMaybeValue(
//       tooltipDef?.formatter,
//       entry.yValue,
//       barDef.dataKey
//     );
//
//     return (
//       <div
//         style={{
//           position: 'absolute',
//           left: hoverPosition.x + 12,
//           top: hoverPosition.y - 12,
//           transform: 'translate(-50%, -100%)',
//           background: 'rgba(15, 23, 42, 0.92)',
//           borderRadius: 12,
//           padding: '12px 14px',
//           color: '#f8fafc',
//           fontSize: 12,
//           boxShadow: '0 18px 32px rgba(15, 23, 42, 0.45)',
//           pointerEvents: 'none',
//           minWidth: 120,
//         }}
//       >
//         <div style={{ fontWeight: 600, marginBottom: 4 }}>{tooltipLabel}</div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//           <span
//             style={{
//               width: 10,
//               height: 10,
//               borderRadius: 9999,
//               background: barDef.cellFills[hoverIndex] ?? barDef.fill,
//               display: 'inline-block',
//             }}
//           />
//           <span style={{ flex: 1 }}>{formatted.name}</span>
//           <span style={{ fontVariantNumeric: 'tabular-nums' }}>{formatted.value}</span>
//         </div>
//       </div>
//     );
//   })();
//
//   return (
//     <div style={{ position: 'relative', width, height }}>
//       <svg width={width} height={height} role="img">
//         <g>
//           <line
//             x1={marginWithDefaults.left}
//             y1={marginWithDefaults.top + innerHeight}
//             x2={marginWithDefaults.left + innerWidth}
//             y2={marginWithDefaults.top + innerHeight}
//             stroke={xAxisChild?.props.stroke ?? 'rgba(148, 163, 184, 0.35)'}
//           />
//           <line
//             x1={marginWithDefaults.left}
//             y1={marginWithDefaults.top}
//             x2={marginWithDefaults.left}
//             y2={marginWithDefaults.top + innerHeight}
//             stroke={yAxisChild?.props.stroke ?? 'rgba(148, 163, 184, 0.35)'}
//           />
//
//           {gridChild?.props.horizontal !== false
//             ? yTicks.map((tick) => {
//                 const y = scaleY(tick);
//                 return (
//                   <line
//                     key={`grid-h-${tick}`}
//                     x1={marginWithDefaults.left}
//                     y1={y}
//                     x2={marginWithDefaults.left + innerWidth}
//                     y2={y}
//                     stroke={gridStroke}
//                     strokeDasharray={gridStrokeDasharray}
//                     strokeOpacity={gridOpacity}
//                   />
//                 );
//               })
//             : null}
//
//           {gridChild?.props.vertical !== false
//             ? parsedData.map((_, index) => {
//                 const x = scaleX(index);
//                 return (
//                   <line
//                     key={`grid-v-${index}`}
//                     x1={x}
//                     y1={marginWithDefaults.top}
//                     x2={x}
//                     y2={marginWithDefaults.top + innerHeight}
//                     stroke={gridStroke}
//                     strokeDasharray={gridStrokeDasharray}
//                     strokeOpacity={gridOpacity}
//                   />
//                 );
//               })
//             : null}
//
//           {parsedData.map((entry, index) => {
//             const xCenter = scaleX(index);
//             const value = entry.yValue;
//             if (!Number.isFinite(value)) return null;
//             const barHeight = Math.abs(scaleY(value) - scaleY(Math.max(0, yMin)));
//             const barTop = value >= 0 ? scaleY(value) : scaleY(0);
//             const fill = barDef.cellFills[index] ?? barDef.fill;
//             const rx = Array.isArray(barDef.radius) ? barDef.radius[0] ?? 0 : barDef.radius ?? 0;
//
//             return (
//               <g key={`${entry.xValue}-${index}`}>
//                 <rect
//                   x={xCenter - barWidth / 2}
//                   y={barTop}
//                   width={barWidth}
//                   height={barHeight}
//                   fill={fill}
//                   rx={rx}
//                   ry={rx}
//                   onMouseEnter={() => handleBarHover(index)}
//                   onFocus={() => handleBarHover(index)}
//                   onMouseLeave={() => handleBarHover(null)}
//                   onBlur={() => handleBarHover(null)}
//                 />
//               </g>
//             );
//           })}
//
//           {hoverIndex !== null && tooltipDef?.cursor ? (
//             <rect
//               x={scaleX(hoverIndex) - barWidth / 2}
//               y={marginWithDefaults.top}
//               width={barWidth}
//               height={innerHeight}
//               fill={
//                 typeof tooltipDef.cursor === 'boolean'
//                   ? 'rgba(148, 163, 184, 0.12)'
//                   : tooltipDef.cursor.fill ?? 'rgba(148, 163, 184, 0.12)'
//               }
//               pointerEvents="none"
//             />
//           ) : null}
//
//           {parsedData.map((entry, index) =>
//             renderAxisText(
//               xAxisChild?.props.tickFormatter?.(entry.xRaw as number | string) ?? entry.xValue,
//               scaleX(index),
//               marginWithDefaults.top + innerHeight + 18,
//               'middle',
//               xAxisChild?.props.style
//             )
//           )}
//
//           {yTicks.map((tick) =>
//             renderAxisText(
//               yTickFormatter?.(tick) ?? tick.toFixed(0),
//               marginWithDefaults.left - (yAxisChild?.props.width ?? 44) / 4,
//               scaleY(tick) + 4,
//               'end',
//               yAxisChild?.props.style
//             )
//           )}
//         </g>
//       </svg>
//       {tooltipContent}
//     </div>
//   );
// };
