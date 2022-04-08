import { Box, Button, Grid, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

export default function ContactForm() {
  return (
    <Box style={{ backgroundColor: "#3f51b5",color:'white', backdropFilter: "opacity(10%) !important",height:"200px",margin:'20px 0',borderRadius:'10px'}}>
      <Grid container spacing={3} sx={{ width: "100%" ,padding:'10px'}}>
        <Grid item xs={12} md={4}>
          <TextField className="contact-input" sx={{color:'white'}} variant="filled" fullWidth  label="Name"/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField className="contact-input" variant="filled" fullWidth label="E-mail"/>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant="contained" fullWidth color="info">
            Send
            </Button>
        </Grid>
        <Grid item xs={12} md={10}>
            <TextareaAutosize className="contact-input" variant="filled"  style={{width:'100%',height:"70px",background:"transparent",resize:'none',color:'white'}} placeholder="Message"/>
        </Grid>
      </Grid>
    </Box>
  );
}
