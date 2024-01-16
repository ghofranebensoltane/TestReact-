"use client"

import { CdiRow, FreeRow } from '@/models/row-model';
import { log } from 'console';
import React, {createContext, useEffect, useState} from 'react'
const { v4: uuidv4 } = require('uuid');

export const TableContext = createContext({});

export const TableProvider = ({children}) => {
    const [cdiRows, setCdiRows] = useState([
        {id: uuidv4(), monthSalary: 0, year: 0},
    ]);
    const [freeRows, setFreeRows] = useState([
        {id: uuidv4(), hourlyRate: 0, hoursWorked: 0, workingDaysPerYear: 0, year: 0},
    ]);

    const addCdiRow = () => {
        let tempRow: CdiRow = {id: uuidv4(), monthSalary: 0, year: 0};
        setCdiRows([...cdiRows, tempRow]);
    };
    const addFreeRow = () => {
        let tempRow: FreeRow = {id: uuidv4(), hourlyRate: 0, hoursWorked: 0, workingDaysPerYear: 0, year: 0};
        setFreeRows([...freeRows, tempRow]);
    };

    const removeCdiRow = (rowId: number) => {
        let rowsFiltered: CdiRow[] = cdiRows.filter((row) => row.id !== rowId);
        setCdiRows(rowsFiltered);
    }
    const removeFreeRow = (rowId: number) => {
        let rowsFiltered: FreeRow[] = freeRows.filter((row) => row.id !== rowId);
        setFreeRows(rowsFiltered);
    }

    const updateCdiRow = (row: CdiRow) => {
        let indexOfRow: number = cdiRows.indexOf(row);
        let tempRows: CdiRow[] = [...cdiRows];
        tempRows[indexOfRow] = row;
        console.log("row ", row)
        console.log("tempRowss", tempRows)
        setCdiRows(tempRows);
    }
    const updateFreeRow = (row: FreeRow) => {
        let indexOfRow: number = freeRows.indexOf(row);
        let tempRows: FreeRow[] = [...freeRows];
        tempRows[indexOfRow] = row;
        console.log("tempRowss", tempRows)
        setFreeRows(tempRows);
    }


    const [total, setTotal] = useState(0);
    const [totalTaxes, setTotalTaxes] = useState(0);


    useEffect(() => {
     let totalCdi: number = 0;
     cdiRows.forEach((cdiRow: CdiRow) => {
        console.log("aa", cdiRow)
        totalCdi += cdiRow.monthSalary;
     })
     
     let totalFree: number = 0;
     freeRows.forEach((freeRow: FreeRow) => {
        totalFree += (freeRow.hourlyRate*freeRow.hoursWorked*freeRow.workingDaysPerYear);
     })

     setTotal(totalCdi + totalFree);
     setTotalTaxes((totalCdi + totalFree)* 0.75)

    },[cdiRows, freeRows])

    return(
        <TableContext.Provider value={{cdiRows, addCdiRow, freeRows, addFreeRow, removeCdiRow, removeFreeRow, total, totalTaxes, updateFreeRow, updateCdiRow}}>
            <div>{children}</div>
        </TableContext.Provider>
    )
}