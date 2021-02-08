import {Pie} from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

function PieChart({data}){
  return(
    <Card style={{ width: '20rem' }}>
    <Card.Title>Pie Chart</Card.Title>
      <Pie
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

export default PieChart;