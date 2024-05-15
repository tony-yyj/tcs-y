import DefaultLayout from "../layouts/DefaultLayout.tsx";
import Header from "../components/header.tsx";

export default function Main(){
    return (
        <DefaultLayout
            headerNode={<Header/>}
        />
    )
}