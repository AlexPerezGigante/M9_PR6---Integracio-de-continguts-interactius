import {Button, ButtonGroup} from "@nextui-org/button";
import emoji from '/1f44b.png'

function BotonChat(){
    return (
        <>
            <div className="inline-flex w-auto fixed bottom-4 right-4">
                <Button data-hover="false" className=' rounded-2xl mt-5 h-11  w-40 bg-white tracking-wider text-base shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>Chat with me <img className="w-[20px]" src={emoji} alt="Emoji" /></Button>
                <Button className=' text-white rounded-[1.7rem] ms-4 mt-4 min-w-[3.7rem] h-[3.7rem] bg-gradient-to-r from-[#401DBA]  to-[#825BF0] tracking-wider text-base shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clip-rule="evenodd" />
</svg>
</Button>

<Button data-hover="false" className=' opacity-0 min-w-[3.8rem] h-[3.8rem]  hover:opacity-100 hover:animate-bote animate-quitabote text-blue-700 ms-[-60px] rounded-[1.7rem] mt-4   bg-white tracking-wider text-base shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
</svg>

</Button>
            </div>
           
        </>
    )
}

export default BotonChat