import React from "react";
import Overview from "./overview";
import {useLocation, useParams, Link} from "react-router-dom";
import {serverStatusToPersion, serverStatusColor} from '../servers/ServerTable'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ServerView = (props) => {
    let { serverId } = useParams();
    const [value, setValue] = React.useState('1');
    let query = useQuery();

    const server = props.servers.filter( (server) => {
        return server.id == serverId;
    })[0]

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    let status = query.get('status');

    return(
        <Box sx={{ width: '100%', typography: 'body1', height: '100%'}}>
            <Box sx={{backgroundColor: 'defaultBack.light', padding: 3, display: 'flex', alignItems: 'center'}}>
                <Typography variant='h1' color={'primary'}>{server.name}</Typography>
                <Box sx={{display: 'flex', alignItems: 'center', marginRight:2}}>
                    <Box className="statusIcon" component={'span'} color={serverStatusColor(status)}></Box>
                    <Typography variant='body2' color={serverStatusColor(status)}>{serverStatusToPersion(status)}</Typography>
                </Box>
            </Box>
            <TabContext value={value} sx={{height: '100%', width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="نمای کلی" value="1"/>
                        <Tab label="منابع" value="2" />
                        <Tab label="دسترسی ها" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{height: '100%', backgroundColor: 'defaultBack.light'}}>
                    <Overview server={server} status={serverStatusToPersion(status)} color = {serverStatusColor(status)}/>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
}

 export default ServerView;