import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { List, ListItem } from '@mui/material';
import ScrollableTabs from './ScrollableTabs';



const SidePanel = () => {
    return <Drawer open={true} hideBackdrop>
        <Box sx={{ width: 250 }} >
        <List>
            <ListItem >전면부</ListItem>
            <ListItem style={{backgroundColor:'#000'}}>본네트</ListItem>
            <ListItem>라디에이트 그릴</ListItem>
            <ListItem>앞범퍼</ListItem>
            <ListItem>운전석 측면</ListItem>
            <ListItem>사이드 스텝</ListItem>
            <ListItem>동승석 측면</ListItem>
            <ListItem>후면</ListItem>
            <ListItem>천장</ListItem>
            <ListItem>유리</ListItem>
            <ListItem>휠타이어</ListItem>
            <ListItem>옵션</ListItem>
        </List>
    </Box>
    </Drawer>
}

export default SidePanel