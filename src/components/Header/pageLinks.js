import { Location } from "@reach/router";
import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

export const PageLinks = () => (
  <Location>
    {({ location }) => {
      if (location.pathname === '/') {
        return (
          <Fragment>
            <Button
              color='inherit'
              component='a'
              href='#classes'
            >
              Group Classes
            </Button>
            <Button
              color='inherit'
              component='a'
              href='#coaches'
            >
              Private Lessons
            </Button>
          </Fragment>
        );
      } else
        return (
          <Button
            color='inherit'
            component='a'
            href='/'
          >
            Home
          </Button>
        );
    }}
  </Location>
)
