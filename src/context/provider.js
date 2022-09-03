import AppContext from "./context";
import React from "react";

class AppProvider extends React.Component {
  state = {
    userData: null,
  };

  updateUserData = (data) => {
    this.setState({ userData: data });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          userData: this.state.userData,
          updateUserData: this.updateUserData,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
