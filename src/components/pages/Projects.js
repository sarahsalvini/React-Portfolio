import React from 'react';
import dayPlanner from '../../img/dayPlanner.png';
import note1 from '../../img/note1.png';
import weatherApp from '../../img/weatherApp.png';
import nodeHW from '../../img/nodeHW.png';
import project2 from '../../img/project2.png';
import projectPic1 from '../../img/projectPic1.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  return (
    <div>
      <section className="portfolio bg-light" id="portfolio">
        <Container>
          <h1>Projects</h1>
          <Row>
            <Col xs={6} md={4}>
              <Card style={{ width: '18rem' }} className="projectCards">
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={project2}
                />
                <Card.Body>
                  <Card.Title>COVID-19 Symptom Tracker</Card.Title>
                  <Card.Text>
                    Our site was created for a person who might have symptoms of
                    Coronavirus. Users are able to sign up/login to their
                    account, access a dashboard that provides live statistics on
                    Coronavirus in the US, 2 hospitals nearby, and track/update
                    their symptoms.
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    variant="primary"
                    href="https://floating-temple-73053.herokuapp.com/">
                    Live App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/maidelrego/coolgroupname.git">
                    Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={weatherApp}
                />
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                    This assignment was to build a weather dashboard that will
                    run in the browser and feature dynamically updated HTML and
                    CSS. I used the OpenWeather API to retrieve weather data for
                    cities.
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    variant="primary"
                    href="https://sarahsalvini.github.io/Weather-Dashboard/">
                    Live App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/sarahsalvini/Weather-Dashboard.git">
                    Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={projectPic1}
                />
                <Card.Body>
                  <Card.Title>Brewery Backpacker</Card.Title>
                  <Card.Text>
                    Our site was created for a frequent traveler who enjoys
                    learning and trying local beers from that area. By using our
                    site, the traveler will be able to see a list of 5 breweries
                    in the city their traveling to, see the current weather as
                    well as a description for tomorrows weather to decide which
                    day is better, and images of the city he is traveling to!
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    variant="primary"
                    href="https://sarahsalvini.github.io/Project1-BreweryBackpacker/">
                    Live App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/sarahsalvini/Project1-BreweryBackpacker.git">
                    Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{ width: '18rem' }} className="projectCards">
                <Card.Img variant="top" className="projectpics" src={nodeHW} />
                <Card.Body>
                  <Card.Title>Developer Profile</Card.Title>
                  <Card.Text>
                    A command-line application that dynamically generates a PDF
                    profile from a GitHub username
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    variant="primary"
                    href="https://sarahsalvini.github.io/Node.js-Developer-Profile/">
                    Live App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/sarahsalvini/Node.js-Developer-Profile.git">
                    Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="projectpics" src={note1} />
                <Card.Body>
                  <Card.Title>Note Taker</Card.Title>
                  <Card.Text>
                    This application can be used to write, save, and delete
                    notes. This application uses an express backend and save and
                    retrieve note data from a JSON file.
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    variant="primary"
                    href="https://note-taker-hw-11.herokuapp.com/">
                    Live App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/sarahsalvini/Note-taker.git">
                    Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  className="projectpics"
                  src={dayPlanner}
                />
                <Card.Body>
                  <Card.Title>Work Day Planner</Card.Title>
                  <Card.Text>
                    This weeks assignment was to create a calendar application
                    that allows the user to save events for each hour of the
                    day. This app will run in the browser and feature
                    dynamically updated HTML and CSS powered by jQuery.
                  </Card.Text>
                  <Button
                    className="liveBtn"
                    variant="primary"
                    href="https://sarahsalvini.github.io/Day-Planner/">
                    Live App
                  </Button>
                  <Button
                    variant="primary"
                    href="https://github.com/sarahsalvini/Day-Planner.git">
                    Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Projects;
