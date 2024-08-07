import * as React from 'react';
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function createData(name, calories, protein, fat, carbohydrates) {
    return { name, calories, protein, fat, carbohydrates };
}

const rows = [
    createData('Brie',263,17.0,21.0,1.67),
    createData('Camembert',301,20.5,25.7,0.9),
    createData('Cheddar',381,25.0,31.0,0.5),
    createData('Edam',306,26.0,22.0,1.0),
    createData('Emmental',404,28.5,30.6,3.6),
    createData('Gruyère',393,29.0,30.0,1.5),
    createData('Mozzarella',245,19.9,16.1,4.9),
    createData('Parmesano',374,36.0,25.6,'-'), 
    createData('Queso de oveja',380,28.2,29.5,'-'),
    createData('Requesón',96,13.6,4.0,1.4),
    createData('Roquefort',413,23.0,35.0,2.0),
    createData('Queso crema',200,10.0,16.6,6.6),
    createData('Queso de cabra',173,16.0,10.3,3.7), 
    createData('Queso fresco',307,24.0,23.0,1.0),
    createData('Queso fresco diet',230,24.0,15.0,1.0),
    createData('Queso fundido unt.',285,10.0,25.9,2.9),
    createData('Queso petit Suisse',165,7.5,13.0,3.5),
    createData('Queso provolone',392,30.5,30.0,'-'), 
    createData('Queso rallado',427,42.5,28.5,'-'),    
                    
]


export default function QuesosNutricionalInformationA(){
    return <>
        <TableContainer component={Paper} sx={{ boxShadow:5}}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                    <TableCell align="center" sx={{fontWeight:'bold'}}>name</TableCell>
                    <TableCell align="center">calories (Kcal/100g)</TableCell>
                    <TableCell align="center">protein (g)</TableCell>
                    <TableCell align="center">fat (g)</TableCell>
                    <TableCell align="center">carbohydrates (g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { rows.map((row) => (
                    <TableRow
                        key={row.name}
                    >
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.protein}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                        <TableCell align="center">{row.carbohydrates}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}
