import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { IoIosArrowBack } from "react-icons/io";
import { Container, Icon, Topics } from "./style";

export default function Header({ list, courseId }) {
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState(list);
  const history = useHistory();

  return (
    <Container>
      <Icon onClick={() => history.push(`/courses/${courseId}`)}>
        <IoIosArrowBack />
      </Icon>
      <Topics>
        <Select options={options} defaultValue={options[0]} />
      </Topics>
    </Container>
  );
}
