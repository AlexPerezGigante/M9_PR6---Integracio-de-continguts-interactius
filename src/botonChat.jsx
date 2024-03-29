import {Button, ButtonGroup} from "@nextui-org/button";
import emoji from '/1f44b.png'

function BotonChat(){
    return (
        <>
            <div>
                <Button className=' rounded-2xl mt-5 h-12  w-44 bg-white tracking-wider text-base shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>Chat with me <img className="w-[25px]" src={emoji} alt="Emoji" /></Button>
                <Button className=' rounded-2xl mt-5 h-12  w-44 bg-gradient-to-r from-[rgb(64, 29, 186)]  to-[rgb(130, 91, 240)] tracking-wider text-base shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>Chat with me <img className="w-[25px]" src={emoji} alt="Emoji" /></Button>
            </div>
           
        </>
    )
}

export default BotonChat