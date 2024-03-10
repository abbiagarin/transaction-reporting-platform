import React, { useState, ReactNode } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";

interface CustomTabProps {
  tabs: {
    label: string;
    Component: ReactNode;
  }[];
  tabsStyles?: React.CSSProperties;
}

const CustomTab: React.FC<CustomTabProps> = ({ tabs, tabsStyles }) => {
  const [value, setValue] = useState("0");

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{ ...tabsStyles }}
        >
          {tabs.map(({ label }, i) => (
            <Tab
              label={label}
              key={i}
              value={i.toString()}
              sx={{ px: { xs: 3.5, md: 5 } }}
            />
          ))}
        </Tabs>
      </Box>

      {/* {tabs.map((tab, i) => (
        <TabPanel value={i.toString()} key={i}>
          {tab.Component}
        </TabPanel>
      ))} */}
    </TabContext>
  );
};

export default CustomTab;
