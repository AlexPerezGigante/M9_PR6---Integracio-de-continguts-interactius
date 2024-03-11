import logoLink from '/linkedin-dark.svg'
import logoTwitter from '/twitter-dark.svg'
import logoYt from '/yt-dark.svg'
import logoGithub from '/github-dark.svg'
import logoBook from '/book-dark.svg'


function MenuSocial(){

    return(
        <>
        <div className=' bg-white w-16 rounded-e-sm p-1 shadow-xl'>
            <div className='p-1 py-2 hover:bg-violet-200 transition duration:500 hover:duration-500 rounded-md '>
            <a href="#"><img className=' h-10 p-1 ps-2' src={logoLink} alt="Logo Linkedin" /></a>
            </div>
            <div className='p-1 py-2 hover:bg-violet-200 transition duration:500 hover:duration-500 rounded-md '>
            <a href="#"><img className=' h-10 p-1 ps-2'src={logoTwitter} alt="Logo Twitter" /></a>
            </div>
            <div className='p-1 py-2 hover:bg-violet-200 transition duration:500 hover:duration-500 rounded-md '>
            <a href="#"><img className=' h-10 p-1 ps-2' src={logoYt} alt="Logo YouTube" /></a>
            </div>
            <div className='p-1 py-2 hover:bg-violet-200 transition duration:500 hover:duration-500 rounded-md '>
            <a href="#"><img className=' h-10 p-1 ps-2' src={logoGithub} alt="Logo GitHub" /></a>
            </div>
            <div className='p-1 py-2 hover:bg-violet-200 transition duration:500 hover:duration-500 rounded-md '>
            <a href="#"><img className=' h-10 p-1 ps-2'src={logoBook} alt="Logo Book" /></a>
            </div>
            
            
            
            
        </div>
        </>
    )
}
export default MenuSocial