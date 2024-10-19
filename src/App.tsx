import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Tag from "./components/Tag/Tag";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll to detect which section is in view
  const handleScroll = () => {
    const sections = [
      "about_section",
      "experience_section",
      "projects_section",
    ];
    const scrollPosition = window.scrollY;

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the scroll position is within the bounds of the section
        if (
          scrollPosition >= sectionTop - 200 && // Adjust for earlier detection
          scrollPosition < sectionTop + sectionHeight
        ) {
          if (activeSection !== sectionId) {
            setActiveSection(sectionId); // Update active section
          }
        }
      }
    });
  };

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // Optionally, scroll the page to the section
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth", // Smooth scroll to the section
      });
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]); // Re-run if activeSection changes

  return (
    <div className="main_page p">
      <div className="mid_box flex">
        <div className="box_left flex flex-col justify-between py-8">
          <div className="top_left py-20 flex flex-col">
            <div className="introduce">
              <div className="text-5xl text-white font-normal">
                Msaoub Ayman
              </div>
              <div className="text-xl mt-4 text-white font-normal">
                Frontend Developer
              </div>
            </div>
            <div className="nav_page h-28 mt-14 flex flex-col justify-between">
              <a
                href="#about_section"
                onClick={() => handleLinkClick("about_section")}
              >
                <div
                  className={`path_nav flex items-center ${activeSection === "about_section" ? "active" : ""}`}
                >
                  <div className="nav-indicator flex "></div>
                  <div className="path">About</div>
                </div>
              </a>
              <a
                href="#experience_section"
                onClick={() => handleLinkClick("experience_section")}
              >
                <div
                  className={`path_nav flex items-center ${activeSection === "experience_section" ? "active" : ""}`}
                >
                  <div className="nav-indicator flex "></div>
                  <div className="path">Experience</div>
                </div>
              </a>
              <a
                href="#projects_section"
                onClick={() => handleLinkClick("projects_section")}
              >
                <div
                  className={`path_nav flex items-center ${activeSection === "projects_section" ? "active" : ""}`}
                >
                  <div className="nav-indicator flex "></div>
                  <div className="path">Projects</div>
                </div>
              </a>
            </div>
          </div>
          <div className="links h-10 flex justify-center gap-4 mb-10 ">
            <svg
              fill="#94A3B8"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            <svg
              fill="#94A3B8"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 26 26"
            >
              <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z"></path>
            </svg>
          </div>
        </div>
        <div className="box_right overflow-auto scrollbar-hide py-28">
          <div id="about_section" className="pb-20">
            <p>
              Back in my days at 42 School, I dove deep into the world of coding
              by working on various projects that spanned across C, C++, Docker,
              Git, Bash, and Python. I later expanded my skills into{" "}
              <span className="text-orange">JavaScript</span>, and{" "}
              <span className="text-orange">Typescript</span>, with a heavy
              focus on React. As a passionate frontend developer, I strive to
              create seamless user experiences with clean, maintainable code.
            </p>
          </div>
          <div id="experience_section">
            <Card
              date="2023 - PRESENT"
              title="1337 Common Core (42 Network)"
              description="An intensive, project-based computer science curriculum focused on C programming, algorithms, and data structures. Developed strong problem-solving skills through low-level programming, memory management, and algorithm design. Gained hands-on experience in peer-to-peer learning, teamwork, version control, debugging, and best coding practices, working on real-world projects in a collaborative environment."
            >
              {" "}
              <></>
            </Card>
            <Card
              date="2020 - 2022"
              title="ISGI KHOURIBGA"
              description="Studied software development with a focus on programming, systems administration, and database management. Gained practical experience in designing and developing applications, managing IT infrastructure, and solving technical problems. The program emphasized hands-on projects, coding best practices, and collaboration in software development, preparing for real-world challenges in the IT industry."
            >
              {" "}
              <></>
            </Card>
          </div>
          <div id="projects_section" className="pt-10">
            <Card
              date=""
              title="FT_TRANSCENDENCE"
              description="Developed a full-stack web app with real-time multiplayer games, chat system, and secure user authentication with 2FA using modern technologies like React, WebSockets, and JWT."
            >
              <Tag language="JavaScript" />
              <Tag language="React" />
              <Tag language="Tailwind" />
              <Tag language="Python" />
              <Tag language="Django" />
              <Tag language="Docker" />
            </Card>
            <Card
              date=""
              title="FT_IRC"
              description="Developed a project with a focus on systems administration, programming, and problem-solving in C++."
            >
              <Tag language="C++" />
            </Card>
            <Card
              date=""
              title="INCEPTION"
              description="Created three containers using Docker to run a fully containerized web server environment."
            >
              <Tag language="Docker" />
            </Card>
            <Card
              date=""
              title="MINISHELL"
              description="A simple shell program providing a command-line interface to execute commands and manage processes."
            >
              <Tag language="C" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
