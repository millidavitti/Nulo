/* eslint-disable @next/next/no-img-element */
import React, { useReducer, useRef, useEffect } from "react";
import {
	ChevronLeftArrow,
	ChevronRightArrow,
	Heart,
} from "../../assets/SVG.config";
import image from "../../assets/image.jpg";
import cardSlider from "../../styles/cardSlider.module.css";

function reducer(state, action) {
	switch (action.type) {
		case "next":
			return { ...state, index: state.index + 1 };
		case "previous":
			return { ...state, index: state.index - 1 };
		case "reset":
			return { ...state, index: 0 };
		case "last":
			return { ...state, index: action.last };
		case "bookmark":
			return { ...state, bookmark: !state.bookmark };
	}
}

const init = {
	index: 0,
	bookmark: false,
};
export default function CardSlider({ hotelImgs }) {
	const slide = useRef();
	const card = useRef();
	const nodes = slide.current?.childNodes.length;
	const [state, dispatch] = useReducer(reducer, init);

	useEffect(() => {
		const width = card.current.getBoundingClientRect().width;
		slide.current.style.transform = `translateX(-${state.index * width}px)`;
		const cb = () => {
			const width = card.current.getBoundingClientRect().width;
			slide.current.style.transform = `translateX(-${state.index * width}px)`;
		};
		window.addEventListener("resize", cb);
		return () => {
			window.removeEventListener("resize", cb);
		};
	});

	function foward() {
		if (state.index + 1 === nodes) dispatch({ type: "reset" });
		else dispatch({ type: "next" });
	}
	function back() {
		if (!state.index) dispatch({ type: "last", last: nodes - 1 });
		else dispatch({ type: "previous" });
	}

	return (
		<div className={cardSlider.cardSlider} ref={card}>
			<div className={cardSlider.discountBookmark}>
				<span className={cardSlider.discount}>-10% today</span>
				<span
					className={cardSlider.bookmark}
					onClick={() => dispatch({ type: "bookmark" })}
				>
					<Heart
						size={22}
						stroke='#fff'
						strokeWidth={15}
						fill={state.bookmark ? "white" : "none"}
					/>
				</span>
			</div>
			<span className={cardSlider.left} onClick={back}>
				<ChevronLeftArrow
					size={15}
					stroke='var(--headers)'
					strokeWidth={0.01}
				/>
			</span>
			<span className={cardSlider.right} onClick={foward}>
				<ChevronRightArrow size={15} />
			</span>
			<div className={cardSlider.cardSlide} ref={slide}>
				{hotelImgs.map((link, key) => (
					<img key={key} src={link} alt='' />
				))}
			</div>
		</div>
	);
}
