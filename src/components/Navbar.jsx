import "../globals.css";
import { useState, useEffect } from "react" ;
import { Sun, Moon } from "lucide-react";
import NavLinks from "../zrouter/navlinks";

export default function  Navbar() {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.classList.add(storedTheme)
        }
    }, []);

    const toggleTheme = () => {
        const selectedTheme = theme === "light" ? "dark" : "light";
        setTheme(selectedTheme)
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(selectedTheme);
        localStorage.setItem("theme", selectedTheme);
    }

    return (
        <nav className="font-sans flex flex-row items-center justify-start flex-wrap bg-dgreen dark:bg-ddgreen p-6">
            {/* <div className="flex items-center flex-shrink-0 text-gwhite dark:text-dgwhite mr-6">
                <BrainCircuit className="text-dgreen hover:text-dgwhite hover:dark:text-gwhite" size={68} />
            </div> */}
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-lg lg:flex-grow">
                    <NavLinks />
                    {/* <Link href={creatureApiUrl} target="_blank" rel="noopener noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-lgreen hover:underline hover:text-ddgreen mr-4 dark:text-ddgreen dark:hover:text-lgreen">
                        Creature Creator
                    </Link> */}
                </div>
            </div>
            <button
                onClick={toggleTheme}
                className="p-2 dark:bg-ddgreen text-lgreen dark:text-dlgreen hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-lgreen rounded ml-4 border-2 border-lgreen dark:border-dlgreen"
                aria-label="Toggle Theme"
            >
                {theme === "light" ? <Moon className="" size={24} /> : <Sun className="" size={24} />}
            </button>
        </nav>
    )
}