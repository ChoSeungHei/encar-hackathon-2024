import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { List, ListItem } from '@mui/material';
import ScrollableTabs from './ScrollableTabs';
import React, {useState} from "react";
import { ITab } from "../Types/ITab";
import DetailItem from './DetailItem';
import { PARTS } from '../constants';
import PartDetail from './PartDetail';

interface Props{
    setTitle: React.Dispatch<React.SetStateAction<string>>
}

const SidePanel = ({setTitle}:Props) => {
    const [tabKey, setTabKey] = useState('tab1'); //Default로 먼저 선택된 탭키.
    const [view, setView] = useState('list')
    const [selectedValue, setSelectedValue] = useState('')

    // Tabs
    var tab1:ITab = {
        id:'INTERIOR',
        tabKey: "tab1",
        tabText: "Interior",
        selected: false,
        icon: "interior-numbered-on.svg"
    };
    var tab2:ITab = {
        id:'EXTERIOR',
        tabKey: "tab2",
        tabText: "Exterior",
        selected: false,
        icon: "exterior-numbered-on.svg"
    };
    var tab3:ITab = {
        id:'WHEEL',
        tabKey: "tab3",
        tabText: "Wheel tiers",
        selected: false,
        icon: "wheel-on.svg"
    };
    var tab4:ITab = {
        id:'OPTION',
        tabKey: "tab4",
        tabText: "Option",
        selected: false,
        icon: "options-on.svg"
    };
    var tab5:ITab = {
        id:'SHEET',
        tabKey: "tab5",
        tabText: "Interior Sheet",
        selected: false,
        icon: "seat-on.svg"
    };
    var tabs: ITab[] = [tab1, tab2, tab3, tab4, tab5];            

    const handleChangeView =(isClose:boolean) => {
        if(isClose){
            setView('list')
        } else {
            setView('detail')
        }
    }

    const handleOnSelect = (id:string) => {
        setSelectedValue(id)
        setView('detail')
        setTitle(`Please check\ninspection results of ${id}`)
    }

    const selectedTab =  tabs.filter((item)=> item.tabKey === tabKey)[0].id;

    return (
    <Drawer open={true} hideBackdrop>
        {
            view === 'list' ? 
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
                    {PARTS.INTERIOR.map((item) => 
                        <DetailItem 
                            name={item.name}
                            desc={item.desc}
                            on={Boolean(item.inspection_result)}
                            onSelect={()=>handleOnSelect(item.id)}
                        />)
                    }
                </List>)}
            { tabKey === "tab2" &&
                (<List>
                    {PARTS.EXTERIOR.map((item) => 
                        <DetailItem 
                            name={item.name}
                            desc={item.desc}
                            on={Boolean(item.inspection_result)}
                            onSelect={()=>handleOnSelect(item.id)}
                        />)
                    }
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
            : <PartDetail 
                id={selectedValue} 
                selectedTab={selectedTab}
                onClose={()=>handleChangeView(true)}
            />
        }
        
    </Drawer>)
}

export default SidePanel