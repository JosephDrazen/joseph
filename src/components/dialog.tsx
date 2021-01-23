import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Message from '../sections/message-in-a-bottle.gif';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <p style={{fontSize: 22}}>Connect with me on 
        <IconButton color='inherit' style={{padding: 8}} href='' target='_blank'>
          <LinkedInIcon/>
        </IconButton>
        </p>
        <a style={{fontSize: 22, textAlign: 'center', cursor: 'pointer'}} onClick={handleClickOpen}>
        Dispatch a message in a bottle?
         </a>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{background: '#141821'}}>
          <DialogContentText id="alert-dialog-description">
            <img src={Message} alt="sending out an SoS" />
            <br />
            <p style={{color: '#fff'}}>You may want to try email 😉</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{background: '#141821'}}>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
