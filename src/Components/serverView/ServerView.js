import React from "react";
import Overview from "./overview";
import {useLocation, useNavigate, useParams, Link} from "react-router-dom";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

//server status
const serverStatusToPersion = (status) =>{
    if(status === 'active')
        return 'فعال';
    else if(status === 'starting')
        return 'روشن';
    else if(status === 'stop')
        return 'خاموش';
    else if(status ==='running')
        return 'راه اندازی';
    else if(status === 'disable')
        return 'غیر فعال';
    return 'نامشخص'
}
const serverStatusColor = (status) =>{
    if(status === 'active')
        return 'success.main';
    else if(status === 'starting')
        return 'secondary.dark';
    else if(status === 'stop')
        return 'warning.main';
    else if(status === 'running')
        return 'primary.main';
    else if(status === 'disable')
        return 'error.main';
    return 'gray.main'
}

const ServerView = (props) => {
    let { serverId } = useParams();
    let navigate = useNavigate();
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
            <TabContext value={value} sx={{height: '100%', width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="نمای کلی" value="1"/>
                        <Tab label="منابع" value="2" />
                        <Tab label="دسترسی ها" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{height: '100%', backgroundColor: 'defaultBack.light'}}><Overview /></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
        // <Box sx={{display: 'flex', justifyContent: 'center'}}>
        //     <Card sx={{width: '700px'}}>
        //         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        //             <CardHeader title={server.name}/>
        //             <IconButton sx={{p: 2}}  component={Link} to='/servers'> <UndoIcon /></IconButton>
        //         </Box>
        //         <CardContent>
        //             <Typography color="text.secondary" mb={2}>
        //                 {server.detail}
        //             </Typography>
        //             <Divider light />
        //             <Typography  color="text.secondary" mt={2}>
        //                 موقعيت ديتاسنتر: {server.dataCenter}
        //             </Typography>
        //             <Typography color={serverStatusColor(status)} mt={2}>
        //                 وضعیت: {serverStatusToPersion(status)}
        //             </Typography>
        //         </CardContent>
        //     </Card>
        // </Box>
    );
}

 export default ServerView;