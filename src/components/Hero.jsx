import { Fragment, useEffect, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';

import { Button } from '@/components/Button';
import { HeroBackground } from '@/components/HeroBackground';
import blurCyanImage from '@/images/blur-cyan.png';
import blurIndigoImage from '@/images/blur-indigo.png';
import wriHome from '@/images/wri-home.jpg';

const codeLanguage = 'javascript';
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`;

const tabs = [{ name: 'http://wri.wheel-rail-seminars.com', isActive: true }];

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  );
}

export function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      console.log('Video element found:', video);
      video.play().catch(error => console.error('Error playing video:', error));
      setTimeout(() => {
        video.pause();
      }, 5000);
    }
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => console.error('Error playing video on hover:', error));
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  };

  return (
    <div className="relative overflow-hidden bg-black dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
  <div className="absolute inset-0 flex justify-center">
    <div className="relative w-full max-w-[1500px]">
      <video
        className="object-cover w-full h-auto opacity-50"
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        muted
        loop
        autoPlay
        playsInline
      >
        <source src="/video/chicago-trains.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <div className="absolute inset-0 opacity-75 bg-gradient-to-b from-transparent to-black"></div>
  <div className="relative py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="grid items-center max-w-2xl grid-cols-1 px-4 mx-auto gap-x-8 gap-y-16 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute -mb-56 opacity-50 bottom-full right-full -mr-72"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="pb-2 text-5xl font-black text-transparent bg-gradient-to-br from-orange-500 to-red-800 bg-clip-text font-tagline sm:pb-4 sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-9xl">
                Fast. 
                Track.
              </p>
              <p className="mt-3 text-2xl tracking-tight font-header text-slate-200">
                See how WRI's new Jamstack website helped increase traffic 12%, increase conversions 23.5% and increase conference attendance by a whopping 32%. Let's go!
              </p>
              <div className="flex gap-4 mt-8 md:justify-center lg:justify-start">
                <Button
                  href="https://gravitaldigital.com/#contact"
                  target="_blank"
                  className="text-white bg-sky-600 hover:bg-white hover:text-red-700"
                >
                  Contact me
                </Button>
                <Button
                  href="https://wri.wheel-rail-seminars.com/"
                  target="_blank"
                  className="text-white bg-gradient-to-br from-orange-500 to-red-700"
                >
                  Visit WRI 2024
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <Image
                className="absolute -right-64 -top-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
              <div className="relative rounded-2xl bg-amber-600 ring-1 ring-white/10 backdrop-blur">
                <div className="absolute h-px -top-px left-20 right-11 bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
                <div className="absolute h-px -bottom-px left-11 right-20 bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
                <div className="pt-4 pl-4">
                  <TrafficLightsIcon className="h-2.5 w-auto stroke-blue-600/50" />
                  <div className="flex ml-12 space-x-2 text-2xl">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx(
                          'flex h-8 rounded-full',
                          tab.isActive
                            ? 'font-body text-black'
                            : 'text-slate-500',
                        )}
                      >
                        <div
                          className={clsx(
                            'flex items-center rounded-full px-2.5',
                            tab.isActive && 'bg-amber-600',
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start px-1 mt-6 text-sm">
                    <div
                      aria-hidden="true"
                      className="pr-4 font-mono text-white border-r select-none border-slate-300/5"
                    >
                      {Array.from({
                        length: code.split('\n').length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, '0')}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Image src={wriHome} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
