import logoLink from '/linkedin-dark.svg'
import logoTwitter from '/twitter-dark.svg'
import logoYt from '/yt-dark.svg'
import logoGithub from '/github-dark.svg'
import logoBook from '/book-dark.svg'


function MenuSocial(){

    return(
        <>
        <div className=' bg-slate-700 w-14 rounded-e-sm p-1'>
            <div className='ms-1'>
            <a href="#"><img className=' h-10 p-1 hover:bg-indigo-300' src={logoLink} alt="Logo Linkedin" /></a>
            </div>
            <div className='ms-1 mt-1'>
            <a href="#"><img className=' h-10 p-1 hover:bg-indigo-300' src={logoTwitter} alt="Logo Twitter" /></a>
            </div>
            <div className='ms-1 mt-1'>
                <a href="#"><img className=' h-10 p-1 hover:bg-indigo-300' src={logoYt} alt="Logo YouTube" /></a>
            </div>
            <div className='ms-1 mt-1'>
                <a href="#"><img className=' h-10 p-1 hover:bg-indigo-300' src={logoGithub} alt="Logo GitHub" /></a>
            </div>
            <div className='ms-1 mt-1'>
                <a href="#"><img className=' h-10 p-1 hover:bg-indigo-300' src={logoBook} alt="Logo Book" /></a>
            </div>
            
            
            
            
        </div>
        </>
    )
}
export default MenuSocial