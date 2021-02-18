import React from "react";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Container, Icon, Topics } from "./style";

export default function Header({ options, courseId }) {
  // const { currentTopic, list } = options;
  const history = useHistory();
  return (
    <Container>
      <Icon onClick={() => history.push(`/courses/${courseId}`)}>
        <IoIosArrowBack />
      </Icon>

      {options && (
        <Topics>
          <h1>{options.currentTopic}</h1>
          <IoIosArrowDown />
        </Topics>
      )}
    </Container>
  );
}
