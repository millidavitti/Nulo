import { size } from "lodash";

export default function SVGFrame({ children, size, margin, maxWidth }) {
	return (
		<div
			style={{
				width: `${`${size}px` || "auto"}`,
				height: `${`${size}px` || "auto"}`,
				margin,
				maxWidth: `${maxWidth}px`,
			}}
		>
			{children}
		</div>
	);
}
