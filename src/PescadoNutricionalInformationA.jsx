import * as React from 'react';
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function createData(name, calories, protein, fat, carbohydrates) {
    return { name, calories, protein, fat, carbohydrates };
}

const rows = [
    createData('Rodaballo',81,16.3,1.3,1.2),
    createData('Salmón',176,18.4,12.0,0.0),
    createData('Salmonete',123,15.8,6.2,1.1),
    createData('Sardina',124,15.0,4.0,1.1),
    createData('Sepia',73,14.0,1.5,0.7),
    createData('Trucha',96,'-','-','-'),                
]


export default function PescadoNutricionalInformationA(){
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
