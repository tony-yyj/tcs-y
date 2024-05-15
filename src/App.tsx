import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import BlogPage from "./pages/blog";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<BlogPage/>}/>
    )
)

function App() {

    return (
        <RouterProvider router={router}/>

    )
}

export default App
