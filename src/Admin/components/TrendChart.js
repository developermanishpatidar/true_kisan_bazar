import React, { useState } from 'react';

export const AreaTrendChart = ({ data, height = 220, strokeColor = '#16a34a', fillColor = 'rgba(34, 197, 94, 0.18)' }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!data || data.length === 0) return null;

  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 600;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxVal = Math.max(...data.map((d) => d.value)) * 1.15 || 100;
  const minVal = 0;

  const points = data.map((d, i) => {
    const x = padding.left + (i / (data.length - 1)) * chartWidth;
    const y = padding.top + chartHeight - ((d.value - minVal) / (maxVal - minVal)) * chartHeight;
    return { x, y, ...d };
  });

  // Generate SVG path for line
  const pathD = points.reduce((acc, pt, i, arr) => {
    if (i === 0) return `M ${pt.x},${pt.y}`;
    // Smooth bezier curve
    const prev = arr[i - 1];
    const cx1 = prev.x + (pt.x - prev.x) / 2;
    const cy1 = prev.y;
    const cx2 = prev.x + (pt.x - prev.x) / 2;
    const cy2 = pt.y;
    return `${acc} C ${cx1},${cy1} ${cx2},${cy2} ${pt.x},${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x},${padding.top + chartHeight} L ${points[0].x},${padding.top + chartHeight} Z`;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: '100%', height: 'auto', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.32" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
          const y = padding.top + chartHeight * (1 - ratio);
          const val = Math.round(minVal + (maxVal - minVal) * ratio);
          return (
            <g key={idx}>
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="4 4"
              />
              <text
                x={padding.left - 8}
                y={y + 4}
                fontSize="11"
                fill="#94a3b8"
                textAnchor="end"
              >
                {val >= 1000 ? `${(val / 1000).toFixed(1)}k` : val}
              </text>
            </g>
          );
        })}

        {/* Filled Area */}
        <path d={areaD} fill="url(#areaGradient)" />

        {/* Curved Stroke */}
        <path d={pathD} fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />

        {/* Data points & X Labels */}
        {points.map((pt, i) => (
          <g key={i}>
            {/* X axis labels */}
            <text
              x={pt.x}
              y={height - 8}
              fontSize="11"
              fill="#64748b"
              fontWeight="600"
              textAnchor="middle"
            >
              {pt.label}
            </text>

            {/* Hover Target Circle */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={hoverIndex === i ? '6' : '3.5'}
              fill="#fff"
              stroke={strokeColor}
              strokeWidth={hoverIndex === i ? '3' : '2'}
              style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            />
          </g>
        ))}
      </svg>

      {/* Hover Tooltip */}
      {hoverIndex !== null && (
        <div
          style={{
            position: 'absolute',
            left: `${(points[hoverIndex].x / width) * 100}%`,
            top: `${(points[hoverIndex].y / height) * 100 - 38}%`,
            transform: 'translateX(-50%)',
            background: '#0f2e16',
            color: '#fff',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          {points[hoverIndex].label}: {points[hoverIndex].value.toLocaleString()} {points[hoverIndex].unit || ''}
        </div>
      )}
    </div>
  );
};

export const BarTrendChart = ({ data, height = 220, barColor = '#22c55e' }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!data || data.length === 0) return null;

  const padding = { top: 20, right: 15, bottom: 30, left: 35 };
  const width = 600;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxVal = Math.max(...data.map((d) => d.value)) * 1.15 || 100;
  const barWidth = Math.min(32, (chartWidth / data.length) * 0.6);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: '100%', height: 'auto', overflow: 'visible' }}
      >
        {/* Horizontal grid lines */}
        {[0, 0.5, 1].map((ratio, idx) => {
          const y = padding.top + chartHeight * (1 - ratio);
          return (
            <line
              key={idx}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Bars */}
        {data.map((d, i) => {
          const x = padding.left + (i + 0.5) * (chartWidth / data.length) - barWidth / 2;
          const h = (d.value / maxVal) * chartHeight;
          const y = padding.top + chartHeight - h;
          const isHovered = hoverIndex === i;

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={h}
                rx="4"
                fill={isHovered ? '#15803d' : barColor}
                style={{ cursor: 'pointer', transition: 'fill 0.15s ease' }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              />
              <text
                x={x + barWidth / 2}
                y={height - 8}
                fontSize="11"
                fill="#64748b"
                fontWeight="600"
                textAnchor="middle"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>

      {hoverIndex !== null && (
        <div
          style={{
            position: 'absolute',
            left: `${((padding.left + (hoverIndex + 0.5) * (chartWidth / data.length)) / width) * 100}%`,
            top: '5%',
            transform: 'translateX(-50%)',
            background: '#0f2e16',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            pointerEvents: 'none'
          }}
        >
          {data[hoverIndex].label}: {data[hoverIndex].value}
        </div>
      )}
    </div>
  );
};
