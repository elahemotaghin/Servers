import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const ResourcesageCard = (props) => {
    const {content} = props;
    return(
        <Grid md={5} margin={1}>
        <Card className='usageCard'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                {content?.icon}
                <CardHeader title={content.title} className='usageCardHeader'/>
            </Box>
            <CardContent sx={{display: 'flex', justifyContent: 'center'}}>
                <Box sx={{position: 'relative', margin: 2}}>
                    {/* <ResourceUsageChart/> */}
                    <CircularProgress variant="determinate" value={content.usage} size='140px' thickness={4} className='usageCardChart'/>
                    <Box
                        sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}
                    >
                        <Typography variant="caption" component="div">
                        {`${Math.round(content.usage)}%`}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
        </Grid>
    );
}
export default ResourcesageCard;