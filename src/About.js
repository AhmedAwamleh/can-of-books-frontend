import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ListGroup } from "react-bootstrap";

class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <Header />
        <ListGroup>
          <ListGroup.Item>Main Developer : Ahmed Awamleh</ListGroup.Item>
          <ListGroup.Item>
            Contact :
            <a href="mailto:awamlehad@icloud.com">
              Email me
            </a> |
            <a href="https://www.linkedin.com/in/Ahmedawamleh/">
              LinkedIn
            </a> |
            <a href="https://github.com/AhmedAwamleh">
              GitHub
            </a>
          </ListGroup.Item>
          <ListGroup.Item>Regards Code Fellow</ListGroup.Item>
        </ListGroup>
        <Footer />
      </>
    );
  }
};

export default About;