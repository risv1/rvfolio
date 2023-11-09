import React, { useEffect, FC } from "react";
import "../../styles/sphere.module.css";
import TagCloud from "TagCloud";

const Sphere: FC =()=>{
    useEffect(()=>{
        return ()=>{
            const container: string | Element[] = ".tagcloud";
            const texts = [
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
            ];

            const options = {
                radius: 250,
                maxSpeed: "fast",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        }
    }, []);

    return(
        <>
            <div className="text-sphere w-8/12">
                <span className="tagcloud text-yellow-300 text-2xl font-bold"></span>
            </div>
        </>
    );
};

export default Sphere;