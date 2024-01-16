
"use client"

import { TableHead, TableRow, TableHeader, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import TableCdiRowComponent from "./table-cdi-row-component";
import TableFreeRowComponent from "./table-free-row-component";
import { useContext } from "react";
import { TableContext } from "@/context/TableContext";
import { CdiRow, FreeRow } from "@/models/row-model";




export function V0Table() {
  const {cdiRows, addCdiRow, freeRows, addFreeRow, total, totalTaxes} = useContext(TableContext);

  return (
    <div key="1" className="w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Calculateur de revenus</h2>
      </div>
      <div className="w-[80%] mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[15%]">Salaire par mois</TableHead>
              <TableHead className="w-[15%]">Taux horaire</TableHead>
              <TableHead className="w-[15%]">Heures par jour</TableHead>
              <TableHead className="w-[15%]">Jours par an</TableHead>
              <TableHead className="w-[15%]">Année</TableHead>
              <TableHead className="w-[25%]"></TableHead>
            </TableRow>
          </TableHeader>
          {renderCdiRows()}
          {renderFreeRows()}
        </Table>
        <div className="flex justify-center mt-4 gap-4">
          <Button className="text-blue-500 border border-blue-500 bg-white hover:bg-blue-500 hover:text-white" onClick={addCdiRow}>
            AJOUTER UN REVENU DE CDI
          </Button>
          <Button className="text-blue-500 border border-blue-500 bg-white hover:bg-blue-500 hover:text-white" onClick={addFreeRow}>
            AJOUTER UN REVENU DE FREELANCE
          </Button>
        </div>
      </div>
      <div className="total">
       <span>Total: {total}</span>
       <span>Total après taxes: {totalTaxes}</span>
      </div>
    </div>
  )

  function renderCdiRows(){
    return (
      cdiRows.map((row: CdiRow) => <TableCdiRowComponent key={row.id} row={row}></TableCdiRowComponent> )
     )
  }
  function renderFreeRows(){
    return (
      freeRows.map((row: FreeRow) => <TableFreeRowComponent key={row.id} row={row}></TableFreeRowComponent> )
     )
  }
   
   
}




