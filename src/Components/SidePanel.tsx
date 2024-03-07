import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemText } from '@mui/material';
import ScrollableTabs from './ScrollableTabs';
import React, {useState} from "react";
import { ITab } from "../Types/ITab";
import IconButton from '@mui/material/IconButton';
import { ArrowRightIcon } from '../Assets/tab-icons/icons';
import DetailItem from './DetailItem';
import { INTERIOR } from '../constants';

const SidePanel = () => {
    const [tabKey, setTabKey] = useState('tab1'); //Default로 먼저 선택된 탭키.
    const [view, setView] = useState('list')

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

    const handleChangeView =(name:string) => {
        if(name){
            setView(name)
        }
        setView('list')
    }

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
                <ListItem style={{backgroundColor:'#666'}}>전면부</ListItem>
                {INTERIOR.map((item) => 
                    <DetailItem 
                        name={item.name}
                        desc={item.desc}
                        onSelect={()=>handleChangeView(item.name)}
                    />)
                }
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