import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Facebook as FbIcon, Twitter, Instagram} from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '1.5px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function BasicCard() {
  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }
    } >
      <CardContent>
        <PersonIcon sx={{ fontSize: 90 }} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Selami Sahin
        </Typography>
      <IconButton onClick={()=>{
        window.location.href='http://www.facebook.com'
      }}><FbIcon/></IconButton> 
      <IconButton onClick={()=>{
        window.location.href='http://www.instagram.com'
      }}><Instagram/></IconButton> 
      <IconButton onClick={()=>{
       window.open("http://www.twitter.com", "_blank")
      }}><Twitter/></IconButton>
      </CardContent>
    </Card>
  );
}