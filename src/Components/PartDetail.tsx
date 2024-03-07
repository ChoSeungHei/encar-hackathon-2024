import { Box } from "@mui/material"

interface Props {
    title:string
    desc:string
}

const inspectionResultMap = {
  'Center fascia':
  {
    result: 'The frequently used ventilation button appears to be a bit rough. You can easily replace the button cover by purchasing it separately for about 20,000 won.',
    desc:'This is a stepping stone that allows easy entry and exit of tall vehicles such as SUVs. If a vehicle is used by many children and the elderly, it is better to have side steps.'
  },
  'Passenger side glass':{
    result:''
  }
}

const ListItemDetail = ({title}:Props) => {
    return <Box sx={{ width: 400 }}>
      <h2>{title}</h2>
      <h3>Inspection results</h3>
      
      <h3>What is the passenger side glass?</h3>
    </Box>
}

export default ListItemDetail