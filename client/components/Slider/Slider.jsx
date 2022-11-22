import React, { useRef, useReducer, useEffect } from "react";
import slider from "../../styles/slider.module.css";
import { ChevronLeftArrow, ChevronRightArrow } from "../../assets/SVG.config";
import { cityImgs, observingNode } from "../../utils/helpers";
import Slide from "./Slide";
import { useState } from "react";
import Link from "next/link";

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
	}
}

const init = {
	index: 0,
};

export default function Slider({ data }) {
	const slide = useRef();
	const slideRef = useRef();
	const root = useRef();
	const nodes = slide.current?.childNodes.length;
	const [state, dispatch] = useReducer(reducer, init);
	const [isLast, setIsLast] = useState();
	const observerFn = (entries) => {
		const [entry] = entries;
		setIsLast(entry.isIntersecting);
	};

	useEffect(() => {
		slide.current.style.transform = `translateX(-${state.index * 270}px)`;
	});

	useEffect(() => {
		const slide = slideRef.current;
		const observer = new IntersectionObserver(observerFn, {
			root: root.current,
			threshold: 1,
		});
		observer.observe(slide);
		return () => {
			observer.unobserve(slide);
		};
	}, []);

	function foward() {
		if (isLast) dispatch({ type: "reset" });
		else dispatch({ type: "next" });
	}
	function back() {
		if (!state.index) dispatch({ type: "last", last: nodes - 1 });
		else dispatch({ type: "previous" });
	}

	return (
        <div className={slider.slideWrap}>
			<div className={slider.navBtns}>
				<span onClick={back}>
					<ChevronLeftArrow size={15} stroke='var(--headers)' />
				</span>
				<span onClick={foward}>
					<ChevronRightArrow size={15} stroke='var(--headers)' />
				</span>
			</div>
			<div className={slider.slider} ref={root}>
				<div className={slider.slideRack} ref={slide}>
					{data.map((link, key, arr) =>
						key + 1 === arr.length ? (
							(<Link href='/hotel/listings' key={key}>

                                <Slide url={link} ref={slideRef} />

                            </Link>)
						) : (
							(<Link href='/hotel/listings' key={key}>

                                <Slide url={link} />

                            </Link>)
						),
					)}
				</div>
			</div>
		</div>
    );
}
