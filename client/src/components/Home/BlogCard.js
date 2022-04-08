import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button, CardActions } from "@mui/material";

export default function BlogCard() {
  const theme = useTheme();

  return (
    <Card className="my-box-shadow" sx={{ display: "flex", border:'1px #1b6994 solid', marginBottom:'10px',height:'200px' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
           Javascript ile blog yapımı #1
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Read More
            </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
