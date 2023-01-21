import React from 'react'
import { Button } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'
import "../CSS/Hotel.css"
import HotelIcon from '@mui/icons-material/Hotel';
import BusinessIcon from '@mui/icons-material/Business';
export default function Hotel() {

    const { lctn, setLctn, findHotels, hotelList } = useContext(AppContext);

    return (
        <div className='main-box'>
            <div className='form-box'>
                <form className='form'>
                    <span className='span'>BOOK YOUR DREAM HOTEL</span><br />
                    <span className='elements'>Name : </span>
                    <input
                        className='name'
                        type="name"
                        placeholder='Enter your name here'
                    />
                    <span className='elements'>To : </span>
                    <input value={lctn}
                        onChange={e => setLctn(e.target.value)}
                        className='to'
                        type="destination"
                        placeholder='Destination'
                    />
                    <span className='elements'>Check In : </span><input className='date' type="date" />
                    <span className='elements'>Check Out : </span><input className='date' type="date" />
                    <span className='elements'>Rooms : </span>
                    <input
                        className='number'
                        type="number"
                        placeholder='Capacity'
                    />
                    <Button className='searchBtn' variant="contained" onClick={() => findHotels(lctn)} sx={{ bgcolor: "purple", mt: "2rem", borderRadius: "2rem" }} >Search Now</Button>
                </form>
            </div>
            <div className="xx">


                {
                    hotelList.length === 0 ? <>Nothing to show</> :
                        hotelList.map((item, key) => {
                            return (<div key={key} className="singleHotel" >
                                <HotelIcon />
                                <div className="aa">

                                    {item.PlaceName}
                                </div>
                                <div className="bb">
                                    <BusinessIcon />
                                    {item.ResultingPhrase}
                                </div>
                                <button className='bbttnn'>Book Now</button>
                            </div>)
                        })
                }

            </div>
        </div>
    )
}
