
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwind.png'
import fotoPerfil from '/profile-pic-8.png'

function Header() {

  return (
    <>
    <header className=' h-24 flex justify-between '>
        <div className='flex gap-3 ms-11'>
        <img src={fotoPerfil} alt="Foto perfil" className=' h-14 pb-2 mt-5' />
        <div className=' justify-start flex gap-3  font-semibold tracking-wider mt-8'>
            
            <a href="" className= ' hover:text-indigo-800 hover:transition-all hover:delay-0 transition-colors delay-200'>RAM MAHESHWARI</a>

        </div>
        </div>
       
       
        <div className=' right-full pe-24 flex gap-16  font-semibold tracking-wider mt-8'>
            <a href="" className= ' hover:text-indigo-800 hover:transition-all hover:delay-0 transition-colors delay-200'>HOME</a>
            <a href="" className='hover:text-indigo-800 hover:transition-all hover:delay-0  transition-colors delay-200'>ABOUT</a>
            <a href="" className='hover:text-indigo-800 hover:transition-all hover:delay-0  transition-colors delay-200'>PROJECTS</a>
            <a href="" className='hover:text-indigo-800 hover:transition-all hover:delay-0  transition-colors delay-200'>CONTACT</a>
        </div>
    </header>
      
    </>
  )
}

export default Header