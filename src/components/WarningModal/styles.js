import styled from "styled-components";
import Colors from "../../config/colors";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: Colors.blue,
    padding: "10px",
    borderRadius: "10px",
  },
};

export const Icon = styled.div`
  font-size: 40px;
  color: ${Colors.green};
`;
