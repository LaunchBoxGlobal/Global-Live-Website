"use client";

export default function GradientNumber({
  value,
  width = 168,
  height = 147,
  className = "",
}) {
  return (
    <div className={`group relative ${className}`} style={{ width, height }}>
      <svg
        viewBox="0 0 168 147"
        width={width}
        height={height}
        className="w-full h-full block"
      >
        <defs>
          <linearGradient id={`num-grad-${value}`} x1="0" y1="0" x2="0" y2="1">
            <stop className="stop-a" offset="0%" />
            <stop className="stop-b" offset="100%" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="52%"
          dominantBaseline="central"
          textAnchor="middle"
          fill={`url(#num-grad-${value})`}
          fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
          fontWeight="900"
          fontSize="450"
        >
          {value}
        </text>
      </svg>

      <style jsx>{`
        .stop-a {
          stop-color: #9ca3af;
          stop-opacity: 1;
          transition:
            stop-color 0.3s ease,
            stop-opacity 0.3s ease;
        }
        .stop-b {
          stop-color: #9ca3af;
          stop-opacity: 0.05;
          transition:
            stop-color 0.3s ease,
            stop-opacity 0.3s ease;
        }
        .group:hover .stop-a {
          stop-color: #dc2626;
          stop-opacity: 1;
        }
        .group:hover .stop-b {
          stop-color: #f87171;
          stop-opacity: 0.35;
        }
      `}</style>
    </div>
  );
}
