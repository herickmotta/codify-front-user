/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import UserContext from "../../contexts/UserContext";
import CoursesService from "../../services/CoursesService";
import UserService from "../../services/UserService";
import SignIn from "../SignIn";
import CardsSection from "./components/CardsSection";
import SnippetSection from "./components/SnippetSection";
import WelcomeBanner from "./components/WelcomeBanner";
import { Container, MainContent } from "./styles";

export default function Home() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [coursesStarted, setCoursesStarted] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  if (!user) {
    history.push("/");
    return <SignIn />;
  }

  const getAllCoursesStarted = async () => {
    const data = await CoursesService.getAllCoursesStarted(user.token);
    if (data) {
      setCoursesStarted(data);
    } else {
      alert("Erro ao carregar cursos");
    }
  };

  const getAllCoursesNotStarted = async () => {
    const data = await CoursesService.getAllCoursesNotStarted(user.token);
    if (data) {
      setCourses(data);
    } else {
      alert("Erro ao carregar cursos");
    }
  };

  useEffect(async () => {
    getAllCoursesStarted();
    getAllCoursesNotStarted();
  }, []);

  const logOut = async () => {
    setLoading(true);
    const data = await UserService.logOut(user.token);
    setLoading(false);
    if (data) {
      history.push("/");
      localStorage.clear();
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header logOut={() => logOut()} loading={loading} />
      <WelcomeBanner isSomeCourseStarted={coursesStarted.length === 0} />
      <MainContent>
        {coursesStarted.length === 0 ? (
          <>
            <CardsSection
              title="Experimente nossos outros cursos"
              courses={courses}
            />
          </>
        ) : (
          <>
            <SnippetSection
              title="Continue seu curso atual"
              course={coursesStarted[0]}
            />

            <CardsSection
              title="Meus cursos em andamento"
              courses={coursesStarted}
            />
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
