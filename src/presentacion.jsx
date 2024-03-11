import fotoFondo from '/common-bg.svg'
import MenuSocial from './menuSocial'
import {Button, ButtonGroup} from "@nextui-org/button";
function Presentacion(){
    const style = {
        background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url('+fotoFondo+')'
      }
    return (
        <>
        <div style={style} className=' mx-auto font-source-sans3 flex pt-[22rem]'>
            <div className='float-start'>
            <MenuSocial></MenuSocial>
            
            </div>
            <div className='text-center mx-auto'>
                <h1 className=' text-[3.5rem] font-extrabold text-gray-900 '>HEY, I'M RAM MAHESHWARI</h1>
                <p className=' mx-auto mt-10 text-[1.4rem] w-[800px] leading-10'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>

                <Button className='translate-y-1 hover:translate-y-0 rounded-md mt-8 h-16 w-72 bg-violet-600 tracking-wider text-xl font-bold text-white'>PROJECTS</Button>

                <div className=' mt-60 w-[25px] h-[40px] border-2 border-black rounded-t-[60px] rounded-b-[60px] mx-auto mb-8'>
                    <div className=' bg-black mx-auto w-[5px] h-[5px] rounded-full border-2 border-black mt-1 animate-raton fade-out-100'></div>
                </div>
            </div>
            
            
        </div>
     
                
      
        </>
        )}

export default Presentacion