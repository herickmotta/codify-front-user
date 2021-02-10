import React, { useState } from "react";
import Select from "react-select";
import { IoIosArrowBack } from "react-icons/io";
import { Container, Icon, Topics } from "./style";

export default function Header({ list }) {
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState(list);
  return (
    <Container>
      <Icon>
        <IoIosArrowBack />
      </Icon>
      <Topics>
        <Select options={options} defaultValue={options[0]} />
      </Topics>
    </Container>
  );
}
