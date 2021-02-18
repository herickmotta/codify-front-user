/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import React, { useContext, useState } from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import { Link } from "react-router-dom";
import UserContext from "../../../../contexts/UserContext";
import { Container } from "./styles";
import CoursesService from "../../../../services/CoursesService";

export default function AccordionChapters({ chapters, courseId }) {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  chapters.forEach((chapter) => {
    let exercisesAmount = 0;
    chapter.topics.forEach((topic) => {
      exercisesAmount += topic.exercises.length;
    });
    chapter.exercisesAmount = exercisesAmount;
    chapter.classesAmount = chapter.topics.length;
  });

  async function getProgress(chapter) {
    const data = await CoursesService.getChaptersProgress(
      courseId,
      chapter.id,
      user.token
    );
    if (data.success) {
      chapter.topics.forEach((topic, i) => {
        topic.progress = data.success[i];
      });

      setLoading(false);
    } else {
      alert("Erro no servidor, por favor tente novamente mais tarde.");
    }
  }

  return (
    <Container>
      <Accordion className="accordion">
        {chapters.map((chapter) => (
          <AccordionItem>
            <AccordionItemHeading
              className="item-heading"
              onClick={() => getProgress(chapter)}
            >
              <AccordionItemButton>
                <div className="item">
                  <h2>{chapter.name}</h2>
                  <p>
                    {chapter.classesAmount > 1
                      ? `${chapter.classesAmount} Aulas`
                      : `${chapter.classesAmount} Aula`}
                    &nbsp; • &nbsp;
                    {chapter.exercisesAmount} Exercícios
                  </p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            {chapter.topics.map((topic) => (
              <AccordionItemPanel className="itemPanel">
                <div>
                  {!loading &&
                    (topic.progress ? <AiFillCheckCircle /> : <BiCircle />)}
                  <p>{topic.name}</p>
                </div>
                <Link
                  to={() =>
                    `/courses/${courseId}/chapters/${chapter.id}/topics/${topic.id}`
                  }
                >
                  Visualizar
                </Link>
              </AccordionItemPanel>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
