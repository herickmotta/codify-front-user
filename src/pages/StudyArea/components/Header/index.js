import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Container, Icon, Topics } from "./style";

export default function Header({ options, courseId, openMenu, setOpenMenu }) {
  const [topicName, setTopicName] = useState();

  useEffect(() => {
    if (options) {
      const { list, currentChapterIndex, currentTopicIndex } = options;
      setTopicName(
        list[currentChapterIndex].chapterData[currentTopicIndex].name
      );
    }
  }, [options]);

  const history = useHistory();
  return (
    <Container>
      <Icon onClick={() => history.push(`/courses/${courseId}`)}>
        <IoIosArrowBack />
      </Icon>

      {topicName && (
        <Topics openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
          <h1>{topicName}</h1>
          <IoIosArrowDown size={30} />
        </Topics>
      )}
    </Container>
  );
}
