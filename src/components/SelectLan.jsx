import React from 'react'
import { useTranslation } from "react-i18next"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { changeLanguage } from 'i18next'
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import languages from '../Lan'


function SelectLan() {

    const { t } = useTranslation()
    const [Language, setLanguage] = useState('');

    console.log(languages.sort((a, b) => a - b));


    useEffect(() => {
        changeLanguage(Language)
    }, [Language])


    return (
        <Container maxWidth="xl">
            <div className=" flex items-center justify-center h-screen w-full  flex-col bg-slate-500  ">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" sx={{ color: "white" }}>Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={Language}
                        onChange={(e) => setLanguage(e.target.value)}
                        label="Language"
                        sx={{ color: 'white' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {/* <MenuItem value='hi'>Hindi</MenuItem>
          <MenuItem value='en'>English</MenuItem>
          <MenuItem value='fr'>French</MenuItem> */}
                        {
                            languages?.map((item, index) => (
                                <MenuItem value={item.code} key={index}>{item.label}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <Box p={20} sx={{ boxShadow: '16px 21px 43px 14px rgba(0,0,0,0.5)', backgroundColor: 'white' }}>
                    <Typography variant="h2" >{t('greeting')}</Typography>
                </Box>
            </div>
        </Container>
    )
}

export default SelectLan