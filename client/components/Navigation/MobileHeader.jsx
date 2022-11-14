import { useEffect, useState, useContext, useReducer, useRef } from "react";
/*prettier-ignore */
import {Dot,History,	Logo,	Menu,	Search,	Sliders} from "../../assets/SVG.config";
import AppCtx from "../../utils/AppContext";
import MobileNav from "../Navigation/MobileNav";
import FromCalendar from "../Widgets/FromCalendar";
import ToCalendar from "../Widgets/ToCalendar";
import MobileSearch from "./MobileSearch";
import Navigation from "./Navigation";
import GuestCount from "../Widgets/GuestCount";
import Link from "next/link";
import ThemeSelect from "../Widgets/ThemeSelect";
import Nulo from "../Nulo";
/*prettier-ignore */
const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const dot = <Dot size={5} fill='var(--outline)' />;
function reducer(state, action) {
	switch (action.type) {
		case "mobile-search":
			return { ...state, mobileSearch: !state.mobileSearch };
		case "desk-search":
			return { ...state, deskSearch: !state.deskSearch };
		case "where":
			return { ...state, options: { current: action.type } };
		case "duration":
			return { ...state, options: { current: action.type } };
		case "guest":
			return { ...state, options: { current: action.type } };
		case "menu":
			return { ...state, menu: { toggle: !state.menu.toggle } };
		case "show-drop":
			if (state.dropDown.current === action.navlink)
				return { ...state, dropDown: { current: null } };
			return { ...state, dropDown: { current: action.navlink } };
		case "destination":
			return {
				...state,
				searchBar: {
					checkIn: false,
					checkOut: false,
					guest: false,
					location: !state.searchBar.location,
				},
			};
		case "check-in":
			return {
				...state,
				searchBar: {
					location: false,
					checkOut: false,
					guest: false,
					checkIn: !state.searchBar.checkIn,
				},
			};
		case "check-out":
			return {
				...state,
				searchBar: {
					location: false,
					checkIn: false,
					guest: false,
					checkOut: !state.searchBar.checkOut,
				},
			};
		case "how-many-guests":
			return {
				...state,
				searchBar: {
					location: false,
					checkOut: false,
					checkIn: false,
					guest: !state.searchBar.guest,
				},
			};
		case "search-bar":
			return {
				...state,
				searchBar: {
					location: true,
					checkIn: false,
					checkOut: false,
					guest: false,
				},
			};
	}
}
const init = {
	mobileSearch: false,
	deskSearch: false,
	options: { current: "where" },
	menu: { toggle: false },
	dropDown: { current: null },
	searchBar: {
		location: true,
		checkIn: false,
		checkOut: false,
		guest: false,
	},
	searchLocation: "",
};
export default function MobileHeader() {
	const [state, dispatch] = useReducer(reducer, init);
	const [stateCtx, dispatchCtx] = useContext(AppCtx);
	const [input, setInput] = useState("");
	const focusInput = useRef();
	useEffect(() => {
		if (stateCtx.from.date) dispatch({ type: "check-out" });
		if (stateCtx.to.date) dispatch({ type: "how-many-guests" });
	}, [stateCtx.from.date, stateCtx.to.date]);

	return <>
        <header
            className='navigation-header'
            style={{
                maxHeight: state.deskSearch ? "500px" : "initial",
            }}
        >
            {/* Search bar */}
            <nav>
                <span className='logo'>
                    <Nulo size={50} />
                </span>
                {/* Mobile Search Bar: Where to? */}
                <div
                    className='mobile-search-bar'
                    onClick={() => dispatch({ type: "mobile-search" })}
                >
                    <div>
                        <Search size={20} stroke='var(--headers)' />
                        <div className='mobile-search-bar-text'>
                            <h4>Where to?</h4>
                            <h4>
                                Anywhere {dot} Any week {dot} Add guest
                            </h4>
                        </div>
                        <span>
                            <Sliders size={20} stroke='var(--headers)' strokeWidth={30} />
                        </span>
                    </div>
                </div>
                {/* Desktop Search Bar: Location - Check in-out - Guest */}
                <div
                    className='desk-search-bar'
                    style={{
                        scale: state.deskSearch ? "1.2" : "1",
                        translate: state.deskSearch ? "0 50px" : "0",
                        opacity: state.deskSearch ? "0" : "1",
                        position: state.deskSearch ? "absolute" : "relative",
                        pointerEvents: state.deskSearch ? "none" : "unset",
                    }}
                >
                    <div
                        className='location-check-guest'
                        onClick={() => {
                            dispatch({ type: "desk-search" });
                            dispatch({ type: "search-bar" });
                            focusInput.current.focus();
                        }}
                    >
                        <div>
                            <p>Location</p>
                            <p>Check In</p>
                            <p>Add Guests</p>
                        </div>
                        <span className='desk-search-icon'>
                            <Search size={20} stroke='white' />
                        </span>
                    </div>
                </div>
                {/* Stays, Experience... */}
                <div
                    className='desk-search-tab'
                    style={{
                        scale: state.deskSearch ? "1" : "0",
                        opacity: state.deskSearch ? "1" : "0",
                        position: state.deskSearch ? "relative" : "absolute",
                        pointerEvents: state.deskSearch ? "unset" : "none",
                        zIndex: state.deskSearch ? 124 : 124,
                    }}
                >
                    <nav>
                        <span>Stay</span>
                        <span>Experiences</span>
                        <span>Cars</span>
                        <span>Flights</span>
                    </nav>
                </div>
                {/* Theme and Menu Icons */}
                <div className='theme-menu'>
                    <ThemeSelect />
                    <span
                        className='mobile-menu'
                        onClick={() => dispatch({ type: "menu" })}
                    >
                        <Menu size={25} fill='var(--headers)' />
                    </span>
                </div>
            </nav>
            {/* Expanded Location, check in-out and guest */}
            <div
                className='appear'
                style={{
                    translate: state.deskSearch ? "0" : "0 -100px",
                    scale: state.deskSearch ? "1" : "0.8",
                    opacity: state.deskSearch ? "1" : "0",
                    pointerEvents: state.deskSearch ? "unset" : "none",
                    position: state.deskSearch ? "relative" : "absolute",
                }}
            >
                {/* Location */}
                <div
                    className='appear-labels'
                    onClick={() => {
                        dispatch({ type: "destination" });
                        focusInput.current.focus();
                    }}
                    style={{
                        boxShadow: state.searchBar.location
                            ? "0 3px 10px var(--outline)"
                            : "none",
                    }}
                >
                    <input
                        type='text'
                        name='location'
                        id='location'
                        value={input}
                        placeholder='Location'
                        ref={focusInput}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                    <p className='appear-labels-description'>Where are you going?</p>
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
                        style={{
                            maxHeight: state.searchBar.location ? "1000px" : "0",
                            opacity: state.searchBar.location ? "1" : "0",
                        }}
                    >
                        <h2>Recent Searches</h2>
                        <div className='destinations'>
                            <span>
                                <History size={20} fill='var(--descriptions)' />
                            </span>
                            <p>australia</p>
                        </div>
                        <div className='destinations'>
                            <span>
                                <History size={20} fill='var(--descriptions)' />
                            </span>
                            <p>canada</p>
                        </div>
                        <div className='destinations'>
                            <span>
                                <History size={20} fill='var(--descriptions)' />
                            </span>
                            <p>germany</p>
                        </div>
                        <div className='destinations'>
                            <span>
                                <History size={20} fill='var(--descriptions)' />
                            </span>
                            <p>united kingdom</p>
                        </div>
                        <div className='destinations'>
                            <span>
                                <History size={20} fill='var(--descriptions)' />
                            </span>
                            <p>Nigeria</p>
                        </div>
                    </div>
                </div>
                {/* Checki in */}
                <div
                    className='appear-labels'
                    onClick={() => {
                        if (stateCtx.from.date)
                            dispatchCtx({
                                type: "view",
                                month: stateCtx.from.month,
                                year: stateCtx.from.year,
                            });
                        dispatch({ type: "check-in" });
                    }}
                    style={{
                        boxShadow: state.searchBar.checkIn
                            ? "0 3px 10px var(--outline)"
                            : "none",
                    }}
                >
                    <p className='appear-labels-title'>
                        {stateCtx.from.date
                            ? `${`${stateCtx.from.date}`.padStart(2, "0")} ${
                                    months[stateCtx.from.month]
                              }`
                            : "Check in"}
                    </p>
                    <p className='appear-labels-description'>From?</p>
                    {/* Calendar */}
                    <div
                        className='header-calendar'
                        style={{
                            maxHeight: state.searchBar.checkIn ? "1000px" : "0",
                            opacity: state.searchBar.checkIn ? "1" : "0",
                        }}
                    >
                        <FromCalendar />
                    </div>
                </div>
                {/* Check out */}
                <div
                    className='appear-labels'
                    onClick={() => {
                        if (stateCtx.to.date)
                            dispatchCtx({
                                type: "view",
                                month: stateCtx.to.month,
                                year: stateCtx.to.year,
                            });
                        if (!stateCtx.from.date) dispatch({ type: "check-in" });
                        else dispatch({ type: "check-out" });
                    }}
                    style={{
                        boxShadow: state.searchBar.checkOut
                            ? "0 3px 10px var(--outline)"
                            : "none",
                    }}
                >
                    <p className='appear-labels-title'>
                        {stateCtx.to.date
                            ? `${`${stateCtx.to.date}`.padStart(2, "0")} ${
                                    months[stateCtx.to.month]
                              }
                                    
                              `
                            : "Check out"}
                    </p>
                    <p className='appear-labels-description'>To?</p>
                    {/* Checkout Calendar */}
                    <div
                        className='header-calendar'
                        style={{
                            maxHeight: state.searchBar.checkOut ? "1000px" : "0",
                            opacity: state.searchBar.checkOut ? "1" : "0",
                        }}
                    >
                        <ToCalendar />
                    </div>
                </div>
                {/* Guests */}
                <div
                    className='appear-labels'
                    onClick={() => dispatch({ type: "how-many-guests" })}
                    style={{
                        boxShadow: state.searchBar.guest
                            ? "0 3px 10px var(--outline)"
                            : "none",
                    }}
                >
                    <div>
                        <p className='appear-labels-title'>Guests</p>
                        <p className='appear-labels-description'>How many?</p>
                    </div>
                    {/* Search */}
                    <Link href='/hotel/listings' legacyBehavior>
                        <span
                            className='appear-search-icon'
                            onClick={() => dispatch({ type: "desk-search" })}
                        >
                            <Search size={30} stroke='white' strokeWidth={3} />
                        </span>
                    </Link>
                    <div
                        className='guest-count'
                        style={{
                            maxHeight: state.searchBar.guest ? "1000px" : "0",
                            opacity: state.searchBar.guest ? "1" : "0",
                        }}
                    >
                        <GuestCount />
                    </div>
                </div>
            </div>
        </header>
        {/* Overlay */}
        <div
            className='search-overlay'
            onClick={() => dispatch({ type: "desk-search" })}
            style={{
                opacity: state.deskSearch ? "1" : "0",
                pointerEvents: state.deskSearch ? "unset" : "none",
            }}
        ></div>
        {/* Navigation Bar at the bottom of the screen */}
        <MobileNav />
        {/* Search Modal for mobile and tablets */}
        <MobileSearch state={state} dispatch={dispatch} />
        {/* Menu items */}
        <Navigation state={state} dispatch={dispatch} />
    </>;
}
