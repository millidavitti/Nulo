import React from "react";
import { useContext } from "react";
import AppCtx from "../../utils/AppContext";

export default function GuestCount() {
	const [state, dispatch] = useContext(AppCtx);
	return (
		<div className='guest-pick-wrap'>
			{/* Adults */}
			<div className='guest-pick'>
				<div className='guest-pick-label'>
					<p>Adults</p>
					<p>Ages 13 and above</p>
				</div>
				<div className='guest-pick-count'>
					<span
						onClick={(e) => {
							e.stopPropagation();
							dispatch({
								type: "guest-count",
								action: "decrement",
								guest: "adult",
							});
						}}
					>
						-
					</span>
					<span>{state.guests.adults}</span>
					<span
						onClick={(e) => {
							e.stopPropagation();
							dispatch({
								type: "guest-count",
								action: "increment",
								guest: "adult",
							});
						}}
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
						onClick={(e) => {
							e.stopPropagation();
							dispatch({
								type: "guest-count",
								action: "decrement",
								guest: "children",
							});
						}}
					>
						-
					</span>
					<span>{state.guests.children}</span>
					<span
						onClick={(e) => {
							e.stopPropagation();

							dispatch({
								type: "guest-count",
								action: "increment",
								guest: "children",
							});
						}}
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
						onClick={(e) => {
							e.stopPropagation();

							dispatch({
								type: "guest-count",
								action: "decrement",
								guest: "infant",
							});
						}}
					>
						-
					</span>
					<span>{state.guests.infants}</span>
					<span
						onClick={(e) => {
							e.stopPropagation();

							dispatch({
								type: "guest-count",
								action: "increment",
								guest: "infant",
							});
						}}
					>
						+
					</span>
				</div>
			</div>
		</div>
	);
}
