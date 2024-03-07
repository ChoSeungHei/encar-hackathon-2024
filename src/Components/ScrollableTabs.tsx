import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import React from 'react';
import { ITab } from '../Types/ITab';
import { SeatOnIcon, WheeOnlIcon, OptionsOnIcon, InteriorNumOnIcon, ExteriorNumOnIcon } from '../Assets/tab-icons/icons';

interface ScrollableTabsProps {
    tabs: ITab[];
    activeKey: string;
    onTabChange: (event: React.SyntheticEvent, tabKey: string) => void;
}

// 텝 이돌 인터렉션 컴포넌트
const ScrollableTabs: React.FC<ScrollableTabsProps> = ({
    tabs,
    activeKey,
    onTabChange
}) => {
    let theme = useTheme();

    theme = createTheme(theme, {
        components: {
        MuiTab: {
            styleOverrides: {
            root:{
                backgroudColor: "#181818",
                color: "#A0A0A0",
                "&.Mui-selected": {
                color: "#FFFFFF",
                "&>.MuiTab-iconWrapper": {
                opacity: "100%"
                }
                },
                "&>.MuiTab-iconWrapper": {
                opacity: "30%"
                }
            }
            }
        },
        MuiTabScrollButton: {
            styleOverrides: {
                root:{
                color: "#A0A0A0",
                backgroudColor: "#66666666",
                opacity: "70%"
                }
            }
        }
        }
    });

    const selectIcon = (iconName: string):React.ReactElement  => {
        if (iconName == "wheel-on.svg") {
            return WheeOnlIcon();
        }

        if (iconName == "seat-on.svg") {
            return SeatOnIcon();
        }

        if (iconName == "options-on.svg") {
            return OptionsOnIcon();
        }

        if (iconName == "interior-numbered-on.svg") {
            return InteriorNumOnIcon();
        }

        if (iconName == "exterior-numbered-on.svg") {
            return ExteriorNumOnIcon();
        }

        return <></>;
    }

    return (
        <div>
            <ThemeProvider
                theme={theme}
            >
            <Tabs
                value={activeKey}
                onChange={onTabChange}
                variant='scrollable'
                TabIndicatorProps={{
                    sx: {
                      backgroundColor: '#D72E36',
                      height: "2px"
                    },
                  }}
                sx={{
                    backgroundColor: "#181818",
                }}
            >
                {tabs.map((tab: ITab) => ( 
                        <Tab
                        key={tab.tabKey}
                        value={tab.tabKey}
                        label={tab.tabText}
                        icon={selectIcon(tab.icon)}
                        style={{
                            fontFamily: "inherit",
                        }}
                    />
                ))
                }
            </Tabs>
            </ThemeProvider>
            
        </div>    
    );
};

export default ScrollableTabs;