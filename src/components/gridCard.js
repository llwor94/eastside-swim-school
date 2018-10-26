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
import styles from './GridCard.module.styl';

const GridCard = ({ img, header, size, ages, level, time, link, text }) => {
  // console.log(img.node.childImageSharp.fluid);
  return (
    <Grid item sm={size} style={{ flexGrow: 1 }}>
      <Card className={styles.card}>
        <CardActionArea className={styles.grow}>
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
            <Typography variant="subtitle1">{time}</Typography>
            <div style={{ display: 'flex' }}>
              {Array(level * 1)
                .fill()
                .map((_, i) => (
                  <Icon className={styles.icon} key={i}>
                    star
                  </Icon>
                ))}

              {/* {(level == 2 || level == 3) && <Icon>chevron_right</Icon>}
              {level == 3 && <Icon>chevron_right</Icon>} */}
            </div>
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
            color="primary"
            component="a"
            href={link}
            target="_blank"
          >
            Register now!
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GridCard;
