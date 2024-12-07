"use client";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../globals.css";
import {
  ChevronsDown,
  ChevronsUp,
  FileUser,
  Check,
  Github,
  Linkedin,
  Brain,
} from "lucide-react";
import { useToast } from "./ToastService";
import hellIfIknow from "../assets/images/hellifiknow.png";
import Spinner from "./Spinner";
import zlogo from "../assets/images/zlogo1.png";
import Zypher from "./Zypher";
import { SuccessToast, ErrorToast } from "./Toasts";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  Box,
  Button,
} from "@mui/material";

export default function AboutMe() {
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState(undefined);
  const [isJokeOpen, setIsJokeOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  // const [isXpOpen, setIsXpOpen] = useState(false);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isZyphOpen, setIsZyphOpen] = useState(false);
  // const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  // const toggleJokeSection = () => {
  //     setIsJokeOpen(!isJokeOpen);
  // }
  const toggleSkillsSection = () => {
    setIsSkillsOpen(!isSkillsOpen);
  };
  // const toggleXpSection = () => {
  //     setIsXpOpen(!isXpOpen);
  // }

  // const toggleZyphSection = () => {
  //     setIsZyphOpen(!isZyphOpen);
  // }

  // const toggleAnswerSection = () => {
  //     setIsAnswerOpen(!isAnswerOpen)
  // }
  const handleErrorToast = (msg, type) => {
    toast.open(<ErrorToast type={type} msg={msg.toString()} />);
  };

  const handleShowToast = useCallback((msg, type) => {
    switch (type.toLowerCase()) {
      case "error":
        toast.open(<ErrorToast type={type} msg={msg.message} />);
        break;
      case "success":
        toast.open(<SuccessToast type={type} msg={msg} />);
        break;
    }
  });

  const handleNavToGithub = () => {
    try {
      const githubUrl = import.meta.env.VITE_GITHUB_URL;
      window.open(githubUrl, "_blank");
    } catch (err) {
      console.log(`github navigation error:: ${err}`);
      handleErrorToast(
        `An error occurred while trying to navigate to Github`,
        "error",
      );
    }
  };

  const handleNavToLinkedIn = () => {
    try {
      const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
      window.open(linkedInUrl, "_blank");
    } catch (err) {
      console.log(`linkdin navigation error:: ${err}`);
      handleErrorToast(
        `An error occurred while trying to navigate to LinkedIn`,
        "error",
      );
    }
  };

  const handleNavToResume = () => {
    navigate("/resume");
  };

  useEffect(() => {
    const aboutApiUrl = import.meta.env.VITE_ABOUT_API;
    const getPorfolioData = async () => {
      try {
        const res = await fetch(aboutApiUrl);
        if (res.ok && res.status <= 500) {
          let pdata = await res.json();
          setPortfolioData(pdata);
          setSkills(pdata?.Skills);
          setFilteredSkills(pdata?.Skills);
          handleShowToast("successfully retrieved portfolio data", "success");
        } else {
          console.loig(`[ERROR-RES]:: ${res}`);
          handleShowToast(
            "An Internal Server Error occurred while fetching data",
            "error",
          );
        }
      } catch (err) {
        console.log(`err fetching data:: ${err}`);
        handleShowToast(`${err}`, "error");
      }
    };
    setIsLoading(true);
    getPorfolioData()
      .catch((err) => {
        console.log(`error caught ${err}`);
        handleShowToast(err, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  const handleSearch = (e) => {
    let searchVal = e.target.value;
    setSearchTerm(searchVal);
    if (searchVal === "" || searchVal === undefined) {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(
        skills.filter((skill) =>
          skill?.Name.toLowerCase().startsWith(searchTerm.toLowerCase()),
        ),
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <Spinner size="xxlarge" />
      </div>
    );
  }

  return (
    <>
      <Stack spacing={3} className="m-3">
        <Grid
          container
          spacing={2}
          display="flex"
          flexDirection="row"
          alignItems="space-between"
        >
          <Grid item xs={12} md={5}>
            <section
              id="about-card"
              className="col-span-5 row-span-1 grid grid-rows-3 bg-dgreen text-lgreen rounded-md mt-4 ml-4 w-full border-l-white"
            >
              <div
                id="card-image"
                className="flex justify-start align-middle items-center overflow-hidden m-0 p-0 bg-neutral-800 rounded-md"
              >
                <img
                  src={zlogo}
                  className="rounded-tr-md rounded-tl-md flex-shrink min-h-56 min-w-56 w-56 h-56 p-0 m-o"
                  alt="my logo"
                />
                <p>
                  <span className="ml-2 font-extrabold text-l">
                    {portfolioData?.AboutDetails?.Title}
                  </span>
                </p>
              </div>
              {/* TODO adjust  */}
              <div
                id="about-card-body"
                className="min-w-48 min-h-48 leading-relaxed text-justify bg-dgreen ml-4 mt-4 pr-4 pt-4 max-h-60"
              >
                {/* <p><span className="font-extrabold text-xl">{ portfolioData?.AboutDetails?.Title }</span></p> */}
                <p className="mt-4 text-lg">
                  <span className="mt-4">
                    {portfolioData?.AboutDetails?.ExpOverview}
                  </span>
                </p>
                <p className="mt-4">
                  <span className="mr-2 font-bold">Contact me at:</span>
                  <span className="mr-2 font-semibold underline text-orange-500">
                    {portfolioData?.AboutDetails?.Phone}
                  </span>
                  or
                  <span className="ml-2 mr-2 font-semibold underline text-orange-500">
                    {portfolioData?.AboutDetails?.Email}
                  </span>
                </p>
              </div>

              <div className="flex flex-row justify-evenly mt-4 p-4">
                <button
                  className="text-lgreen hover:text-orange-500 dark:hover:text-orange-600"
                  onClick={handleNavToLinkedIn}
                >
                  <Linkedin size={24} />
                </button>
                <button
                  className="text-lgreen hover:text-orange-500 dark:hover:text-orange-600"
                  onClick={handleNavToGithub}
                >
                  <Github size={24} />
                </button>
                <button
                  className="text-lgreen hover:text-orange-500 dark:hover:text-orange-600"
                  onClick={handleNavToResume}
                >
                  <FileUser size={24} />
                </button>
              </div>
            </section>
          </Grid>
          <Grid item xs={3} md={4}>
            <section
              id="experience-container"
              className="col-span-4 row-span-1 w-full m-2 ml-8"
            >
              <button
                className={`flex flex-row w-full text-lg font-semibold bg-neutral-800 dark:bg-neutral-800 text-primorange dark:text-primorange px-4 py-2 rounded mt-4 mb-4 focus:outline-none hover:bg-dlgreen dark:hover:bg-dlgreen`}
              >
                <span className="mr-4 text-gwhite">Experience</span>
              </button>
              <div className="p-4 bg-neutral-800  dark:bg-neutral-800 text-primorange rounded-md shadow-lg overflow-y-auto scroll-smooth max-h-80">
                <div className="grid grid-col-1 gap-4 overflow-y-scroll">
                  {portfolioData?.ProfessionalExperience?.length > 0 ? (
                    portfolioData?.ProfessionalExperience.map((xp) => (
                      <div
                        key={xp.Id}
                        className="flex flex-col bg-dgreen dark:bg-ddgreen text-lgreen dark:text-mgreen md:justify-between space-y-2 rounded shadow"
                      >
                        <div className="bg-neutral-800 font-semibold w-full flex flex-row align-middle justify-items-center rounded-md px-2 py-4">
                          <div className="mx-2 text-orange-500">
                            <Check size={18} />
                          </div>
                          <span>{xp?.Company}</span>
                          <span className="font-light ml-2">
                            {xp?.Length} years
                          </span>
                        </div>
                        <div className="w-full px-4 py-2">
                          {xp?.Description}
                        </div>
                      </div>
                    ))
                  ) : (
                    <Typography variant="subtitle1">No Experience</Typography>
                  )}
                </div>
              </div>
            </section>
          </Grid>
          <Grid item xs={3} md={2}>
            <section
              className="col-span-2 row-span-1 w-96 ml-8"
              id="skill-container"
            >
              <button
                onClick={toggleSkillsSection}
                className={`flex flex-row justify-between w-full text-lg font-semibold bg-neutral-800 dark:bg-mgreen text-primorange dark:text-primorange px-4 py-2 rounded mt-4 mb-4 focus:outline-none hover:bg-dlgreen dark:hover:bg-dlgreen`}
              >
                <span className="mr-4 text-gwhite">Skills</span>{" "}
                {isSkillsOpen ? (
                  <ChevronsUp size={24} />
                ) : (
                  <ChevronsDown size={24} />
                )}
              </button>

              <div
                className={`transition-max-height duration-700 ease-in-out overflow-hidden bg-neutral-800 ${
                  isSkillsOpen ? "max-h-44" : "max-h-0"
                }
                            `}
              >
                <div className="p-4 dark:bg-dmgreen rounded-md shadow overflow-y-auto scroll-smooth max-h-44 border-red-50">
                  <input
                    onChange={handleSearch}
                    placeholder="Search the technologies I use..."
                    className="border rounded p-2 w-full mb-4 text-black"
                  />
                  <article className="grid grid-cols-1 gap-4">
                    {filteredSkills?.length > 0 ? (
                      filteredSkills.map((skill) => (
                        <div
                          key={skill?.Id}
                          className="relative flex flex-row justify-start items-center bg-dgreen dark:ddgreen text-lgreen dark:text-lgreen rounded-md shadow"
                        >
                          <div className="flex flex-row justify-center items-center mr-24 mt-0 mb-0 ml-0 bg-neutral-800 w-full rounded-l-md rounded-r-3xl">
                            <div className="top-2 left-2 p-2 rounded-tr-md rounded-br-sm text-orange-500">
                              <Brain size={24} />
                            </div>
                            <div className="font-semibold md:w-1/2 p-2">
                              <span>{skill?.Name}</span>
                            </div>
                          </div>
                          <div className="md:w-1/2 text-lgreen">
                            <span>{skill?.Yrs} years</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <Typography
                        variant="subtitle1"
                        className="text-primorange"
                      >
                        I seem not to have that skill or it is something I am
                        just starting to learn...
                      </Typography>
                    )}
                  </article>
                </div>
              </div>
            </section>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className="mx-3">
            <Zypher />
          </Grid>
          <Grid></Grid>
        </Grid>
      </Stack>
    </>
  );
}
