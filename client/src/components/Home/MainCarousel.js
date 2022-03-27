import { Grid } from "@mui/material";
import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function MainCarousel() {
  const ArrowIconStyle = {
    fontSize: "3.5rem",
    color: "white",
  };
  const [photos, setPhotos] = React.useState([
    {
      url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ]);

  const [selectedImageIndex, setSelectedImageIndex] = React.useState(2);

  const getNextPhoto = (index) => {
    if (index >= photos.length - 1) {
      return index - (photos.length - 1);
    } else {
      return index + 1;
    }
  };

  const getPreviousPhoto = (index) => {
    if (index == 0) {
      return photos.length - 1 + index;
    } else {
      return index - 1;
    }
  };

  const nextPhoto = () => {
    setSelectedImageIndex(getNextPhoto(selectedImageIndex));
  };

  const previousPhoto = () => {
    setSelectedImageIndex(getPreviousPhoto(selectedImageIndex));
  };

  return (
    <Grid container spacing={3}>
      <Grid item style={{ position: "relative" }} xs={9}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "98%",
            height: "100%",
          }}
        >
          <ArrowLeft onClick={previousPhoto} style={ArrowIconStyle} />{" "}
          <ArrowRight onClick={nextPhoto} style={ArrowIconStyle} />
        </div>
        <img
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
          src={photos[selectedImageIndex].url}
          alt=""
        />
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        item
        xs={3}
      >
        <img
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
          src={photos[getNextPhoto(selectedImageIndex)].url}
          alt=""
        />
        <img
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
          src={photos[getNextPhoto(selectedImageIndex + 1)].url}
          alt=""
        />
        <img
          style={{
            width: "100%",
            aspectRatio: "16/9",
          }}
          src={photos[getNextPhoto(selectedImageIndex + 2)].url}
          alt=""
        />
      </Grid>
    </Grid>
  );
}
