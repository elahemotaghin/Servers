import React from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const AddDialog = (props) =>{
    const {handleClose} = props
    return(
        <Dialog open={true} onClose={handleClose}>
        <DialogTitle>ایجاد سرور</DialogTitle>
        <DialogContent>
            <DialogContentText>
                سرور مورد نظر خود را ایجاد كنيد.
            </DialogContentText>
            <Box component="form" sx={{'& > :not(style)': { m: 1 }, width:'500px'}}>
                <Box sx={{display:'flex', justifyContent: 'space-around'}}>
                    <Box component={'div'} sx={{mt:2, width: '50%'}} >
                        <InputLabel htmlFor="server-name-field" sx={{color: '#000'}}>نام:</InputLabel>
                        <TextField id="server-name-field" variant="standard" sx={{width:'100%'}}/>
                    </Box>
                    <Box component={'div'} sx={{mx:3 , mt:2, width: '50%'}}>
                        <InputLabel htmlFor="server-id-field" sx={{color: '#000'}}>شناسه: </InputLabel>
                        <TextField id="server-id-field" variant="standard" sx={{width:'100%'}}/>
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent: 'space-around'}}>
                    <Box component={'div'} sx={{mt:2, width:'50%'}}>
                        <InputLabel htmlFor="server-dataCenter-field" sx={{color: '#000'}}>دیتاسنتر: </InputLabel>
                        <TextField id="server-dataCenter-field" variant="standard" sx={{width:'100%'}}/>
                    </Box>
                    <Box component={'div'} sx={{mx:3, mt:2, width: '50%'}}>
                        <InputLabel htmlFor="server-enable-field" sx={{color: '#000'}}>وضعیت: </InputLabel>
                        <TextField id="server-enable-field" variant="standard" sx={{width:'100%'}}/>
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent: 'space-around'}}>
                    <Box component={'div'} sx={{ width: '100%', mt:2 }}>
                        <InputLabel htmlFor="server-detail-field" sx={{color: '#000'}}>مشخصات: </InputLabel>
                        <TextField id="server-detail-field"
                        variant="standard"
                        multiline
                        rows={4}
                        style={{ width: '100%' }}/>
                    </Box>
                </Box>
                
            </Box>
        </DialogContent>
        <DialogActions>
            <Box sx={{ m: 1, position: 'relative' }}>
                <Button onClick={handleClose} color='success' variant="contained" disableElevation>
                    تایید
                </Button>
            </Box>
            <Button onClick={handleClose} color='error' variant="outlined" disableElevation>بازگشت</Button>
        </DialogActions>
    </Dialog>
    );
}
export default AddDialog;