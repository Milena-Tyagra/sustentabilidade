import { NavLink } from "react-router-dom";

export const Sidebar = ({onClick}) => {
    const pages = [
        { title: 'Home', path: '/' },
        { title: 'Artesanato', path: '/art' },
        { title: 'Receitas', path: '/recepy' },
    ]
    return (
        <div className="flex flex-col gap-1 w-full h-full"> 
        {pages.map((page, i) => <ul key={`page-${i}`}>
                    <li className="text-center w-full font-script text-primary-200 text-xl hover:bg-secondary-200 rounded" onClick={onClick} >
                        <NavLink to={page.path}>
                            <span >{page.title}</span>
                        </NavLink>
                    </li>
                </ul>)} 
        </div>
    )
}