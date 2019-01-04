import React from "react";
import { Link, Route } from "react-router-dom";

export const NestedView = ({ match }) => {
  debugger;
  return (
    <div>
      {/*default message*/}
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a section:</h3>}
      />
      <Link to={`${match.url}/info`}>Info - </Link>
      <Link to={`${match.url}/about`}>About - </Link>
      <Link to={`${match.url}/contacts`}>Contact</Link>
      <Route path={`${match.url}/info`} component={Info} />
      <Route path={`${match.url}/about`} component={About} />
      <Route path={`${match.url}/contacts`} component={Contact} />
    </div>
  );
};

const Info = ({ match }) => (
  <div>
    <h3>Info: {match.params.sectionName}</h3>
  </div>
);

const About = ({ match }) => (
  <div>
    <h3>About: {match.params.sectionName}</h3>
  </div>
);

const Contact = ({ match }) => (
  <div>
    <h3>Contact: {match.params.sectionName}</h3>
  </div>
);
