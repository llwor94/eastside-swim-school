import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { useSnackbar } from 'notistack';

const Announcement = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/announcements/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (allMarkdownRemark) {
      allMarkdownRemark.edges.forEach(({ node }) => {
        enqueueSnackbar(node.frontmatter.title, {
          persist: true,
          preventDuplicate: true,
        });
      });
    }
  }, [allMarkdownRemark]);

  return children;
};

export default Announcement;
