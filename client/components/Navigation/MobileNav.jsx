import { useEffect, useReducer, useRef, useState } from "react";
import { Heart, Menu, Search, User } from "../../assets/SVG.config";
import debounce from "lodash/debounce";
import Link from "next/link";
import { useRouter } from "next/router";
import Navigation from "../Navigation/Navigation";

function reducer(state, action) {
	switch (action.type) {
		case "explore":
			return { ...state, menu: { current: action.type } };
		case "saves":
			return { ...state, menu: { current: action.type } };
		case "me":
			return { ...state, menu: { current: action.type } };
		case "menu":
			return { ...state, menu: { ...state.menu, toggle: !state.menu.toggle } };
		case "show-drop":
			if (state.dropDown.current === action.navlink)
				return { ...state, dropDown: { current: null } };
			return { ...state, dropDown: { current: action.navlink } };
	}
}
const init = {
	menu: { current: "explore", toggle: false },
	dropDown: { current: null },
};
export default function MobileNav() {
	const nav = useRef();
	const router = useRouter();
	const [vector, setVector] = useState(0);
	const [state, dispatch] = useReducer(reducer, init);
	const scroll = () => {
		if (document.body.getBoundingClientRect().top > vector) {
			nav.current.style.transform = `translateY(0)`;
		} else nav.current.style.transform = `translateY(${200}px)`;
		setVector(document.body.getBoundingClientRect().top);
	};
	const debounceCb = debounce(scroll, 500, { leading: true });
	useEffect(() => {
		document.documentElement.style.overflow = state.menu.toggle
			? "hidden"
			: "initial";
	}, [state.menu.toggle]);
	useEffect(() => {
		window.addEventListener("scroll", debounceCb);
		return () => {
			window.removeEventListener("scroll", debounceCb);
		};
	});

	return (
		<>
			<nav className='mobile-nav' ref={nav}>
				<Link href='/'>
					<div
						className='mobile-menu'
						onClick={() => {
							dispatch({ type: "explore" });
						}}
					>
						<Search
							size={25}
							stroke={router.pathname === "/" ? "crimson" : "var(--headers)"}
						/>
						<h4>Explore</h4>
					</div>
				</Link>
				<Link href='/user/saves'>
					<div
						className='mobile-menu'
						onClick={() => {
							dispatch({ type: "saves" });
						}}
					>
						<Heart
							size={25}
							fill={
								router.query.path === "saves" ? "crimson" : "var(--headers)"
							}
						/>
						<h4>Saves</h4>
					</div>
				</Link>
				<Link href='/user/account-info'>
					<div
						className='mobile-menu'
						onClick={() => {
							dispatch({ type: "me" });
						}}
					>
						<User
							size={25}
							fill={
								router.query.path === "account-info"
									? "crimson"
									: "var(--headers)"
							}
						/>
						<h4>Me</h4>
					</div>
				</Link>
				<div
					className='mobile-menu'
					onClick={() => {
						dispatch({ type: "menu" });
					}}
				>
					<Menu size={20} fill={"var(--headers)"} />
					<h4>Menu</h4>
				</div>
			</nav>
			<Navigation state={state} dispatch={dispatch} />
		</>
	);
}
