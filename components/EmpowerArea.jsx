'use client';
import Image from 'next/image';
import empowerWorld from '@/assist/images/bg/empower.png'
import power1 from '@/assist/images/icon/power-1.png'
import power2 from '@/assist/images/icon/power-2.png'
import power3 from '@/assist/images/icon/power-3.png'
import power4 from '@/assist/images/icon/power-4.png'

import { useEffect } from 'react';
import lottie from 'lottie-web';


export default function EmpowerArea() {

  useEffect(() => {
    // Navigation highlight on scroll
    const sections = document.querySelectorAll('.section-link');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Lottie animation
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-empower'),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/assets/js/empower.json',
    });

    const handleLottieScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY >= 700) {
        animation.play();
      }
    };

    window.addEventListener('scroll', handleLottieScroll);

    //  control background video playback rate
    const video = document.getElementById('bg-video');
    if (video) {
      video.playbackRate = 0.7;
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleLottieScroll);
      animation.destroy();
    };
  }, []);

  return (
    <>
      <section className="empower-area section-link" id="about">
        <div className="ellipse ellipse-3"></div>
        <div className="dots-background dotsBackground"></div>

        {/* <div className="hero-bg">
        <Image src="/assets/images/bg/hero-bg.png" alt="image" width={600} height={400} />
      </div> */}

        {/* lottifile loading animation start */}
        <div id="lottie-empower"></div>
        {/* lottifile loading animation End */}

        <div className="container empower-container">
          {/* <div className="empower-bg">
          <Image src="/assets/images/bg/empower.png" alt="image" width={600} height={400} />
        </div> */}

          <div className="empower-content">
            <div className="row empower-top">
              <div className="col-lg-6 col-xl-6">
                <div className="empower-head-text text-center text-lg-start">
                  <h2>Empowering the Future of Blockchain</h2>
                  <p>
                    MetaFusion Labs is a blockchain solutions company officially
                    registered in Panama, serving as the parent organization
                    behind the ECM Ecosystem. With a strong focus on developing
                    decentralized infrastructure, MetaFusion Labs partners
                    strategically with BlockVerse Solutions LLC—an industry
                    leader in token issuance and blockchain development—to
                    deliver scalable, innovative Web3 solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <div className="logo-thumbnails">
                  <div className="logo-thumbnails-set" id="target-box"></div>
                </div>
                <div className="empower-image-flip d-block d-xl-none">
                  <Image
                    src={empowerWorld}
                    alt="image"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>

            <div className="empower-bottom">
              <div className="row g-5">
                {/* 1.single empower card start */}
                <div className="col-md-6 col-xl-3">
                  <div className="single-empower-card single-empower-card-1">
                    <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                      <Image
                        className="empower-icon"
                        src={power1}
                        alt="image"
                        width={50}
                        height={50}
                      />
                      <h3 className="p-0 pt-md-3 pb-md-3">
                        Blockchain Infrastructure
                      </h3>
                    </div>
                    <p>
                      MetaFusion Labs is a blockchain solutions company
                      officially registered in Panama, serving as the parent
                      organization behind the ECM Ecosystem.
                    </p>
                  </div>
                </div>
                {/* 1.single empower card End */}

                {/* 2.single empower card start */}
                <div className="col-md-6 col-xl-3">
                  <div className="single-empower-card">
                    <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                      <Image
                        className="empower-icon"
                        src={power2}
                        alt="image"
                        width={50}
                        height={50}
                      />
                      <h3 className="p-0 pt-md-3 pb-md-3">Ensure Accessibility</h3>
                    </div>
                    <p>
                      Make Web3 tools and platforms easy to use and available to
                      everyone—businesses and individuals alike.
                    </p>
                  </div>
                </div>
                {/* 2.single empower card End */}

                {/* 3.single empower card start */}
                <div className="col-md-6 col-xl-3">
                  <div className="single-empower-card single-empower-card-3">
                    <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                      <Image
                        className="empower-icon"
                        src={power3}
                        alt="image"
                        width={50}
                        height={50}
                      />
                      <h3 className="p-0 pt-md-3 pb-md-3">
                        Bridge Finance & Comm-erce
                      </h3>
                    </div>
                    <p>
                      Develop robust systems capable of supporting large-scale
                      dece-ntralized applications.
                    </p>
                  </div>
                </div>
                {/* 3.single empower card End */}

                {/* 4.single empower card start */}
                <div className="col-md-6 col-xl-3">
                  <div className="single-empower-card">
                    <div className="d-flex mb-4 mb-md-0 flex-md-column gap-3 align-items-center align-items-md-start">
                      <Image
                        className="empower-icon"
                        src={power4}
                        alt="image"
                        width={50}
                        height={50}
                      />
                      <h3 className="p-0 pt-md-3 pb-md-3">
                        Champion Decentralization
                      </h3>
                    </div>
                    <p>
                      Promote transparent, decentralized technologies that
                      empower users and remove centralized control.
                    </p>
                  </div>
                </div>

                {/* 4.single empower card End */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

