import {Button, ButtonGroup} from "@nextui-org/button";
import emoji from '/1f44b.png'

function BotonChat(){
    return (
        <>
            <div>
            <Button className='translate-y-1 hover:translate-y-0 rounded-md mt-10 h-14  w-48 bg-violet-600 tracking-wider text-base  font-bold text-white'>Chat with me {emoji}</Button>
            </div>
           
        </>
    )
}

export default BotonChat