import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

function BarChart({data}){

    return(
        <Card style={{ width: '20rem' }}>
          <Card.Title>Bar Chart</Card.Title>
            <Bar
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

export default BarChart;