import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const Wrapper = styled.div`
  margin: 30px;
  padding-top: 10px;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 100px;
`

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const Instructors = props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/coach-dummy/" } }
        ) {
          edges {
            node {
              frontmatter {
                name
                oneStudent
                twoStudents
                thumbnail
                link
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => {
      // console.log(allMarkdownRemark);
      // const { classes } = props
      return (
        <Wrapper name="coaches">
          <Grid
            container
            spacing={40}
            style={{
              marginTop: '2rem',
              marginBottom: '2rem',
              justifyContent: 'center',
            }}
          >
            {allMarkdownRemark.edges.map(({ node }) => (
              <Grid item md={5} key={node.frontmatter.thumbnail}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="240"
                      image={node.frontmatter.thumbnail}
                      title="Butt"
                      style={{ borderRadius: '50%' }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h2" component="h2">
                        {node.frontmatter.name}
                      </Typography>

                      <Typography component="p" variant="body1">
                        Private lessons: ${node.frontmatter.oneStudent}
                        /30min
                      </Typography>
                      <Typography component="p" variant="body1">
                        Semi-private lessons: ${node.frontmatter.twoStudents}
                        /30min
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component="a"
                      href={node.frontmatter.link}
                    >
                      Register now!
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      )
    }}
  />
)

export default withStyles(styles)(Instructors)
