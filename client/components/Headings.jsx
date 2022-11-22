export default function Headings({ children, textAlign, fontSize, className }) {
	return (
		<h2
			className={`headings ${className}`}
			style={{
				textAlign,
				fontSize,
			}}
		>
			{children}
		</h2>
	);
}
