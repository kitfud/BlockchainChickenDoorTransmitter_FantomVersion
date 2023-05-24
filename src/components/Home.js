import React from 'react'
import {  Box, Typography, Card, CardMedia, CardHeader, CardContent, ListItemText,List,ListItem, ListItemIcon} from "@mui/material"

import ChickenLogo from '../images/logo.png'
const Home = () => {
  return (
    <>
      <Card sx={{marginTop:2}} variant="outlined">
        <Box>
        <Typography sx={{fontSize:20,marginTop:1}}>Welcome To The Blockchain Door!</Typography>
        <img src={ChickenLogo}/>     
        </Box>

        <Box sx={{p:0.5,marginTop:1, display:"block"}}>
        <Card variant="elevation">
  <CardContent>
<Typography>
  This is a chicken coop variation of the blockchain triggered door concept. You can toggle (open/close) a connected hardware device via this web-app. 
</Typography>
</CardContent>
          </Card>
          </Box>



  




      </Card>
  
    
    
    </>
  )
}

export default Home