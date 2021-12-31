import imgLogo from '../media/Logo.png'
import imgTelegram from '../media/telegram.svg'
import imgDiscord from '../media/discord.svg'
import imgTwitter from '../media/twitter.svg'
import imgGithub from '../media/githubbbb.svg'
import imgMedium from '../media/medium.svg'
import imgFacebook from '../media/facebook.svg'

import style from './footer.module.scss'

function Footer(){
    return(
        <footer className={style.footer}>
        <div className="container">
            <div className={style.footerWrapper}>
                <img src={imgLogo} alt=""/>
                {/* <p>The first Racing Game on BSC Deathroad aims to become a comprehensive gaming ecosystem built for next generation racers, who utilize racing skills to enjoy the real racing expericence and to earn tradable valuable digital assets.</p> */}
                <div className={style.footerWrapperSocial}>
                    <a href="https://t.me/MetaGunnerChannel" target="_blank" rel="noopener noreferrer"><img src={imgTelegram} alt=""/></a>
                    <a href="https://discord.gg/3dNjuDMjcB" target="_blank" rel="noopener noreferrer"><img src={imgDiscord} alt=""/></a>
                    <a href="https://twitter.com/MetaGunner_io" target="_blank" rel="noopener noreferrer"><img src={imgTwitter} alt=""/></a>
                    {/* <a href="/" target="_blank" rel="noopener noreferrer"><img src={imgGithub} alt=""/></a>  */}
                    <a href="https://metagunner.medium.com" target="_blank" rel="noopener noreferrer"><img src={imgMedium} alt=""/></a>
                    <a href="https://www.facebook.com/Meta-Gunner-104600948766397" target="_blank" rel="noopener noreferrer"><img src={imgFacebook} alt=""/></a>
                </div>
                {/* <ul className={style.footerWrapperNav}>
                    <li>Launch APP</li>
                    <li>Marketplace</li>
                    <li>How to play</li>
                </ul> */}
                <p className={style.copyright}>Copyright © 2021 MetaGunner All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}
export default Footer