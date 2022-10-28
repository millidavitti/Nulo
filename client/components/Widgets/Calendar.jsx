import { useContext } from "react";
import { useRef } from "react";
import { LeftArrow, RightArrow } from "../../assets/SVG.config";
import calendar from "../../styles/calendar.module.css";
import { generateCalendar } from "../../utils/helpers";
import AppCtx from "../../utils/AppContext";

const today = new Date();
/*prettier-ignore */
const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function Calendar() {
	const { current: node } = useRef();
	const [state, dispatch] = useContext(AppCtx);

	// Dynamic styles for selected dates
	function fromTo(state, date) {
		if (
			state.from.date === date &&
			state.from.month === state.view.month &&
			state.from.year === state.view.year
		)
			return "darkcyan";
		else if (
			state.to.date === date &&
			state.to.month === state.view.month &&
			state.to.year === state.view.year
		)
			return "crimson";
	}
	function pickFn(date) {
		// If from is not set or date < the set from date
		if (
			!state.from.date ||
			(date < state.from.date &&
				state.view.month === state.from.month &&
				state.view.year === state.from.year) ||
			(state.view.month < state.from.month &&
				state.view.year === state.from.year) ||
			state.view.year < state.from.year
		) {
			dispatch({
				type: "from",
				month: state.view.month,
				year: state.view.year,
				date,
			});
			// If from is set
		} else if (
			(state.from.date &&
				state.view.month >= state.from.month &&
				state.view.year >= state.from.year) ||
			state.view.month < state.to.month ||
			state.view.year > state.from.year
		)
			dispatch({
				type: "to",
				month: state.view.month,
				year: state.view.year,
				date,
			});

		// To reset current picks
		if (
			(date === state.from.date &&
				state.view.month === state.from.month &&
				state.view.year === state.from.year) ||
			(date === state.to.date &&
				state.view.month === state.to.month &&
				state.view.year === state.to.year)
		)
			dispatch({ type: "reset" });
	}
	return (
		<div className={calendar.calendar}>
			<nav className={calendar.nav}>
				<span
					className={calendar.left}
					onClick={(e) => {
						e.stopPropagation();
						dispatch({
							type: "decrementview",
							month: state.view.month,
							year: state.view.year,
						});
					}}
				>
					<LeftArrow
						size={20}
						fill='var(--headers)'
						stroke='var(--headers)'
						strokeWidth={19}
					/>
				</span>
				<h3 className={calendar.view}>
					{months[state.view.month]} {state.view.year}
				</h3>
				<span
					className={calendar.right}
					onClick={(e) => {
						e.stopPropagation();
						dispatch({
							type: "incrementview",
							month: state.view.month,
							year: state.view.year,
						});
					}}
				>
					<RightArrow
						size={20}
						fill='var(--headers)'
						stroke='var(--headers)'
						strokeWidth={19}
					/>
				</span>
			</nav>
			<div className={calendar.weekDays}>
				<p>Sun</p>
				<p>Mon</p>
				<p>Tue</p>
				<p>Wed</p>
				<p>Thu</p>
				<p>Fri</p>
				<p>Sat</p>
			</div>
			<div className={calendar.dates} ref={node}>
				{generateCalendar(state.view.month, state.view.year).calendar.map(
					(date, key) => {
						if (!date) return <span key={key} className={calendar.past}></span>;
						// Date range highlight logic
						else if (
							// Same month range
							(date > state.from.date &&
								date < state.to.date &&
								state.view.month === state.from.month &&
								state.view.month === state.to.month &&
								state.view.year === state.from.year &&
								state.view.year === state.to.year) ||
							// Diff month range
							// From current month
							(date > state.from.date &&
								state.view.month === state.from.month &&
								state.view.month !== state.to.month &&
								state.view.year === state.from.year &&
								state.view.year === state.to.year &&
								state.to.date) ||
							// From: Multi-year e.g 21-22
							(date > state.from.date &&
								state.view.month === state.from.month &&
								state.to.year > state.from.year &&
								state.view.year === state.from.year &&
								state.to.date) ||
							// To next month
							(date < state.to.date &&
								state.view.month !== state.from.month &&
								state.view.month === state.to.month &&
								state.view.year === state.from.year &&
								state.view.year === state.to.year &&
								state.from.date) ||
							// To: Multi-year e.g 21-22
							(date < state.to.date &&
								state.view.month === state.to.month &&
								state.view.year === state.to.year &&
								state.to.year > state.from.year &&
								state.from.date) ||
							// Manges multiple months of the same year
							(state.view.month > state.from.month &&
								state.view.month < state.to.month &&
								state.view.year === state.from.year &&
								state.view.year === state.to.year &&
								state.from.date &&
								state.to.date) ||
							// Manges multiple months of diff years
							(state.to.year > state.from.year &&
								!state.to.month &&
								state.view.month > state.from.month &&
								state.view.month < state.to.month &&
								state.view.year === state.to.year &&
								state.from.date &&
								state.to.date) ||
							(state.to.year > state.from.year &&
								state.to.month &&
								state.view.year === state.to.year &&
								state.view.month < state.to.month) ||
							(state.to.year > state.from.year &&
								(state.to.month || !state.to.month) &&
								state.view.year > state.from.year &&
								state.view.year < state.to.year) ||
							(state.view.month > state.from.month &&
								state.to.year !== state.from.year &&
								state.view.year === state.from.year &&
								state.from.date &&
								state.to.date)
						) {
							return (
								<span
									key={key}
									className={calendar.range}
									onClick={pickFn.bind(null, date)}
									style={{
										background: fromTo(state, date),
									}}
								>
									{date}
								</span>
							);
						} else if (
							// If year < today's year
							generateCalendar(state.view.month, state.view.year).year <
								today.getFullYear() ||
							// if month === today's month && date <today's date && year===today's year
							(generateCalendar(state.view.month, state.view.year).month ===
								today.getMonth() &&
								date < today.getDate() &&
								generateCalendar(state.view.month, state.view.year).year ===
									today.getFullYear()) ||
							// if month < today's month  && year===today's year
							(generateCalendar(state.view.month, state.view.year).year ===
								today.getFullYear() &&
								generateCalendar(state.view.month, state.view.year).month <
									today.getMonth())
						)
							return (
								<span key={key} className={calendar.past}>
									{date}
								</span>
							);
						else
							return (
								<span
									key={key}
									onClick={pickFn.bind(null, date)}
									style={{
										background: fromTo(state, date),
									}}
								>
									{date}
								</span>
							);
					},
				)}
			</div>
		</div>
	);
}
