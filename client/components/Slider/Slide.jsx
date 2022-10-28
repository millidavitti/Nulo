/* eslint-disable @next/next/no-img-element */
import { forwardRef } from "react";
import slider from "../../styles/slider.module.css";

export default forwardRef(function Slide({ url, style }, ref) {
	return (
		<div className={slider.slide} ref={ref} style={style}>
			<img src={url} alt='' />
			<div>
				<h4>New Tork</h4>
				<p>188,288 properties</p>
			</div>
		</div>
	);
});
