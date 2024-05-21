import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import React from "react";
import HomePage from "../pages/HomePage";
import Userspage from "../pages/userspage";

import PostPage from "../pages/PostPage";

export const routerConfig = createBrowserRouter(
    [{path: '/', element: <MainLayout/>,
            children:[{path:'users',element:<Userspage/>},{path:'home', element:<HomePage/>}, {path:'posts', element:<PostPage/>}]},
        ])