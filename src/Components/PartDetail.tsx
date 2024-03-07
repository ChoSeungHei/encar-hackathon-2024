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

  const hasInspection = selectedPart.inspection_result !== '';
    return <Box sx={{ width: 370, paddingLeft:2 }}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <span style={{fontSize:22, fontWeight:600, marginBottom:10, display:'block'}}>{selectedPart.name}</span>
        <IconButton onClick={onClose}>
          <CloseIncon />
        </IconButton>
      </div>
      {
        hasInspection ? 
        <>
          <h3 style={{marginBottom:10}}>Inspect results</h3>
          <p>{selectedPart.inspection_result}</p>
          <img src={selectedPart.inspectionImg} style={{marginTop:10}}></img>
          <hr style={{border:'1px solid #666', margin:'40px 30px 40px 20px'}}></hr>
        </> : <></>
      }
      {
        hasInspection ? 
        <>
          <h3 style={{marginBottom:10}}>😮 What is the {selectedPart.name}?</h3>
          <p>{selectedPart.desc}</p>
          <img src={selectedPart.img} style={{marginTop:10}}></img>
        </> : 
        <>
          <img src={selectedPart.img} style={{marginTop:10}}></img>
          <div>{selectedPart.desc}</div>
        </>
      }
      
      
    </Box>
}

export default PartDetail