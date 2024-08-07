import * as React from 'react';
import { useState } from "react";
import { Tabs, Tab, Box, Divider } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import CarneNutricionalInformationA from './CarneNutricionalInformationA.jsx'
import CarneNutricionalInformationB from './CarneNutricionalInformationB.jsx'
import HuevosNutricionalInformationA from './HuevosNutricionalInformationA.jsx'
import PescadosNutricionalInformationA from './PescadosNutricionalInformationA.jsx'
import PescadoNutricionalInformationA from './PescadoNutricionalInformationA.jsx'
import PescadosEnvasadosNutricionalInformationA from './PescadosEnvasadosNutricionalInformationA.jsx'
import MariscosNutricionalInformationA from './MariscosNutricionalInformationA.jsx'
import QuesosNutricionalInformationA from './QuesosNutricionalInformationA.jsx'
import CarnesNutricionalInformationA from './CarnesNutricionalInformationA.jsx'



export default function ScrollabeTabsButtonAuto() {

    const [value, setValue] = useState('1');
    
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return <>
        <Box sx={{ width:'100%' }} >
            <TabContext value={value}>
                <Box sx={{ borderBottom:1, borderColor:'divider', width:'100%' }}>
                    <TabList onChange={handleChange} >
                        <Tab label="Huevos" value="1" />
                        <Tab label="Carnes" value="2"/>
                        <Tab label="Pescados" value="3"/>
                        <Tab label="Mariscos" value="4"/>
                        <Tab label="Quesos" value="5"/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <HuevosNutricionalInformationA />
                </TabPanel>
                <TabPanel value="2">
                    <CarneNutricionalInformationA/>
                    <Box sx={{height:'15px'}}></Box>
                    <CarneNutricionalInformationB />
                    <Box sx={{height:'15px'}}></Box>
                    <CarnesNutricionalInformationA />
                </TabPanel>
                <TabPanel value="3">
                    <PescadoNutricionalInformationA/>
                </TabPanel>
                <TabPanel value="4">
                    <MariscosNutricionalInformationA />
                </TabPanel>
                <TabPanel value="5">
                    <QuesosNutricionalInformationA />
                </TabPanel>
            </TabContext>
        </Box>
    </>





}

