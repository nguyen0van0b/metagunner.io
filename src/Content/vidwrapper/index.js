import { useEffect } from 'react'
// import urlvideo from '../../media/metagunner_clip_banner.mp4'
// import urlLogo from '../../media/Logo.png'
import urlimg1 from '../../media/layer1.png'
import urlimg2 from '../../media/layer2.png'
import urlimg3 from '../../media/layer3.png'
import urlimg4 from '../../media/layer4.png'
import urlimgmb from '../../media/metagunner_banner_500.png'
import style from './vidwrapper.module.scss'

function Vidwrapper(){
    useEffect(()=>{
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        document.querySelectorAll(".image1").forEach(function(move) {
            var moving = move.getAttribute("data-value");
            var x = e.clientX * -moving / 200;
            var y = e.clientY * -moving / 200;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
        document.querySelectorAll(".image2").forEach(function(move) {
            var moving = move.getAttribute("data-value");
            var x = e.clientX * -moving / 200;
            var y = e.clientY * -moving / 200;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
        document.querySelectorAll(".image3").forEach(function(move) {
            var moving = move.getAttribute("data-value");
            var x = e.clientX * -moving / 100;
            var y = e.clientY * -moving / 100;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
        document.querySelectorAll(".image4").forEach(function(move) {
            var moving = move.getAttribute("data-value");
            var x = e.clientX * -moving / 150;
            var y = e.clientY * -moving / 150;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
    }
    });
    return(
        <section className={style.Vidwrapper} id='vidwrapper'>
            {/* <video src={urlvideo} autoplay='autoplay' muted='muted' loop='loop' className='image1'></video> */}
            <div className={style.banner_PC}>
            <img src={urlimg1} className='image1' alt="" style={{width:'110%',marginLeft:'-5%'}}/>
            <img src={urlimg2} className='image2' data-value="5" alt=""  style={{width:'110%',top:'50px',marginLeft:'-5%'}}/>
            <img src={urlimg3} className='image3' data-value="5" alt=""  style={{width:'100%'}}/>
            <img src={urlimg4} className='image4' data-value="5" alt="" style={{width:'100%',top:'50px',marginLeft:'3.5%'}}/>
            {/* <img src={urlLogo} alt="logo" className={style.image5} style={{width:'40%',margin:'auto'}}/> */}
            </div>
            <div className={style.banner_MB}>
            <img src={urlimgmb} alt="" />
            </div>
        </section>
    )
}
export default Vidwrapper