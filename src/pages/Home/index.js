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
import { Container, MainContent, SpinnerBox } from "./styles";
import GoogleAnalyticsTracker from "../../hooks/GoogleAnalyticsTracker";
import Spinner from "../../components/Spinner";
import Colors from "../../config/colors";

export default function Home() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [coursesStarted, setCoursesStarted] = useState([]);
  const [snippetCourse, setSnippetCourse] = useState({});
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  if (!user) {
    history.push("/");
    return <SignIn />;
  }

  const getAllCoursesStarted = async () => {
    const data = await CoursesService.getAllCoursesStarted(user.token);

    if (data) {
      const lastCourseSeen = data.splice(0, 1)[0];
      setSnippetCourse(lastCourseSeen);

      setCoursesStarted(data);
    } else {
      alert("Erro ao carregar cursos");
    }
  };

  const getAllCoursesNotStarted = async () => {
    setLoading(true);
    const data = await CoursesService.getAllCoursesNotStarted(user.token);
    setLoading(false);

    if (data) {
      setCourses(data);
    } else {
      alert("Erro ao carregar cursos");
    }
  };

  useEffect(() => {
    getAllCoursesStarted();
    getAllCoursesNotStarted();
  }, []);

  return (
    <Container>
      <Header />
      <WelcomeBanner isSomeCourseStarted={coursesStarted.length === 0} />
      <MainContent>
        {loading ? (
          <SpinnerBox>
            <Spinner color={Colors.blueBanner} fontSize="4rem" />
          </SpinnerBox>
        ) : (
          <>
            {snippetCourse && (
              <SnippetSection
                title="Continue seu curso atual"
                course={snippetCourse}
              />
            )}

            {coursesStarted.length === 0 ? (
              <>
                <CardsSection
                  title="Experimente nossos outros cursos"
                  courses={courses}
                />
              </>
            ) : (
              <>
                <CardsSection
                  title="Meus cursos em andamento"
                  courses={coursesStarted}
                  coursesStarted
                />
                <CardsSection
                  title="Experimente nossos outros cursos"
                  courses={courses}
                />
              </>
            )}
          </>
        )}
      </MainContent>
      <GoogleAnalyticsTracker />
    </Container>
  );
}
