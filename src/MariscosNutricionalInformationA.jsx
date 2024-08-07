import * as React from 'react';
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function createData(name, calories, protein, fat, carbohydrates) {
    return { name, calories, protein, fat, carbohydrates };
}

const rows = [
    createData('Almeja',73,10.2,2.5,2.2),
    createData('Calamar',68,12.6,1.7,0.7),
    createData('Gamba',65,13.6,0.6,2.9),
    createData('Langosta',88,16.2,1.9,0.5),
    createData('Langostino',115,17.9,4.3),
    createData('Mejillones',66,11.7,2.7,3.4),
    createData('Ostra',44,5.8,0.5,3.5),
    createData('Pulpo',57,10.6,1.0,1.4), 
    createData('Vieira',78,14.8,0.1,3.4),  
                    
]


export default function MariscosNutrionalInformationA(){
    return <>
        <TableContainer component={Paper} sx={{ boxShadow:5}}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                    <TableCell align="center">name</TableCell>
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
