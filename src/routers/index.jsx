import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailesPage from "../pages/DetailesPage";
import SearchPage from "../pages/SearchPage";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:":explore",
                element:<ExplorePage/>
            },
            {
                path:":explore/:id",
                element:<DetailesPage/>
            },
            {
                path:"search",
                element:<SearchPage/>
            }
        ]
    }
])
export default router