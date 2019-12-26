import React, { useRef } from "react";
import Layout from '../components/Layout';
import { SnackbarProvider } from 'notistack';
import Jumbotron from '../components/Jumbotron';
import Classes from '../components/Classes';
import CloseIcon from '@material-ui/icons/Close';
import Instructors from '../components/Instructors';
import Testimonial from '../components/Testimonials';
import Announcement from '../components/Announcement';

const IndexPage = () => {
  const notistackRef = useRef();
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
  }
  return (
    <Layout>
      <SnackbarProvider  ref={notistackRef} maxSnack={5} action={(key) => (
        <CloseIcon onClick={onClickDismiss(key)} />

      )}>
        <Announcement >
          <Jumbotron />
          <Classes />
          <Instructors />
          <Testimonial />
        </Announcement>
      </SnackbarProvider>
    </Layout>
  );
}

export default IndexPage;
