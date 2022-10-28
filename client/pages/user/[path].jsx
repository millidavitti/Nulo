import React, { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import Section from "../../components/Layout/Section";
import Container from "../../components/Layout/Container";
import user from "../../styles/user.module.css";
import AccountInfo from "../../components/User/AccountInfo";
import Saves from "../../components/User/Saves";
import ChangePassword from "../../components/User/ChangePassword";
import Head from "next/head";

function reducer(state, action) {
	switch (action.type) {
		case "account-info":
			return { ...state, component: { current: action.type } };
		case "saves":
			return { ...state, component: { current: action.type } };
		case "change-password":
			return { ...state, component: { current: action.type } };
		case "billing-info":
			return { ...state, component: { current: action.type } };
		default:
			return state;
	}
}

const components = {
	"account-info": <AccountInfo />,
	saves: <Saves />,
	"change-password": <ChangePassword />,
	"billing-info": <p>Billing Info</p>,
};
const init = {
	component: { current: "" },
};
export default function UserAccount() {
	const router = useRouter();
	const [state, dispatch] = useReducer(reducer, init);
	useEffect(() => {
		dispatch({ type: router.query.path });
	}, [router.query.path]);

	return (
		<>
			<Head>
				<title>User Account</title>
				<link rel='shortcut icon' href='logo.svg' type='image/svg'></link>
			</Head>
			<Section top={140}>
				<Container>
					<nav className={user.tab}>
						<button
							onClick={() => {
								dispatch({ type: "account-info" });
								router.replace("/user/account-info");
							}}
							id='account-info'
							style={{
								borderBottom:
									router.query.path === "account-info"
										? "2px solid #7f7aea"
										: "none",
							}}
						>
							Account Info
						</button>

						<button
							onClick={() => {
								dispatch({ type: "saves" });
								router.replace("/user/saves");
							}}
							id='saves'
							style={{
								borderBottom:
									router.query.path === "saves" ? "2px solid #7f7aea" : "none",
							}}
						>
							Save List
						</button>

						<button
							onClick={() => {
								dispatch({ type: "change-password" });
								router.replace("/user/change-password");
							}}
							style={{
								borderBottom:
									router.query.path === "change-password"
										? "2px solid #7f7aea"
										: "none",
							}}
						>
							Change Password
						</button>

						<button
							onClick={() => {
								dispatch({ type: "billing-info" });
								router.replace("/user/billing-info");
							}}
							style={{
								borderBottom:
									router.query.path === "billing-info"
										? "2px solid #7f7aea"
										: "none",
							}}
						>
							Billing
						</button>
					</nav>
				</Container>
				{components[state.component?.current]}
			</Section>
		</>
	);
}
