import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BlogPage from "./pages/blog";
import {CreateUser} from "./pages/user/createUser.tsx";
import UserPage from "./pages/user/user.page.tsx";

const router = createBrowserRouter([
        {
            path: '/',
            element: <BlogPage/>,
        },
        {
            path: '/user',
            element: <UserPage/>,
            children: [
                {
                    path:'create',
                    element: <CreateUser/>,
                }
            ]
        }

    ]
)

function App() {

    return (
        <RouterProvider router={router}/>

    )
}

export default App
