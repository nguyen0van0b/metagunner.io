import urlImg from '../../media/tokenomics.25d3c6dd.png'
import urlTitle from '../../media/Tokenomics.png'
import style from './tokenomics.module.scss'

function Tokenomics(){
    return(
        <section className={style.tokenomics} id='tokenomics'>
            <div className='container'>
                <div className={style.tokenomicsWrapper}>
                    <div className={style.tokenomicsWrapperTitle}>
                        <img src={urlTitle} alt=""/>
                    </div>
                    <div className={style.tokenomicsWrapperImg} data-aos="fade-up-right" data-aos-once="true" data-aos-delay="300">
                        <img src={urlImg} alt="tokenomic"/>
                    </div>
                    <div className={style.tokenomicsWrapperContent} data-aos="fade-up-left" data-aos-once="true" data-aos-delay="300">
                        {/* <div className={style.tokenomicsWrapperContentTitle}>
                            TOKENOMICS <span>DISTRUBUTION</span>
                        </div> */}
                        <p>Total Supply: <span>200,000,000 $MTG</span> </p>
                        <ul className={style.tokenomicsWrapperContentList}>
                            <li><span>Private Round:</span><span>15%</span></li>
                            <li><span>Public Round:</span><span>1%</span></li>
                            <li><span>Team:</span><span>15%</span></li>
                            <li><span>Advisors & Partners:</span><span>7%</span></li>
                            <li><span>Liquidity:</span><span>10%</span></li>
                            <li><span>Marketing:</span><span>13%</span></li>
                            <li><span>Ecosystem:</span><span>39%</span></li>
                        </ul>
                        {/* <a href="#" className={clsx('btn btnPrimary',style.button)} target="_blank" rel="noopener noreferrer">Read More</a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Tokenomics