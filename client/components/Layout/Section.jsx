export default function Section({
	children,
	background,
	top = 0,
	right = 0,
	bottom = 0,
	left = 0,
	topBottom = 50,
	leftRight = 0,
}) {
	if (right || bottom || left || top) topBottom = 0;
	return (
		<section
			style={{
				background,
				padding:
					topBottom || leftRight
						? `${topBottom}px ${leftRight}px`
						: `${top}px ${right}px ${bottom}px ${left}px`,
			}}
		>
			{children}
		</section>
	);
}
