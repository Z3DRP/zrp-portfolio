import {Route, Routes} from "react-router-dom"
import PagesData from "./pageData"

const Router = () => {
    const pageRoutes = PagesData.map(({path, title, element, external}) => {
        if (!external) {
            return <Route key={title} path={`/${path}`} element={element} />
        }
    })

    return <Routes>{pageRoutes}</Routes>
}

export default Router;