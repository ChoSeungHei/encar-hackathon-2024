import React from "react";
import { ListItem, ListItemText } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { ArrowRightIcon } from '../Assets/tab-icons/icons';

interface Props {
    name:string;
    desc:string;
    onSelect:(name:string)=>void;
}

const DetailItem = ({name, desc, onSelect}:Props) => {

    return (
    <ListItem 
        style={{borderBottom:'1px solid #666'}} 
        secondaryAction={
            <IconButton onClick={()=>onSelect(name)}>
                <ArrowRightIcon />
            </IconButton>
        }>
            <ListItemText
                primary={name}
                secondary={<>{desc}</>}>
            </ListItemText>
     </ListItem>)
} 

export default DetailItem