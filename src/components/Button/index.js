import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import ReactGa from "react-ga";
import Spinner from "../Spinner";
import Container from "./styles";

ReactGa.initialize("G-H5Y1EF26D5");
function Button({ loading, onClick, disabled, text, type, width, height }) {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {loading ? <Spinner /> : text}
    </Container>
  );
}

export default withRouter(Button);
