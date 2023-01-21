import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import TrainIcon from '@mui/icons-material/Train';

import Load1 from "../Loader/Load1"

import { useState, useContext } from 'react';
import { AppContext } from '../Context/AppProvider'
import "../CSS/Train.css"
export default function Train() {

    const { trainData, srcc, setSrcc, dstt, setDstt, findTrains, people, setPeople } = useContext(AppContext);


    return (
        <>
            <div className="wrapbox">

                <Box bgcolor={'purple'} ml={'17%'} mt={'15%'} width={'70%'} height={'100%'} border={'2px solid white'} borderRadius={'4px'}>

                    <Typography fontStyle={'italic'} fontSize={'3rem'} color={'white'} pt={2} pb={'2%'} pl={'24%'}>If it goes by rails, it's on us</Typography>
                    <Box bgcolor={'white'} pt={'10px'} >
                        <Stack direction={'row'} gap={8}>
                            <TextField
                                placeholder={"Choose source"}
                                onChange={(e) => setSrcc(e.target.value)}
                                value={srcc}
                                sx={{
                                    "& .MuiInputBase-root": {
                                        height: 40,
                                        width: "20rem",
                                        ml: "5%",
                                        mb: '20px',
                                        mt: '5px',
                                        bgcolor: '#f1f2f6',
                                    },
                                }}
                            ></TextField>
                            <TextField
                                placeholder={"Choose source"}
                                A
                                onChange={(e) => setDstt(e.target.value)}
                                value={dstt}
                                sx={{
                                    "& .MuiInputBase-root": {
                                        height: 40,
                                        width: "20rem",
                                        ml: "-4%",
                                        mb: '20px',
                                        mt: '5px',
                                        bgcolor: '#f1f2f6',
                                    },
                                }}
                            ></TextField>
                            <TextField
                                placeholder={"Passengers"}
                                onChange={(e) => setPeople(e.target.value)}
                                value={people}
                                sx={{
                                    "& .MuiInputBase-root": {
                                        height: 40,
                                        width: "20rem",
                                        ml: "-8%",
                                        mb: '20px',
                                        mt: '5px',
                                        bgcolor: '#f1f2f6',
                                    },
                                }}
                            ></TextField>
                        </Stack>
                        <Stack>
                            <Button variant={'contained'} ml={'6%'} sx={{ bgcolor: "purple" }} onClick={() => findTrains(srcc, dstt)}><SearchIcon />Search</Button>
                        </Stack>
                    </Box>
                </Box>




                {
                    trainData.length > 0 ?

                        trainData.map((item, key) => {
                            return (
                                <div className="contain">
                                    <div className='singleTrain' key={key} >
                                        <div className="iconlogo">
                                            <TrainIcon size="large" />
                                        </div>
                                        <div className="x">

                                            Train Number :  {item.train_number}<br />
                                            Train Name:   {item.train_name}<br />
                                        </div>
                                        <div className="y">

                                            Train Origin :  {item.train_origin_station} <br />
                                            Train Destination :  {item.train_destination_station}<br />
                                            Arrival Time :  {item.arrival_time}<br />
                                            Departure Time :{item.depart_time}<br />
                                        </div >
                                        <div className="z">
                                            <button className='b'  >Book Now</button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })


                        : <></>
                }

            </div>



        </>
    )
}


