// import imgSC from '../../media/standard-crypto.95688a10.webp'
// import imgRC from '../../media/raptor-capital.152fe148.webp'
// import imgIL from '../../media/icetea-labs.38a1c529.webp'
// import imgEC from '../../media/everse-capital.f1830d8c.webp'
// import imgMagnus from '../../media/magnus-capital.027e1ec0.webp'
// import imgX21 from '../../media/x21.6cb4d9a9.webp'
// import imgMC from '../../media/metrix-capital.60512ea7.webp'


import style from './investors.module.scss'

function Investors(){
    return(
        <section className={style.investors} id='investors'>
            <div className='container'>
                <h2 className='title' data-aos="fade-up">our <span>investors</span></h2>
                <div className={style.investorsWrapper} data-aos="flip-down" data-aos-delay="300">
                    {/* <img src={imgSC} alt=""/>
                    <img src={imgRC} alt=""/>
                    <img src={imgIL} alt=""/>
                    <img src={imgEC} alt=""/>
                    <img src={imgMagnus} alt=""/>
                    <img src={imgX21} alt=""/>
                    <img src={imgMC} alt=""/> */}
                </div>
            </div>
        </section>
    )
}
export default Investors