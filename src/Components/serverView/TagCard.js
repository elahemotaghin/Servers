import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const TagCard = (props) => {
    const {content} = props;

    const addTag = () =>{

    }

    return(
        <Card>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <CardHeader title='برچسب ها' className='usageCardHeader'/>
            </Box>
            <CardContent>
                <Box>
                    {props.server.tags.map((tag, index)=>{
                        return(<Chip
                            key={index}
                            label={tag}
                            size="small"
                            color="primary"
                            />)
                    })}
                </Box>
                <Box sx={{display: 'flex', justifyContent:'flex-end'}}>
                    <Button onClick={addTag} variant="contained" size="small" id="addBtn" color='secondary' disableElevation>
                        <AddIcon/>
                            افزودن
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
export default TagCard;