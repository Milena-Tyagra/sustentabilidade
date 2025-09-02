import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

export const Sidebar = ({onClick, height}) => {
    const { mobile_mode } = useContext(Context)
    const pages = [
        { title: 'Home', path: '/' },
        { title: 'Artesanato', path: '/art' },
        { title: 'Receitas', path: '/recepy' },
        { title: 'Sobre nós', path: '/about-us' },
    ]
    return (
        <div className={`flex flex-col gap-3 px-2  ${mobile_mode ? ' w-full bg-secondary-100 py-3' : 'min-w-[300px] bg-secondary-400'}`} style={{height}}> 
        {pages.map((page, i) => <ul key={`page-${i}`}>
                    <li className={`text-center w-full font-script text-primary-200  ${mobile_mode ? 'hover:bg-secondary-200 text-xl' : 'hover:bg-secondary-100 text-3xl'}  `} onClick={onClick} >
                        <NavLink to={page.path}>
                            <span >{page.title}</span>
                        </NavLink>
                    </li>
                </ul>)} 
        </div>
    )
}