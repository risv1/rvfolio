import React, { useEffect } from "react";
import "../../styles/sphere.module.css";
import TagCloud from "TagCloud";

export const texts = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Remix",
  "Go",
  "Node",
  "Express",
  "Python",
  "C / C++",
  "Postgres",
] as string[];

const Sphere = () => {

  useEffect(() => {
    return () => {
      const container = document.querySelector(".tagcloud") as any;

      const options: any = {
        radius: 250,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-sphere w-8/12">
        <span className="tagcloud text-yellow-300 text-2xl font-bold"></span>
      </div>
    </>
  );
};

export default Sphere;
