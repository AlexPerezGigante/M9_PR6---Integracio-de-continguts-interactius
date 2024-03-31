import { SocialFooter } from "./socialFooter"

function Footer() {
    return(
        <>
        <div className="bg-black text-white">
            <div className="mx-auto px-10 md:px-0 block md:flex max-w-full md:max-w-[1200px] pt-20 pb-20 border-b-1 border-[#444]">
            <div className=" md:hidden mb-10   ">
                <h3 className="tracking-wide font-bold text-[1.3rem] ">SOCIAL</h3>
                    <SocialFooter/>
                </div>
                <div className="">
                    <h3 className="tracking-wide font-bold text-[1.3rem]">RAM MAHESHWARI</h3>
                    <p className="pt-4 max-w-full md:max-w-[500px] text-[0.9rem] font-normal leading-6">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className="hidden md:block mt-10 md:mt-0 md:ms-auto ">
                <h3 className="tracking-wide font-bold text-[1.3rem] ">SOCIAL</h3>
                    <SocialFooter/>
                </div>
            </div>
            <div className="text-center text-[0.7rem] py-10">
                <p>© Copyright 2024 . Made by <a className="underline font-bold" href="#">Ram Maheshwari</a></p>
            </div>
        </div>
        </>
    )
}

export default Footer