'use client'

import { Icons } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type productType = {
  primaryColor: string,
  logo: string,
  image: string
}

const data: productType[] = [
  {
    primaryColor: "#0455fb",
    logo: "/images/oreo/logo.png",
    image: "/images/oreo/3d-oreo.png"
  },
  {
    primaryColor: "#2E150A",
    logo: "/images/nutella/logo.png",
    image: "/images/nutella/hero.webp"
  },
  {
    primaryColor: "#CE1907",
    logo: "/images/kinder/logo.png",
    image: "/images/kinder/main.png"
  },
  {
    primaryColor: "#3d993d",
    logo: "/images/pringles/logo.png",
    image: "/images/pringles/hero.png"
  },
  {
    primaryColor: "#013fa1",
    logo: "/images/haribo/logo.png",
    image: "/images/haribo/hero.webp"
  },
  {
    primaryColor: "#826eaf",
    logo: "/images/milka/logo.webp",
    image: "/images/milka/hero.webp"
  },
]


const staticDataOreo = {
  list: [
    {
      type: 'image',
      url: '/images/oreo/oreo-sticky.png',
      title: 'Oreo انواع بیسکوییت و شکلات ',
      description: 'landing.stickyPaaS.list.0.description',
    },
    {
      type: 'card',
      url: '/images/oreo/oreo-1.png',
      title: 'Oreo Original',
      description: 'Sweet Vanilla Cream',
    },
    {
      type: 'card',
      url: '/images/oreo/oreo-2.webp',
      title: 'Oreo Dessert',
      description: 'Oreo Chocolate Dessert ( Limited Edition )',
    },
    {
      type: 'card',
      url: '/images/oreo/oreo-3.png',
      title: 'Oreo Ginger Bread',
      description: 'Oreo Ginger Bread ( Limited Edition )',
    },
    {
      type: 'card',
      url: '/images/oreo/oreo-4.png',
      title: 'Oreo Double Stuff',
      description: 'Oreo Berry ChocTop',
    },
    {
      type: 'card',
      url: '/images/oreo/oreo-5.png',
      title: 'Oreo Golden',
      description: 'Buttery Flavored Cookie',
    },
  ]
};


const staticDataNutella = {
  list: [
    {
      type: 'image',
      url: '/images/nutella/list.png',
      title: 'Nutella انواع محصولات ',
      description: 'landing.stickyPaaS.list.0.description',
    },
    {
      type: 'card',
      url: '/images/nutella/nutella-1.avif',
      title: 'Nutella Family 3kg',
      description: 'Classic Nutella',
    },
    {
      type: 'card',
      url: '/images/nutella/nutella-2.png',
      title: 'Nutella 1kg',
      description: 'Nutella classic Chocolate ',
    },
    {
      type: 'card',
      url: '/images/nutella/nutella-3.png',
      title: 'Nutella B-Ready',
      description: 'Nutella B_Ready sticks',
    },
    {
      type: 'card',
      url: '/images/nutella/nutella-4.webp',
      title: 'Nutella Mini',
      description: 'small jar',
    },
    {
      type: 'card',
      url: '/images/nutella/nutella-5.png',
      title: 'Nutella Go',
      description: 'Nutella Go Sticks',
    },
  ]
};

const staticDataPringles = {
  list: [
    {
      type: 'image',
      url: '/images/pringles/list.png',
      title: 'pringles انواع محصولات ',
      description: 'landing.stickyPaaS.list.0.description',
    },
    {
      type: 'card',
      url: '/images/pringles/pringles-1.png',
      title: 'Pringles Hot & Spicy',
      description: 'Hot & Spicy chips',
    },
    {
      type: 'card',
      url: '/images/pringles/pringles-2.webp',
      title: 'Prawn cocktail',
      description: 'Prawn cocktail chips ',
    },
    {
      type: 'card',
      url: '/images/pringles/pringles-3.avif',
      title: 'Sweet Paprika',
      description: 'Sweet Paprika Chips',
    },
    {
      type: 'card',
      url: '/images/pringles/pringles-4.png',
      title: 'pringles Mini',
      description: 'small jar',
    },
    {
      type: 'card',
      url: '/images/pringles/pringles-5.webp',
      title: 'pringles Go',
      description: 'pringles Go Sticks',
    },
  ]
};

const staticDataHaribo = {
  list: [
    {
      type: 'image',
      url: '/images/haribo/list.png',
      title: 'Haribo انواع محصولات ',
      description: 'landing.stickyPaaS.list.0.description',
    },
    {
      type: 'card',
      url: '/images/haribo/haribo-1.webp',
      title: 'Haribo Star mix',
      description: 'Star Mix',
    },
    {
      type: 'card',
      url: '/images/haribo/haribo-2.webp',
      title: 'Haribo Gold Bears',
      description: 'Gold Bears Mix',
    },
    {
      type: 'card',
      url: '/images/haribo/haribo-3.png',
      title: 'Haribo Super Mix',
      description: 'Super Mix',
    },
    {
      type: 'card',
      url: '/images/haribo/haribo-4.png',
      title: 'Haribo Cola',
      description: 'Coca Cola flavored',
    },
    {
      type: 'card',
      url: '/images/haribo/haribo-5.png',
      title: 'Haribo Watermelon',
      description: 'Watermelon flavored',
    },
  ]
};


export default function Page() {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const [_, setIsSticky] = useState(false);
  const firstItemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    if (firstItemRef.current) {
      observer.observe(firstItemRef.current);
    }

    return () => {
      if (firstItemRef.current) {
        observer.unobserve(firstItemRef.current);
      }
    };
  }, []);

  if (!mounted) {
    return null
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip text-clip transition-all duration-300">

      <SiteHeader
        color={data[currentIndex].primaryColor}
        logo={data[currentIndex].logo}
        fade={fade} />

      <div className="relative flex size-full flex-1 flex-col">
        <section className="relative flex w-full flex-col justify-center">
          <div className="mx-auto flex w-10/12 flex-col items-end gap-y-5 px-5 pt-10 text-right md:pt-20">
            <TypingAnimation style={{ color: data[currentIndex].primaryColor }} className="mx-auto text-xl font-bold md:mx-0 md:text-4xl">فروشگاه شکلات بوستان</TypingAnimation>
            <TypingAnimation className="h-12 w-full text-center text-sm text-gray-400 md:w-5/12 md:text-right md:text-lg">{"بهترین فروشگاه آنلاین برای خرید انواع شکلات، آب‌ نبات، قهوه و محصولات خوشمزه دیگر با کیفیت عالی و قیمت مناسب. تجربه‌ای شیرین و متفاوت از خرید آنلاین"}</TypingAnimation>
            <Button style={{ background: data[currentIndex].primaryColor }} className="mt-10 w-full rounded-[2em] py-3 text-white !transition-all !duration-500 md:w-3/12">
              <Link className="flex gap-3 text-lg font-bold" type={'tel'} href={'09046329661'}>
                <Icons.PhoneCall />
                ثبت سفارش
              </Link>
            </Button>
          </div>

          <div className={`relative w-full md:-mt-10`}>
            <Image
              className={`ml-8 w-10/12 transition-all duration-200 md:w-5/12 ${fade ? "-translate-x-full opacity-0" : "opacity-100"}  absolute md:top-[-35%] md:ml-10`}
              alt={'oreo'}
              src={data[currentIndex].image}
              width={700}
              height={500}
              unoptimized
            />
            <svg className="h-[30em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path className="transition-all duration-500" fill={data[currentIndex].primaryColor} fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,90.7C320,96,400,128,480,149.3C560,171,640,181,720,186.7C800,192,880,192,960,181.3C1040,171,1120,149,1200,128C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
          </div>
        </section>


        <div className="w-full">
          <svg className="h-[10em] md:h-[30em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className="transition-all duration-500" fill={data[currentIndex].primaryColor} fill-opacity="1" d="M0,256L20,250.7C40,245,80,235,120,208C160,181,200,139,240,133.3C280,128,320,160,360,154.7C400,149,440,107,480,122.7C520,139,560,213,600,208C640,203,680,117,720,96C760,75,800,117,840,117.3C880,117,920,75,960,101.3C1000,128,1040,224,1080,245.3C1120,267,1160,213,1200,170.7C1240,128,1280,96,1320,122.7C1360,149,1400,235,1420,277.3L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path>
          </svg>
        </div>
      </div>

      <div className={`flex size-full flex-col overflow-x-clip px-5`}>
        <div className="flex w-full flex-col-reverse md:flex-row md:gap-x-24 md:p-5 md:py-20 lg:p-0 ">
          {/* Scrollable List */}
          <div className="mt-20 flex w-full flex-col items-end md:mt-0 md:px-5 lg:w-2/4">
            {staticDataOreo?.list.map((item: any, i: number) => (item.type === 'image' ? (
              <div
                key={`scroll-image${Math.random()}`}
                ref={i === 0 ? firstItemRef : null}
                className=" mb-5 mt-10 flex w-full cursor-pointer flex-col border-b p-5 pt-0 transition-all duration-200 lg:mt-0"
              >
                <div className="w-full">
                  <Image
                    src={item.url}
                    className="size-full rounded"
                    width={700}
                    height={300}
                    alt="kloud"
                  />
                </div>
                <p className="mx-auto py-5 text-xl font-semibold tabular-nums leading-6 md:text-3xl md:leading-none">
                  {item.title}
                </p>
              </div>
            ) : (
              <div
                key={`scroll-list${Math.random()}`}
                ref={i === 0 ? firstItemRef : null}
                className="flex max-h-32 w-full cursor-pointer flex-row items-center justify-between border-b p-5 transition-all duration-200 md:max-h-40 "
              >
                <div className="flex w-7/12 flex-col justify-start md:w-9/12">
                  <p className="text-lg font-extrabold tabular-nums leading-6 md:text-2xl md:leading-none">
                    {item.title}
                  </p>
                  <p className={`mt-2 w-10/12 text-xs leading-5 text-gray-500 md:text-lg md:leading-6`}>
                    {item.description}
                  </p>
                </div>
                <div className="flex w-4/12 items-center justify-end md:w-5/12">
                  <Image
                    className="scale-125 rounded-xl md:scale-105"
                    src={item.url}
                    width={400}
                    height={100}
                    alt="kloud"
                  />
                </div>
              </div>
            )))}
          </div>

          {/* Sticky Div */}
          <div
            className="sticky top-5 z-20 flex size-full flex-col items-center justify-start overflow-hidden rounded-[25%] rounded-b-xl shadow-2xl transition-all duration-300 md:top-48 md:shadow-none lg:w-2/4"
          >
            <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#0455fb" fill-opacity="1" d="M0,128L12,112C24,96,48,64,72,64C96,64,120,96,144,96C168,96,192,64,216,69.3C240,75,264,117,288,133.3C312,149,336,139,360,144C384,149,408,171,432,186.7C456,203,480,213,504,224C528,235,552,245,576,229.3C600,213,624,171,648,144C672,117,696,107,720,112C744,117,768,139,792,160C816,181,840,203,864,208C888,213,912,203,936,213.3C960,224,984,256,1008,234.7C1032,213,1056,139,1080,117.3C1104,96,1128,128,1152,138.7C1176,149,1200,139,1224,122.7C1248,107,1272,85,1296,80C1320,75,1344,85,1368,85.3C1392,85,1416,75,1428,69.3L1440,64L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path>
            </svg>
            <div
              style={{ background: "#0455fb", color: "white" }}
              className="flex w-full flex-col items-center p-5">
              <div className="flex  w-8/12 items-center justify-center md:w-full">
                <Image
                  src={"/images/oreo/logo.png"}
                  className="max-h-64 rounded"
                  width={500}
                  height={200}
                  alt="kloud"
                />
              </div>
            </div>
            <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#0455fb" fill-opacity="1" d="M0,128L12,112C24,96,48,64,72,64C96,64,120,96,144,96C168,96,192,64,216,69.3C240,75,264,117,288,133.3C312,149,336,139,360,144C384,149,408,171,432,186.7C456,203,480,213,504,224C528,235,552,245,576,229.3C600,213,624,171,648,144C672,117,696,107,720,112C744,117,768,139,792,160C816,181,840,203,864,208C888,213,912,203,936,213.3C960,224,984,256,1008,234.7C1032,213,1056,139,1080,117.3C1104,96,1128,128,1152,138.7C1176,149,1200,139,1224,122.7C1248,107,1272,85,1296,80C1320,75,1344,85,1368,85.3C1392,85,1416,75,1428,69.3L1440,64L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path>
            </svg>
          </div>
        </div>

        {/* ////////////////////////////////// */}
        {/* //////////// nutella /////////////// */}

        <div className="mt-48 flex w-full flex-col-reverse md:flex-row-reverse md:gap-x-24 md:p-5 md:py-20 lg:p-0 ">
          {/* Scrollable List */}
          <div className="mt-20 flex w-full flex-col items-end md:mt-0 md:px-5 lg:w-2/4">
            {staticDataNutella?.list.map((item: any, i: number) => (item.type === 'image' ? (
              <div
                key={`scroll-image${Math.random()}`}
                ref={i === 0 ? firstItemRef : null}
                className=" mb-5 mt-10 flex w-full cursor-pointer flex-col border-b p-5 pt-0 transition-all duration-200 lg:mt-0"
              >
                <div className="w-full">
                  <Image
                    src={item.url}
                    className="size-full rounded"
                    width={700}
                    height={300}
                    alt="kloud"
                  />
                </div>
                <p className="mx-auto py-5 text-xl font-semibold tabular-nums leading-6 md:text-3xl md:leading-none">
                  {item.title}
                </p>
              </div>
            ) : (
              <div
                key={`scroll-list${Math.random()}`}
                ref={i === 0 ? firstItemRef : null}
                className="flex max-h-32 w-full cursor-pointer flex-row items-center justify-between border-b p-5 transition-all duration-200 md:my-5 md:max-h-40 "
              >
                <div className="flex w-7/12 flex-col justify-start md:w-9/12">
                  <p className="text-lg font-extrabold tabular-nums leading-6 md:text-2xl md:leading-none">
                    {item.title}
                  </p>
                  <p className={`mt-2 w-10/12 text-xs leading-5 text-gray-500 md:text-lg md:leading-6`}>
                    {item.description}
                  </p>
                </div>
                <div className="flex w-4/12 items-center justify-center md:w-4/12">
                  <Image
                    className="max-w-full rounded-xl"
                    src={item.url}
                    width={400}
                    height={100}
                    alt="kloud"
                  />
                </div>
              </div>
            )))}
          </div>

          {/* Sticky Div */}
          <div
            className="sticky top-5 z-20 flex size-full flex-col items-center justify-start overflow-hidden rounded-[25%] rounded-b-xl shadow-2xl transition-all duration-300 md:top-48 md:shadow-none lg:w-2/4"
          >
            <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#2E150A" fill-opacity="1" d="M0,128L12,112C24,96,48,64,72,64C96,64,120,96,144,96C168,96,192,64,216,69.3C240,75,264,117,288,133.3C312,149,336,139,360,144C384,149,408,171,432,186.7C456,203,480,213,504,224C528,235,552,245,576,229.3C600,213,624,171,648,144C672,117,696,107,720,112C744,117,768,139,792,160C816,181,840,203,864,208C888,213,912,203,936,213.3C960,224,984,256,1008,234.7C1032,213,1056,139,1080,117.3C1104,96,1128,128,1152,138.7C1176,149,1200,139,1224,122.7C1248,107,1272,85,1296,80C1320,75,1344,85,1368,85.3C1392,85,1416,75,1428,69.3L1440,64L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path>
            </svg>
            <div
              style={{ background: "#2E150A", color: "white" }}
              className="flex w-full flex-col items-center p-5">
              <div className="flex  w-8/12 items-center justify-center md:w-full">
                <Image
                  src={"/images/nutella/logo.png"}
                  className="max-h-64 rounded"
                  width={500}
                  height={200}
                  alt="kloud"
                />
              </div>
            </div>
            <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#2E150A" fill-opacity="1" d="M0,128L12,112C24,96,48,64,72,64C96,64,120,96,144,96C168,96,192,64,216,69.3C240,75,264,117,288,133.3C312,149,336,139,360,144C384,149,408,171,432,186.7C456,203,480,213,504,224C528,235,552,245,576,229.3C600,213,624,171,648,144C672,117,696,107,720,112C744,117,768,139,792,160C816,181,840,203,864,208C888,213,912,203,936,213.3C960,224,984,256,1008,234.7C1032,213,1056,139,1080,117.3C1104,96,1128,128,1152,138.7C1176,149,1200,139,1224,122.7C1248,107,1272,85,1296,80C1320,75,1344,85,1368,85.3C1392,85,1416,75,1428,69.3L1440,64L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path>
            </svg>
          </div>
        </div>

        {/* /////////////////////////////////////////// */}
        {/* //////////////////// Pringles ////////////////// */}

        <div className="mt-48 flex w-full flex-col-reverse md:flex-row md:gap-x-24 md:p-5 md:py-20 lg:p-0 ">
          {/* Scrollable List */}
          <div className="mt-20 flex w-full flex-col items-end md:mt-0 md:px-5 lg:w-2/4">
            {staticDataPringles?.list.map((item: any, i: number) => (item.type === 'image' ? (
              <div
                key={`scroll-image${Math.random()}`}
                ref={i === 0 ? firstItemRef : null}
                className=" mb-5 mt-10 flex w-full cursor-pointer flex-col border-b p-5 pt-0 transition-all duration-200 lg:mt-0"
              >
                <div className="w-full">
                  <Image
                    src={item.url}
                    className="size-full rounded"
                    width={700}
                    height={300}
                    alt="kloud"
                  />
                </div>
                <p className="mx-auto py-5 text-xl font-semibold tabular-nums leading-6 md:text-3xl md:leading-none">
                  {item.title}
                </p>
              </div>
            ) : (
              <div
                key={`scroll-list${Math.random()}`}
                ref={i === 0 ? firstItemRef : null}
                className="flex max-h-32 w-full cursor-pointer flex-row items-center justify-between border-b p-5 transition-all duration-200 md:my-5 md:max-h-40 "
              >
                <div className="flex w-7/12 flex-col justify-start md:w-9/12">
                  <p className="text-lg font-extrabold tabular-nums leading-6 md:text-2xl md:leading-none">
                    {item.title}
                  </p>
                  <p className={`mt-2 w-10/12 text-xs leading-5 text-gray-500 md:text-lg md:leading-6`}>
                    {item.description}
                  </p>
                </div>
                <div className="flex w-4/12 items-center justify-center pb-5 md:w-3/12">
                  <Image
                    className=" rounded-xl"
                    src={item.url}
                    width={400}
                    height={100}
                    alt="kloud"
                  />
                </div>
              </div>
            )))}
          </div>

          {/* Sticky Div */}
          <div
            className="sticky top-5 z-20 flex size-full flex-col items-center justify-start overflow-hidden rounded-[25%] rounded-b-xl shadow-2xl transition-all duration-300 md:top-48 md:shadow-none lg:w-2/4"
          >
            <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#3d993d" fill-opacity="1" d="M0,128L12,112C24,96,48,64,72,64C96,64,120,96,144,96C168,96,192,64,216,69.3C240,75,264,117,288,133.3C312,149,336,139,360,144C384,149,408,171,432,186.7C456,203,480,213,504,224C528,235,552,245,576,229.3C600,213,624,171,648,144C672,117,696,107,720,112C744,117,768,139,792,160C816,181,840,203,864,208C888,213,912,203,936,213.3C960,224,984,256,1008,234.7C1032,213,1056,139,1080,117.3C1104,96,1128,128,1152,138.7C1176,149,1200,139,1224,122.7C1248,107,1272,85,1296,80C1320,75,1344,85,1368,85.3C1392,85,1416,75,1428,69.3L1440,64L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path>
            </svg>
            <div
              style={{ background: "#3d993d", color: "white" }}
              className="flex w-full flex-col items-center p-5">
              <div className="flex w-5/12 items-center justify-center md:w-full">
                <Image
                  src={"/images/pringles/logo.png"}
                  className="max-h-48 rounded"
                  width={500}
                  height={200}
                  alt="kloud"
                />
              </div>
            </div>
            <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#3d993d" fill-opacity="1" d="M0,128L12,112C24,96,48,64,72,64C96,64,120,96,144,96C168,96,192,64,216,69.3C240,75,264,117,288,133.3C312,149,336,139,360,144C384,149,408,171,432,186.7C456,203,480,213,504,224C528,235,552,245,576,229.3C600,213,624,171,648,144C672,117,696,107,720,112C744,117,768,139,792,160C816,181,840,203,864,208C888,213,912,203,936,213.3C960,224,984,256,1008,234.7C1032,213,1056,139,1080,117.3C1104,96,1128,128,1152,138.7C1176,149,1200,139,1224,122.7C1248,107,1272,85,1296,80C1320,75,1344,85,1368,85.3C1392,85,1416,75,1428,69.3L1440,64L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path>
            </svg>
          </div>
        </div>

 {/* /////////////////////////////////////////// */}
        {/* //////////////////// haribo ////////////////// */}

        <div className="mt-48 flex w-full flex-col-reverse md:flex-row-reverse md:gap-x-24 md:p-5 md:py-20 lg:p-0 ">
          {/* Scrollable List */}
          <div className="mt-20 flex w-full flex-col items-end md:mt-0 md:px-5 lg:w-2/4">
            {staticDataHaribo?.list.map((item: any, i: number) => (item.type === 'image' ? (
              <div
                key={`scroll-image${Math.random()}`}
                ref={i === 0 ? firstItemRef : null}
                className=" mb-5 mt-10 flex w-full cursor-pointer flex-col border-b p-5 pt-0 transition-all duration-200 lg:mt-0"
              >
                <div className="w-full">
                  <Image
                    src={item.url}
                    className="size-full rounded"
                    width={700}
                    height={300}
                    alt="kloud"
                  />
                </div>
                <p className="mx-auto py-5 text-xl font-semibold tabular-nums leading-6 md:text-3xl md:leading-none">
                  {item.title}
                </p>
              </div>
            ) : (
              <div
                key={`scroll-list${Math.random()}`}
                ref={i === 0 ? firstItemRef : null}
                className="flex max-h-32 w-full cursor-pointer flex-row items-center justify-between border-b transition-all duration-200 md:my-5 md:max-h-40 "
              >
                <div className="flex w-7/12 flex-col justify-start md:w-9/12">
                  <p className="text-lg font-extrabold tabular-nums leading-6 md:text-2xl md:leading-none">
                    {item.title}
                  </p>
                  <p className={`mt-2 w-10/12 text-xs leading-5 text-gray-500 md:text-lg md:leading-6`}>
                    {item.description}
                  </p>
                </div>
                <div className="flex w-4/12 items-center justify-center p-3 md:w-3/12">
                  <Image
                    className="max-w-full max-h-40 rounded-xl"
                    src={item.url}
                    width={400}
                    height={100}
                    alt="kloud"
                  />
                </div>
              </div>
            )))}
          </div>

          {/* Sticky Div */}
          <div
            className="sticky top-5 z-20 flex size-full flex-col items-center justify-start overflow-hidden rounded-[25%] rounded-b-xl shadow-2xl transition-all duration-300 md:top-48 md:shadow-none lg:w-2/4"
          >
            <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#013fa1" fill-opacity="1" d="M0,128L12,112C24,96,48,64,72,64C96,64,120,96,144,96C168,96,192,64,216,69.3C240,75,264,117,288,133.3C312,149,336,139,360,144C384,149,408,171,432,186.7C456,203,480,213,504,224C528,235,552,245,576,229.3C600,213,624,171,648,144C672,117,696,107,720,112C744,117,768,139,792,160C816,181,840,203,864,208C888,213,912,203,936,213.3C960,224,984,256,1008,234.7C1032,213,1056,139,1080,117.3C1104,96,1128,128,1152,138.7C1176,149,1200,139,1224,122.7C1248,107,1272,85,1296,80C1320,75,1344,85,1368,85.3C1392,85,1416,75,1428,69.3L1440,64L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path>
            </svg>
            <div
              style={{ background: "#013fa1", color: "white" }}
              className="flex w-full flex-col items-center p-5">
              <div className="flex w-5/12 items-center justify-center md:w-full">
                <Image
                  src={"/images/haribo/logo.png"}
                  className="max-h-48 rounded"
                  width={500}
                  height={200}
                  alt="kloud"
                />
              </div>
            </div>
            <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#013fa1" fill-opacity="1" d="M0,128L12,112C24,96,48,64,72,64C96,64,120,96,144,96C168,96,192,64,216,69.3C240,75,264,117,288,133.3C312,149,336,139,360,144C384,149,408,171,432,186.7C456,203,480,213,504,224C528,235,552,245,576,229.3C600,213,624,171,648,144C672,117,696,107,720,112C744,117,768,139,792,160C816,181,840,203,864,208C888,213,912,203,936,213.3C960,224,984,256,1008,234.7C1032,213,1056,139,1080,117.3C1104,96,1128,128,1152,138.7C1176,149,1200,139,1224,122.7C1248,107,1272,85,1296,80C1320,75,1344,85,1368,85.3C1392,85,1416,75,1428,69.3L1440,64L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path>
            </svg>
          </div>
        </div>



      </div>

    </div>
  )
}
