import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import ToggleViewer from "./ToggleViewer";

class BugChart extends Component {
  state = {
    isLoading: true,
    bugPointsOverMonth: 0,
  };

  componentDidMount() {
    //apiFunc(()=> {})
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    const data = {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Bug points every 30 days ",
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,100,64,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [13, 17, 25, 33],
        },
      ],
    };
    if (isLoading) return <p>Bug chart is loading...</p>;
    return (
      <div>
        <ToggleViewer label="Show Chart" default="true">
          <Bar
            data={data}
            width={100}
            height={300}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </ToggleViewer>
      </div>
    );
  }
}

export default BugChart;
