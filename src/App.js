import React from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  ListGroup,
  ListGroupItem,
  Badge,
  Progress,
  Button
} from 'reactstrap';

import SlackLogo from './slack-logo.svg';

function App() {
  return (
    <div>
      <header className="mb-3">
        <Navbar>
          <NavbarBrand href="#">plato</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink>Log Out</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button color="primary">
                  <img src={SlackLogo} alt="slack" className="mr-1" />
                  Message Us
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="d-md-none title">Project Dashboard</h1>
              <h1 className="d-none d-md-block title">Projects</h1>
            </Col>
          </Row>
        </Container>

        <div className="separator" />

        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card>
                <CardBody>
                  <Badge color="success" className="text-uppercase">
                    Deliverable ready
                  </Badge>
                  <CardTitle>Homepage Design</CardTitle>
                </CardBody>
                <ListGroup flush>
                  <ListGroupItem>
                    <CardBody>
                      <CardSubtitle>Status</CardSubtitle>
                      <Row className="justify-content-between">
                        <Col xs="auto">
                          <CardText className="font-weight-bold">
                            <span className="d-sm-none">Ready for review</span>
                            <span className="d-none d-sm-inline">
                              Wireframing ready for review
                            </span>
                          </CardText>
                        </Col>

                        <Col xs="auto">
                          <small>Deliverable 1 of 3</small>
                        </Col>

                        <Col sm={12}>
                          <Progress className="success" value="35" />
                        </Col>

                        <Col xs="auto">
                          <CardText>12/18/18</CardText>
                        </Col>

                        <Col xs="auto">
                          <small>Estimated Delivery</small>
                        </Col>
                      </Row>
                    </CardBody>
                  </ListGroupItem>
                  <ListGroupItem>
                    <CardBody>
                      <CardSubtitle>Next Steps</CardSubtitle>
                      <CardText>
                        The first iteration of wireframing is ready for review!
                        We recommend providing feedback within 24 hours to
                        maintain your project's estimated timeline.
                      </CardText>
                    </CardBody>
                  </ListGroupItem>
                  <ListGroupItem>
                    <CardBody>
                      <Button color="primary">
                        <img src={SlackLogo} alt="slack" className="mr-1" />
                        View & Provide Feedback
                      </Button>
                    </CardBody>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
