import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
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
    >
      {value === index && (
        <Box component={'div'} sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

  // const [workList, setWorkList] = React.useState<Set<string>>(
  //   () => new Set<string>()
  // );

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component={'div'}
      sx={{ width: '100%', height: '250px', overfloyY: 'auto' }}
    >
      <Box component={'div'} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={() => handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Ремонт" {...a11yProps(0)} />
          <Tab label="ТО" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {CATEGORIESMAP[bottonActive].repair?.map((item, index) => (
          <Box
            component={'div'}
            sx={{ display: 'flex', justifyContent: 'center', mb: '40px' }}
            key={index}
          >
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
          <Box
            component={'div'}
            sx={{ display: 'flex', justifyContent: 'center', mb: '40px' }}
            key={index}
          >
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
