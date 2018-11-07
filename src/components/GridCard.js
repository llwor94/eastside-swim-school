import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './GridCard.module.styl';

const GridCard = ({
  img,
  header,
  size,
  ages,
  level,
  time,
  link,
  text,
  color,
  time2,
  time3,
}) => {
  // console.log(img.node.childImageSharp.fluid);
  return (
    <Grid item sm={6} md={4} style={{ flexGrow: 1 }}>
      <Card className={styles.card}>
        <CardActionArea
          className={styles.grow}
          component="a"
          href={link}
          target="_blank"
        >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            title="Butt"
            classes={{
              media: styles.img,
            }}
            {...img.node.childImageSharp.fluid}
          />
          <CardContent>
            <Typography gutterBottom variant="title" component="h2">
              {header}
            </Typography>
            <Typography variant="subtitle1">
              {ages && `ages: ${ages}`}
            </Typography>
            <Chip color="primary" label={time} className={styles.chip} />
            {time2 && (
              <Chip color="primary" label={time2} className={styles.chip} />
            )}
            {time3 && (
              <Chip color="primary" label={time3} className={styles.chip} />
            )}
            {/* <Typography variant="subtitle1">{time}</Typography>
            {time2 && <Typography variant="subtitle1"> or {time2}</Typography>}
            {time3 && <Typography variant="subtitle1"> or {time3}</Typography>} */}
            <Tooltip title="Difficulty">
              <div className={`${styles.icon} ${styles[color]}`}>
                {Array(level * 1)
                  .fill()
                  .map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}

                {/* {(level == 2 || level == 3) && <Icon>chevron_right</Icon>}
              {level == 3 && <Icon>chevron_right</Icon>} */}
              </div>
            </Tooltip>
            <Typography
              component="div"
              variant="body1"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            component="a"
            href={link}
            target="_blank"
            variant="outline"
          >
            Register now!
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GridCard;
