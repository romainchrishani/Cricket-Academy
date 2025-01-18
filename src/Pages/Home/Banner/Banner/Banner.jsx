import React from 'react';
import TypingEffect from '../TypingEffect/TypingEffect';
import Carousel from '../Carousel/Carousel';

const Banner = () => {
    return (
      <>
        <div id='home'
          className="hero min-h-screen !px-0"
          style={{
            backgroundImage: "url(https://t3.ftcdn.net/jpg/04/35/60/96/240_F_435609606_KgXAz2sgnnfqefOmyuJnVKMxOqu4UaFe.webp)",loading:"lazy"
          }}
        >
            <div className='hero-overlay bg-opacity-60 dark:bg-opacity-80'></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='grid grid-cols-1 md:grid-cols-2 pt-16 gap-24'>
                    <div>
                        <TypingEffect/>
                    </div>
                    <div>
                        <Carousel/>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default Banner;