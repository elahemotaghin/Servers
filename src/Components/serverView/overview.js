import React from "react";
import ResourcesageCard from "./ResourceUsageCard";
import { MainChart } from "./MainChart.tsx";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StorageIcon from '@mui/icons-material/Storage';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SourceIcon from '@mui/icons-material/Source';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';

const usageCards = [
    {
        title: 'رم',
        icon: <SourceIcon color="secondary" fontSize="small" sx={{margin: 2}}/>,
        usage: 75,
                
    },
    {
        title: 'دیسک',
        icon: <StorageIcon color="secondary" fontSize="small" sx={{margin: 2}}/>,
        usage: 32,
                
    },
    {
        title: 'برنامه',
        icon: <SettingsSystemDaydreamIcon color="secondary" fontSize="small" sx={{margin: 2}}/>,
        usage: 95,
                
    },
    {
        title: 'هسته',
        icon: <ManageHistoryIcon color="secondary" fontSize="small" sx={{margin: 2}}/>,
        usage: 63,
                
    },

];

const Overview = () => {
    return(
        <Box sx={{margin:0, height: '100%', width: '100%', padding: 2}}>
            <Grid container spacing={2}>
                <Grid container md={5}>
                    {usageCards.map((item, index) =>(
                        <ResourcesageCard content={item}/> 
                        ))}
                </Grid>
                <Grid item md={6}>
                    <MainChart/>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Overview;