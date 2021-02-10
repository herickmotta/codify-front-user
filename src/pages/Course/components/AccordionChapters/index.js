/* eslint-disable no-param-reassign */
import React from "react";

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

import { Container } from "./styles";

export default function AccordionChapters({ chapters }) {
  chapters.forEach((chapter) => {
    let exercisesAmount = 0;
    chapter.topics.forEach((topic) => {
      exercisesAmount += topic.exercises.length;
    });
    chapter.exercisesAmount = exercisesAmount;
  });

  return (
    <Container>
      <Accordion className="accordion">
        {chapters.map((chapter) => (
          <AccordionItem>
            <AccordionItemHeading className="item-heading">
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
                  <BiCircle />
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
