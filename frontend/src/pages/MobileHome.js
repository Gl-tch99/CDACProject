import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MobileHome() {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/projects/fetchdata", {
        headers: {
          authorization: " Bearer " + localStorage.token,
        },
      })
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-start h-screen w-screen scrollbar-hide lg:items-center overflow-x-clip">
        <div
          className="flex flex-wrap justify-evenly mt-4
         items-center rounded-3xl h-[85%] w-[90%] top-2 lg:h-5/6 lg:w-5/6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border lg:flex-row overflow-scroll md:overflow-auto gap-2 "
        >
          {Projects.length !== 0
            ? Projects.map((project, index) => {
                if (project.status === "Listed")
                  return (
                    <div
                      className="card w-[96%] h-[24%] bg-transparent shadow-xl shrink-0 border mt-2"
                      key={index}
                    >
                      <div className=" flex justify-evenly h-full ">
                        <div className=" w-[70%] mt-4">
                          <h2 className="card-title text-white ml-4 text-3xl font-extralight ">
                            {project.name}
                          </h2>
                          <p className="card-title text-white ml-4 text-lg font-extralight ">
                            Description: {project.description}
                          </p>
                          <p className="card-title text-white ml-4 text-lg font-extralight ">
                            Tech Reqired:{" "}
                            {project.technologies.map((tech, index) => {
                              return <p>{tech}</p>;
                            })}
                          </p>
                        </div>
                        <div className="self-end w-[25%] flex justify-end ">
                          <button className="btn btn-outline btn-success rounded-full w-36 mt-4 text-xl font-extralight self-end mb-4 mr-2">
                            Join
                          </button>
                        </div>
                      </div>
                    </div>
                  );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
