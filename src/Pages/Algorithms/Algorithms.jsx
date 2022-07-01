import { Paper, Typography } from '@mui/material'
import React from 'react'

const Algorithms = () => {
  return (
    <Paper
    elevation={0}
      sx={{
        width: "100vw",
        paddingLeft:{xs:"10px", sm:"320px"},
        height: "90vh",
        backgroundColor: "transparent",
        position: "absolute",
        zIndex: -3,
        right: 5,
        margin: "8px 2px",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h3">Algorithms</Typography>
    </Paper>
  )
}

export default Algorithms