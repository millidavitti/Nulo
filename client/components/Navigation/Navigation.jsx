import Link from "next/link";
import React from "react";
import { Close, Dot, Sun, Twitter, Youtube } from "../../assets/SVG.config";
import Description from "../Description";
import Nulo from "../Nulo";
import ThemeSelect from "../Widgets/ThemeSelect";

export default function Navigation({ state, dispatch }) {
	return (
		<div
			className='navOverlay'
			style={{
				opacity: state.menu.toggle ? "1" : "0",
				pointerEvents: state.menu.toggle ? "unset" : "none",
			}}
		>
			<div
				className='navigation'
				style={{
					translate: state.menu.toggle ? "0" : "400px",
				}}
			>
				<div className='top-half'>
					<div>
						<div className='logo-close'>
							<span>
								<Nulo size={50} />
							</span>
							<span
								onClick={() => {
									dispatch({ type: "menu" });
									if (state.dropDown.current)
										dispatch({
											type: "show-drop",
											navlink: state.dropDown.current,
										});
								}}
							>
								<Close size={25} fill='var(--headers)' strokeWidth={0.5} />
							</span>
						</div>
						<Description>
							Discover the most outstanding articles on all topics of life.
							Write your stories and share them
						</Description>
						{/* Socials and theme selector */}
						<div className='nav-socials'>
							<div className='footer-socials'>
								<Twitter size={30} />
								<Youtube size={30} />
							</div>
							<ThemeSelect />
						</div>
					</div>
				</div>
				{/* Nav Links */}
				<nav className='nav-links'>
					<ul>
						<Link href='#home'>
							<li
								className='nav-link'
								onClick={() => dispatch({ type: "show-drop", navlink: "home" })}
								id='home'
							>
								<p>
									home<span></span>
								</p>
								<div
									className='sub-nav-link'
									style={{
										opacity: state.dropDown.current === "home" ? "1" : "0",
										zIndex: state.dropDown.current === "home" ? "unset" : "-1",
										scale: state.dropDown.current === "home" ? "1" : "1 0",
										maxHeight:
											state.dropDown.current === "home" ? "500px" : "0",
									}}
								>
									<Link href='/'>
										<p
											onClick={() => dispatch({ type: "menu" })}
											style={{
												translate:
													state.dropDown.current === "home" ? "0" : "0 -200px",
												transitionDelay: 0,
											}}
										>
											Home
										</p>
									</Link>
									<Link href='/user/saves'>
										<p
											onClick={() => dispatch({ type: "menu" })}
											style={{
												translate:
													state.dropDown.current === "home" ? "0" : "0 -400px",
												transitionDelay: 400,
											}}
										>
											Saves
										</p>
									</Link>
									<Link href='/user/account-info'>
										<p
											onClick={() => dispatch({ type: "menu" })}
											style={{
												translate:
													state.dropDown.current === "home" ? "0" : "0 -600px",
											}}
										>
											Account
										</p>
									</Link>
								</div>
							</li>
						</Link>
						<Link href='#product'>
							<li
								className='nav-link'
								onClick={() =>
									dispatch({ type: "show-drop", navlink: "product" })
								}
								id='#product'
							>
								<p>
									product<span></span>
								</p>
								<div
									className='sub-nav-link'
									style={{
										opacity: state.dropDown.current === "product" ? "1" : "0",
										zIndex:
											state.dropDown.current === "product" ? "unset" : "-1",
										scale: state.dropDown.current === "product" ? "1" : "1 0",
										maxHeight:
											state.dropDown.current === "product" ? "500px" : "0",
									}}
								>
									<p
										style={{
											translate:
												state.dropDown.current === "product" ? "0" : "0 -200px",
											transitionDelay: 0,
										}}
									>
										Some Page
									</p>
									<p
										style={{
											translate:
												state.dropDown.current === "product" ? "0" : "0 -400px",
											transitionDelay: 400,
										}}
									>
										Some Menu
									</p>
									<p
										style={{
											translate:
												state.dropDown.current === "product" ? "0" : "0 -600px",
										}}
									>
										Some Page
									</p>
								</div>
							</li>
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
}
