import {Radar} from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

function RadarChart({data}){
  return(
    <Card style={{ width: '20rem' }}>
    <Card.Title>Radar Chart</Card.Title>
      <Radar
        data={data}
        width={100}
        height={250}
        options={{
          maintainAspectRatio: false
        }}
      />
  </Card>
  )
}

export default RadarChart;