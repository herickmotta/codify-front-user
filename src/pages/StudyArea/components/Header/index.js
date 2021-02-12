import React from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { IoIosArrowBack } from "react-icons/io";
import { Container, Icon, Topics } from "./style";

export default function Header({ options, courseId, teste }) {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  let index;
  if (options) index = options.index;
  return (
    <Container>
      <Icon onClick={() => history.push(`/courses/${courseId}`)}>
        <IoIosArrowBack />
      </Icon>
      <Topics>
        {options && (
          <Select
            options={options.list}
            defaultValue={options.list[index]}
            onChange={teste}
          />
        )}
      </Topics>
    </Container>
  );
}
