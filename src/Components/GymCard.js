import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import * as Utils from '../Utils/Utils'

export default function GymCard({studioName, address, description}) {

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: Utils.getRandomColor()}} aria-label="gym-label">
            {studioName[0]}
          </Avatar>
        }
        title={studioName}
        subheader={address}
      />
      <CardMedia
        component="img"
        height="194"
        image='https://www.shape.com/thmb/uQD-N7kIW5Yqo2WeAhEEl7G_AO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-choose-best-gym-f454dc101c9d4dbe98467a218b676d27.jpg'
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
  );
}