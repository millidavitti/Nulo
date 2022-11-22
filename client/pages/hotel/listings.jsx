/* eslint-disable @next/next/no-img-element */
import Description from "../../components/Description";
import Headings from "../../components/Headings";
import Container from "../../components/Layout/Container";
import Grid from "../../components/Layout/Grid";
import Section from "../../components/Layout/Section";
import home from "../../styles/Home.module.css";
import listings from "../../styles/listings.module.css";
import image from "../../assets/image.jpg";
import { Close, House, Map } from "../../assets/SVG.config";
import ResponsiveGrid from "../../components/Layout/ResponsiveGrid";
import HotelCard from "../../components/HotelCard";
import NewsLetter from "../../components/NewsLetter";
import Margin from "../../components/Layout/Margin";
import { useReducer } from "react";
import { imgArray } from "../../utils/helpers";
import Head from "next/head";
function reducer(state, action) {
	switch (action.type) {
		case "toggle-filter":
			return { ...state, isFilter: !state.isFilter };
		case "desk-filters":
			return {
				...state,
				deskFilters: state.deskFilters.map((obj) =>
					action.id === obj.id
						? { ...obj, [action.id]: !obj[action.id] }
						: { ...obj, [obj.id]: false },
				),
			};
	}
}
// bbb:  Beds. bedrooms and bathtooms
const init = {
	isFilter: false,
	deskFilters: [
		{ typeofPlace: false, id: "typeofPlace", isApplied: false },
		{ priceRange: false, id: "priceRange", isApplied: false },
		{ bbb: false, id: "bbb", isApplied: false },
	],
	hotelSpec: {
		beds: 0,
		bedrooms: 0,
		bathrooms: 0,
	},
};

export default function Listings() {
	const [state, dispatch] = useReducer(reducer, init);
	return (
		<>
			<Head>
				<title>Hotel Listings</title>
			</Head>
			<Section top={120} background='var(--bg)'>
				<Container className={listings.container}>
					<Grid className={listings.heroGrid}>
						<div className={listings.locationWrap}>
							<Headings fontSize='3rem'>Tokyo, Japan</Headings>
							<Margin topBottom={20}>
								<div className={listings.locationProperties}>
									<Description>
										<span>
											<Map size={20} />
										</span>
										Japan
									</Description>
									<Description>
										<span>
											<House size={20} />
										</span>
										112 properties
									</Description>
								</div>
							</Margin>
						</div>
						<Grid rows={12} gap='20px' className={listings.mansory}>
							<img
								src='https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
								className={home.img1}
							/>
							<img
								src='https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
								className={home.img2}
							/>
							<img
								src='https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
								className={home.img3}
							/>
						</Grid>
					</Grid>
					<div className='circle'></div>
					<div className='circle-2'></div>
				</Container>
				<Section>
					<Container>
						<Headings>Stays in Tokyo</Headings>
						<p className={listings.summary}>
							233 stays
							<span></span>
							Aug 12 - 18
							<span></span>2 Guests
						</p>
						{/*SECTION Desk filters */}
						<div className={listings.filters}>
							<div className={listings.deskFilters}>
								<button
									className={listings.morefiltersBtn}
									onClick={() =>
										dispatch({ type: "desk-filters", id: "typeofPlace" })
									}
								>
									Type of place
								</button>
								<div
									className={listings.filterModal}
									style={{
										opacity: state.deskFilters[0].typeofPlace ? "1" : "0",
										pointerEvents: state.deskFilters[0].typeofPlace
											? "unset"
											: "none",
									}}
								>
									<form className={listings.filterCheckBoxes}>
										<div>
											<input type='checkbox' id='entire place' />
											<label htmlFor='entire place'> Entire place</label>
										</div>
										<div>
											<input type='checkbox' id='entire place' />
											<label htmlFor='entire place'> Entire place</label>
										</div>
										<div>
											<input type='checkbox' id='entire place' />
											<label htmlFor='entire place'> Entire place</label>
										</div>
										<div>
											<input type='checkbox' id='entire place' />
											<label htmlFor='entire place'> Entire place</label>
										</div>
									</form>
									<div className={listings.clearApply}>
										<button type='button'>Clear</button>
										<button type='button'>Apply</button>
									</div>
								</div>
							</div>
							<div className={listings.deskFilters}>
								<button
									className={listings.morefiltersBtn}
									onClick={() =>
										dispatch({ type: "desk-filters", id: "priceRange" })
									}
								>
									$0 -$1000
								</button>
								<div
									className={listings.filterModal}
									style={{
										opacity: state.deskFilters[1].priceRange ? "1" : "0",
										pointerEvents: state.deskFilters[1].priceRange
											? "unset"
											: "none",
									}}
								>
									<form className={listings.priceRange}>
										<input type='range' id='price-range' min={0} max={99999} />
										<div className={listings.priceMinMax}>
											<div>
												<label htmlFor='min'>Min price</label>
												<div className={listings.min}>
													<span>$</span>
													<input type='number' id='min' />
												</div>
											</div>
											<div>
												<label htmlFor='max'>Max price</label>
												<div className={listings.max}>
													<span>$</span>
													<input type='number' id='max' />
												</div>
											</div>
										</div>
									</form>
									<div className={listings.clearApply}>
										<button type='button'>Clear</button>
										<button type='button'>Apply</button>
									</div>
								</div>
							</div>
							{/* Filter Modal Room Pick */}
							<div className={listings.deskFilters}>
								<button
									className={listings.morefiltersBtn}
									onClick={() => dispatch({ type: "desk-filters", id: "bbb" })}
								>
									BBB
								</button>
								<div
									className={listings.filterModal}
									style={{
										opacity: state.deskFilters[2].bbb ? "1" : "0",
										pointerEvents: state.deskFilters[2].bbb ? "unset" : "none",
									}}
								>
									<div className={listings.roomPicks}>
										{/* Beds */}
										<div className={listings.roomPick}>
											<div className={listings.guestPickLabel}>
												<p>Beds</p>
											</div>
											<div className={listings.roomPickCount}>
												<span
													onClick={(e) => {
														e.stopPropagation();
														dispatch({
															type: "bed-rooms-baths",
															action: "decrement",
															guest: "beds",
														});
													}}
												>
													-
												</span>
												<span>{state.hotelSpec.beds}</span>
												<span
													onClick={(e) => {
														e.stopPropagation();
														dispatch({
															type: "bed-rooms-baths",
															action: "increment",
															guest: "beds",
														});
													}}
												>
													+
												</span>
											</div>
										</div>
										{/* Bedrooms */}
										<div className={listings.roomPick}>
											<div className={listings.guestPickLabel}>
												<p>Bedrooms</p>
											</div>
											<div className={listings.roomPickCount}>
												<span
													onClick={(e) => {
														e.stopPropagation();
														dispatch({
															type: "bed-rooms-baths",
															action: "decrement",
															guest: "bedrooms",
														});
													}}
												>
													-
												</span>
												<span>{state.hotelSpec.bedrooms}</span>
												<span
													onClick={(e) => {
														e.stopPropagation();

														dispatch({
															type: "bed-rooms-baths",
															action: "increment",
															guest: "bedrooms",
														});
													}}
												>
													+
												</span>
											</div>
										</div>
										{/* Bathrooms */}
										<div className={listings.roomPick}>
											<div className={listings.guestPickLabel}>
												<p>Bathrooms</p>
											</div>
											<div className={listings.roomPickCount}>
												<span
													onClick={(e) => {
														e.stopPropagation();

														dispatch({
															type: "bed-rooms-baths",
															action: "decrement",
															guest: "baths",
														});
													}}
												>
													-
												</span>
												<span>{state.hotelSpec.bathrooms}</span>
												<span
													onClick={(e) => {
														e.stopPropagation();

														dispatch({
															type: "bed-rooms-baths",
															action: "increment",
															guest: "baths",
														});
													}}
												>
													+
												</span>
											</div>
										</div>
									</div>
									<div className={listings.clearApply}>
										<button type='button'>Clear</button>
										<button type='button'>Apply</button>
									</div>
								</div>
							</div>
							<button
								className={listings.morefiltersBtn}
								onClick={() => dispatch({ type: "toggle-filter" })}
							>
								More Filters (3)
							</button>
						</div>
						<ResponsiveGrid className={listings.resListings}>
							{imgArray.map((_, key) => (
								<HotelCard data={imgArray} key={key} />
							))}
						</ResponsiveGrid>
					</Container>
				</Section>
				<NewsLetter />
			</Section>
			{/* Filters */}
			<div
				className={listings.overlay}
				id='overlay'
				onClick={(e) => {
					if (
						e.target.closest("span")?.id === "close" ||
						e.target?.id === "overlay"
					)
						dispatch({ type: "toggle-filter" });
				}}
				style={{
					opacity: state.isFilter ? "1" : "0",
					pointerEvents: state.isFilter ? "unset" : "none",
				}}
			>
				<Container className={listings.filtersContainer}>
					<div
						className={listings.moreFilters}
						style={{
							opacity: state.isFilter ? "1" : "0.5",
							translate: state.isFilter ? "0" : "0 50px",
						}}
					>
						<div className={listings.filterClose}>
							<span id='close'>
								<Close size={20} fill='var(--headers)' strokeWidth={0.5} />
							</span>
							<h2>More filters</h2>
						</div>
						{/* Filters wrap */}
						<div>
							<div className={listings.typeofPlaceFilter}>
								{/* Type of Place */}
								<h3 className={listings.filterType}>Type of Place</h3>
								<form className={listings.filterCheckBoxes}>
									<div>
										<input type='checkbox' id='entire place' />
										<label htmlFor='entire place'> Entire place</label>
									</div>
									<div>
										<input type='checkbox' id='entire place' />
										<label htmlFor='entire place'> Entire place</label>
									</div>
									<div>
										<input type='checkbox' id='entire place' />
										<label htmlFor='entire place'> Entire place</label>
									</div>
									<div>
										<input type='checkbox' id='entire place' />
										<label htmlFor='entire place'> Entire place</label>
									</div>
								</form>
							</div>
							<div className={listings.priceRangeFilter}>
								{/* Type of Place */}
								<h3 className={listings.filterType}>Type of Place</h3>
								<form className={listings.priceRange}>
									<input type='range' id='price-range' min={0} max={99999} />
									<div className={listings.priceMinMax}>
										<div>
											<label htmlFor='min'>Min price</label>
											<div className={listings.min}>
												<span>$</span>
												<input type='number' id='min' />
											</div>
										</div>
										<div>
											<label htmlFor='max'>Max price</label>
											<div className={listings.max}>
												<span>$</span>
												<input type='number' id='max' />
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className={listings.roomsPickFilter}>
								<h3 className={listings.filterType}>
									Beds, Bedrooms and Bathroom
								</h3>
								<div className={listings.roomPicks}>
									{/* Beds */}
									<div className={listings.roomPick}>
										<div className={listings.guestPickLabel}>
											<p>Beds</p>
										</div>
										<div className={listings.roomPickCount}>
											<span
												onClick={(e) => {
													e.stopPropagation();
													dispatch({
														type: "bed-rooms-baths",
														action: "decrement",
														guest: "beds",
													});
												}}
											>
												-
											</span>
											<span>{state.hotelSpec.beds}</span>
											<span
												onClick={(e) => {
													e.stopPropagation();
													dispatch({
														type: "bed-rooms-baths",
														action: "increment",
														guest: "beds",
													});
												}}
											>
												+
											</span>
										</div>
									</div>
									{/* Bedrooms */}
									<div className={listings.roomPick}>
										<div className={listings.guestPickLabel}>
											<p>Bedrooms</p>
										</div>
										<div className={listings.roomPickCount}>
											<span
												onClick={(e) => {
													e.stopPropagation();
													dispatch({
														type: "bed-rooms-baths",
														action: "decrement",
														guest: "bedrooms",
													});
												}}
											>
												-
											</span>
											<span>{state.hotelSpec.bedrooms}</span>
											<span
												onClick={(e) => {
													e.stopPropagation();

													dispatch({
														type: "bed-rooms-baths",
														action: "increment",
														guest: "bedrooms",
													});
												}}
											>
												+
											</span>
										</div>
									</div>
									{/* Bathrooms */}
									<div className={listings.roomPick}>
										<div className={listings.guestPickLabel}>
											<p>Bathrooms</p>
										</div>
										<div className={listings.roomPickCount}>
											<span
												onClick={(e) => {
													e.stopPropagation();

													dispatch({
														type: "bed-rooms-baths",
														action: "decrement",
														guest: "baths",
													});
												}}
											>
												-
											</span>
											<span>{state.hotelSpec.bathrooms}</span>
											<span
												onClick={(e) => {
													e.stopPropagation();

													dispatch({
														type: "bed-rooms-baths",
														action: "increment",
														guest: "baths",
													});
												}}
											>
												+
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className={listings.amenitiesFilter}>
								{/* Type of Place */}
								<h3 className={listings.filterType}>Amenities</h3>
								<form className={listings.filterCheckBoxes}>
									<div>
										<input type='checkbox' id='kitchen' />
										<label htmlFor='kitchen'>Kitchen</label>
									</div>
									<div>
										<input type='checkbox' id='wifi' />
										<label htmlFor='wifi'> Wifi</label>
									</div>
									<div>
										<input type='checkbox' id='air-conditioner' />
										<label htmlFor='air-conditioner'>Air conditioner</label>
									</div>
									<div>
										<input type='checkbox' id='fireplace' />
										<label htmlFor='fireplace'> Indoor fireplace</label>
									</div>
									<div>
										<input type='checkbox' id='heating' />
										<label htmlFor='heating'> Heating</label>
									</div>
									<div>
										<input type='checkbox' id='breakfast' />
										<label htmlFor='breakfast'> Breakfast</label>
									</div>
									<div>
										<input type='checkbox' id='dryer' />
										<label htmlFor='dryer'> Dryer</label>
									</div>
									<div>
										<input type='checkbox' id='hair-dryer' />
										<label htmlFor='hair-dryer'> Hair dryer</label>
									</div>
									<div>
										<input type='checkbox' id='washer' />
										<label htmlFor='washer'> Washer</label>
									</div>
									<div>
										<input type='checkbox' id='workspace' />
										<label htmlFor='workspace'> Workspace</label>
									</div>
								</form>
							</div>
							<div className={listings.propTypeFilter}>
								{/* Property Type */}
								<h3 className={listings.filterType}>Property Type</h3>
								<form className={listings.filterCheckBoxes}>
									<div>
										<input type='checkbox' id='House' />
										<label htmlFor='House'>House</label>
									</div>
									<div>
										<input type='checkbox' id='Chalet' />
										<label htmlFor='Chalet'> Chalet</label>
									</div>
									<div>
										<input type='checkbox' id='condo' />
										<label htmlFor='condo'>Condo</label>
									</div>
									<div>
										<input type='checkbox' id='Apartment' />
										<label htmlFor='Apartment'> Apartment</label>
									</div>
									<div>
										<input type='checkbox' id='Cottage' />
										<label htmlFor='Cottage'> Cottage</label>
									</div>
									<div>
										<input type='checkbox' id='Boutique' />
										<label htmlFor='Boutique'> Boutique</label>
									</div>
									<div>
										<input type='checkbox' id='Guest suite' />
										<label htmlFor='Guest suite'> Guest suite</label>
									</div>
									<div>
										<input type='checkbox' id='Bungalow' />
										<label htmlFor='Bungalow'> Bungalow</label>
									</div>
									<div>
										<input type='checkbox' id='Guesthouse' />
										<label htmlFor='Guesthouse'> Guesthouse</label>
									</div>
								</form>
							</div>
						</div>
						{/* Clear and Apply */}
						<div className={listings.clearApply}>
							<button type='button'>Clear</button>
							<button type='button'>Apply</button>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

function list() {
	return (
		<>
			<HotelCard />
		</>
	);
}
