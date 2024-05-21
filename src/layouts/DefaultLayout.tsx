import {ReactNode} from "react";
import Footer from "../components/footer.tsx";

interface Props {
    headerNode: ReactNode;
    rightNode?: ReactNode;
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
            <div className='flex flex-1 justify-center max-w-[1300px] m-auto w-full gap-8 mt-6'>

                <div className={`pl-8  w-full`}>
                    {contentNode}
                </div>
                {rightNode &&
                    <div className=' max-w-[340px] w-full rounded-[4px] pr-8'>
                        {rightNode}
                    </div>
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}