import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

 export const routerConfig =createBrowserRouter(
     [{path:'/',element:<MainLayout/>}]
 )



