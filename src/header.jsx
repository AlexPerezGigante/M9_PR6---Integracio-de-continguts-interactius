
import fotoPerfil from '/profile-pic-8.png'

function Header() {

  return (
    <>
    <header className=' font-source-sans3 h-24 flex justify-between shadow-lg fixed bg-fixed w-[100%] z-50 opacity-100 bg-opacity-100 bg-white'>
        <div className='flex gap-3 ms-11 font-bold'>
        <img src={fotoPerfil} alt="Foto perfil" className=' h-14 pb-2 mt-5' />
        <div className=' justify-start flex gap-3 text-slate-700 tracking-wider mt-8'>
            
            <a href="" className= ' hover:text-violet-700 hover:transition-all hover:delay-0 transition-colors delay-200'>RAM MAHESHWARI</a>

        </div>
        </div>
       
       
        <div className=' hidden sm:flex  right-full pe-14 lg:pe-24 gap-8 lg:gap-16 text-slate-700 font-bold text-xs md:text-sm lg:text-base tracking-wider mt-8'>
            <a href="" className= ' hover:text-violet-700 hover:transition-all hover:delay-0 transition-colors delay-200'>HOME</a>
            <a href="" className='hover:text-violet-700 hover:transition-all hover:delay-0  transition-colors delay-200'>ABOUT</a>
            <a href="" className='hover:text-violet-700 hover:transition-all hover:delay-0  transition-colors delay-200'>PROJECTS</a>
            <a href="" className='hover:text-violet-700 hover:transition-all hover:delay-0  transition-colors delay-200'>CONTACT</a>
        </div>
    </header>
      
    </>
  )
}

export default Header