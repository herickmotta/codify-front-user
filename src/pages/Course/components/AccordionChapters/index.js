import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function AccordionChapters({ chapters }) {
  return (
    <Accordion className="accordion">
      {chapters.map((chapter) => (
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{chapter.name}</AccordionItemButton>
          </AccordionItemHeading>
          {chapter.topics.map((topic) => (
            <AccordionItemPanel>
              <p>{topic.name}</p>
            </AccordionItemPanel>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
