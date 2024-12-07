import {
  Box,
  Stack,
  Grid,
  Card,
  Typography,
  Button,
  CardContent,
} from "@mui/material";
import { Linkedin, FileUser, Github, Check } from "lucide-react";
import zlogo from "../assets/images/zlogo1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AboutCard() {
  const navigate = useNavigate();
  const [portfolioData, setPortfolioData] = useState(undefined);

  const handleNavToGithub = () => {
    try {
      const githubUrl = import.meta.env.VITE_GITHUB_URL;
      window.open(githubUrl, "_blank");
    } catch (err) {
      console.log(`github navigation error:: ${err}`);
    }
  };

  const handleNavToLinkedIn = () => {
    try {
      const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
      window.open(linkedInUrl, "_blank");
    } catch (err) {
      console.log(`linkdin navigation error:: ${err}`);
    }
  };

  const handleNavToResume = () => {
    navigate("/resume");
  };

  return (
    <>
      <Box sx={{ padding: 4 }}>
        <Stack spacing={3}>
          <Grid container display="flex" direction="row" spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className="col-span-5 row-span-1 grid grid-rows-3 rounded-md mt-4 ml-4 w-full border-l-white">
                <Box className="flex justify-start align-middle items-center overflow-hidden m-0 p-0 bg-neutral-800 rounded-md">
                  <img
                    src={zlogo}
                    alt="my logo"
                    className="rounded-tr-md rounded-tl-md flex-shrink min-h-56 min-w-56 w-56 h-56 p-0 m-o"
                  />
                </Box>
                <CardContent className="text-gwhite">
                  <Stack spacing={3}>
                    <Typography variant="h5">
                      {portfolioData?.AboutDetails?.Title ??
                        "Place holder text for nothing"}
                    </Typography>
                    <Typography variant="body1">
                      {portfolioData?.AboutDetails?.ExpOverview ??
                        "More place hodler data for nothing"}
                      some other stuff
                    </Typography>
                    <Grid
                      container
                      className="flex flex-row justify-evenly mt-4 p-4"
                    >
                      <Grid item>
                        <button onClick={handleNavToLinkedIn}>
                          <Linkedin size={24} />
                        </button>
                      </Grid>
                      <Grid item>
                        <button onClick={handleNavToGithub}>
                          <Github size={24} />
                        </button>
                      </Grid>

                      <Grid item>
                        <button onClick={handleNavToResume}>
                          <FileUser size={24} />
                        </button>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Box id="exp-container">
                <Button
                  variant="contained"
                  className={`flex flex-row w-full text-lg font-semibold bg-lgreen dark:bg-mgreen text-dgreen dark:text-dmgreen px-4 py-2 rounded mt-4 mb-4 focus:outline-none hover:bg-dlgreen dark:hover:bg-dlgreen`}
                >
                  <span>Experience</span>
                </Button>
                <Box className="grid grid-col-1 gap-4 overflow-y-scroll">
                  <Grid container spacing={2}>
                    {portfolioData?.ProfessionalExperience?.length > 0 ? (
                      portfolioData?.ProfessionalExperience.map((xp) => (
                        <Grid item xs={12} key={xp.Id}>
                          <Card className="flex flex-col bg-dgreen dark:bg-ddgreen text-lgreen dark:text-mgreen md:justify-between space-y-2 rounded shadow">
                            <Box className="bg-neutral-800 font-semibold w-full flex flex-row align-middle justify-items-center rounded-md px-2 py-4">
                              <Box className="mr-1 bg-primorange">
                                <Check size={18} />
                              </Box>
                              <Typography variant="body1">
                                {xp?.Company}
                              </Typography>
                              <Typography
                                variant="body2"
                                className="ml-2 font-semibold"
                              >
                                {xp?.Length}
                              </Typography>
                              <Typography variant="body2" className="px-2 py-1">
                                {xp?.Description}
                              </Typography>
                            </Box>
                          </Card>
                        </Grid>
                      ))
                    ) : (
                      <Typography variant="body1">No Experience</Typography>
                    )}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
