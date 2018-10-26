import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const GridCard = ({ img, header, size, ages, children, card }) => {
	return (
		<Grid item md={size}>
			<Card>
				<CardActionArea>
					<CardMedia component="img" alt="Contemplative Reptile" height="180" image={img} title="Butt" />
					<CardContent>
						<Typography gutterBottom variant="h2" component="h2">
							{header}
						</Typography>
						<Typography component="h5" variant="h5">
							{ages && `ages: ${ages}`}
						</Typography>
						<Typography component="p" variant="body1">
							{children}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default GridCard;
