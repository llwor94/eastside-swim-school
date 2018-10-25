import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Logo from '../images/evelationlogo.png';

const Wrapper = styled.div`
	margin: 3rem;
	padding-top: 2rem;
	${'' /* height: 100vh; */};
`;

const GridWrapper = styled.div`margin: 3rem;`;

const GridRow = styled(Grid)`
  margin: 2rem;
`;

const Classes = () => (
	<Wrapper name="classes">
		<h1>Group Classes</h1>
		<GridWrapper>
			<h2>PreSchool:</h2>

			<GridRow container spacing={32}>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</GridRow>

			<h2>Grade School:</h2>

			<GridRow container spacing={32}>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</GridRow>

			<h2>Junior High/ High School:</h2>
			<GridRow container spacing={32}>
				<Grid item md={6}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={6}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</GridRow>
			<h2>Adult:</h2>
			<Grid container spacing={32}>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="140"
								image={Logo}
								title="Butt"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</GridWrapper>
	</Wrapper>
);

export default Classes;
