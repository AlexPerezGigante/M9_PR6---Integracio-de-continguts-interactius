import logoLink from '/linkedin-ico.png'
import logoTwitter from '/twitter-ico.png'
import logoYt from '/yt-ico.png'
import logoDev from '/blog-ico.png'
import logoGithub from '/github-ico.png'

export function SocialFooter(){

    return (
        <div className="flex mt-5 gap-3 mx-auto">
            <a href="#"><img className='h-[25px]'  src={logoLink} alt="Link" /></a>
            <a href="#"><img className='h-[25px]' src={logoGithub} alt="Github" /></a>
            <a href="#"><img className='h-[25px]' src={logoTwitter} alt="Twitter" /></a>
            <a href="#"><img className='h-[25px]' src={logoDev} alt="Dev Blog" /></a>
            <a href="#"><img className='h-[25px]' src={logoYt} alt="Youtube" /></a>
        </div>
    )
}