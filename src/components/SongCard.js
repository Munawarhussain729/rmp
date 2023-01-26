import React from 'react'
import { Card } from 'react-bootstrap'
const SongCard = ({songName}) => {
  return (
    <div>
      <Card style={{color:"black", padding:"4px"}}>
        <p>{songName}</p>
      </Card>
    </div>
  )
}

export default SongCard