import React, { useReducer } from "react";
import HotelCard from "../HotelCard";
import Container from "../Layout/Container";
import ResponsiveGrid from "../Layout/ResponsiveGrid";
import Section from "../Layout/Section";
import TabNav from "../TabNav";
import listings from "../../styles/listings.module.css";
import { imgArray } from "../../utils/helpers";
function reducer(state, action) {
	switch (action.type) {
		case "stays":
			return { ...state, tabs: { current: "stays" } };
		case "experiences":
			return { ...state, tabs: { current: "experiences" } };
		case "cars":
			return { ...state, tabs: { current: "cars" } };
	}
}
const init = {
	tabs: { current: "stays" },
};
export default function Saves() {
	const [state, dispatch] = useReducer(reducer, init);
	return (
		<Section background='var(--grey)'>
			<Container>
				<TabNav>
					<button
						onClick={() => dispatch({ type: "stays" })}
						style={{
							background: state.tabs.current === "stays" ? "#115e59" : "none",
							color: state.tabs.current === "stays" ? "white" : "var(--tabs)",
						}}
					>
						Stays
					</button>
					<button
						onClick={() => dispatch({ type: "experiences" })}
						style={{
							background:
								state.tabs.current === "experiences" ? "#115e59" : "none",
							color:
								state.tabs.current === "experiences" ? "white" : "var(--tabs)",
						}}
					>
						Experiences
					</button>
					<button
						onClick={() => dispatch({ type: "cars" })}
						style={{
							background: state.tabs.current === "cars" ? "#115e59" : "none",
							color: state.tabs.current === "cars" ? "white" : "var(--tabs)",
						}}
					>
						Cars
					</button>
				</TabNav>
				<ResponsiveGrid className={listings.resListings}>
					{imgArray.map((_, key) => (
						<HotelCard data={imgArray} key={key} />
					))}
				</ResponsiveGrid>
			</Container>
		</Section>
	);
}
