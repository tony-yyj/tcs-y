import Header from "../../components/header";
import DefaultLayout from "../../layouts/DefaultLayout";
import AboutMe from "../../components/aboutMe.tsx";
import LatestComment from "../../components/latestComment.tsx";
import CategoryList from "../../components/categoryList.tsx";
import PostList from "./postList.tsx";

export default function BlogPage() {
    return (
        <DefaultLayout
            headerNode={<Header/>}
            rightNode={
                <div>
                    <AboutMe/>
                    <LatestComment/>
                    <CategoryList/>
                </div>
            }
            contentNode={
                <PostList/>
            }
        />
    )
}

