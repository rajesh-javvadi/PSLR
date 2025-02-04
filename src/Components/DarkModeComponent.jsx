import React, { Component } from "react";
import "./DarkMode.css";

class DarkMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }


  setDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    this.setState({ isDarkMode: true });
  };


  setLight = () => {
    // localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    this.setState({ isDarkMode: false });
  };


  toggleTheme = (e) => {
    if (e.target.checked) {
      this.setDark();
    } else {
      this.setLight();
    }
  };

  render() {
    return (
      <div className="toggle-theme-wrapper col-2">
        <span>☀️</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={this.toggleTheme}
            checked={this.state.isDarkMode}
          />
          <div className="slider round"></div>
        </label>
        <span>🌒</span>
      </div>
    );
  }
}

export default DarkMode;
