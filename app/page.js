"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [selectedSection, setSelectedSection] = useState("Home");

  const sections = ["Home", "Experience", "Projects", "Follow"];

  const images = [
    "/images/suit.jpg",
    "/images/bass.jpg",
    "/images/service.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Set opacity to 0 before changing the image
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setOpacity(1); // Set opacity back to 1 after changing the image
      }, 1500); // Adjust this timeout based on your transition duration
    }, 4000); // Change the interval as needed (milliseconds)

    return () => clearInterval(interval);
  }, [currentImage]);

  const sectionsToDisplay = sections.map((sec) => {
    const className = `transition duration-300 cursor-pointer rounded-lg px-2 py-1 border-4 ${
      sec === selectedSection ? "border-cyan-400" : "border-indigo-600"
    }`;
    return (
      <span
        key={sec}
        onClick={() => {
          setSelectedSection(sec);
          scrollToSection(sec);
        }}
        className={className}
      >
        {sec}
      </span>
    );
  });

  const scrollToSection = (sec) => {
    const sectionElement = document.getElementById(sec);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Outer most div
    <div className="Layout flex flex-col h-screen font-mono">
      <div className="TopNav w-full bg-indigo-600 hidden sm:block">
        {/* margins and padding */}
        <div className="TopNavCont max-w-screen-xl mx-auto h-16 flex justify-between px-4 items-center">
          <div className="flex items-center">
            <img src="/images/programming.png" className="w-10" alt="programming"/>
            <h1 className="text-2xl px-4">Castro&apos;s Code</h1>
          </div>
          <div className="ButtonsContainer flex gap-2">{sectionsToDisplay}</div>
        </div>
      </div>

      <div className="MainScroll flex-1 overflow-y-auto snap-mandatory snap-y h-screen w-full">
        <div id="Home" className="HomeSection snap-center h-full bg-indigo-500">
          <div className="HomeContainer flex flex-col sm:flex-row h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="HomePic sm:w-1/2 flex justify-center items-center mb-4">
              <img
                src={images[currentImage]}
                className="lg:w-96 w-52 object-cover object-top rounded-full lg:h-96 h-52 spinning-image transition-opacity duration-1000 shadow-2xl"
                style={{ opacity, transition: "opacity 1s ease-in-out" }}
                alt="me"
              />
            </div>
            <div className="HomeInfo sm:w-1/2 flex justify-center items-center">
              <div className="text-center p-4 justify-center items-center flex flex-col">
                <h1 className="text-xl mb-4">
                  Hello, my name is Luis Castro and I am an indie app developer.
                </h1>
                <a className="p-2 rounded bg-indigo-700 hover:bg-indigo-600 duration-300 transition w-full mb-4" href="/resume.pdf" target="_blank">
                  <div className="mx-auto w-fit">Download my resume.</div>
                </a>
                <p>Scroll down to take the tour!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="AboutSection snap-center h-full bg-slate-300">
          <div className="AboutContainer flex flex-col sm:flex-row h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="AboutInfo sm:w-1/2 flex justify-center items-center">
              <div className="text-black rounded-md bg-white p-4 shadow-lg">
                <h1 className="text-2xl mb-4">About Me</h1>
                <p className=" mb-2">
                  I&apos;m based in sunny New Jersey with 4 years of experience
                  programming in <b>JavaScript</b>, <b>Ruby</b> and{" "}
                  <b>Python</b>. I believe that innovation is born from unique
                  and diverse persepectives. Let&apos;s collaborate to transform your
                  next idea into a reality.
                </p>
                <p className="mb-2">
                  As a full stack developer, what I bring to the table is the
                  ability to see the bigger picture. When I am not programming I
                  enjoy playing bass for my band, Live Well.
                </p>
              </div>
            </div>
            <div className="AboutPic sm:w-1/2 flex justify-center items-center m-4">
              <img
                src="/images/band.jpg"
                className="w-96 rounded-lg h-96 shadow-2xl"
                alt="band"
              />
            </div>
          </div>
        </div>

        <div
          id="Experience"
          className="ExperienceSection snap-center h-full bg-slate-300 text-black"
        >
          <div className="ExperienceCont flex flex-col sm:flex-row h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="ExperienceHeader sm:w-1/2 flex justify-center items-center">
              <h1 className="text-7xl">Experience</h1>
            </div>
            <div className="ExperienceDetails sm:w-1/2 flex justify-center items-center text-center">
              <p className="text-lg xl:text-xl">
                Technical Coach by day, programmer by night! Here are my most
                recent roles as a Software Engineer, where I&apos;ve had the
                privilege to immerse myself in the world of programming.
              </p>
            </div>
          </div>
        </div>

        <div className="FISSection snap-center h-full bg-slate-300 text-black">
          <div className="AboutContainer flex flex-col h-full px-4 mx-auto max-w-screen-xl justify-center text-center items-center">
            <img src="/images/FIS-logo.png" className="h-1/4" />
            <div>
              <h1 className="text-2xl mb-4">
                Flatiron School - Technical Coach
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="sm:w-1/2 flex justify-center">
                  <img
                    src="/images/campus.jpg"
                    className="rounded-lg h-54 xl:h-96"
                    alt="campus"
                  />
                </div>
                <div className="sm:w-1/2">
                  <p className="text-sm sm:text-md xl:text-lg">
                    As a Technical Coach at Flatiron School, a renowned bootcamp
                    specializing in Software Engineering, my primary
                    responsibility revolves around guiding students in mastering
                    the fundamentals of programming. Leveraging tools like Zoom,
                    I engage with students individually, fostering a more
                    personalized learning experience. Additionally, I host
                    weekly seminars, conducting live coding sessions on
                    prevalent technical challenges. These sessions serve as
                    interactive forums, encouraging active participation from
                    students, thereby enriching the learning process and
                    fostering a collaborative environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="PCASection snap-center h-full bg-slate-300 text-black">
          <div className="AboutContainer flex flex-col h-full px-4 mx-auto max-w-screen-xl justify-center text-center items-center">
            <img src="/images/PCA-logo.png" className="h-1/4 rounded-lg" alt="pca"/>
            <div>
              <h1 className="text-2xl mb-4">
                The Park City App - Software Engineer
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="sm:w-1/2">
                  <p className="text-sm sm:text-md xl:text-lg">
                    During my time at Park City App, I was part of the
                    pioneering team engaged in the initial prototyping and
                    design sprints, crucial in shaping the first Minimum Viable
                    Product (MVP). Subsequently, I dedicated myself to frontend
                    development, where I meticulously researched and implemented
                    code adhering to React Native best practices. This phase not
                    only honed my coding skills but also contributed to the
                    app&apos;s user interface and experience. Recognizing the
                    significance of data-driven decision-making, I took the
                    initiative to develop an analytical API for the app. This
                    API proved instrumental in tracking user behavior, providing
                    invaluable insights to identify and optimize the app&apos;s most
                    valuable features.
                  </p>
                </div>
                <div className="sm:w-1/2 flex justify-center">
                  <img
                    src="/images/parkcity.jpg"
                    className="rounded-lg h-54 xl:h-96"
                    alt="park-city"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="Projects"
          className="ProjectSection snap-center h-full bg-gradient-to-b from-slate-300 to-cyan-500"
        >
          <div className="ProjectCont flex flex-col sm:flex-row h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="ProjectHeader sm:w-1/2 flex justify-center items-center">
              <h1 className="text-8xl">Projects</h1>
            </div>
            <div className="ProjectDetails sm:w-1/2 flex justify-center items-center text-center">
              <p className="text-lg xl:text-xl">
                The difference between dreams and reality is commitment. When
                I&apos;m not working on other people&apos;s ideas I have a few passion
                projects that I dedicate my time to.
              </p>
            </div>
          </div>
        </div>

        <div className="RemyApp snap-center h-full bg-cyan-500">
          <div className="flex flex-col sm:flex-row h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="sm:w-1/2 flex flex-col justify-center items-center">
              <div className="p-4 rounded-xl shadow-md bg-cyan-600">
                <img
                  src="/images/remy-banner.png"
                  className="w-96 rounded-lg h-96 shadow"
                  alt="remy"
                />
              </div>
            </div>
            <div className="sm:w-1/2 flex flex-col justify-center items-center p-4">
              <h1 className="text-2xl font-bold">The Remy App</h1>
              <p className="text-center text-lg xl:text-xl">
                Wouldn&apos;t it be nice to have a nice little mouse telling us what
                or how to cook? Animals can&apos;t do that but Remy can! Powered by
                OpenAI, Remy is a next generation cooking assistant. Don&apos;t feel
                like going to the grocery store? Generate great recipes using
                the ingredients you have at home!
              </p>
            </div>
          </div>
        </div>

        <div className="RemyFE snap-center h-full bg-cyan-500 text-center">
          <div className="flex-1 flex flex-col h-full px-4 mx-auto max-w-screen-xl justify-center items-center text-center">
            <div className="flex items-center justify-center mb-4 gap-4">
              <h1 className="text-2xl flex">Remy Frontend Overview</h1>
              <a
                href="https://github.com/foreverluiscastro/remy-frontend"
                target="_blank"
                className="rounded-md bg-slate-400 hover:bg-slate-500 duration-100 cursor-pointer px-2 py-2 w-fit flex items-center shadow-md"
              >
                <img src="/images/Octocat.png" className=" h-8 rounded-full" alt="octocat"/>
                <p className="ml-2 hidden sm:block">Github Repo</p>
              </a>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-center flex-col sm:flex-row items-center">
                <div className="sm:w-1/2">
                  <p className="mb-4 px-4 text-sm sm:text-md lg:text-lg xl:text-xl">
                    Remy, my latest project, embodies a streamlined frontend
                    architecture designed to deliver an exceptional user
                    experience while maintaining scalability and performance.
                    Here&apos;s a glimpse into its core components:
                  </p>
                </div>
                <div className="sm:w-1/2 flex justify-center">
                  <img
                    src="/images/remy-profile.png"
                    className="rounded shadow-lg mb-4 h-48 xl:h-96"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="flex justify-center flex-col sm:flex-row items-center">
                <div className="sm:w-1/2 flex justify-center">
                  <img
                    src="/images/my-recipe.png"
                    className=" rounded shadow-lg mb-4 h-48 xl:h-96"
                    alt="recipe"
                  />
                </div>
                <div className="sm:w-1/2">
                  <div className="text-left mb-4 px-4 text-sm sm:text-md lg:text-lg xl:text-xl">
                    <li>
                      Next.js facilitates server-side rendering and client-side
                      routing for optimized performance.
                    </li>
                    <li>
                      Tailwind CSS: Enables rapid UI development and consistent
                      styling across the application.
                    </li>
                    <li>Context makes state management easy and flexible!</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="RemyBE snap-center h-full bg-cyan-500 text-center">
          <div className="flex-1 flex flex-col h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="flex items-center justify-center mb-4 gap-4">
              <h1 className="text-2xl flex">Remy Backend Overview</h1>
              <a
                href="https://github.com/foreverluiscastro/remy-api"
                target="_blank"
                className="rounded-md bg-slate-400 hover:bg-slate-500 duration-100 cursor-pointer px-2 py-2 w-fit flex items-center shadow-md"
              >
                <img src="/images/Octocat.png" className=" h-8 rounded-full" alt="octocat"/>
                <p className="ml-2 hidden sm:block">Github Repo</p>
              </a>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center flex-col sm:flex-row items-center">
                <div className="sm:w-1/2 flex justify-center">
                  <img
                    src="/images/recipe-form.png"
                    className="rounded shadow-2xl mb-4 h-48 xl:h-96"
                    alt="form"
                  />
                </div>
                <div className="sm:w-1/2">
                  <p className="mb-4 px-4 text-sm sm:text-md lg:text-lg xl:text-xl">
                    The Remy API, powered by Flask, seamlessly integrates
                    RESTful routing standards to facilitate a range of user
                    interactions, from streamlined sign-up and login processes
                    to sophisticated recipe generation
                  </p>
                </div>
              </div>

              <div className="flex justify-center flex-col sm:flex-row items-center">
                <div className="sm:w-1/2">
                  <div className="text-left px-4">
                    <p className="text-center text-sm sm:text-md lg:text-lg xl:text-xl">
                      The API leverages the capabilities of the OpenAI API to
                      craft innovative, AI-generated recipes, adding a unique
                      and dynamic dimension to a recipe app. By harmonizing
                      Flask&apos;s flexibility with RESTful design, the Remy API not
                      only empowers users to effortlessly navigate its features
                      but also fosters a seamless connection between human
                      creativity and artificial intelligence.
                    </p>
                  </div>
                </div>
                <div className="sm:w-1/2 flex justify-center">
                  <img
                    src="/images/backend.png"
                    className=" rounded shadow-2xl mb-4 h-48 xl:h-96"
                    alt="backend"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="PomoCoachApp snap-center h-full bg-green-500">
          <div className="flex flex-col h-full px-4 mx-auto max-w-screen-xl justify-center items-center text-center">
            <img
              src="/images/PC-logo.PNG"
              className="rounded-xl shadow-md mb-4 w-1/2"
              alt="pca-logo"
            />

            <div className="flex flex-col justify-center items-center">
              <div className="px-4 text-center">
                <h1 className="text-2xl font-bold">The PomoCoach App</h1>
                <p className="text-center text-md text-lg xl:text-xl">
                  Study habits can be challenging to establish and maintain.
                  PomoCoach is not just a timer; it&apos;s a powerful accountability
                  tool designed to help you implement a routine rooted in the
                  proven Pomodoro Technique. This app aims to provide users with
                  a structured study and decompression routine, optimizing their
                  learning results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="PomoCoachFE snap-center h-full bg-green-500 text-center">
          <div className="flex-1 flex flex-col h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="flex items-center justify-center mb-4 gap-4">
              <h1 className="text-xl flex">PomoCoach Frontend Overview</h1>
              <a
                href="https://github.com/foreverluiscastro/pomo-coach-frontend-v2"
                target="_blank"
                className="rounded-md bg-green-700 hover:bg-green-600 duration-300 cursor-pointer px-2 py-2 w-fit flex items-center shadow-md"
              >
                <img src="/images/Octocat.png" className=" h-8 rounded-full" alt="octocat"/>
                <p className="ml-2 hidden sm:block">Github Repo</p>
              </a>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center flex-col sm:flex-row items-center">
                <div className="sm:w-1/2 flex justify-center">
                  <img
                    src="/images/PomoCoach.PNG"
                    className=" rounded shadow-lg mb-4 h-48 xl:h-96"
                    alt="pomocoach"
                  />
                </div>
                <div className="sm:w-1/2">
                  <div className="">
                    <p className="mb-4 px-4 text-sm xl:text-xl">
                      Similar to Remy, I crafted the frontend using a
                      combination of NEXT.js and Tailwind. This decision was
                      purposeful; I aimed to create a frontend that not only
                      looks great but also performs exceptionally well across
                      various devices and screen sizes. This meticulous approach
                      reflects my commitment to delivering high-quality,
                      performant solutions that stand out in today&apos;s competitive
                      landscape.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-col sm:flex-row items-center">
                <div className="sm:w-1/2">
                  <p className="mb-4 px-4 text-sm xl:text-xl">
                    PomoCoach, with its sleek interface, caters to all users
                    with fundamental timer functions. For registered users, it
                    unlocks advanced features like study tracking, goal setting,
                    and AI-driven feedback. These tools are pivotal in
                    optimizing routines, fostering a more productive lifestyle.
                  </p>
                </div>
                <div className="sm:w-1/2 flex justify-center">
                  <img
                    src="/images/Stats.PNG"
                    className="rounded shadow-lg mb-4 h-48 xl:h-96"
                    alt="stats"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="PomoCoachBE snap-center h-full bg-green-500 text-center">
          <div className="flex-1 flex flex-col h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="flex items-center justify-center mb-4 gap-4">
              <h1 className="text-xl flex">PomoCoach Backend Overview</h1>
              <a
                href="https://github.com/foreverluiscastro/pomo-coach-api"
                target="_blank"
                className="rounded-md bg-green-700 hover:bg-green-600 duration-300 cursor-pointer px-2 py-2 w-fit flex items-center shadow-md"
              >
                <img src="/images/Octocat.png" className=" h-8 rounded-full" alt="octocat"/>
                <p className="ml-2 hidden sm:block">Github Repo</p>
              </a>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 flex justify-center gap-4 mb-4">
                <img
                  src="/images/signup.PNG"
                  className="rounded shadow-2xl h-52 sm:h-72 xl:h-96"
                  alt="signup"
                />
                <img
                  src="/images/Ai.PNG"
                  className="rounded shadow-2xl h-52 sm:h-72 xl:h-96"
                  alt="ai"
                />
              </div>
              <div className="sm:w-1/2">
                <p className="sm:px-4 text-center text-sm sm:text-md lg:text-lg xl:text-xl">
                  The PomoCoach backend acts as a robust intermediary, handling
                  frontend requests seamlessly. However, its true prowess lies
                  in its integration with the OpenAI API. The backend stores
                  vital user information, including daily goals and lifestyle
                  preferences, leveraging this data to generate personalized
                  feedback. This sophisticated analysis enhances user
                  experience, tailoring suggestions to individual study habits
                  and preferences.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="Follow"
          className="PomoCoachBE snap-center h-full bg-slate-900 text-center"
        >
          <div className="FollowContainer flex flex-col sm:flex-row h-full px-4 mx-auto max-w-screen-xl justify-center">
            <div className="flex justify-center items-center sm:flex-row flex-col gap-4">
              <div className="flex justify-center sm:w-1/2">
                <div>
                  <h1 className="text-7xl">Follow Me</h1>
                  <p>
                    You made it to the end! If you would like to connect with me
                    please feel free to use any of my links!
                  </p>
                </div>
              </div>

              <div className=" flex flex-col">
                <div className="flex gap-4 mb-4">
                  <a className="w-1/2 flex justify-center"           href="https://linkedin.com/in/luis-dejesus-castro"
            target="_blank">
                    <img
                      src="/images/LinkedIn.png"
                      className="  bg-slate-500 hover:bg-slate-400 cursor-pointer transition duration-300 px-4 rounded-3xl h-52 w-52"
                      alt="linkedin"
                    />
                  </a>
                  <a className="w-1/2 flex justify-center" href="https://github.com/foreverluiscastro"
            target="_blank">
                    <img
                      src="/images/Octocat.png"
                      className="bg-slate-500 hover:bg-slate-400 cursor-pointer transition duration-300 p-4 rounded-full h-52 w-52"
                      alt="github"
                    />
                  </a>
                </div>
                <div className="flex gap-4 mb-4">
                  <a className="w-1/2 flex justify-center" href="https://medium.com/@luis-dejesus-castro"
            target="_blank">
                    <img
                      src="/images/medium.png"
                      className="bg-slate-500 hover:bg-slate-400 cursor-pointer transition duration-300 p-4 rounded-3xl h-52 w-52"
                      alt="medium"
                    />
                  </a>
                  <a className="w-1/2 flex justify-center" href="mailto:luiscastro.swe@gmail.com">
                    <img
                      src="/images/email.png"
                      className="bg-slate-500 hover:bg-slate-400 cursor-pointer transition duration-300 px-4 rounded-3xl h-52 w-52"
                      alt="email"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="BottomNav text-white sm:hidden">
        <div className="BottomNavCont justify-evenly flex">
          {sections.map((sec) => (
            <span key={sec} onClick={() => {
              scrollToSection(sec)
              setSelectedSection(sec)
              }}
              className="flex flex-col items-center py-2"
              >
              <img
              // src={selectedSection === sec ? "/images/home-full.png" : "images/home.png"}
              src={`/images/${sec}${selectedSection === sec ? "-full" : ""}.png`}
              className="h-10"
              />
              {sec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
