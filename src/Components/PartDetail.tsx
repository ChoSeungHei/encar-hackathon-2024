import { Box, IconButton } from "@mui/material"
import { PARTS } from "../constants"
import { CloseIncon } from "../Assets/tab-icons/icons"

interface Props {
    id:string
    selectedTab:string
    onClose:()=>void
}

const PartDetail = ({id, selectedTab, onClose}:Props) => {
  //@ts-ignore
  const selectedPart = PARTS[selectedTab].find((item)=> item.id === id)

  const hasInspection = selectedPart.inspection_result;
    return <Box sx={{ width: 400, paddingLeft:2 }}>
      <div>
        <h2>{selectedPart.name}</h2>
        <IconButton onClick={onClose}>
          <CloseIncon />
        </IconButton>
      </div>
      {
        hasInspection ? 
        <h3>Inspect results</h3> : <></>
      }
      {
        hasInspection ? 
        <>
        <h3>What is the {selectedPart.name}?</h3>
        <div>{selectedPart.desc}</div>
        </> : <><div>{selectedPart.desc}</div></>
      }
      
      
    </Box>
}

export default PartDetail