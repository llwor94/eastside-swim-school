import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { useSnackbar } from 'notistack';

const Announcement = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  // const { allMarkdownRemark } = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark(
  //       filter: { fileAbsolutePath: { regex: "/announcements/" } }
  //     ) {
  //       edges {
  //         node {
  //           html
  //           frontmatter {
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  useEffect(() => {
    // if (false) {
    //   allMarkdownRemark.edges.forEach(({ node }) => {
    //     enqueueSnackbar(node.frontmatter.title, {
    //       persist: true,
    //       preventDuplicate: true,
    //     });
    //   });
    // }
    //
    // enqueueSnackbar('LESSON REQUESTS NOW AVAILABLE ONLINE', {
    //   persist: true,
    //   preventDuplicate: true,
    //   action: (
    //     <Button component={Link} to={'/request'} style={{backgroundColor: '#65bb4b', color: 'white'}}>
    //       Make a request
    //     </Button>
    //   )
    // })
  }, []);

  return children;
};

export default Announcement;
