import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const GridCard = ({ img, header, size, text }) => (
	<Grid item md={size}>
		<Card>
			<CardActionArea>
				<CardMedia component="img" alt="Contemplative Reptile" height="140" image={img} title="Butt" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{header}
					</Typography>
          <Typography component="p" style={{fontSize: '1.2rem'}}>
            {text}
          </Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	</Grid>
);

export default GridCard;
