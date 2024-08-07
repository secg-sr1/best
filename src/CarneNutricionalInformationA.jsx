import * as React from 'react';
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper } from '@mui/material';


function createData(name, calories, protein, fat, carbohydrates) {
    return { name, calories, protein, fat, carbohydrates };
}

const rows = [
    createData('Bistec de ternera',92,20.7,1.0,0.5),
    createData('Pechuga de pollo',165,31.0,3.6,0.0),
    createData('Muslo de pollo',109,13.5,5.7,0.0),
    createData('Lomo de res',217,26.1,11.8,0.0),
    createData('Cerdo carne magra',146,19.9,6.8,0.0),
    createData('Cerdo carne grasa',398,14.5,37.3,0.0),
    createData('Ciervo',120,20.3,3.7,0.6),
    createData('Codorniz',162,25.0,6.8,0.0),
    createData('Conejo',102-138,21.2,6.6,0.0),
    createData('Cordero lechal',105,21.0,2.4,0.0),
    createData('Cordero (pierna)',98,17.1,3.3,0.0),
    createData('Faisán',144,24.3,5.2,0.0),
    createData('Hígado de cerdo',141,22.8,4.8,1.5),
    createData('Hígado de vacuno',129,21.0,4.4,0.9),
    createData('Jabalí',107,21.0,2.0,0.4),                
]


export default function CarneNutricionalInformationA(){
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
