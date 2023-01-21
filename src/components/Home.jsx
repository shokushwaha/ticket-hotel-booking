import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'
import "../CSS/Home.css"
export default function Home() {



    return (
        <>
            <div className="outerBox">

                <div className="innerBox">
                    <div className="textBox">
                        <div className="lineone">Let Your Soul</div>
                        <div className="linetwo">
                            <span className="mainText">

                                explore </span><span className='base'>the world</span>

                        </div>
                        <div className='intro' >Soak up the sun with one of our tanning packages … More than a ⛱ resort … Where the good life is always in season</div>
                    </div>
                </div>
            </div>
        </>
    )
}
