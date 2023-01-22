import React, { useContext } from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppContext } from '../Context/AppProvider';
export default function Flight() {
    const { flightData, srcc2, setSrcc2, dstt2, setDstt2, findFlights, dateT, setDateT } = useContext(AppContext);

    return (
        <div className="wrapper">
            <ToastContainer floatingTime={5000} />

            <Box bgcolor={'purple'} ml={'17%'} mt={'15%'} width={'70%'} height={'100%'} border={'2px solid white'} borderRadius={'4px'}>

                <Typography fontStyle={'italic'} fontSize={'3rem'} color={'white'} pt={2} pb={'2%'} pl={'24%'}>If it goes by air, it's on us</Typography>
                <Box bgcolor={'white'} pt={'10px'} >
                    <Stack direction={'row'} gap={8}>
                        <TextField
                            placeholder={"Choose source"}
                            onChange={(e) => setSrcc2(e.target.value)}
                            value={srcc2}
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
                            onChange={(e) => setDstt2(e.target.value)}
                            value={dstt2}
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
                        <input type="text" value={dateT} onChange={
                            e => setDateT(e.target.value)
                        } placeholder="yyyy-mm-dd" />

                    </Stack>
                    <Stack>
                        <Button variant={'contained'} ml={'6%'} sx={{ bgcolor: "purple" }} onClick={() => findFlights(srcc2, dstt2, dateT)}><SearchIcon />Search</Button>
                    </Stack>
                </Box>
            </Box>


            {flightData.length === 0 ? null : flightData.map((item, key) => {
                return (
                    <div key={key} >
                        <div className="aaa">

                            {item.id}
                        </div>
                        <div className="bbb">

                            ${item.price.amount}
                        </div>
                        <div className="ccc">
                            <button onClick={() => toast("Congrats! Your ticket has been booked!! 😁")}>Book Now</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
