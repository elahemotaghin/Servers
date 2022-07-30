import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LockIcon from '@mui/icons-material/Lock';

const ResourceCard = (props) =>{
    const {content} = props;
    console.log(content)
    return(
        <Card sx={{backgroundColor: content.color, color: content?.color ? '#fff' : ''}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                {content?.icon}
                <IconButton sx={{color: content?.color ? '#fff' : ''}}><MoreVertIcon/></IconButton>
            </Box>
            <CardHeader title={content.title} />
            <CardContent>
                <Typography padding={1}>{content.count} {content.countUnit}</Typography>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <LockIcon fontSize="small" color="gray" sx={{margin: "0px 4px", color: content?.color ? '#fff' : ''}}/>
                    <p>{content?.detail}</p>
                </Box>
            </CardContent>
        </Card>
    );
}
export default ResourceCard;