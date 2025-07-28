export const Sidebar = ({onClick}) => {
    const pages = [
        { title: 'Home', path: '/' },
        { title: 'Artesanato', path: '/art' },
        { title: 'Receitas', path: '/recepy' },
    ]
    return (
        <div className="flex flex-col gap-1 w-full"> 
        {pages.map((page, i) => <span key={i} className="text-center w-full font-script text-primary-200 text-xl hover:bg-secondary-200 rounded" onClick={() => onClick(page.path)}>{page.title}</span>)} 
        </div>
    )
}