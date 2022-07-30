import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteDialog = (props) => {
    const {handleClose} = props;    
    return(
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>حذف سرور</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    آيا از حذف سرور با شناسه {props.server.id} مطمئن هستيد؟
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(props.server.id)} color='success' variant="contained" disableElevation>حذف</Button>
                <Button onClick={handleClose} color='error' variant="outlined" disableElevation>بازگشت</Button>
            </DialogActions>
        </Dialog>
    );
}
export default DeleteDialog;