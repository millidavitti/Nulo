import { createContext, useReducer } from "react";
import { dark } from "./helpers";
const today = new Date();
function reducer(state, action) {
	switch (action.type) {
		case "edit-duration":
			return { ...state, editDuration: !state.editDuration };
		case "edit-guests":
			return { ...state, editGuests: !state.editGuests };
		// Calendar Dispatch
		case "from":
			return {
				...state,
				from: { month: action.month, year: action.year, date: action.date },
				bookedDays: 0,
			};
		case "to":
			return {
				...state,
				to: { month: action.month, year: action.year, date: action.date },
				bookedDays: 0,
			};
		case "view":
			return { ...state, view: { month: action.month, year: action.year } };
		case "decrementview":
			if (!state.view.month)
				return {
					...state,
					view: {
						...state.view,
						month: 11,
						year: state.view.year - 1,
					},
				};
			else
				return {
					...state,
					view: { ...state.view, month: state.view.month - 1 },
				};
		case "incrementview":
			if (state.view.month === 11)
				return {
					...state,
					view: {
						...state.view,
						month: 0,
						year: state.view.year + 1,
					},
				};
			else
				return {
					...state,
					view: { ...state.view, month: state.view.month + 1 },
				};
		case "reset":
			return {
				...state,
				from: {
					month: null,
					year: null,
					date: null,
				},
				to: {
					month: null,
					year: null,
					date: null,
				},
				bookedDays: 0,
			};
		case "guest-count":
			if (action.guest === "adult") {
				if (action.action === "increment")
					return {
						...state,
						guests: { ...state.guests, adults: state.guests.adults + 1 },
					};
				else if (action.action === "decrement" && state.guests.adults)
					return {
						...state,
						guests: { ...state.guests, adults: state.guests.adults - 1 },
					};
				else return { ...state };
			} else if (action.guest === "children") {
				if (action.action === "increment")
					return {
						...state,
						guests: { ...state.guests, children: state.guests.children + 1 },
					};
				else if (action.action === "decrement" && state.guests.children)
					return {
						...state,
						guests: { ...state.guests, children: state.guests.children - 1 },
					};
				else return { ...state };
			} else if (action.guest === "infant") {
				if (action.action === "increment")
					return {
						...state,
						guests: { ...state.guests, infants: state.guests.infants + 1 },
					};
				else if (action.action === "decrement" && state.guests.infants)
					return {
						...state,
						guests: { ...state.guests, infants: state.guests.infants - 1 },
					};
				else return { ...state };
			}
		case "toggle-darkmode":
			return {
				...state,
				darkMode: action.mode,
			};
	}
}

const init = {
	editDuration: false,
	editGuests: false,
	from: {
		month: null,
		year: null,
		date: null,
	},
	to: {
		month: null,
		year: null,
		date: null,
	},
	// Current Calendar View
	view: {
		month: today.getMonth(),
		year: today.getFullYear(),
	},
	guests: {
		adults: 0,
		children: 0,
		infants: 0,
	},
	darkMode: false,
};

const AppCtx = createContext(init, reducer);

export function AppProvider({ children }) {
	const reducerCtx = useReducer(reducer, init);

	return <AppCtx.Provider value={reducerCtx}>{children}</AppCtx.Provider>;
}

export default AppCtx;
