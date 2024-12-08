import AboutMe from "../components/AboutMe";
import ResumeViewer from "../components/ResumeViewer";

//const creatureApiUrl = import.meta.env.VITE_CREATURE_API;

const PagesData = [
  {
    path: "",
    element: <AboutMe />,
    title: "About Me",
    external: false,
  },
  {
    path: "resume",
    element: <ResumeViewer />,
    title: "Resume",
    external: false,
  },
  //  {
  //    path: creatureApiUrl,
  //    element: "",
  //    title: "Creature Creator",
  //    external: true,
  //  },
];

export default PagesData;
