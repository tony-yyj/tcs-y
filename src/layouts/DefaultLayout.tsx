import {ReactNode} from "react";
import Footer from "../components/footer.tsx";

interface Props {
    headerNode: ReactNode,
}

export default function DefaultLayout(
    {
        headerNode
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
                <div className='border-b border-second max-w-[340px] w-full rounded-[4px] p-2'>
                    left side
                </div>
                <div className='border-b border-second max-w-[800px] w-full'>
                    main content
                </div>
                <div className='border-b border-second  max-w-[340px] w-full'>
                    right side
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}