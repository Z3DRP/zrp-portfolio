import { Construction } from "lucide-react";
import komainu from "../assets/images/komainU.jpeg";

export default function Description() {
  return (
    <>
      <article className="grid grid-cols-4 grid-rows-1 gap-x-4 justify-items-stretch justify-evenly rounded-lg my-4 mx-6 text-lgreen bg-dgreen dark:bg-dgreen">
        <div
          id="info-section"
          className="col-span-2 rounded-md border-solid bg-neutral-800 border-lgreen "
        >
          <div className="    max-w-3xl p-4 mx-8 mt-8 mb-8">
            <h2 className="text-xl mb-6 text-orange-500 font-semibold ">
              Project Description
            </h2>
            <img
              src={komainu}
              className="rounded-tr-md rounded-tl-md flex-shrink min-h-96 min-w-96 w-56 h-96 mx-8 mt-4"
              alt="image of komainu aka foo dog"
            />
          </div>
        </div>
        <div
          id="zypher-body"
          className="col-span-2 justify-items-stretch rounded bg-dgreen dark:bg-dgreen w-full p-4 mt-8"
        >
          <p
            className="leading-relaxed text-justify p-2 rounded-md"
            id="zyphash-description"
          >
            This is my portfolio site. I am actively working on this project.
            The idea is to be a virtual resume of sorts as well as a portfolio
            of other projects. As mentioned I am actively working on this site,
            I just started it not to long ago and thought it was a cool idea for
            people to see the evolution of the site as I build it. That said
            there might be small bugs you notice, I know they are there for
            instance I have not updated the mobile view of the site yet it is in
            my backlog. If you notice something small like that chances are it
            will not be so if you view the site again. I have built the main
            site out as you should any production site or application, as as a
            production site discovers bugs they get fixed I wanted to do
            something similar. There are going to be new features and fixes
            added all the time. I want to use this site as a way to talk about
            myself and show off my development skills. So there is an about me
            section and a working demo of an encryption tool I built, I am going
            to be adding more I just wanted to get something up so it is minimal
            right now. Eventuall it will link to other live projects as well as
            show some my favorite projects. This project is split into a
            frontend and a backend. The backend is a Go server sitting in a Ec2
            instance in a docker container behind a nginx proxy server. I have a
            Redis container on the instance for caching, I know I don not need
            it for this type of site but I just wanted to show I could do it.
            Then the frontend is a Vite React app, that I am starting to
            refactor to use Material UI. After I build the React app I move the
            executable to another containerized Go server I built just to serve
            the frontend application. I am currently setting up Jenkins to pull
            in my frontend source code, build it, copy the build to my other
            source code then push it. Eventually, I am going to set Jenkins up
            to build the docker images and push them, but baby steps. The next
            feature I am adding is a scheduling component so recruiters or
            hiring managers can see my schedule and request a time to speak, it
            will send out a ICS file for calendar intergration as well as send
            out a thank you email. I have already built the websocket using Go
            for it, and am currently building the React component for it.
          </p>
        </div>
      </article>
    </>
  );
}
