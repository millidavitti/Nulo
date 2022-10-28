export default function ResponsiveGrid({
	children,
	min,
	gap,
	maxWidth,
	margin,
	className = "",
}) {
	return (
		<div
			className={`responsive-grid ${className}`}
			style={{
				gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
				gap,
				maxWidth: `${maxWidth}px`,
				margin,
			}}
		>
			{children}
		</div>
	);
}
