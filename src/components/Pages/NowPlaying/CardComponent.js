import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
import ReactCardFlip from "react-card-flip";
export default function CardComponent({ data }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onMouseEnter={() => setIsFlipped((prev) => !prev)}>
          <CardMedia
            component="img"
            height="120"
            image={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating name="disabled" value={data.vote_average / 2} disabled />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ display: "flex", maxWidth: 345 }}>
        <CardActionArea onMouseEnter={() => setIsFlipped((prev) => !prev)}>
          <CardMedia
            component="img"
            height="100"
            image={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {data.overview}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating name="disabled" value={data.vote_average / 2} disabled />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ReactCardFlip>
  );
}
