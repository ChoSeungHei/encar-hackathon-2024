import { Box } from "@mui/material"

interface Props {
    id:string
}

const PartDetail = ({id}:Props) => {
  console.log(id)
  
    return <Box sx={{ width: 400, paddingLeft:2 }}>
      <h2>{id}</h2>
      <h3>Inspection results</h3>
      <h3>What is the passenger side glass?</h3>
    </Box>
}

export default PartDetail