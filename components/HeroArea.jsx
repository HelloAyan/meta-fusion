'use client';
import Image from 'next/image';
import line from '@/assist/images/bg/line.png'
import icon1 from '@/assist/images/icon/1.png';
import icon2 from '@/assist/images/icon/2.png';
import icon3 from '@/assist/images/icon/3.png';
import icon4 from '@/assist/images/icon/4.png';
import icon5 from '@/assist/images/icon/5.png';
import icon6 from '@/assist/images/icon/6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeroArea(){
      const icons = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4,
    5: icon5,
    6: icon6,
  };
    return (
        <>
         <section className="hero-area section-link" id="home-section">
        <div className="ecosystem-icon-animation">
            {[1, 2, 3, 4, 5, 6].map((num) => (
            <div  key={num} className={`ecosystem-icon ecosystem-icon-${num}`}>
                <Image
                src={icons[num]} 
                alt="image"
                width={50}  // adjust width & height as needed
                height={50}
                priority
                />
            </div>
            ))}
        </div>
      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="toplight">
        <span className="small-shadow"></span>
      </div>
      <div className="hero-line hero-line1">
        <Image
          src={line}
          alt="img"
          width={100} // adjust size accordingly
          height={20}
          priority
        />
      </div>
      <div className="hero-line hero-line2">
        <Image
          src={line}
          alt="img"
          width={100}
          height={20}
          priority
        />
      </div>
      <div className="dots-background dotsBackground"></div>
      <div className="hero-card hero-card1">
        <h3>ECM Holders</h3>
        <p>20,153</p>
      </div>
      <div className="hero-card hero-card2">
        <h3>Total ECM Sold</h3>
        <p>20,153</p>
      </div>
      <div className="container">
        <div className="hero-content">
          {/* Hero Title animation start */}
          <div className="style-2">
            <div className="row">
              <div className="col-xxl-10 offset-xxl-1 col-lg-10 offset-lg-1">
                <div className="hero-title reveal-wrapper">
                  <h1>
                    Architecting the Future of Digital Commerce MetaFusion Labs
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Title animation end */}
          {/* Hero Text animation start */}
          <div className="style-3">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="hero-title reveal-wrapper">
                  <p className="text-center mt-5">
                    Powering ECM Coin and its ecosystem—delivering scalable,
                    low-cost, blockchain infrastructure for e-commerce, trading
                    and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-btn-wrapper position-relative mt-5">
              <a href="#" className="hero-btn">
                <div className="light-particle"></div>
                <div className="light-particle"></div>
                <div className="light-particle"></div>
                <span>
                  Start Exploring
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
          {/* Hero Text animation end */}
        </div>
      </div>
    </section>
        </>
    )
}


