import Header from "../../components/header.tsx";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";
import {Outlet} from "react-router-dom";

export default function UserPage(){
    return (
        <DefaultLayout
            headerNode={<Header/>}
            contentNode={<Outlet/>}
            />
    )
}