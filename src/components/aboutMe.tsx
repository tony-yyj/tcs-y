import {useEffect} from "react";
import {getUserList} from "../services/user.service.ts";

export default function AboutMe(){
    useEffect(() => {
        getUserList().then(res => {
            console.log('user list', res);
        });
    }, []);
    return (
        <div className='flex justify-center items-center flex-col gap-4 border border-second rounded-lg p-4'>
            <div className="w-[100px] h-[100px] bg-contain bg-[url('/images/tony.jpeg')] rounded"/>
            <div>
                Tony-YYJ
            </div>
            <div className='text-sm'>前端打野</div>
            <div className='flex justify-between items-center gap-4 text-xs'>
                <div>文章(22)</div>
                <div>评论(33)</div>
                <div>分类(44)</div>
            </div>
        </div>
    )
}