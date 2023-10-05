import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Text from "../components/Text";
import "../pages/style.css";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">Im Yhoni Mardusa</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/yhonimard");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/yhonimard/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://wa.me/+6285694555246");
              }}
              className="socailmediabtn"
            >
              <AiOutlineWhatsApp className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://instagram.com/rahulvijay81");
              }}
              className="socailmediabtn"
            >
              <AiFillInstagram className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
