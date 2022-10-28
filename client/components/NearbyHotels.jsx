import Image from "next/image";

import SubHeadings from "./SubHeadings";
import home from "../styles/Home.module.css";
import image from "../assets/image.jpg";
export default function NearbyHotels() {
	return (
		<div className={home.nearbyHotel}>
			<Image
				src={image.src}
				width={70}
				height={70}
				style={{ borderRadius: "50%" }}
				alt='cities'
			/>
			<div>
				<SubHeadings>New York</SubHeadings>
				<p>19 minutes</p>
			</div>
		</div>
	);
}
