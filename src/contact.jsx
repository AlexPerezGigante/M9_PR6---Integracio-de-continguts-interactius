import {Button, ButtonGroup} from "@nextui-org/button";
import { HeaderSeccion } from "./headerSeccion";
import fotoFondo from '/common-bg.svg'

const style = {
    background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url('+fotoFondo+')'
  }
function Contact(){
    return (
        <>
        <div style={style} className=' mx-auto font-source-sans3 pt-40 pb-28 mt-32 text-center'>
            <HeaderSeccion nombre={'CONTACT'} parrafo={'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'}></HeaderSeccion>
        

        <form className="text-neutral-600 mx-auto w-[850px] bg-white text-left shadow-2xl p-10 text-base font-semibold mt-10 rounded-md" action="">
            <label htmlFor="" className="">Name</label>
            <input className="focus:outline-0 border-2 w-[100%] bg-neutral-200  p-4 rounded-md mt-3 mb-11" placeholder='Enter Your Name' type="text" />

            <label htmlFor="" className="">Email</label>
            <input className="focus:outline-0 border-2 w-[100%] bg-neutral-200 p-4 rounded-md mt-3 mb-11" placeholder='Enter Your Email' type="email" />

            <label htmlFor="" className="">Message</label>
            <textarea cols={30} rows={10} className="focus:outline-0 border-2 w-[100%] bg-neutral-200 leading-tight p-4 rounded-md mt-3 resize-none" placeholder='Enter Your Message' />
            <Button data-hover="false" className='translate-y-1 hover:translate-y-0 rounded-md mt-10 h-16 ms-[70%] w-56 bg-violet-600 tracking-wider text-base  font-bold text-white'>SUBMIT</Button>
        </form>
        </div>
        </>
    )}

export default Contact

