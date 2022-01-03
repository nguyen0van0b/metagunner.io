import { useEffect,useState } from 'react'
import clsx from 'clsx'
import urlBtn from '../media/orange_button.png'
import urlLogo from '../media/Logo.png'
import style from './header.module.scss'
import imgTelegram from '../media/telegram.svg'
import imgDiscord from '../media/discord.svg'
import imgTwitter from '../media/twitter.svg'
import imgMedium from '../media/medium.svg'
import imgFacebook from '../media/facebook.svg'

function Header(){
    const [show,setShow] = useState(false)
    const [showMB,setShowMB] = useState(false)
    
    useEffect(()=>{
        const handleScroll = () =>{
            setShow(window.scrollY>=200)
        }
        window.addEventListener('scroll',handleScroll)
        //cleanup func
        return()=> window.removeEventListener('scroll',handleScroll)
    },[])

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth>1000)
            setShowMB(false)
        }
        window.addEventListener('resize',handleResize)
        //cleanup func
        return()=>{
        window.removeEventListener('resize',handleResize)

        }

    })
    // useEffect(()=>{
    //     const handleResize = ()=>{
    //         if(window.innerWidth>1000){
    //             var prevScrollpos = window.pageYOffset;
    //             window.onscroll = function() {
    //                 var currentScrollPos = window.pageYOffset;
    //                 if (prevScrollpos > currentScrollPos & window.innerWidth<1000) {
    //                     console.log(window.innerWidth)
    //                     document.getElementById("navbar").style.top = "0";
    //                     document.getElementById("navbarContainer").style.top = "0";
    //                     document.getElementById("Social").style.top = "50%";
    //                 } else {
    //                     document.getElementById("navbar").style.top = "-260px";
    //                     document.getElementById("navbarContainer").style.top = "-260px";
    //                     document.getElementById("Social").style.top = "calc(50% + 260px)";
    //                 }
    //             prevScrollpos = currentScrollPos;
    //             }
    //         }
    //     }
    //     window.addEventListener('resize',handleResize)
    // },[])

    return(
    <>
        <header className={clsx(style.header,{[style.headerDown]:show})} id='navbar'>
        <div className={clsx(style.headerContainer,{[style.headerContainerDown]:show})} id='navbarContainer'>
            <div className={style.headerContainerLogo}>
                <img src={urlLogo} alt="logo"/>
            </div>
            <div className={clsx(style.headerContainerMenu,{[style.display_block]:showMB})}>
                <nav>
                    <ul className={clsx(style.mainMenu,{[style.responsive]:showMB})} id="myTopnav">
                        <li><a href="#features">FEATURES</a></li>
                        {/* <li><a href="#NFTsItem">NFTs Item</a></li> */}
                        <li><a href="#NFTsItem">NFTsCard</a></li>
                        <li><a href="#character">CHARACTER</a></li>
                        <li><a href="#roadmap">ROADMAP</a></li>
                        <li><a href="#tokenomics">TOKENOMICS</a></li>
                        <li><a href="#TEAM">TEAM</a></li>
                        <li><a href="https://whitepaper.metagunner.io/" target="_blank">WHITEPAPER</a></li>
                    </ul>
                </nav>
            </div>
            <button className={style.menu_mobile_icon} onClick={()=>setShowMB(!showMB)} >
                <img src={urlBtn} alt=""/>
            </button>
        </div>
        <div className={style.headerWrapperSocial} id='Social'>
                    <a href="https://t.me/MetaGunnerChannel" target="_blank" rel="noopener noreferrer"><img src={imgTelegram} alt=""/></a>
                    <a href="https://discord.gg/3dNjuDMjcB" target="_blank" rel="noopener noreferrer"><img src={imgDiscord} alt=""/></a>
                    <a href="https://twitter.com/MetaGunner_io" target="_blank" rel="noopener noreferrer"><img src={imgTwitter} alt=""/></a>
                    {/* <a href="/" target="_blank" rel="noopener noreferrer"><img src={imgGithub} alt=""/></a>  */}
                    <a href="https://metagunner.medium.com" target="_blank" rel="noopener noreferrer"><img src={imgMedium} alt=""/></a>
                    <a href="https://www.facebook.com/Meta-Gunner-104600948766397" target="_blank" rel="noopener noreferrer"><img src={imgFacebook} alt=""/></a>
                </div>
    </header>
    </>
    )
}
export default Header