import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./GridCard.module.styl";

const GridCard = ({node, ages}) => {
  console.log(node);
  return (
    <Grid item sm={6} md={6} style={{flexGrow: 1}}>
      <Card className={styles.card}>
        <CardMedia
          component='img'
          alt='Image'
          height='180'
          classes={{
            media: styles.img,
          }}
          src={node.frontmatter.thumbnail}
        />{" "}
        <CardContent>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <Typography gutterBottom variant='h6' component='h2'>
              {node.frontmatter.title}
            </Typography>
            <Typography variant='subtitle1'>
              {ages && `ages: ${ages}`}
            </Typography>
          </div>
					{node.frontmatter.classPeriods ? (<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									Dates
								</TableCell>
								<TableCell>
									Times
								</TableCell>
								<TableCell>
									Days
								</TableCell>
								<TableCell>
									#
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{node.frontmatter.classPeriods ? node.frontmatter.classPeriods.map((c, i ) => {
								console.log(c.dateRange[0])
								return(
								<TableRow key={i} >
									<TableCell size='medium'>
										<b>{ c.dateRange[0].startDate.slice(0, -3) + ' - ' + c.dateRange[0].endDate.slice(0, -3) }</b>
									</TableCell>
									<TableCell style={{width: '60px'}}>
										{c.times.map(t => <div style={{background: '#80deea', textAlign: 'center', margin: '2px', borderRadius: '3px'  }}>{t.time}</div>)}
									</TableCell>
									<TableCell>
										{c.days.map(day => <div>{day}</div>)}
									</TableCell>
									<TableCell>
										{c.classesCount}
									</TableCell>
								</TableRow>
							)}): null}
						</TableBody>
					</Table>):null}
        </CardContent>
      </Card>
    </Grid>
  );
};

// const GridCard = ({ img, header, ages, level, time, link, text, color, time2, time3, time4 }) => {
// 	return (
// 		<Grid item sm={6} md={4} style={{ flexGrow: 1 }}>
// 			<Card className={styles.card}>
// 				<CardActionArea className={styles.grow}>
// 					<CardMedia
// 						component='img'
// 						alt='Image'
// 						height='180'
// 						classes={{
// 							media: styles.img,
// 						}}
// 						{...img.node.childImageSharp.fluid}
// 					/>
// 					<CardContent>
// 						<Typography gutterBottom variant='h6' component='h2'>
// 							{header}
// 						</Typography>
// 						<Typography variant='subtitle1'>{ages && `ages: ${ages}`}</Typography>
// 						<Typography variant='subtitle2'>Monday-Thursday</Typography>
// 						<Chip color='primary' label={time} className={styles.chip} />
// 						{time2 && <Chip color='primary' label={time2} className={styles.chip} />}
// 						{time3 && <Chip color='primary' label={time3} className={styles.chip} />}
// 						{time4 && <Chip color='primary' label={time4} className={styles.chip} />}
// 						<Tooltip title='Difficulty'>
// 							<div className={`${styles.icon} ${styles[color]}`}>
// 								{Array(level * 1)
// 									.fill()
// 									.map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
// 							</div>
// 						</Tooltip>
// 						<Typography
// 							component='div'
// 							variant='body1'
// 							dangerouslySetInnerHTML={{ __html: text }}
// 						/>
// 					</CardContent>
// 				</CardActionArea>
// 				<CardActions>
// 					<Button
// 						size='small'
// 						color='secondary'
// 						component='a'
// 						//disabled
// 						href={link}
// 						target='_blank'
// 					>
// 						Register now
// 					</Button>
// 				</CardActions>
// 			</Card>
// 		</Grid>
// 	);
// };

export default GridCard;
