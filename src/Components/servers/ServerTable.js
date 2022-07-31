import React from "react";
import DeleteDialog from './DeleteDialog';
import EditDialog from './EditDialog';
import {useNavigate} from "react-router-dom";

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import {IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import SortRoundedIcon from '@mui/icons-material/SortRounded';

//server status
export const serverStatusToPersion = (status) =>{
    if(status === 'active')
        return 'فعال';
    else if(status === 'starting')
        return 'راه اندازی';
    else if(status === 'stop')
        return 'خاموش';
    else if(status ==='running')
        return 'روشن';
    else if(status === 'disable')
        return 'غیر فعال';
    return 'نامشخص'
}
export const serverStatusColor = (status) =>{
    if(status === 'active')
        return 'success.main';
    else if(status === 'starting')
        return 'primary.light';
    else if(status === 'stop')
        return 'warning.main';
    else if(status === 'running')
        return 'primary.main';
    else if(status === 'disable')
        return 'error.main';
    return 'gray.main'
}

const ServerTable = (props) => {
    let navigate = useNavigate();
    const servers = props.servers;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [selectedServer, setSelectedServer] = React.useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [anchorIdSort, setAnchorIdSort] = React.useState(null);
    const [anchorNameSort, setAnchorNameSort] = React.useState(null);
    const [sortChips, setSortChips] = React.useState([]);
    const [sortArray, setSortArray] = React.useState([]);
    const [hideIdColumn, setHideIdColumn] = React.useState(false);
    const [hideNameColumn, setHideNameColumn] = React.useState(false);

    //routing functions
    const routeToServer = (id, status) => {
        navigate(`../servers/${id}?status=${status}`, { replace: true });
    };

    const editClicked = (serverId) => {
        setOpenEditDialog(true);
        const server = servers.filter( (server) => {
            return server.id === serverId;
        })[0]
        setSelectedServer(server);
    }

    const deleteClicked = (serverId) => {
        setOpenDeleteDialog(true);
        const server = servers.filter( (server) => {
            return server.id === serverId;
        })[0]
        setSelectedServer(server);
    }

    //sort functions
    const handleCloseSortrMenu = (value, field, type) => {
        if(field === 'id')
            setAnchorIdSort(null);
        else
            setAnchorNameSort(null);
        if(value === 'sort'){
            let newSortArray = sortArray;
            newSortArray.push([field, type]);
            setSortArray(newSortArray);
            sort(field, type);
        }
        else if(value === 'hide'){
            if(field === 'id'){
                let newSortChip = sortChips;
                newSortChip.push(' پنهان سازی شناسه ها');
                setSortChips(newSortChip);
                setHideIdColumn(true);
            }
            else if(field === 'name'){
                let newSortChip = sortChips;
                newSortChip.push(' پنهان سازی نام ها');
                setSortChips(newSortChip);
                setHideNameColumn(true);
            }
        }

    };

    const sort = (field, type) => {
        if(type === 'asc'){
            let newSortChip = sortChips;
            if(field === 'name'){
                if(newSortChip.includes('فیلتر بر اساس نام نزولی')){
                    let index = newSortChip.indexOf('فیلتر بر اساس نام نزولی')
                    newSortChip.splice(index, index+1);
                }
                newSortChip.push('فیلتر بر اساس نام صعودی');
            }
            else if(field === 'id'){
                if(newSortChip.includes('فیلتر بر اساس شناسه نزولی')){
                    let index = newSortChip.indexOf('فیلتر بر اساس شناسه نزولی')
                    newSortChip.splice(index, index+1);
                }
                newSortChip.push('فیلتر بر اساس شناسه صعودی');
            }
            setSortChips(newSortChip);
            servers.sort((a, b) => (a[field] > b[field]) ? 1 : -1)
        }
        else{
            let newSortChip = sortChips;
            if(field === 'name'){
                if(newSortChip.includes('فیلتر بر اساس نام صعودی')){
                    let index = newSortChip.indexOf('فیلتر بر اساس نام صعودی')
                    newSortChip.splice(index, index+1);
                }
                newSortChip.push('فیلتر بر اساس نام نزولی');
            }
            else if(field === 'id'){
                if(newSortChip.includes('فیلتر بر اساس شناسه صعودی')){
                    let index = newSortChip.indexOf('فیلتر بر اساس شناسه صعودی')
                    newSortChip.splice(index, index+1);
                }
                newSortChip.push('فیلتر بر اساس شناسه نزولی');
            }
            setSortChips(newSortChip);
            servers.sort((a, b) => (a[field] < b[field]) ? 1 : -1)
        }
    }

    const handleDeleteChip = (chip) =>{
        let newChips = sortChips.filter((sortChip)=>{
            return sortChip != chip;
        });
        setSortChips(newChips);
        if(chip.includes('پنهان')){
            if(chip.includes('نام')){
                setHideNameColumn(false);
            }
            else
                setHideIdColumn(false);
        }
        servers = servers;
    }

    //table paging function
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSnack = (event) => {
        setOpenDeleteDialog(null);
        if(typeof(event) == 'number'){
            setOpenSnack(true);
            props.onDelete(event)
        }
    }
    
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenSnack(false);
    };

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnack}
            sx={{margin: '0px 15px'}}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );

    return(
        <>
        {sortChips.map((chip, index)=>{
            return (<Chip
                key={index}
                label={chip}
                size="small"
                color="primary"
                variant="outlined"
                onDelete={()=>handleDeleteChip(chip)}
                />);
        })}
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right" sx={{display: hideNameColumn? 'none' : ''}}>
                            نام سرور
                            <IconButton
                            aria-controls="sort-menu"
                            aria-haspopup="true"
                            onClick={(event) => {setAnchorNameSort(event.currentTarget);}} >
                                <SortRoundedIcon />
                            </IconButton>
                        </TableCell>
                        <Menu
                        anchorEl={anchorNameSort}
                        keepMounted
                        open={Boolean(anchorNameSort)}
                        onClose={() => {handleCloseSortrMenu('', 'name', '')}}
                        >
                            <MenuItem key={1} onClick={()=>{handleCloseSortrMenu('sort', 'name' , 'asc')}}>
                                مرتب سازی صعودی <NorthIcon fontSize="small" color="primary" sx = {{margin: 1}}/>
                            </MenuItem>
                            <MenuItem key={2} onClick={()=>{handleCloseSortrMenu('sort', 'name', 'dsc')}}>
                                مرتب سازی نزولی <SouthIcon fontSize="small" color="primary" sx = {{margin: 1}}/>
                            </MenuItem>
                            <MenuItem key={3} onClick={()=>{handleCloseSortrMenu('hide', 'name', '')}}>
                                پنهان کردن <VisibilityOff fontSize="small" color="primary" sx = {{margin: 1}}/>
                            </MenuItem>
                        </Menu>
                        <TableCell align="right">مشخصات</TableCell>
                        <TableCell align="center" sx={{display: hideIdColumn? 'none' : ''}}>
                            شناسه
                            <IconButton
                            aria-controls="sort-menu"
                            aria-haspopup="true"
                            onClick={(event) => {setAnchorIdSort(event.currentTarget);}} >
                                <SortRoundedIcon />
                            </IconButton>
                        </TableCell>
                        <Menu
                        anchorEl={anchorIdSort}
                        keepMounted
                        open={Boolean(anchorIdSort)}
                        onClose={() => {handleCloseSortrMenu('', 'id', '')}}
                        >
                            <MenuItem key={1} onClick={()=>{handleCloseSortrMenu('sort', 'id' , 'asc')}}>
                                مرتب سازی صعودی <NorthIcon fontSize="small" color="primary" sx = {{margin: 1}}/>
                            </MenuItem>
                            <MenuItem key={2} onClick={()=>{handleCloseSortrMenu('sort', 'id', 'dsc')}}>
                                مرتب سازی نزولی <SouthIcon fontSize="small" color="primary" sx = {{margin: 1}}/>
                            </MenuItem>
                            <MenuItem key={3} onClick={()=>{handleCloseSortrMenu('hide', 'id', '')}}>
                                پنهان کردن <VisibilityOff fontSize="small" color="primary" sx = {{margin: 1}}/>
                            </MenuItem>
                        </Menu>
                        <TableCell align="right">ديتاسنتر</TableCell>
                        <TableCell align="right">وضعیت</TableCell>
                        <TableCell align="center">برچسب</TableCell>
                        <TableCell align="center">عمليات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {servers
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((server) => {
                            return (
                                <TableRow
                                key={server.id}
                                hover>
                                    <TableCell className="ChildSelector" scope="row" align="right"
                                    onClick={event => routeToServer(server.id, server.status)}
                                    sx={{display: hideNameColumn? 'none' : ''}}>
                                        {server.name}
                                    </TableCell>
                                    <TableCell align="right" onClick={event => routeToServer(server.id, server.status)}>
                                        {server.detail.substr(0, 50)}...
                                    </TableCell>
                                    <TableCell align="center" onClick={event => routeToServer(server.id, server.status)}
                                    sx={{display: hideIdColumn? 'none' : ''}}>
                                        {server.id}
                                    </TableCell>
                                    <TableCell align="center" onClick={event => routeToServer(server.id, server.status)}>
                                        {server.dataCenter}
                                    </TableCell>
                                    <TableCell align='center' 
                                        sx={{ color: serverStatusColor(server.status)}}
                                        onClick={event => routeToServer(server.id, server.status)}>
                                        <Box sx={{display:'flex', alignItems:'center'}}>
                                            <Box className="statusIcon" component={'span'}></Box>
                                            {serverStatusToPersion(server.status)}
                                        </Box>
                                    </TableCell>        
                                    <TableCell align="right">
                                        {server.tags.map((tag, index)=>{
                                            return (<Chip
                                                label={tag}
                                                size="small"
                                                color="primary"
                                                onClick = {()=>{props.addTagChip(tag)}}
                                                />);
                                        })}
                                    </TableCell>                        
                                    <TableCell align="left">
                                        <Box sx={{display: 'flex'}}>
                                            <IconButton onClick={() => editClicked(server.id)}>
                                                <EditIcon color="primary" fontSize='small'/>
                                            </IconButton>
                                            <IconButton onClick={() => deleteClicked(server.id)}>
                                                <DeleteIcon fontSize='small'/>
                                            </IconButton>
                                            <Tooltip title="اطلاعات بیشتر">
                                                <IconButton>
                                                    <MoreVertIcon fontSize='small'/>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <Box sx={{display: 'flex', alignItems: 'center'}} color='text.secondary'>
            <TablePagination
                rowsPerPageOptions={[5]}
                component="div"
                count={servers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {servers.length} / {(page * rowsPerPage + rowsPerPage) > servers.length ? servers.length : page * rowsPerPage + rowsPerPage} - {page * rowsPerPage+1}
        </Box>
        <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        message="حذف با موفقیت انجام شد."
        action={action}
        />
        {openDeleteDialog ? <DeleteDialog server={selectedServer} handleClose={($event) => {handleSnack($event)}}/> : null} 
        {openEditDialog ? <EditDialog server={selectedServer} handleClose={() =>{ setOpenEditDialog(null)}}/> : null}
        </>
    );
    
};
export default ServerTable;