import hotelDetails from "../styles/hotelDetails.module.css";
import { Close, Edit, Star } from "../assets/SVG.config";
import Container from "./Layout/Container";
import Calendar from "./Widgets/Calendar";
import PriceSummary from "./PriceSummary";
import Margin from "./Layout/Margin";
import GuestCount from "./Widgets/GuestCount";
import { useContext } from "react";
import AppCtx from "../utils/AppContext";
import Link from "next/link";
/*prettier-ignore */
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export default function ConfirmationModal({ dispatch, state }) {
	const [stateCtx, dispatchCtx] = useContext(AppCtx);

	return (
		<>
			<div
				className={hotelDetails.confirmationPayment}
				style={{
					scale: state.modals.confirm ? "1" : "0",
					translate: state.modals.confirm ? "0" : "100% 0",
					overflow:
						state.modals.summary || state.editDuration ? "hidden" : "scroll",
				}}
			>
				<div className={hotelDetails.closeBar}>
					<span onClick={() => dispatch({ type: "confirmation" })}>
						<Close size={20} fill='var(--headers)' strokeWidth={0.5} />
					</span>
				</div>
				<Container>
					<div className={hotelDetails.cmWrap}>
						<h2>Confirmation and payment</h2>
						<hr className={hotelDetails.hr} />
						{/* SECTION Reeservation Details */}
						<div className={hotelDetails.bookingDetails}>
							<h3>Your Reservation</h3>
							<p onClick={() => dispatch({ type: "priceSummary" })}>
								View price summary
							</p>
							{/* SECTION Duration */}
							<div className={hotelDetails.durationGuest}>
								<div className={hotelDetails.bookingDuration}>
									<div>
										<div>
											<p>Duration</p>
											<p>
												{months[stateCtx.from.month]}{" "}
												{`${stateCtx.from.date}`.padStart(2, "0")} -{" "}
												{months[stateCtx.to.month]}{" "}
												{`${stateCtx.to.date}`.padStart(2, "0")}
											</p>
										</div>
										<span
											onClick={() => dispatchCtx({ type: "edit-duration" })}
										>
											<Edit size={30} fill='var(--descriptions)' />
										</span>
									</div>
								</div>
								{/* Guest */}
								<div className={hotelDetails.bookingGuest}>
									<div>
										<div>
											<p>Guests</p>
											<p>3 Guests, 1 Infant</p>
										</div>
										<span onClick={() => dispatchCtx({ type: "edit-guests" })}>
											<Edit size={30} fill='var(--descriptions)' />
										</span>
									</div>
								</div>
							</div>
						</div>
						{/* SECTION Pay with */}
						<div className={hotelDetails.payment}>
							<h2>Pay with</h2>
							<hr className={hotelDetails.hrShort} />
							<nav>
								<span>Credit card</span>
							</nav>

							{/*SECTION Credit card view */}
							<form>
								<div>
									<label htmlFor='number'>Card number</label>
									<input type='number' id='number' />
								</div>
								<div>
									<label htmlFor='holder'>Card holder</label>
									<input type='text' id='holder' />
								</div>
								<div className={hotelDetails.expiration}>
									<div>
										<label htmlFor='expiration'>Expiration date</label>
										<input type='date' name='expiration' id='expiration' />
									</div>
									<div>
										<label htmlFor='cvc'>CVC</label>
										<input type='password' name='cvc' id='cvc' maxLength={3} />
									</div>
								</div>
								<Link href='/hotel/successfully-booked'>
									<button type='submit'>Confirm and pay</button>
								</Link>
							</form>
						</div>
					</div>
				</Container>
			</div>
			{/* SECTION Price Summary */}
			<PriceSummary state={state} dispatch={dispatch} />
			{/* SECTION Edit Duration */}
			<div
				className={hotelDetails.overlay}
				style={{
					scale: stateCtx.editDuration ? "1" : "2",
					opacity: stateCtx.editDuration ? "1" : "0",
					pointerEvents: stateCtx.editDuration ? "unset" : "none",
				}}
			>
				{/* SECTION Calendar */}
				<div
					className={hotelDetails.editDuration}
					style={{
						scale: stateCtx.editDuration ? "1" : "2",
						opacity: stateCtx.editDuration ? "1" : "0",
						pointerEvents: stateCtx.editDuration ? "unset" : "none",
					}}
				>
					<span onClick={() => dispatchCtx({ type: "edit-duration" })}>
						Done
					</span>
					<Margin topBottom={20}>
						<Calendar />
					</Margin>
				</div>
			</div>
			{/* SECTION Edit Guests */}
			<div
				className={hotelDetails.overlay}
				style={{
					scale: stateCtx.editGuests ? "1" : "2",
					opacity: stateCtx.editGuests ? "1" : "0",
					pointerEvents: stateCtx.editGuests ? "unset" : "none",
				}}
			>
				<div
					className={hotelDetails.editGuests}
					style={{
						scale: stateCtx.editGuests ? "1" : "2",
						opacity: stateCtx.editGuests ? "1" : "0",
						pointerEvents: stateCtx.editGuests ? "unset" : "none",
					}}
				>
					<span onClick={() => dispatchCtx({ type: "edit-guests" })}>Done</span>
					<GuestCount />
				</div>
			</div>
		</>
	);
}
