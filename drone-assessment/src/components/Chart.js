import React from "react";
import Chart from "react-google-charts";

class Graph extends React.Component {
  render() {
    const { data } = this.props;
    let rows = [];
    const columns = [
      { label: "metric", type: "number" },
      { label: "timestamp", type: "date" }
    ];
    if (data) {
      rows = data.map(point => [
        new Date(point.timestamp),
        parseInt(point.metric, 10)
      ]);
      rows = rows.reverse();
      rows[0] = ["timestamp", "metric"];
    }

    debugger;
    return (
      <div>
        {data && (
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={rows}
            options={options}
            columns={columns}
          />
        )}
      </div>
    );
  }
}

// const data = [
//   {  accuracy: 21.83371726425943,
//     latitude: 34.758624518097626,
//     longitude: -95.6393023481159,
//     metric: 276.1493305484061,
//     timestamp: 1541160628000},
// ];
// const data1 = [
//   ["timestamp", "accuracy"],
//   [1541151488000, 300],
//   [1541151487000, 200],
//   [1541151486000, 350],
//   [1541151485000, 222]
// ];
// const options = {
//   title: "Company Performance",
//   curveType: "function",
//   legend: { position: "bottom" }
// };
const options = {
  chart: {
    title: "Students' Final Grades",
    subtitle: "based on hours studied"
  },
  curveType: "function",
  vAxis: { title: "accuracy" },
  hAxis: { title: "timestamp", format: "hh : mm" }
};

// const data = [
//   {
//     timestamp: 1541182392000,
//     metric: 310.65388441148446,
//     latitude: 32.711900951999446,
//     longitude: -91.3262331152311,
//     uom: "temperature - fahrenheit",
//     accuracy: 10.867491476633242
//   },
//   {
//     timestamp: 1541182396000,
//     metric: 311.00373331587184,
//     latitude: 32.65097079293534,
//     longitude: -91.2825020021827,
//     uom: "temperature - fahrenheit",
//     accuracy: 71.16933755283017
//   },
//   {
//     timestamp: 1541182400000,
//     metric: 311.3462315180903,
//     latitude: 32.589391546288354,
//     longitude: -91.23968972690538,
//     uom: "temperature - fahrenheit",
//     accuracy: 82.45070432664501
//   },
//   {
//     timestamp: 1541182404000,
//     metric: 311.6813019574893,
//     latitude: 32.527177067129195,
//     longitude: -91.1978059219805,
//     uom: "temperature - fahrenheit",
//     accuracy: 44.20514116344284
//   },
//   {
//     timestamp: 1541182408000,
//     metric: 312.0088692446337,
//     latitude: 32.464341353453214,
//     longitude: -91.15686001108746,
//     uom: "temperature - fahrenheit",
//     accuracy: 55.36567479429118
//   },
//   {
//     timestamp: 1541182412000,
//     metric: 312.32885967826553,
//     latitude: 32.4008985430309,
//     longitude: -91.11686120688348,
//     uom: "temperature - fahrenheit",
//     accuracy: 54.21282062068399
//   }
// ];
export default Graph;
