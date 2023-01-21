import React, { useState } from 'react'
import axios from 'axios';
import { createContext } from 'react'
export const AppContext = createContext();
export default function AppProvider({ children }) {
    const [srcc, setSrcc] = useState("");
    const [srcc2, setSrcc2] = useState("");
    const [dstt, setDstt] = useState("");
    const [dstt2, setDstt2] = useState("");
    const [lctn, setLctn] = useState("");
    const [hotelList, setHotelList] = useState([]);
    const [trainData, setTrainData] = useState([]);
    const [people, setPeople] = useState(0);

    const [dateT, setDateT] = useState("");
    const [flightData, setFlightData] = useState([]);

    const findFlights = async (srcc2, dstt2, dateT) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'a7983889c2mshcdfb19ddcd3cadcp1ae2c3jsn95f9ed93e4dc',
                    'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
                }
            };
            fetch(`https://skyscanner50.p.rapidapi.com/api/v1/searchFlights?origin=${srcc2}&destination=${dstt2}&date=${dateT}&currency=USD&countryCode=US&market=en-US`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setFlightData(response.data);
                })
                .catch(err => console.error(err));

        } catch (error) {
            console.log(error);
        }
    }

    const findTrains = async (srcc, dstt) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9652b1ea7amsh9465057bff44315p1477b1jsn5011cd831018',
                    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
                }
            };
            fetch(`https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${srcc}&toStationCode=${dstt}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response.data)
                    setTrainData(response.data);
                }
                )
                .catch(err => console.error(err));
        } catch (error) {
            console.log(error);
        }
    }

    const findHotels = async (lctn) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9652b1ea7amsh9465057bff44315p1477b1jsn5011cd831018',
                    'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
                }
            };

            fetch('https://skyscanner50.p.rapidapi.com/api/v1/searchAirport?query=london', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setHotelList(response.data)
                })
                .catch(err => console.error(err));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AppContext.Provider value={{ srcc, setSrcc, dstt, setDstt, findTrains, trainData, people, setPeople, findHotels, lctn, setLctn, hotelList, flightData, srcc2, setSrcc2, dstt2, setDstt2, findFlights, dateT, setDateT }} >

            {children}
        </AppContext.Provider>

    )
}
