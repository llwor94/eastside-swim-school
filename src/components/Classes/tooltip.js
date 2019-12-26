import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from "@material-ui/icons/Info";
import styles from "./index.module.styl";
import Tooltip from "@material-ui/core/Tooltip";

export const ToolTip = ({ open, setOpen }) => (
  <>
    <Tooltip title='How to register' placement='top'>
      <IconButton onClick={() => setOpen(true)}>
        <InfoIcon
          color='disabled'
          className={styles.icon}
          aria-label='How to register'
        />
      </IconButton>
    </Tooltip>
  <Dialog
    onClose={() => setOpen(false)}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <MuiDialogTitle disableTypography>
      <Typography variant="h6">How To Register</Typography>

      <IconButton
        aria-label="Close"
        onClick={() => setOpen(false)}
        style={{ position: 'absolute', top: 3, right: 3 }}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
    <MuiDialogContent>
      <Typography gutterBottom variant="body1" component="p">
        All registration is handled online through Wellness Living. You can
        access this directly or via our website.
      </Typography>
      <Typography gutterBottom variant="body1" component="p">
        To register you will need to create an account. If you have more than
        one person from the same family taking lessons you do not need multiple
        accounts, simply add the names of the students to your profile.
      </Typography>
    </MuiDialogContent>
  </Dialog>
    </>
);
