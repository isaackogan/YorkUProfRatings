import React from 'react';
import styled from "styled-components";
import Form from "../../Components/Home/Form";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ErrorModal from "../../Components/ErrorModal";
import Ratings from "../../Components/Home/Ratings";


const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: 90%;
`;

const InnerHomeContainer = styled.div`
  display: block;
  max-width: 1300px;
  width: 90%;
  margin: 30px auto 40px;
  font-family: 'IBM Plex Sans', 'Roboto', sans-serif;

`;

const theme = createTheme({
    palette: {
        primary: {
            main: '#e51f1f'
        }
    },
});

const Title = styled.h1`
  font-weight: 500;
  font-size: 2.4rem;
  margin: 0;

  @media(max-width: 600px) {
    font-size: 2.0rem;
  }

  @media(max-width: 350px) {
    font-size: 1.5rem;
  }
  
`;

const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  margin: 0;
  @media(max-width: 600px) {
    font-size: 1.7rem;
  }

  @media(max-width: 350px) {
    font-size: 1.3rem;
  }
  
`;


const Desc = styled.p`
  font-size: 1.15rem;

  @media(max-width: 600px) {
    font-size: 1.0rem;
  }

  @media(max-width: 350px) {
    font-size: 0.85rem;
  }
  
`;

const Home = () => {

    return (
        <ThemeProvider theme={theme}>
            <Background>
                <Header />
                <HomeContainer>
                    <InnerHomeContainer>
                        <Title>Star Professors</Title>
                        <Desc>
                            Welcome to  <strong>Star Professors: Student-Made for YorkU!</strong> With this app, you can organize course sections by
                            the rating of the professors that teach them. It's important to consider a lot more than just ratings when taking a course—
                            but a professor's ability to teach has a measurable impact on student performance.
                        </Desc>
                        <Form />
                        <Ratings />
                        <Subtitle>How it Works</Subtitle>
                        <Desc>
                            Through web-scraping, data is collected from <strong>RateMyProf</strong> on all available professors at York University. This is then collated with
                            known schedule data for a given course to determine the highest rated professors and rank them accordingly.
                        </Desc>
                        <Subtitle>Usage Notice</Subtitle>
                        <Desc>
                            Don't use this as the sole determinant for how you schedule your classes. A rating from RateMyProf can
                            <i> sometimes</i> give you an idea of a professor's aptitude, but not all ratings on the site are made equal.
                            RateMyProf is a <i>very easily</i> manipulated site and the data is to be taken with several grains of salt.
                            <br/><br/>
                            This app also only gives a sample of the <i>average</i> ratings of a professor. People change, professors are people.
                            A professor may have bad ratings from 10 years ago but great ones in the last 3 years. Always do your due diligence when
                            analyzing data to make sure that you are reading it with the correct context.
                        </Desc>
                    </InnerHomeContainer>
                </HomeContainer>
                <ErrorModal />
                <Footer />
            </Background>
        </ThemeProvider>
    );


}

export default Home;
