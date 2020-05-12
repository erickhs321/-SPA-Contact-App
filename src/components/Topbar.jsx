import React from "react";
import Container from "./Container";

class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar">
        <Container>
          <a href="/" className="topbar__logo">
            {this.props.children}
          </a>
        </Container>
      </header>
    );
  }
}

export default Topbar;
