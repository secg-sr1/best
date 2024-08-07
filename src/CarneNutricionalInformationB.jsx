import * as React from 'react';
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function createData(name, calories, protein, fat, carbohydrates) {
    return { name, calories, protein, fat, carbohydrates };
}

const rows = [
    createData('Lacón',361,19.2,31.6,0.0),
    createData('Liebre',126,22.8,3.2,0.0),
    createData('Pato',288,15.9,24.9,0.0),
    createData('Pavo pechuga',134,22.0,4.9,0.4),
    createData('Pavo muslo',186,30.9,11.2,0.4),            
]


export default function CarneNutricionalInformationB(){
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
