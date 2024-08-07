import * as React from 'react';
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function createData(name, calories, protein, fat, carbohydrates) {
    return { name, calories, protein, fat, carbohydrates };
}

const rows = [
    createData('Anguila',264,11.8,23.7,0.1),
    createData('Arenque',174,17.7,11.5,0.0),
    createData('Atún fresco',158,21.5,8.0,0.0),
    createData('Bacalao',122,29.0,0.7,0.0),
    createData('Boquerón',96,16.8,2.6,1.5),
    createData('Caballa',170,17.0,11.1,0.0),
    createData('Dorada',104,19.8,2.9,0.0),
    createData('Gallo',78,16.2,0.9,1.2),
    createData('Lenguado',82,18.6,1.2,0.0),
    createData('Lubina',82,16.6,1.5,0.6),
    createData('Lucio',81,17.1,0.6,0.0),
    createData('Merluza',71,17.2,0.3,0.0),
    createData('Mero',80,17.9,3.0,0.6),
    createData('Pez espada',109,16.9,4.2,1.0),                
]


export default function PescadosNutricionalInformationA(){
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
