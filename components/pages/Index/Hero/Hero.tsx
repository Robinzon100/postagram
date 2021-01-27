import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "components/lib/Button/Button";

const Hero = () => {
  // const [windowsSize, setWindowsSize] = useState<number>(window.innerWidth)

  // window.addEventListener('resize', () => {
  //   if (window.innerWidth > 1080) {
  //     (document.querySelector('.backgound_video__container video') as HTMLVideoElement).play
  //     setWindowsSize(window.innerWidth)
  //   }
  // })

  return (
    <>
      <section className="main_hero">
        <div className="container">
          <div className="backgound_video__container">
            <video autoPlay muted>
              {window.innerWidth > 1080 ? (
                <source src="/videos/final.mp4" type="video/mp4" />
              ) : (
                <source
                  src="/videos/for_mobile_compressed_resized.mp4"
                  type="video/mp4"
                />
              )}
            </video>
          </div>
          <div className="content">
            <motion.h1
              animate={{ opacity: 1, y: -15 }}
              transition={{ duration: 0.4, delay: 2.3 }}
              className="f-size-h1 f-weight-bl heading">
              გჭირდებათ ჩვენი <br /> დახმარება?
            </motion.h1>
            <motion.p
              animate={{ opacity: 0.7, y: -15 }}
              transition={{ duration: 0.4, delay: 2.1 }}
              className="f-size-p2 f-weight-l paragraph">
              ჩვენი გუნდი მზადაა უპასუხოს <br /> თქვენს ნებისმიერ შეკითხვას.
            </motion.p>

            <motion.div
              className="btn_container"
              animate={{ opacity: 1, y: -15 }}
              transition={{ duration: 0.4, delay: 2 }}>
              <Button className="button" color="yellow" size="large">
                კონტაქტი
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
