export default function Footer(){
    return (
        <div className='flex justify-center flex-col items-center py-4 text-sm gap-2'>
            <div>
                <ul className='flex justify-center items-center gap-4 text-primary/65'>
                    <li className='cursor-pointer hover:text-primary '>
                        网站地图
                    </li>
                    <li className='cursor-pointer hover:text-primary '>
                        友情链接
                    </li>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-4 text-primary/65'>
                <div>
                    CopyRight &copy; 2024 Tony YYJ
                </div>
                <a href='https://beian.miit.gov.cn/' className='hover:text-second'>陇ICP备16002023号-1</a>
            </div>
        </div>
    )
}