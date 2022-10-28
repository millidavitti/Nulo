export default function Description({
	children,
	textAlign,
	fontSize,
	className,
}) {
	return (
		<p
			className={`description ${className}`}
			style={{
				textAlign,
				fontSize,
			}}
		>
			{children}
		</p>
	);
}
