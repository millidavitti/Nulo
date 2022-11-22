import React from "react";
import { Calendar, Guest, Star } from "../../assets/SVG.config";
import Container from "../../components/Layout/Container";
import successfullyBooked from "../../styles/successfullyBooked.module.css";
import image from "../../assets/image.jpg";
import Section from "../../components/Layout/Section";
import Headings from "../../components/Headings";
import SubHeadings from "../../components/SubHeadings";
import Margin from "../../components/Layout/Margin";
import Link from "next/link";
import Head from "next/head";
export default function SuccessfullyBooked() {
	return <>
        <Head>
            <title>Reservation Successful</title>
        </Head>
        <Section top={120}>
            <Container className={successfullyBooked.container}>
                <Headings className={successfullyBooked.congrats}>
                    Congratulation 🎉
                </Headings>
                <Margin topBottom={20}>
                    <SubHeadings fontSize='1.5rem'>Your Reservation</SubHeadings>
                </Margin>
                <div className={successfullyBooked.bookingFlex}>
                    <img
                        src={image.src}
                        alt=''
                        className={successfullyBooked.bookedHotelPic}
                    />
                    <div>
                        <p className={successfullyBooked.roomLocation}>
                            Hotel room in Tokyo, Jappan
                        </p>
                        <p className={successfullyBooked.hotelName}>The Lounge & Bar</p>
                        <p>2 beds - 2 baths</p>
                        <hr className={successfullyBooked.hrShort} />
                        <p className={successfullyBooked.rating}>
                            <span>
                                <Star size={20} fill='crimson' />
                            </span>
                            4.5 (112)
                        </p>
                    </div>
                </div>
                <div className={successfullyBooked.bookingDetails}>
                    {/* SECTION Duration */}

                    <div className={successfullyBooked.confirmedDuration}>
                        <div>
                            <span>
                                <Calendar size={30} fill='var(--descriptions)' />
                            </span>
                            <div>
                                <p>Duration</p>
                                <p>Aug 12 - 16, 2021</p>
                            </div>
                        </div>
                    </div>
                    {/* Guest */}
                    <div className={successfullyBooked.confirmedGuest}>
                        <div>
                            <span>
                                <Guest
                                    size={30}
                                    stroke='var(--descriptions)'
                                    strokeWidth={16}
                                />
                            </span>
                            <div>
                                <p>Guests</p>
                                <p>3 Guests</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SECTION Reservation Detail */}
                <div className={successfullyBooked.reservationDetail}>
                    <SubHeadings>Reservation detail</SubHeadings>
                    <p>
                        Booking code <span>#222-33-2211</span>
                    </p>
                    <p>
                        Date <span>12 Aug, 2021</span>
                    </p>
                    <p>
                        Total <span>$199</span>
                    </p>
                    <p>
                        Payment method <span>Credit card</span>
                    </p>
                    <Link href='/' legacyBehavior>
                        <button>Go home</button>
                    </Link>
                </div>
            </Container>
        </Section>
    </>;
}
