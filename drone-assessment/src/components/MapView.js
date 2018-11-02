import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import ChipRaw from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import Map from "./Map";
import Graph from "./Chart";

const cardStyles = theme => ({
  root: {
    background: theme.palette.secondary.main
  },
  label: {
    color: theme.palette.primary.main
  }
});
const Chip = withStyles(cardStyles)(ChipRaw);

class MapView extends Component {
  componentDidMount() {
    this.props.onLoad();
    //   alert("hii");
  }

  render() {
    const { data, grapgData } = this.props;

    return (
      <div>
        <div style={{ float: "left", width: "48%" }}>
          <Map data={data} />
        </div>
        <div style={{ float: "right", width: "48%" }}>
          <Graph data={grapgData} />
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const { loading, weather } = state;
  const { data, grapgData } = weather;
  return {
    loading,
    data: data,
    grapgData: grapgData
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.WEATHER_DRONE_DATA
    })
});

export default connect(
  mapState,
  mapDispatch
)(MapView);
