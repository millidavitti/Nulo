export default function Margin({
	children,
	top = 0,
	right = 0,
	bottom = 0,
	left = 0,
	topBottom = 40,
	leftRight = 0,
}) {
	if (right || bottom || left || top) topBottom = 0;
	return (
		<div
			className='margin'
			style={{
				margin:
					topBottom || leftRight
						? `${topBottom}px ${leftRight}px`
						: `${top}px ${right}px ${bottom}px ${left}px`,
			}}
		>
			{children}
		</div>
	);
}
