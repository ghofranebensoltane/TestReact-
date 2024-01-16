import { TableRow, TableCell, TableBody} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CdiRow } from "@/models/row-model"
import { TableContext } from "@/context/TableContext"
import { useContext, useEffect } from "react"

export default function TableCdiRowComponent({row}: {row: CdiRow}) {
  const{removeCdiRow, updateCdiRow} = useContext(TableContext);


  return (
    <TableBody key="33">
        <TableRow>
              <TableCell className="font-medium">
                <Input placeholder="€/mois" type="number" defaultValue={row.monthSalary} onChange={handleSalarychange}/>
              </TableCell>
              <TableCell>
              </TableCell>
              <TableCell>
              </TableCell>
              <TableCell>
              </TableCell>
              <TableCell>
                <Input type="number" defaultValue={row.year} onChange={handleYearChange}/>
              </TableCell>
              <TableCell>
                <Button className="text-black bg-transparent hover:bg-white" onClick={() => removeCdiRow(row.id)}>
                  <TrashIcon className="h-6 w-6 hover:text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
    </TableBody>
  )

  function handleSalarychange (event) {
   row.monthSalary = +event.target.value;
   updateCdiRow(row);
  }

  function handleYearChange (event) {
    row.year = +event.target.value;
    updateCdiRow(row);
  }
}



function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2v2" />
    </svg>
  )
}
