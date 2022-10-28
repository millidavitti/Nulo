export default function SubHeadings({
	children,
	textAlign,
	fontSize,
	className,
}) {
	return (
		<h3
			className={`subHeadings ${className}`}
			style={{
				textAlign,
				fontSize,
			}}
		>
			{children}
		</h3>
	);
}
