import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from 'react';
import './CustomTabs.css';
import { MyContext } from '../Pages/Pages';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import CATEGORIESMAP from '../utils/utils';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{}}
      className="drawer-container"
    >
      {value === index && (
        <Box
          component={'div'}
          sx={{
            p: 1,
            display: 'flex',
            alignItems: 'start',
            width: '100%',
          }}
          className={'drawer-section'}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type CustomTabsProps = {
  bottonActive: keyof typeof CATEGORIESMAP;
};

function CustomTabs({ bottonActive }: CustomTabsProps) {
  const [value, setValue] = React.useState(0);
  const context = React.useContext(MyContext);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box component={'div'} sx={{ width: '100%' }}>
      <Box
        component={'div'}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          width: '100%',
          display: 'flex',
          color: '#29b249',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ color: '#29b249', fontFamily: ['Oswald'] }}
          textColor="primary"
        >
          <Tab label="Ремонт" {...a11yProps(0)} sx={{ color: 'white' }} />
          <Tab
            label="Тех.обслуживание"
            {...a11yProps(1)}
            sx={{ color: 'white' }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {CATEGORIESMAP[bottonActive].repair?.map((item, index) => (
          <Box component="div" style={{ margin: 4 }} key={index}>
            <CustomCheckbox
              key={item}
              value={item}
              onChange={context?.cb}
              checked={context?.list.has(item)}
            />
          </Box>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {CATEGORIESMAP[bottonActive].service?.map((item, index) => (
          <Box component="div" style={{ margin: 4 }} key={index}>
            <CustomCheckbox
              key={item}
              value={item}
              onChange={context?.cb}
              checked={context?.list.has(item)}
            />
          </Box>
        ))}
      </CustomTabPanel>
    </Box>
  );
}

export default CustomTabs;
