import React, { useRef } from "react";
import Layout from '../components/Layout';
import { SnackbarProvider } from 'notistack';
import Jumbotron from '../components/Jumbotron';
import Classes from '../components/Classes';
import CloseIcon from '@material-ui/icons/Close';
import Instructors from '../components/Instructors';
import Testimonial from '../components/Testimonials';
import Announcement from '../components/Announcement';
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";

const IndexPage = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const notistackRef = useRef();
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
  }
  return (
    <Layout>
      <SnackbarProvider  ref={notistackRef} maxSnack={5} action={(key) => (
        <CloseIcon onClick={onClickDismiss(key)} />
      )}>
        <Dialog
          onClose={() => setDialogOpen(false)}
          aria-labelledby='customized-dialog-title'
          open={dialogOpen}
        >
          <MuiDialogTitle disableTypography>
            <Typography variant='h6'><b>COVID-19 Response</b></Typography>

            <IconButton
              aria-label='Close'
              onClick={() => setDialogOpen(false)}
              style={{ position: 'absolute', top: 3, right: 3 }}
            >
              <CloseIcon />
            </IconButton>
          </MuiDialogTitle>
          <MuiDialogContent>
            <Typography gutterBottom variant='body1' component='p'>
              Dear Eastside Swim School Families,
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              COVID-19 is impacting all of our lives, whether it be our jobs or our kids now at home, or both.  If you have been directly impacted by the virus or have a family member who has, we are thinking of you and all that you and your families are going through.
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              We at Eastside Swim School, are following the new state guidelines handed down by the Governor yesterday concerning business operations. <b> Starting TODAY, March 16th, 2020   EASTSIDE SWIM SCHOOL WILL BE CLOSED. </b>
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              We will be monitoring this on a weekly basis, and will update you each Sunday evening. As always, we want to do what is best for our team, our Eastside Swim School families, and our community.
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              <b>What does this mean for our ESS Families?</b>
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              <b>Private lessons</b> – If you have already been billed for classes in March, your payments will be credited to your swim account for use with future lessons.
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              <b>Group lessons</b> – this session will be continued once we re-open.
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              We will be communicating with you via our email and postings on our facebook page as well as our website.
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              Thank you for supporting small family businesses like Eastside Swim School.  We thank you for your patience and understanding during these unprecedented times.  If you have further questions, please email eastsideswimschool@comcast.net Please stay safe and healthy.
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              Sincerely,
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              Lisa Worthington <br />
              Eastside Swim School
            </Typography>
          </MuiDialogContent>
        </Dialog>
        <Announcement>
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
