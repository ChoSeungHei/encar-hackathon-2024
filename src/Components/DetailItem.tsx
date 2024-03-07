import React from "react";
import { ListItem, ListItemText } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { ArrowRightIcon } from '../Assets/tab-icons/icons';

interface Props {
    id: string;
    name:string;
    desc:string;
    on?:boolean;
    onSelect:()=>void;
}

const DetailItem = ({id, name, desc, on, onSelect}:Props) => {

    return (
    <ListItem 
        style={{borderBottom:'1px solid #666'}}
        className={ on ? 'active' : 'notActive' }
        secondaryAction={
            <IconButton onClick={onSelect} id={id}>
                <ArrowRightIcon />
            </IconButton>
        }>
            <ListItemText
                primary={name}
                secondary={<>{desc}</>}>
            </ListItemText>
     </ListItem>
)
} 

export default DetailItem