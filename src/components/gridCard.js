import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const GridCard = ({ img, header, size, ages, children, level, time, link }) => {
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
						<Typography component="h5" variant="h5">
							{time}
						</Typography>
						<Typography component="p" variant="body1">
							{children}
						</Typography>
						<div style={{ display: 'flex' }}>
							<Icon>chevron_right</Icon>
							{(level == 2 || level == 3) && <Icon>chevron_right</Icon>}
							{level == 3 && <Icon>chevron_right</Icon>}
						</div>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" component="a" href={link}>
						Register now!
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default GridCard;
