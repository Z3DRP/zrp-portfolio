import "../globals.css"
import { NavLink } from "react-router-dom"
import PagesData from "./pageData"

const NavLinks = () => {
    const links = PagesData.map(({title, path, external}) => {
        return (
            <li key={`${title}${path}`} className="block mt-4 lg:inline-block lg:mt-0 mx-4 text-lg">
                {external ? (
                    <a href={path} target="_blank" rel="noopener noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-lgreen hover:underline hover:text-orange-500 mr-4 dark:text-lgreen dark:hover:text-mgreen">
                        <span>{title}</span>
                    </a>
                ) : (
                    <NavLink to={`/${path}`} end>
                        {({ isActive }) => (
                            <span className={isActive ? 
                                "text-orange-700 hover:underline hover:text-orange-500 dark:text-orange-600 dark:hover:text-mgreen" : 
                                "text-lgreen hover:underline hover:text-orange-500 dark:hover:text-mgreen"}
                            >{title}</span>
                        )}
                    </NavLink>
                )}
            </li>
        )
    })

    return <ul id="nav-links" className="list-none">{links}</ul>
}

export default NavLinks;