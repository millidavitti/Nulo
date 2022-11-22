export default function Grid({ children, rows = 1, gap, className }) {
	return (
		<div
			className={`grid ${className}`}
			style={{
				gridTemplateRows: `repeat(${rows},1fr)`,
				gap,
			}}
		>
			{children}
		</div>
	);
}
