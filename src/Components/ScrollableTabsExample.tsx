import React from "react";
import ScrollableTabs from "./ScrollableTabs";
import { ITab } from "../Types/ITab";

// 텝 이돌 인터렉션 컴포넌트 example
const ScrollableTabsExample: React.FC = ({
}) => {
    
    // Example tabs
    var tab1:ITab = {
        tabKey: "tab1",
        tabText: "tab1",
        selected: false,
        icon: "string"
      };
      var tab2:ITab = {
        tabKey: "tab2",
        tabText: "tab2",
        selected: false,
        icon: "string"
      };
      var tab3:ITab = {
        tabKey: "tab3",
        tabText: "tab3",
        selected: false,
        icon: "string"
      };
      var tab4:ITab = {
        tabKey: "tab4",
        tabText: "tab4",
        selected: false,
        icon: "string"
      };
      var tab5:ITab = {
        tabKey: "tab5",
        tabText: "tab5",
        selected: false,
        icon: "string"
      };
      var tab6:ITab = {
        tabKey: "tab6",
        tabText: "tab6",
        selected: false,
        icon: "string"
      };
      var testTabs: ITab[] = [tab1,tab2, tab3, tab4, tab5, tab6];
      
      const [tabKey, setTabKey] = React.useState('tab1'); //Default로 먼저 선택된 탭키.

    return (
        <>
            <ScrollableTabs
                tabs={testTabs}
                activeKey={tabKey}
                onTabChange={(event: React.SyntheticEvent, tabKey: string) => setTabKey(tabKey)}
            /> 
        </>
    );
};

export default ScrollableTabsExample;