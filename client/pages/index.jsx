/* eslint-disable @next/next/no-img-element */
// CSS
import home from "../styles/Home.module.css";

// SVG
import Dubai from "../assets/illustrations/Dubai-rafiki.svg";
import Watermelon from "../assets/illustrations/Watermelon-rafiki.svg";
import Agra from "../assets/illustrations/Agra-rafiki.svg";
import Passport from "../assets/illustrations/Health passport-rafiki.svg";

import Section from "../components/Layout/Section";
import Container from "../components/Layout/Container";
import Grid from "../components/Layout/Grid";
import Margin from "../components/Layout/Margin";
import Slider from "../components/Slider/Slider";
import Headings from "../components/Headings";
import Description from "../components/Description";
import SubHeadings from "../components/SubHeadings";
import HotelCard from "../components/HotelCard";
import ResponsiveGrid from "../components/Layout/ResponsiveGrid";
import SVGFrame from "../components/Layout/SVGFrame";
import NearbyHotels from "../components/NearbyHotels";
import TabNav from "../components/TabNav";
import NewsLetter from "../components/NewsLetter";
import { cityImgs, imgArray, stays } from "../utils/helpers";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Nulo Hotels</title>
			</Head>
			<Section top={140} background='var(--bg)'>
				<Container>
					<Grid className={home.heroGrid}>
						<div className={home.hero}>
							<h1>Hotel, car & experiences</h1>
							<Margin>
								<Description>
									Accompanying us, you have a trip full of experiences. With
									Nulo, booking accommodation, resort villas, hotels
								</Description>
							</Margin>
							<button>Start your search</button>
						</div>
						{/* Mansory */}
						<Grid rows={12} className={home.mansory}>
							<img
								src='https://images.pexels.com/photos/33622/fashion-model-beach-hat.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
								className={home.img1}
							/>
							<img
								src='https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=400'
								alt=''
								className={home.img2}
							/>
							<img
								src='https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=400'
								alt=''
								className={home.img3}
							/>
						</Grid>
					</Grid>
					<div className='circle'></div>
					<div className='circle-2'></div>
				</Container>
			</Section>
			{/* Travel Location */}
			<Section background='var(--bg)'>
				<Container>
					<div className={home.city}>
						<Headings>Travel City Locations</Headings>
						<Description>Top cities by volume</Description>
					</div>
					<Slider data={cityImgs} />
				</Container>
			</Section>
			{/* Why Us */}
			<Section background='var(--bg)'>
				<Container>
					<Grid className={home.whyUsGrid}>
						<Dubai />
						<div className={home.whyUs}>
							<Headings>Why Nulo?</Headings>
							<Margin>
								<div className={home.content}>
									<span className={home.label}>Instant Booking</span>
									<SubHeadings>Make Bookings on the fly</SubHeadings>
									<Description>
										We value our customers time. So, every interaction with our
										app brings you on step closer to booking a room at the hotel
										of your choice
									</Description>
								</div>
								<div className={home.content}>
									<span className={home.label}>Exposure</span>
									<SubHeadings>Reach millions with Nulo</SubHeadings>
									<Description>
										Millions of people are searching for unique places to stay
										around the world
									</Description>
								</div>
								<div className={home.content}>
									<span className={home.label}>Secure</span>
									<SubHeadings>Secure and simple</SubHeadings>
									<Description>
										A Holiday Lettings listing gives you a secure and easy way
										to take bookings and payments online
									</Description>
								</div>
							</Margin>
						</div>
					</Grid>
				</Container>
			</Section>
			{/* Featured Places */}
			<Section background='var(--bgd)' topBottom={100}>
				<Container>
					<div>
						<Headings>Featured places to stay</Headings>
						<Description>
							Popular places tostay that Nulo recommends for you
						</Description>
					</div>
					<Margin>
						<TabNav>
							<button>New York</button>
							<button>Tokyo</button>
							<button>Paris</button>
							<button>London</button>
						</TabNav>
						<div className={home.featured}>
							<ResponsiveGrid min={240}>
								{imgArray.map((_, key) => (
									<HotelCard data={imgArray} key={key} />
								))}
							</ResponsiveGrid>
							<button className={home.loadMore}>
								<span>SPN</span> Load More
							</button>
						</div>
					</Margin>
				</Container>
			</Section>
			{/* How it works */}
			<Section background='var(--bg)'>
				<Container>
					<Headings textAlign='center'>How it works</Headings>
					<Description textAlign='center'>Keep calm & travel on</Description>
					<ResponsiveGrid className={home.howItWorks}>
						<div>
							<SVGFrame size={200} margin='0 auto'>
								<Watermelon />
							</SVGFrame>
							<SubHeadings textAlign='center'>Book & Relax</SubHeadings>
							<Description textAlign='center'>
								Let each trip b an inspirational journey, each room a peaceful
								space
							</Description>
						</div>
						<div>
							<SVGFrame size={200} margin='0 auto'>
								<Passport />
							</SVGFrame>
							<SubHeadings textAlign='center'>Smart Checklist</SubHeadings>
							<Description textAlign='center'>
								Let each trip b an inspirational journey, each room a peaceful
								space
							</Description>
						</div>
						<div>
							<SVGFrame size={200} margin='0 auto'>
								<Agra />
							</SVGFrame>
							<SubHeadings textAlign='center'>
								Have Fun & Make Memories
							</SubHeadings>
							<Description textAlign='center'>
								Let each trip b an inspirational journey, each room a peaceful
								space
							</Description>
						</div>
					</ResponsiveGrid>
				</Container>
			</Section>
			{/* News Letter */}
			<Section background='var(--bgd)'>
				<NewsLetter />
			</Section>
			{/* Explore Nearby */}
			<Section background='var(--bg)'>
				<Container>
					<Headings textAlign='center'>Explore Nearby</Headings>
					<Description textAlign='center'>
						Discovers great places near you
					</Description>
					<Margin>
						<ResponsiveGrid min={240}>
							<NearbyHotels />
							<NearbyHotels />
							<NearbyHotels />
							<NearbyHotels />
							<NearbyHotels />
						</ResponsiveGrid>
					</Margin>
				</Container>
			</Section>
			{/* Explore by type of stays */}
			<Section background='var(--bgd)'>
				<Container>
					<Headings>Exlpore by types of stays</Headings>
					<Description>Explore house based on 10 types of stays</Description>
					<Slider data={stays} />
				</Container>
			</Section>
		</>
	);
}
