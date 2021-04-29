import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import styles from './index.module.styl';

const Class = ({ node, ages, disabled, ctaText }) => {
  return (
    <Grid item sm={6} md={6} style={{ flexGrow: 1, padding: '20px' }}>
      <Card className={styles.card}>
        <CardMedia
          component="img"
          alt="Image"
          height="180"
          classes={{
            media: styles.img,
          }}
          src={node.frontmatter.thumbnail}
        />{' '}
        <CardContent style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h6" component="h2">
              {node.frontmatter.title}
            </Typography>
            <Typography variant="subtitle1">
              {ages && `ages: ${ages}`}
            </Typography>
          </div>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />

        </CardContent>
        <Button
          href={node.frontmatter.link}
          disabled={disabled}
          target="_blank"
          size="large"
          variant="contained"
        >
          {ctaText}
        </Button>
      </Card>
    </Grid>
  );
};

export default Class;
