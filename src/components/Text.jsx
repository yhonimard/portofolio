import Typewriter from "typewriter-effect";
import "../pages/style.css";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Fullstack web developer",
          "Node Developer",
          "Express Developer",
          "React developer",
          "Vue developer",
          "Spring Boot Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Text;
