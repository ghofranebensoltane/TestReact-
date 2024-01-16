import { TableRow, TableCell, TableBody} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CdiRow, FreeRow } from "@/models/row-model"
import { TableContext } from "@/context/TableContext"
import { useContext } from "react"


export default function TableFreeRowComponent({row}: {row: FreeRow}) {
const{removeFreeRow, updateFreeRow} = useContext(TableContext);
  
  return (
    <TableBody>
        <TableRow>
              <TableCell className="font-medium">
              </TableCell>
              <TableCell>
                <Input placeholder="€/heure" type="number" defaultValue={row.hourlyRate} onChange={handleRateChange}/>
              </TableCell>
              <TableCell>
                <Input type="number" defaultValue={row.hoursWorked}  onChange={handleWorkingHoursChange}/>
              </TableCell>
              <TableCell>
                <Input type="number" defaultValue={row.workingDaysPerYear} onChange={handleYearsWorkedChange}/>
              </TableCell>
              <TableCell>
                <Input type="number" defaultValue={row.year} onChange={handleYearChange}/>
              </TableCell>
              <TableCell>
                <Button className="text-black bg-transparent hover:bg-white" onClick={() => removeFreeRow(row.id)}>
                  <TrashIcon className="h-6 w-6 hover:text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
    </TableBody>
  )

  function handleRateChange(event){
    row.hourlyRate = +event.target.value;
    updateFreeRow(row);
  }
  function handleWorkingHoursChange(event){
    row.hoursWorked = +event.target.value;
    updateFreeRow(row);
  }
  function handleYearsWorkedChange(event){
    row.workingDaysPerYear = +event.target.value;
    updateFreeRow(row);
  }
  function handleYearChange (event) {
    row.year = +event.target.value;
    updateFreeRow(row);
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
