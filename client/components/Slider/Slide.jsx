/* eslint-disable @next/next/no-img-element */
import { forwardRef } from 'react'
import slider from '../../styles/slider.module.css'

export default forwardRef(function Slide({ thumb, name, style }, ref) {
 return (
  <div className={slider.slide} ref={ref} style={style}>
   <img src={thumb} alt="" />
   <div>
    <h4>{name}</h4>
    <p>188,288 properties</p>
   </div>
  </div>
 )
})
