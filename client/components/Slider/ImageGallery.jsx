/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import {
	ChevronLeftArrow,
	ChevronRightArrow,
	Close,
} from "../../assets/SVG.config";
import imageGallery from "../../styles/imageGallery.module.css";
import image from "../../assets/image.jpg";
import Section from "../Layout/Section";
import Container from "../Layout/Container";

export default function ImageGallery({ state, dispatch }) {
	const gallerySlide = useRef();
	const gallery = useRef();
	const ff = useRef(state.gallery.firstFour);
	const nodes = gallerySlide.current?.childNodes.length;
	useEffect(() => {
		const width = gallery.current.getBoundingClientRect().width;
		gallerySlide.current.style.transform = `translateX(-${
			state.gallery.index * width
		}px)`;
	});

	return (
		<div
			className={imageGallery.imageGallery}
			ref={gallery}
			style={{ display: state.gallery.isShown ? "initial" : "none" }}
		>
			<span onClick={() => dispatch({ type: "hide gallery" })}>
				<Close size={30} fill='white' strokeWidth={0.5} />
			</span>
			<p className={imageGallery.count}>
				<span>{state.gallery.index + 1}</span>/{nodes}
			</p>
			<div className={imageGallery.gallerySlide} ref={gallerySlide}>
				<img
					src={ff.current.one}
					alt='rooms'
					className={imageGallery.galleryImg}
				/>
				<img
					src={ff.current.two}
					alt='rooms'
					className={imageGallery.galleryImg}
				/>
				<img
					src={ff.current.three}
					alt='rooms'
					className={imageGallery.galleryImg}
				/>
				<img
					src={ff.current.four}
					alt='rooms'
					className={imageGallery.galleryImg}
				/>
				{ff.current.others.map((link, key) => (
					<img
						key={key}
						src={link}
						alt='rooms'
						className={imageGallery.galleryImg}
					/>
				))}
			</div>
			<nav className={imageGallery.nav}>
				<span
					onClick={() => {
						if (state.gallery.index) dispatch({ type: "previous" });
					}}
				>
					<ChevronLeftArrow size={10} fill=' var(--outline)' />
				</span>
				<span
					onClick={() => {
						if (state.gallery.index + 1 === nodes)
							dispatch({ type: "resetIndex" });
						else dispatch({ type: "next" });
					}}
				>
					<ChevronRightArrow size={10} fill=' var(--outline)' />
				</span>
			</nav>
		</div>
	);
}
