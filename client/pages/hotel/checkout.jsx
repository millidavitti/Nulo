import { useContext } from "react";
import { Star, Edit } from "../../assets/SVG.config";
import Headings from "../../components/Headings";
import Container from "../../components/Layout/Container";
import Margin from "../../components/Layout/Margin";
import Section from "../../components/Layout/Section";
import GuestCount from "../../components/Widgets/GuestCount";
import AppCtx from "../../utils/AppContext";
import hotelDetails from "../../styles/hotelDetails.module.css";
import image from "../../assets/image.jpg";
import Grid from "../../components/Layout/Grid";
import { bookedDays } from "../../utils/helpers";
import Calendar from "../../components/Widgets/Calendar";
import Link from "next/link";
import Head from "next/head";

/*prettier-ignore */
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export default function Checkout() {
	const [state, dispatch] = useContext(AppCtx);
	return (
		<>
			<Head>
				<title>Checkout</title>
			</Head>
			<Section top={100}>
				<Container className={hotelDetails.container}>
					<Grid className={hotelDetails.grid}>
						<div className={hotelDetails.cmWrap}>
							<Headings>Confirmation and payment</Headings>
							{/* SECTION Reeservation Details */}
							<div className={hotelDetails.bookingDetails}>
								{/* SECTION Duration */}
								<div className={hotelDetails.durationGuest}>
									<div className={hotelDetails.bookingDuration}>
										<div>
											<div>
												<p>Duration</p>
												<p>
													{months[state.from.month]}{" "}
													{`${state.from.date}`.padStart(2, "0")} -{" "}
													{months[state.to.month]}{" "}
													{`${state.to.date}`.padStart(2, "0")}
												</p>
											</div>
											<span onClick={() => dispatch({ type: "edit-duration" })}>
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
											<span onClick={() => dispatch({ type: "edit-guests" })}>
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
											<input
												type='password'
												name='cvc'
												id='cvc'
												maxLength={3}
											/>
										</div>
									</div>
									<Link href='/hotel/successfully-booked'>
										<button type='submit'>Confirm and pay</button>
									</Link>
								</form>
							</div>
						</div>
						{/* Pric Summary */}
						<div className={hotelDetails.priceSummary}>
							<Container>
								<div className={hotelDetails.priceSummaryFlex}>
									<img
										src={image.src}
										alt=''
										className={hotelDetails.bookedHotelPic}
									/>
									<div>
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
									</div>
								</div>
								{/* SECTION Price Detail */}
								<div className={hotelDetails.priceDetail}>
									<h2>Price detail</h2>
									<div>
										<p>$119 x {bookedDays(state.from, state.to)} days</p>
										<p>${119 * bookedDays(state.from, state.to)}</p>
									</div>
									<div>
										<p>Service charge</p>
										<p>$0</p>
									</div>
									<hr />
									<div>
										<p>Total</p>
										<p>${119 * bookedDays(state.from, state.to)}</p>
									</div>
								</div>
							</Container>
						</div>
					</Grid>
				</Container>
			</Section>

			{/* SECTION Edit Duration */}
			<div
				className={hotelDetails.overlay}
				style={{
					scale: state?.editDuration ? "1" : "2",
					opacity: state?.editDuration ? "1" : "0",
					pointerEvents: state?.editDuration ? "unset" : "none",
				}}
			>
				{/* SECTION Calendar */}
				<div
					className={hotelDetails.editDuration}
					style={{
						scale: state?.editDuration ? "1" : "2",
						opacity: state?.editDuration ? "1" : "0",
						pointerEvents: state?.editDuration ? "unset" : "none",
					}}
				>
					<span onClick={() => dispatch({ type: "edit-duration" })}>Done</span>
					<Margin topBottom={20}>
						<Calendar />
					</Margin>
				</div>
			</div>
			{/* SECTION Edit Guests */}
			<div
				className={hotelDetails.overlay}
				style={{
					scale: state?.editGuests ? "1" : "2",
					opacity: state?.editGuests ? "1" : "0",
					pointerEvents: state?.editGuests ? "unset" : "none",
				}}
			>
				<div
					className={hotelDetails.editGuests}
					style={{
						scale: state?.editGuests ? "1" : "2",
						opacity: state?.editGuests ? "1" : "0",
						pointerEvents: state?.editGuests ? "unset" : "none",
					}}
				>
					<span onClick={() => dispatch({ type: "edit-guests" })}>Done</span>
					<GuestCount />
				</div>
			</div>
		</>
	);
}
