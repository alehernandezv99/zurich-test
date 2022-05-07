import React from "react";

import {
    Typography,
    Box
} from "@mui/material"

type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

const TabPanel:React.FC<TabPanelProps> = props => {

    const { children, value, index, ...other } = props;

    return  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    )}
  </div>
}

export default TabPanel