import {ReactNode} from "react";
import Footer from "../components/footer.tsx";

interface Props {
    headerNode: ReactNode;
    rightNode: ReactNode;
    contentNode: ReactNode;
}

export default function DefaultLayout(
    {
        headerNode,
        rightNode,
        contentNode,
    }: Props
) {
    return (
        <div className='flex flex-col text-white bg-quaternary w-screen h-screen'>
            <div className='h-[48px]'>
                <div className='max-w-[1300px] m-auto'>
                    {headerNode}
                </div>
            </div>
            <div className='flex flex-1 justify-center max-w-[1300px] m-auto w-full'>

                <div className='border-b border-second max-w-[800px] w-full'>
                    {contentNode}
                </div>
                <div className='border-b border-second max-w-[340px] w-full rounded-[4px] p-2'>
                    {rightNode}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}