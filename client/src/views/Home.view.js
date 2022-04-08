import React from "react";
import { Grid } from "@mui/material";
import MainCarousel from "../components/Home/MainCarousel";
import AuthorInfoCard from "../components/Home/AuthorInfoCard";
import LastBlogs from "../components/Home/LastBlogs";
import { Timeline } from "react-twitter-widgets";
import ContactForm from "../components/Home/ContactForm";
export default function HomeView() {
  return (
    <Grid container spacing={3} sx={{ width: "100%" }}>
      <Grid item xs={12} md={9}>
        <MainCarousel />
      </Grid>
      <Grid item xs={12} md={3}>
        <AuthorInfoCard />
      </Grid>
      <Grid item xs={9}>
        <LastBlogs />
      </Grid>
      <Grid item xs={3}>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "TwitterNews",
          }}
          options={{
            height: "600",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <ContactForm/>
      </Grid>
    </Grid>
  );
}
