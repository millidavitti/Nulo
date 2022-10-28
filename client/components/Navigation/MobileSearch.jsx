import { useContext, useRef, useState } from "react";
import { Close, LocationPin, Search } from "../../assets/SVG.config";
import Calendar from "../Widgets/Calendar";
import AppCtx from "../../utils/AppContext";
import Link from "next/link";

export default (function MobileSearch({ state, dispatch }) {
	const [stateCtx, dispatchCtx] = useContext(AppCtx);
	const [input, setInput] = useState("");
	const focusInput = useRef();
	return (
		<div
			className='mobile-search'
			style={{ translate: state.mobileSearch ? "0" : "0 200%" }}
		>
			<div className='close-bar'>
				<span onClick={() => dispatch({ type: "mobile-search" })}>
					<Close size={20} fill='var(--headers)' strokeWidth={0.5} />
				</span>
			</div>
			<nav>
				<span>Stay</span>
				<span>Experiences</span>
				<span>Cars</span>
				<span>Flights</span>
			</nav>
			<div className='search-options'>
				{/* Where to? */}
				<div className='where-to'>
					{state.options.current === "where" || (
						<div
							className='search-option-tab'
							onClick={() => dispatch({ type: "where" })}
						>
							<p>Where</p>
							<p>Location</p>
						</div>
					)}
					{state.options.current === "where" && (
						<div className='where-to-modal'>
							<div>
								<form>
									<label htmlFor='destination'>Where to?</label>
									<div>
										<input
											type='text'
											name='location'
											id='destination'
											value={input}
											placeholder='Search destinations'
											ref={focusInput}
											onChange={(e) => {
												setInput(e.target.value);
											}}
										/>
										<span>
											<Search size={25} stroke='var(--headers)' />
										</span>
									</div>
								</form>
							</div>
							<div
								className='popular-destinations'
								onClick={(e) => {
									const tag = e.target.closest("p");
									if (!tag) return;
									setInput(
										e.target.textContent[0].toUpperCase() +
											e.target.textContent.slice(1),
									);
								}}
							>
								<h2>Popular destinations</h2>
								<div className='destinations'>
									<span>
										<LocationPin size={20} />
									</span>
									<p>australia</p>
								</div>
								<div className='destinations'>
									<span>
										<LocationPin size={20} />
									</span>
									<p>canada</p>
								</div>
								<div className='destinations'>
									<span>
										<LocationPin size={20} />
									</span>
									<p>germany</p>
								</div>
								<div className='destinations'>
									<span>
										<LocationPin size={20} />
									</span>
									<p>united kingdom</p>
								</div>
								<div className='destinations'>
									<span>
										<LocationPin size={20} />
									</span>
									<p>Nigeria</p>
								</div>
							</div>
						</div>
					)}
				</div>
				{/* Duration? */}
				<div className='duration'>
					{state.options.current === "duration" || (
						<div
							className='search-option-tab'
							onClick={() => dispatch({ type: "duration" })}
						>
							<p>Duration</p>
							<p>Pick date</p>
						</div>
					)}
					{state.options.current === "duration" && (
						<div className='calendar'>
							<h2>Duration</h2>
							<Calendar state={state} dispatch={dispatch} />
						</div>
					)}
				</div>
				{/* Guest */}
				<div className='guest'>
					{state.options.current === "guest" || (
						<div
							className='search-option-tab'
							onClick={() => dispatch({ type: "guest" })}
						>
							<p>Guests</p>
							<p>How many</p>
						</div>
					)}
					{state.options.current === "guest" && (
						<div className='guest-modal'>
							<h2>Guests</h2>
							{/* Adults */}
							<div className='guest-pick'>
								<div className='guest-pick-label'>
									<p>Adults</p>
									<p>Ages 13 and above</p>
								</div>
								<div className='guest-pick-count'>
									<span
										onClick={() =>
											dispatchCtx({
												type: "guest-count",
												action: "decrement",
												guest: "adult",
											})
										}
									>
										-
									</span>
									<span>{stateCtx.guests.adults}</span>
									<span
										onClick={() =>
											dispatchCtx({
												type: "guest-count",
												action: "increment",
												guest: "adult",
											})
										}
									>
										+
									</span>
								</div>
							</div>
							{/* Children */}
							<div className='guest-pick'>
								<div className='guest-pick-label'>
									<p>Children</p>
									<p>Ages 3 - 12</p>
								</div>
								<div className='guest-pick-count'>
									<span
										onClick={() =>
											dispatchCtx({
												type: "guest-count",
												action: "decrement",
												guest: "children",
											})
										}
									>
										-
									</span>
									<span>{stateCtx.guests.children}</span>
									<span
										onClick={() =>
											dispatchCtx({
												type: "guest-count",
												action: "increment",
												guest: "children",
											})
										}
									>
										+
									</span>
								</div>
							</div>
							{/* Infants */}
							<div className='guest-pick'>
								<div className='guest-pick-label'>
									<p>Infants</p>
									<p>Ages 1 - 2</p>
								</div>
								<div className='guest-pick-count'>
									<span
										onClick={() =>
											dispatchCtx({
												type: "guest-count",
												action: "decrement",
												guest: "infant",
											})
										}
									>
										-
									</span>
									<span>{stateCtx.guests.infants}</span>
									<span
										onClick={() =>
											dispatchCtx({
												type: "guest-count",
												action: "increment",
												guest: "infant",
											})
										}
									>
										+
									</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className='clearall-search'>
				<button type='button'>Clear all</button>
				<Link href='/hotel/listings'>
					<button
						type='button'
						onClick={() => dispatch({ type: "mobile-search" })}
					>
						<Search size={20} stroke='white' strokeWidth={4} />
						Search
					</button>
				</Link>
			</div>
		</div>
	);
});
