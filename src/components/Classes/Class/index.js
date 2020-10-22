import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './index.module.styl';

const Class = ({ node, ages }) => {
  console.log(node)
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
          {node.frontmatter.classPeriods?.length ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dates</TableCell>
                  <TableCell>Days</TableCell>
                  <TableCell>Slots</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {node.frontmatter.classPeriods.map((c, i) => {
                  if (c.dateRange && c.dateRange.length)
                    return (
                      <TableRow key={i}>
                        <TableCell className={styles.cell}>
                          <b>
                            {c.dateRange[0].startDate.slice(0, -3) +
                              ' - ' +
                              c.dateRange[0].endDate.slice(0, -3)}
                          </b>
                        </TableCell>

                        <TableCell className={styles.cell}>
                          {c.days.length >= 3 ? (
                            <div>
                              {c.days[0] + ' thru ' + c.days[c.days.length - 1]}
                            </div>
                          ) : c.days.length === 2 ? (
                            <div>{c.days[0] + ' & ' + c.days[1]}</div>
                          ) : (
                            c.days.map(day => <span>{day} </span>)
                          )}
                        </TableCell>
                        <TableCell className={`${styles.cell}`}>
                          <div className={styles.times}>
                          {c.times.map(t => (
                            <div
                              className={styles.time}
                              style={{
                                background: t.available ? '#80deea' : '#e0e0e0',
                              }}
                            >
                              {t.time}
                            </div>
                          ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                })}
              </TableBody>
            </Table>
          ) : null}
        </CardContent>
        <Button
          href={node.frontmatter.link}
          disabled={!['Water Aerobics', 'Grade School 2', 'Grade School 3'].includes(node.frontmatter.title)}
          target="_blank"
          size="large"
          variant="contained"
        >
          {['Water Aerobics', 'Grade School 2', 'Grade School 3'].includes(node.frontmatter.title) ? 'Register Now' : ['Adult', 'Pre Comp'].includes(node.frontmatter.ageGroup) ? 'Call To Register' : 'Not Available' }
        </Button>
      </Card>
    </Grid>
  );
};

export default Class;
