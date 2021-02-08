import {Line} from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

function LineGraph({data}){
  return(
    <Card style={{ width: '20rem' }}>
    <Card.Title>Line Graph</Card.Title>
      <Line
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

export default LineGraph;
