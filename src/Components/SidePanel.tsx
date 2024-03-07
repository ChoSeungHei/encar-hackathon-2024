import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { List, ListItem } from '@mui/material';
import ScrollableTabs from './ScrollableTabs';
import React from "react";
import { ITab } from "../Types/ITab";

const SidePanel = () => {
    const [tabKey, setTabKey] = React.useState('tab1'); //Default로 먼저 선택된 탭키.

    // Tabs
    var tab1:ITab = {
        tabKey: "tab1",
        tabText: "실내",
        selected: false,
        icon: "interior-numbered-on.svg"
    };
    var tab2:ITab = {
        tabKey: "tab2",
        tabText: "외간",
        selected: false,
        icon: "exterior-numbered-on.svg"
    };
    var tab3:ITab = {
        tabKey: "tab3",
        tabText: "휠타이어",
        selected: false,
        icon: "wheel-on.svg"
    };
    var tab4:ITab = {
        tabKey: "tab4",
        tabText: "옵션",
        selected: false,
        icon: "options-on.svg"
    };
    var tab5:ITab = {
        tabKey: "tab5",
        tabText: "실내시트",
        selected: false,
        icon: "seat-on.svg"
    };
    var tabs: ITab[] = [tab1, tab2, tab3, tab4, tab5];

    return (
    <Drawer open={true} hideBackdrop>
        <Box sx={{ width: 400 }} >
            <>
                <ScrollableTabs
                    tabs={tabs}
                    activeKey={tabKey}
                    onTabChange={(event: React.SyntheticEvent, tabKey: string) => setTabKey(tabKey)}
                /> 
            </>
        { tabKey === "tab1" &&
            (<List>
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
            </List>)}
        { tabKey === "tab2" &&
            (<List>
                <ListItem >외간</ListItem>
            </List>)}
        { tabKey === "tab3" &&
        (<List>
            <ListItem >휠타이어</ListItem>
        </List>)}
        { tabKey === "tab4" &&
        (<List>
            <ListItem >옵션</ListItem>
        </List>)}
        { tabKey === "tab5" &&
        (<List>
            <ListItem >실내시트</ListItem>
        </List>)}
        </Box>
    </Drawer>)
}

export default SidePanel