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
                  <p>1 Teoria e {chapter.exercisesAmount} Exercícios</p>
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
                <p>Visualizar</p>
              </AccordionItemPanel>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
