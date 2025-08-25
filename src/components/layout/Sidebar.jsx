import { NavLink } from "react-router-dom";

export const Sidebar = ({onClick, mobile, height}) => {
    const pages = [
        { title: 'Home', path: '/' },
        { title: 'Artesanato', path: '/art' },
        { title: 'Receitas', path: '/recepy' },
    ]
    return (
        <div className={`flex flex-col gap-3 px-2  ${mobile ? ' w-full bg-secondary-100 py-3' : 'min-w-[200px] bg-secondary-200'}`} style={{height}}> 
        {pages.map((page, i) => <ul key={`page-${i}`}>
                    <li className={`text-center w-full font-script text-primary-200 text-xl ${mobile ? 'hover:bg-secondary-200' : 'hover:bg-secondary-100'}  `} onClick={onClick} >
                        <NavLink to={page.path}>
                            <span >{page.title}</span>
                        </NavLink>
                    </li>
                </ul>)} 
        </div>
    )
}