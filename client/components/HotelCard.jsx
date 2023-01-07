import { LocationPin, Star } from '../assets/SVG.config'
import home from '../styles/Home.module.css'
import Container from './Layout/Container'
import CardSlider from './Slider/CardSlider'
import SubHeadings from './SubHeadings'
import Link from 'next/link'

export default function HotelCard({ data, city }) {
 return (
  <div className={home.hotelCard}>
   <CardSlider hotelImgs={data} />
   <Container>
    <Link href={`/hotel/hotel-details?hotelCode=${city?.code}`}>
     <div className={home.hotelInfo}>
      <p className={home.beds}>Entire cabin - 10 beds</p>
      {/* Hotel Name */}
      <SubHeadings>{city?.name.content}</SubHeadings>
      {/* Address */}
      <p className={home.address}>
       <span>
        <LocationPin size={20} />
       </span>
       {city?.address.street}
      </p>
      {/* Price and Ratings */}
      <div className={home.priceRating}>
       <p className={home.price}>
        <span>$250</span>/night
       </p>
       <p className={home.rating}>
        <span>
         <Star size={15} fill="crimson" />
        </span>
        4.4 (198)
       </p>
      </div>
     </div>
    </Link>
   </Container>
  </div>
 )
}
