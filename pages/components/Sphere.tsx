import React, { useEffect, FC } from "react";
import "../../styles/sphere.module.css";
import TagCloud from "TagCloud";

const Sphere: FC =()=>{
    useEffect(()=>{
        return ()=>{
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next",
                "Remix",
                "Go",
                "Node",
                "Express",
                "MongoDB",
                "MySQL",
                "Postgres",
                "Sass",
                "Tailwind",
            ];

            const options = {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        }
    }, []);

    return(
        <>
            <div className="text-sphere">
                <span className="tagcloud"></span>
            </div>
        </>
    );
};

export default Sphere;