import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";
import App from "./App";

import Home from "./pages/Home";

const router = createBrowserRouter([
	{ path: "/", element: <App />, children: [{ index: true, element: <Home /> }] },
]);

export default router;
