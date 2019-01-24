import React from "react";
import { Route, Redirect } from "react-router-dom";

export class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isAuthenticated: false
    };
  }
  componentDidMount() {
    debugger;
    setTimeout(() => {
      this.setState({
        loading: false,
        isAuthenticated: false
      });
    }, 4000);
  }
  render() {
    debugger;
    const { component: Component, ...rest } = this.props;
    if (this.state.loading) {
      return <div />;
    } else {
      return (
        <Route
          {...rest}
          render={props => (
            <div>
              {!this.state.isAuthenticated && (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                  }}
                />
              )}
              <Component {...this.props} />
            </div>
          )}
        />
      );
    }
  }
}

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => {
//       const isSessionExist = true; //localStorage.getItem("current-user");
//       alert("hiiiii");
//       setTimeout(() => {
//         if (isSessionExist) return <Component {...props} />;
//         else
//           return (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           );
//       }, 100000);
//     }}
//   />
// );
