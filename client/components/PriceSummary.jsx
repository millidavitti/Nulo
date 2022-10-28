/* eslint-disable @next/next/no-img-element */
import { useContext, useRef } from "react";
import image from "../assets/image.jpg";
import { Close, Star } from "../assets/SVG.config";
import hotelDetails from "../styles/hotelDetails.module.css";
import { bookedDays } from "../utils/helpers";
import Container from "./Layout/Container";
import AppCtx from "../utils/AppContext";

export default function PriceSummary({ state, dispatch }) {
	const ff = useRef(state.gallery.firstFour);

	const [stateCtx] = useContext(AppCtx);
	return (
		<div
			className={hotelDetails.overlay}
			style={{
				scale: state?.modals?.summary ? "1" : "2",
				opacity: state?.modals?.summary ? "1" : "0",
				pointerEvents: state?.modals?.summary ? "unset" : "none",
			}}
		>
			<div
				className={hotelDetails.priceSummary}
				style={{
					scale: state?.modals?.summary ? "1" : "2",
					opacity: state?.modals?.summary ? "1" : "0",
					pointerEvents: state?.modals?.summary ? "unset" : "none",
				}}
			>
				<div className={hotelDetails.closeTitle}>
					<span onClick={() => dispatch({ type: "priceSummary" })}>
						<Close size={20} fill='var(--headers)' strokeWidth={0.5} />
					</span>
					<h2>Price Summary</h2>
				</div>
				<Container>
					<img
						src={ff.current.one}
						alt='rooms'
						className={hotelDetails.bookedHotelPic}
					/>
					<p className={hotelDetails.roomLocation}>
						Hotel room in Tokyo, Jappan
					</p>
					<p className={hotelDetails.hotelName}>The Lounge & Bar</p>
					<p>2 beds - 2 baths</p>
					<hr className={hotelDetails.hrShort} />
					<p className={hotelDetails.rating}>
						<span>
							<Star size={20} fill='crimson' />
						</span>
						4.5 (112)
					</p>
					{/* SECTION Price Detail */}
					<div className={hotelDetails.priceDetail}>
						<h2>Price detail</h2>
						<div>
							<p>$19 x {bookedDays(stateCtx.from, stateCtx.to)} days</p>
							<p>${19 * bookedDays(stateCtx.from, stateCtx.to)}</p>
						</div>
						<div>
							<p>Service charge</p>
							<p>$0</p>
						</div>
						<hr />
						<div>
							<p>Total</p>
							<p>${19 * bookedDays(stateCtx.from, stateCtx.to)}</p>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
