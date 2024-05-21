import {ChangeEvent, useEffect, useState} from "react";

enum ThemeEnum {
    LIGHT = 'light',
    DARK = 'dark',
}

const ChangeTheme = () => {
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT);
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        setTheme(localStorage.theme);
    }, []);

    const changeTheme = (e: ChangeEvent) => {
        const value = (e.target as HTMLSelectElement).value;
        console.log('e', e, (e.target as HTMLSelectElement).value);
        if (value === ThemeEnum.LIGHT) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        setTheme(value as ThemeEnum);
    }
   return (
       <div className='flex'>
           theme: {theme}
           <div>
               <select onChange={changeTheme}>
                   <option value={ThemeEnum.LIGHT}>{ThemeEnum.LIGHT}</option>
                   <option value={ThemeEnum.DARK}>{ThemeEnum.DARK}</option>
               </select>
           </div>
       </div>
   )
};

const Nav = () => {
   return (
       <div className='flex items-center gap-4'>

           <div>
               <a href='/'>
                   博客
               </a>
           </div>
           <div>
               <a href='/user/create'>user</a>
           </div>
           <div>
               工具
           </div>
           <div>关于我</div>
       </div>
   )
}

export default function Header() {
    return (
        <div className='h-[48px] border-b border-second text-white text-sm flex justify-between items-center px-8'>
            <div>
               TonyStudio
            </div>
            <div className='flex justify-end items-center gap-4'>
                <Nav/>
                <ChangeTheme/>
            </div>
        </div>
    )
}