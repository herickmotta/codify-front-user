/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../contexts/UserContext";
import CoursesService from "../../services/CoursesService";
import SignIn from "../SignIn";
import CardsSection from "./components/CardsSection";
import SnippetSection from "./components/SnippetSection";
import WelcomeBanner from "./components/WelcomeBanner";
import { Container, MainContent } from "./styles";

export default function Home() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  if (!user) {
    history.push("/");
    return <SignIn />;
  }
  useEffect(async () => {
    const data = await CoursesService.getAll(user.token);
    if (data.success) {
      setCourses(data.success);
    } else {
      alert("Erro ao carregar cursos");
    }
  }, []);

  return (
    <Container>
      <Header />
      <WelcomeBanner />
      <MainContent>
        {courses.length > 0 && (
          <>
            <SnippetSection
              title="Continue seu curso atual"
              course={courses[0]}
            />

            <CardsSection title="Meus cursos em andamento" courses={courses} />
            <CardsSection
              title="Experimente nossos outros cursos"
              courses={courses}
            />
          </>
        )}
      </MainContent>
    </Container>
  );
}
