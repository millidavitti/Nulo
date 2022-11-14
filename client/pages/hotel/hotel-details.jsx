/* eslint-disable @next/next/no-img-element */
import { useEffect, useReducer, useRef } from "react";
import Section from "../../components/Layout/Section";
import Container from "../../components/Layout/Container";
import Margin from "../../components/Layout/Margin";
import Grid from "../../components/Layout/Grid";
import Availability from "../../components/Widgets/Calendar";
import Headings from "../../components/Headings";
import Description from "../../components/Description";
/*prettier-ignore */
import {Dot,Heart,	LocationPin,	Star,	RightArrow,	Bathtub,	Bed,	Guest,	Roomdoor, Calendar} from "../../assets/SVG.config";
import image from "../../assets/image.jpg";
import hotelDetails from "../../styles/hotelDetails.module.css";
import home from "../../styles/Home.module.css";
import ConfirmationModal from "../../components/ConfirmationModal";
import ImageGallery from "../../components/Slider/ImageGallery";
import Link from "next/link";
import { useContext } from "react";
import AppCtx from "../../utils/AppContext";
import { bookedDays, imgArray, rand } from "../../utils/helpers";
import { random } from "lodash";
import Head from "next/head";
/*prettier-ignore */
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
function reducer(state, action) {
	switch (action.type) {
		case "confirmation":
			return {
				...state,
				modals: { ...state.modals, confirm: !state.modals.confirm },
			};
		case "priceSummary":
			return {
				...state,
				modals: { ...state.modals, summary: !state.modals.summary },
			};
		case "show gallery":
			return { ...state, gallery: { index: action.imgIndex, isShown: true } };
		case "hide gallery":
			return { ...state, gallery: { index: 0, isShown: false } };
		case "next":
			return {
				...state,
				gallery: { ...state.gallery, index: state.gallery.index + 1 },
			};
		case "previous":
			return {
				...state,
				gallery: { ...state.gallery, index: state.gallery.index - 1 },
			};
		case "resetIndex":
			return {
				...state,
				gallery: { ...state.gallery, index: 0 },
			};
	}
}
const init = {
	modals: { confirm: false, summary: false },
	gallery: {
		index: 0,
		isShown: false,
		firstFour: {
			one: imgArray[2],
			two: imgArray[4],
			three: imgArray[1],
			four: imgArray[3],
			others: imgArray.slice(7),
		},
	},
};

export default function HotelDetails() {
	const [state, dispatch] = useReducer(reducer, init);
	const [stateCtx] = useContext(AppCtx);
	const ff = useRef(state.gallery.firstFour);
	useEffect(() => {
		const doc = document.documentElement;
		doc.style.overflow = state.modals.confirm ? "hidden" : "initial";
	}, [state.modals.confirm]);
	return <>
        <Head>
            <title>Hotel Details</title>
        </Head>
        <Section top={100}>
            <Container className={hotelDetails.container}>
                {/* Hotel Photos */}
                <div className={hotelDetails.imgGrid}>
                    <div
                        className={hotelDetails.leftImg}
                        onClick={() => dispatch({ type: "show gallery", imgIndex: 0 })}
                    >
                        <div className={hotelDetails.imgOverlay}></div>
                        <img src={ff.current.one} alt='rooms' />
                    </div>
                    <div
                        className={hotelDetails.topImg}
                        onClick={() => dispatch({ type: "show gallery", imgIndex: 1 })}
                    >
                        <div className={hotelDetails.imgOverlay}></div>
                        <img src={ff.current.two} alt='rooms' />
                    </div>
                    <div
                        className={hotelDetails.midImg}
                        onClick={() => dispatch({ type: "show gallery", imgIndex: 2 })}
                    >
                        <div className={hotelDetails.imgOverlay}></div>
                        <img src={ff.current.three} alt='rooms' />
                    </div>
                    <div
                        className={hotelDetails.bottomImg}
                        onClick={() => dispatch({ type: "show gallery", imgIndex: 3 })}
                    >
                        <div className={hotelDetails.imgOverlay}></div>
                        <img src={ff.current.four} alt='rooms' />
                    </div>
                </div>
                {/* Hotel type */}
                <Grid className={hotelDetails.grid}>
                    <div className={hotelDetails.left}>
                        <div className={hotelDetails.hotelTypeWrap}>
                            <div className={hotelDetails.hotelType}>
                                <span>Wooden House</span>
                                <Heart size={20} stroke='#000' fill='none' strokeWidth={19} />
                            </div>
                            <Headings fontSize='1.4rem'>
                                Beach House in Collingwood
                            </Headings>
                            {/* Rating and Location */}
                            <div className={hotelDetails.ratingLocation}>
                                <p className={hotelDetails.rating}>
                                    <span>
                                        <Star size={15} fill='crimson' />
                                    </span>
                                    4.5 (112)
                                </p>
                                <Dot size={4} fill='var(--descriptions)' />
                                <p>
                                    <span>
                                        <LocationPin size={20} />
                                    </span>
                                    Tokyo, Japan
                                </p>
                            </div>
                            {/*Host  */}
                            <div className={hotelDetails.host}>
                                <img src={image.src} alt='' />
                                <p>
                                    Hosted by <span>Kevin Francis</span>
                                </p>
                            </div>
                            {/* Hotel Specs */}
                            <div className={hotelDetails.hotelSpecs}>
                                <span>
                                    <Bathtub size={20} stroke='var(--headers)' />
                                </span>

                                <span>
                                    <Bed size={30} stroke='var(--headers)' strokeWidth={0.7} />
                                </span>
                                <span>
                                    <Guest size={25} stroke='var(--headers)' strokeWidth={16} />
                                </span>
                                <span>
                                    <Roomdoor
                                        size={20}
                                        strokeWidth={0.5}
                                        stroke='var(--headers)'
                                    />
                                </span>
                            </div>
                        </div>
                        {/* Stay Information */}
                        <div className={hotelDetails.stayInfo}>
                            <Headings fontSize='1.4rem'>Stay information</Headings>
                            <hr className={hotelDetails.hrShort} />
                            <Description fontSize='1.1rem'>
                                Providing lake views, The Symphony 9 Tam Coc in Ninh Binh
                                provides accommodation, an outdoor swimming pool, a bar, a
                                shared lounge, a garden and barbecue facilities. Complimentary
                                WiFi is provided.
                                <br></br>
                                <br></br>
                                There is a private bathroom with bidet in all units, along
                                with a hairdryer and free toiletries.
                                <br></br>
                                <br></br>
                                The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental
                                service and a car rental service are available at the
                                accommodation, while cycling can be enjoyed nearby.
                            </Description>
                            <hr className={hotelDetails.hr} />
                        </div>
                        {/* Amenities */}
                        <div className={hotelDetails.amenities}>
                            <Headings fontSize='1.4rem'>Amenities</Headings>
                            <Margin topBottom={10}>
                                <Description fontSize='1.1rem'>
                                    {`About the property's amenities and services`}
                                </Description>
                            </Margin>
                            <hr className={hotelDetails.hrShort} />
                            <div className={hotelDetails.icons}>
                                <p>
                                    <span>
                                        <Bathtub size={20} stroke='var(--headers)' />
                                    </span>{" "}
                                    Bathtub
                                </p>
                                <p>
                                    <span>
                                        <Bed
                                            size={30}
                                            stroke='var(--headers)'
                                            strokeWidth={0.7}
                                        />
                                    </span>{" "}
                                    Beds
                                </p>
                                <p>
                                    <span>
                                        <Guest
                                            size={25}
                                            stroke='var(--headers)'
                                            strokeWidth={16}
                                        />
                                    </span>{" "}
                                    Guest
                                </p>
                                <p>
                                    <span>
                                        <Roomdoor
                                            size={20}
                                            strokeWidth={0.5}
                                            stroke='var(--headers)'
                                        />
                                    </span>{" "}
                                    Bedrooms
                                </p>
                            </div>
                            <hr className={hotelDetails.hrShort} />
                            <button className={hotelDetails.showMore}>View more</button>
                        </div>
                        <hr className={hotelDetails.hr} />
                        {/* Room Rates */}
                        <div className={hotelDetails.roomRates}>
                            <Headings fontSize='1.4rem'>Room Rates</Headings>
                            <Margin topBottom={20}>
                                <Description fontSize='1.1rem'>
                                    Prices may increase on weekends or holidays
                                </Description>
                            </Margin>
                            <hr className={hotelDetails.hrShort} />
                            <div className={hotelDetails.rates}>
                                <div>
                                    <p>Monday - Thursday</p>
                                    <p>$199</p>
                                </div>
                                <div>
                                    <p>Monday - Thursday</p>
                                    <p>$199</p>
                                </div>
                                <div>
                                    <p>Monday - Thursday</p>
                                    <p>$199</p>
                                </div>
                            </div>
                            <hr className={hotelDetails.hr} />
                        </div>
                        {/* Availability */}
                        <div className={hotelDetails.availability} id='calendar'>
                            <Headings fontSize='1.4rem'>Availability</Headings>
                            <Margin topBottom={20}>
                                <Description fontSize='1.1rem'>
                                    Prices may increase on weekends or holidays
                                </Description>
                            </Margin>
                            <hr className={hotelDetails.hrShort} />
                            {/* SECTION Availability */}
                            <Availability />
                            <hr className={hotelDetails.hr} />
                        </div>
                        {/* Host Info */}
                        <div className={hotelDetails.hostInfo}>
                            <Headings fontSize='1.4rem'>Host Information</Headings>
                            <hr className={hotelDetails.hrShort} />
                            <div className={hotelDetails.hostRatings}>
                                <img src={image.src} alt='' />
                                <div>
                                    <p className={hotelDetails.hostedBy}>Kevin Francis</p>
                                    <Margin top={5}>
                                        <p className={hotelDetails.rating}>
                                            <span>
                                                <Star size={20} fill='crimson' />
                                            </span>
                                            4.5 (112)
                                        </p>
                                    </Margin>
                                </div>
                            </div>
                            <hr className={hotelDetails.hr} />
                        </div>
                        {/* Reviews */}
                        <div className={hotelDetails.reviews}>
                            <Headings fontSize='1.4rem'>Reviews (23 reviews)</Headings>
                            <hr className={hotelDetails.hrShort} />
                            <div className={hotelDetails.reviewStars}>
                                <Star size={20} fill='crimson' />
                                <Star size={20} fill='crimson' />
                                <Star size={20} fill='crimson' />
                                <Star size={20} fill='crimson' />
                                <Star size={20} fill='crimson' />
                            </div>
                            <form className={hotelDetails.customerTextReview}>
                                <input
                                    type='text'
                                    name='review'
                                    className={home.email}
                                    placeholder='Share your thoughts...'
                                />
                                <button type='submit'>
                                    <RightArrow size={25} fill='white' strokeWidth={15} />
                                </button>
                            </form>
                            <div className={hotelDetails.review}>
                                <img
                                    src={image.src}
                                    alt=''
                                    className={hotelDetails.customerAvatar}
                                />
                                <div className={hotelDetails.customerReview}>
                                    <div className={hotelDetails.customer}>
                                        <div className={hotelDetails.customerName}>
                                            <h3>Cody Fisher</h3>
                                            <p>May 20, 2021</p>
                                        </div>
                                        <div className={hotelDetails.customerRating}>
                                            <Star size={15} fill='crimson' />
                                            <Star size={15} fill='crimson' />
                                            <Star size={15} fill='crimson' />
                                            <Star size={15} fill='crimson' />
                                            <Star size={15} fill='crimson' />
                                        </div>
                                    </div>
                                    <Description>
                                        Providing lake views, The Symphony 9 Tam Coc in Ninh Binh
                                        provides accommodation, an outdoor swimming pool, a bar, a
                                        shared lounge, a garden and barbecue facilities...
                                    </Description>
                                </div>
                            </div>
                            <div className={hotelDetails.review}>
                                <img
                                    src={image.src}
                                    alt=''
                                    className={hotelDetails.customerAvatar}
                                />
                                <div className={hotelDetails.customerReview}>
                                    <div className={hotelDetails.customer}>
                                        <div className={hotelDetails.customerName}>
                                            <h3>Cody Fisher</h3>
                                            <p>May 20, 2021</p>
                                        </div>
                                        <div className={hotelDetails.customerRating}>
                                            <Star size={15} fill='crimson' />
                                            <Star size={15} fill='crimson' />
                                            <Star size={15} fill='crimson' />
                                            <Star size={15} fill='crimson' />
                                            <Star size={15} fill='crimson' />
                                        </div>
                                    </div>
                                    <Description>
                                        Providing lake views, The Symphony 9 Tam Coc in Ninh Binh
                                        provides accommodation, an outdoor swimming pool, a bar, a
                                        shared lounge, a garden and barbecue facilities...
                                    </Description>
                                </div>
                            </div>

                            <button className={hotelDetails.showMore}>
                                View more reviews
                            </button>
                            <hr className={hotelDetails.hr} />
                        </div>
                        {/* Location */}
                        <div className={hotelDetails.location}>
                            <Headings fontSize='1.4rem'>Location</Headings>
                            <Description fontSize='1.1rem'>
                                San Diego, CA, United States of America (SAN-San Diego Intl.)
                            </Description>
                            <hr className={hotelDetails.hrShort} />
                            <div className={hotelDetails.map}>Map</div>
                        </div>
                        <hr className={hotelDetails.hr} />
                        {/* Things to know*/}
                        <div className={hotelDetails.thingsToKnow}>
                            <Headings fontSize='1.4rem'>Things to know</Headings>
                            <hr className={hotelDetails.hrShort} />
                            <div className={hotelDetails}>
                                <h3>Cancellation policy</h3>
                                <Margin topBottom={20}>
                                    <Description fontSize='1.1rem'>
                                        Refund 50% of the booking value when customers cancel the
                                        room within 48 hours after successful booking and 14 days
                                        before the check-in time. Then, cancel the room 14 days
                                        before the check-in time, get a 50% refund of the total
                                        amount paid (minus the service fee).
                                    </Description>
                                </Margin>
                            </div>
                            <hr className={hotelDetails.hrShort} />
                            <div className={hotelDetails.checkInTime}>
                                <h3>Check-in-time</h3>
                                <div>
                                    <p>Check-in</p>
                                    <p>08:00 am - 12:00 am</p>
                                </div>
                                <div>
                                    <p>Check-out</p>
                                    <p>08:00 am - 12:00 am</p>
                                </div>
                            </div>
                            <hr className={hotelDetails.hrShort} />
                            <div className={hotelDetails.specialNote}>
                                <h3>Special Note</h3>
                                <ul>
                                    <li>
                                        <Description>
                                            Ban and I will work together to keep the landscape and
                                            environment green and clean by not littering, not using
                                            stimulants and respecting people around.
                                        </Description>
                                    </li>
                                    <li>
                                        <Description>Do not sing karaoke past 11:30</Description>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className={hotelDetails.hr} />
                        {/*SECTION Reserve Bar */}
                        {stateCtx.from.date && stateCtx.to.date && (
                            <div className={hotelDetails.reserveBar}>
                                <div className={hotelDetails.reservation}>
                                    <p className={hotelDetails.reservationPrice}>
                                        $311 <span>/night</span>
                                    </p>
                                    <p className={hotelDetails.reservationDate}>
                                        {months[stateCtx.from.month]}{" "}
                                        {`${stateCtx.from.date}`.padStart(2, "0")} -{" "}
                                        {months[stateCtx.to.month]}{" "}
                                        {`${stateCtx.to.date}`.padStart(2, "0")}
                                    </p>
                                </div>
                                <button onClick={() => dispatch({ type: "confirmation" })}>
                                    Reserve
                                </button>
                            </div>
                        )}
                    </div>
                    {/*SECTION Sticky Reservation */}
                    <div className={hotelDetails.reservationSticky}>
                        <div className={hotelDetails.priceRating}>
                            <p>
                                $300<span>/night</span>
                            </p>
                            <p className={hotelDetails.rating}>
                                <span>
                                    <Star size={15} fill='crimson' />
                                </span>
                                4.5 (112)
                            </p>
                        </div>
                        {/* Check in/Check out */}
                        <div className={hotelDetails.checkInCheckOut}>
                            <div className={hotelDetails.checkInOutDates}>
                                <div>
                                    <span>
                                        <Calendar size={20} />
                                    </span>
                                    <div>
                                        <Link href='#calendar' legacyBehavior>
                                            <p>
                                                {stateCtx.from.date
                                                    ? `${`${stateCtx.from.date}`.padStart(2, "0")} ${
                                                            months[stateCtx.from.month]
                                                      }`
                                                    : "Pick a date"}
                                            </p>
                                        </Link>
                                        <p>Check in</p>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <Calendar size={20} />
                                    </span>
                                    <div>
                                        <Link href='#calendar' legacyBehavior>
                                            <p>
                                                {stateCtx.to.date
                                                    ? `${`${stateCtx.to.date}`.padStart(2, "0")} ${
                                                            months[stateCtx.to.month]
                                                      }`
                                                    : "Pick a date"}
                                            </p>
                                        </Link>
                                        <p>Check out</p>
                                    </div>
                                </div>
                            </div>
                            {/* Guest */}
                            <div className={hotelDetails.checkInGuests}>
                                <div>
                                    <span>
                                        <Guest
                                            size={25}
                                            stroke='var(--descriptions)'
                                            strokeWidth={16}
                                        />
                                    </span>
                                    <div>
                                        <p>3 Guest</p>
                                        <p>Guests</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pricing */}
                        <div className={hotelDetails.pricing}>
                            <div className={hotelDetails.priceService}>
                                <p>
                                    <span>
                                        $119 x {bookedDays(stateCtx.from, stateCtx.to)} night
                                        {(bookedDays(stateCtx.from, stateCtx.to) > 1 ||
                                            !bookedDays(stateCtx.from, stateCtx.to)) &&
                                            "s"}
                                    </span>
                                    <span>${119 * bookedDays(stateCtx.from, stateCtx.to)}</span>
                                </p>
                                <p>
                                    <span>Service charge</span>
                                    <span>$357</span>
                                </p>
                            </div>
                            {/* Total */}
                            <p>
                                <span>Total</span>
                                <span>$199</span>
                            </p>
                            <Link href='/hotel/checkout' legacyBehavior>
                                <button
                                    disabled={
                                        stateCtx.from.date && stateCtx.to.date ? false : true
                                    }
                                >
                                    Reserve
                                </button>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Container>
            {/* Confirmation and payment */}
            <ConfirmationModal state={state} dispatch={dispatch} />
            {/* Image Gallery */}
            <ImageGallery state={state} dispatch={dispatch} />
        </Section>
    </>;
}
