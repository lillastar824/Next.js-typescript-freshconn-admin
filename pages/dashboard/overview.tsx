import { DashCard } from '../../components/DashCard';
import styled from 'styled-components'
import { useContext } from 'react';
import { ApiContext } from '../../ context/ApiContext';
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(239,108,0,0.2)",
      borderColor: "#EF6C00"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#7CB342"
    }
  ]
};

const legend = {
  display: true,
  fullWidth: true,
  reverse: false,
  labels: {
    fontColor: 'rgb(255, 99, 132)'
  }
};

const options = {
  title: {
    display: true,
    text: "Freshconn Sales Chart"
  },
  // legend: {
  //   position: 'bottom'
  // },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};

const Container = styled.div`
`
export default function Overview() {

  const { markets, farmers, users } = useContext(ApiContext)

  const db = [
    { id: 1, title: "Markets", value: markets && markets.length },
    { id: 2, title: "Farmers", value: farmers && farmers.length },
    { id: 3, title: "Customers", value: users && users.length },
    { id: 4, title: "Sales", value: 1500 }
  ]

  return (
    <Container className="flex flex-wrap w-full mt-8 justify-evenly place-items-center">
      {db.map(i => (
        <DashCard key={i.id} title={i.title} value={i.value} />
      ))}
      <div className="m-5" style={{ height: "515px", width: "100%" }}>
        <Line data={data} legend={legend} options={options} />
      </div>
    </Container>
  )
}