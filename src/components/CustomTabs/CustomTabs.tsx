import React from 'react';
import { Tab, Tabs, Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeList } from '../../redux/slices/worksSlice';

import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

import CATEGORIESMAP from '../utils/utils';
import './CustomTabs.css';

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
            alignItems: 'center',
            width: '100%',
            height: '100%',
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
  const workList = useAppSelector((state) => state.worksSlice.worksList);
  const dispatch = useAppDispatch();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box component={'div'} sx={{ width: '100%', height: '200px' }}>
      <Box
        component={'div'}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          width: '100%',
          display: 'flex',
          color: '#c5dea1',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ color: '#29b249', fontFamily: ['Oswald'] }}
          textColor="primary"
        >
          <Tab label="Ремонт" {...a11yProps(0)} sx={{ color: '#b2b2b2' }} />
          <Tab
            label="Тех.обслуживание"
            {...a11yProps(1)}
            sx={{ color: '#b2b2b2' }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {CATEGORIESMAP[bottonActive].repair?.map((item, index) => (
          <Box component="div" style={{ margin: 4 }} key={index}>
            <CustomCheckbox
              key={item.title}
              value={item}
              onChange={() => dispatch(changeList(item.title))}
              checked={workList.indexOf(item.title) !== -1}
            />
          </Box>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {CATEGORIESMAP[bottonActive].service?.map((item, index) => (
          <Box component="div" style={{ margin: 4 }} key={index}>
            <CustomCheckbox
              key={item.title}
              value={item}
              onChange={() => dispatch(changeList(item.title))}
              checked={workList.indexOf(item.title) !== -1}
            />
          </Box>
        ))}
      </CustomTabPanel>
    </Box>
  );
}

export default CustomTabs;
