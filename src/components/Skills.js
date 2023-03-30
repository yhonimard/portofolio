import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";
import hr from "../assets/curve-hr.svg";

import bootstrap from "../assets/skills/bootstrap.svg";
import express from "../assets/skills/express.svg";
import git from "../assets/skills/git.svg";
import gitlab from "../assets/skills/gitlab.svg";
import html from "../assets/skills/html.svg";
import javascript from "../assets/skills/javascript.svg";
import materialUI from "../assets/skills/materialui.svg";
import mongodb from "../assets/skills/mongodb.svg";
import nextjs from "../assets/skills/nextjs.svg";
import node from "../assets/skills/nodejs.svg";
import react from "../assets/skills/react.svg";
import reactquery from "../assets/skills/reactquery.svg";
import redux from "../assets/skills/redux.svg";
import styledcomp from "../assets/skills/styledcomp.svg";
import tailwind from "../assets/skills/tailwind.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>
      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="react" experience="1 years" img={react} />
          <SkillCard name="express" experience="1 years" img={express} />
          <SkillCard name="mongoDB" experience="1 years" img={mongodb} />
          <SkillCard name="node" experience="1 years" img={node} />
          <SkillCard name="next" experience="1 years" img={nextjs} />
          <SkillCard name="redux" experience="1 years" img={redux} />
          <SkillCard name="react query" experience="1 years" img={reactquery} />
          <SkillCard name="materialUI" experience="1 years" img={materialUI} />
          <SkillCard
            name="styled component"
            experience="1 years"
            img={styledcomp}
          />
          <SkillCard name="tailwind" experience="1 years" img={tailwind} />
          <SkillCard name="bootstrap" experience="1 years" img={bootstrap} />
          <SkillCard name="javascript" experience="1 years" img={javascript} />
          <SkillCard name="html" experience="1 years" img={html} />
          <SkillCard name="git" experience="1 years" img={git} />
          <SkillCard name="gitlab" experience="1 years" img={gitlab} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
