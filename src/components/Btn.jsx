import { Button, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import languages from '../Lan'
import { useTranslation } from 'react-i18next';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


function Btn() {

    const { i18n, t } = useTranslation()

    useEffect(()=>{
        document.body.dir = i18n.dir()
    },[i18n,i18n.language])

    return (
        <Container maxWidth='xl' classoName='flex items-center justify-center flex-col  bg-slate-700'>
            <Box  sx={{ boxShadow: '16px 21px 43px 14px rgba(0,0,0,0.5)', backgroundColor: 'white', mb: 10, mt: 10 }} Width={600}>
                <Box minWidth={500}>
                    <Typography variant='h3' Width={200}>
                        {t("greeting")}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  

                    {languages?.map((item, index) => (
                        <Grid size={1} key={index}>
                            <Item>
                                <Button onClick={() => i18n.changeLanguage(item.code)} className='text-white'>{item.label}</Button>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>


        </Container>
    )
}

export default Btn