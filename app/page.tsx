'use client'

import MainHero from "@/components/hero";
import { Card } from "@/components/ui/card";
import { Car, Instagram, LocateFixedIcon, LocateIcon, MapPin, Phone, PhoneCall, Pin, Send, Tv, Youtube } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


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
  }, []);

  const [_, setIsSticky] = useState(false);
  const firstItemRef: any = useRef(null);

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

      <MainHero />


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
            className="sticky top-20 z-20 flex size-full h-36 flex-col items-center justify-start overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 md:top-48 md:h-44 md:shadow-none lg:w-2/4"
          >
            <div
              style={{ background: "#0455fb", color: "white" }}
              className="flex w-full items-center justify-center ">
              <div className="flex w-8/12 items-center justify-center md:w-6/12">
                <Image
                  src={"/images/oreo/logo.png"}
                  className="rounded pb-5"
                  width={500}
                  height={300}
                  alt="kloud"
                />
              </div>
            </div>
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
                <div className="flex max-h-32 w-4/12 items-center justify-center md:p-5">
                  <Image
                    className="rounded-xl"
                    src={item.url}
                    width={200}
                    height={50}
                    alt="kloud"
                  />
                </div>
              </div>
            )))}
          </div>

          {/* Sticky Div */}
          <div
            className="sticky top-14 z-20 flex size-full h-36 flex-col items-center justify-start overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 md:top-48 md:h-44 md:shadow-none lg:w-2/4"
          >
            <div
              style={{ background: "#2E150A", color: "white" }}
              className="flex w-full items-center justify-center ">
              <div className="flex h-48 w-8/12 items-center justify-center md:w-6/12">
                <Image
                  src={"/images/nutella/logo.png"}
                  className="pb-10 md:pb-5"
                  width={500}
                  height={500}
                  alt="kloud"
                />
              </div>
            </div>
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
                <div className="flex max-h-32 w-4/12 items-center justify-center p-3 md:w-3/12">
                  <Image
                    className=" rounded-xl"
                    src={item.url}
                    width={300}
                    height={100}
                    alt="kloud"
                  />
                </div>
              </div>
            )))}
          </div>

          {/* Sticky Div */}
          <div
            className="sticky top-14 z-20 flex size-full h-36 flex-col items-center justify-start overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 md:top-48 md:h-44 md:shadow-none lg:w-2/4"
          >
            <div
              style={{ background: "#3d993d", color: "white" }}
              className="flex w-full items-center justify-center ">
              <div className="flex h-48 w-8/12 items-center justify-center p-5 md:w-6/12">
                <Image
                  src={"/images/pringles/logo.png"}
                  className=" pb-10 md:pb-5"
                  width={500}
                  height={500}
                  alt="kloud"
                />
              </div>
            </div>
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
                <div className="flex max-h-32 w-4/12 items-center justify-center p-5 md:w-3/12">
                  <Image
                    className=" max-w-full rounded-xl"
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
            className="sticky top-14 z-20 flex size-full h-36 flex-col items-center justify-start overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 md:top-48 md:h-44 md:shadow-none lg:w-2/4"
          >
            <div
              style={{ background: "#013fa1", color: "white" }}
              className="flex w-full items-center justify-center ">
              <div className="flex h-48 w-8/12 items-center justify-center p-5 md:w-6/12">
                <Image
                  src={"/images/haribo/logo.png"}
                  className=" pb-5"
                  width={500}
                  height={500}
                  alt="kloud"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////  */}
      {/* Address Section  */}

      <div className="mx-auto mt-48 flex w-11/12 flex-col justify-between p-5 md:w-10/12 md:flex-row">
        <Card className="rounded-3xl border-none shadow-xl">
          <Image
            className="size-96 max-h-80 rounded-3xl md:max-h-96"
            src={'/images/location.jpg'}
            alt={'Address'}
            width={500}
            height={500}
          />
        </Card>

        <div className="mt-5 flex w-full flex-col items-end justify-between gap-y-5 p-2 text-sm font-bold md:mt-0 md:w-5/12 md:p-5 md:text-xl">
          <div className="flex items-center justify-end text-nowrap">
            <p className="mr-3 text-nowrap text-right text-xs">
              میدان پونک ، پاساژ بوستان ، راهرو اردیبهشت
            </p>
            <MapPin />
          </div>
          <div className="flex items-center justify-end">
            <p className="mr-3 ">
              ارسال فوری درب منزل
            </p>
            <Car />
          </div>
          <div className="flex items-center justify-end">
            <p className="mr-3 ">
              0912 375 9426
            </p>
            <Phone />
          </div>
          <div className="flex items-center justify-end">
            <p className="text-right text-sm font-normal md:mt-5 md:text-lg">
              بهترین فروشگاه آنلاین برای خرید انواع شکلات، آب‌نبات، قهوه و محصولات خوشمزه دیگر با کیفیت عالی و قیمت مناسب. تجربه‌ای شیرین و متفاوت
            </p>
          </div>
        </div>
      </div>



      <footer>
        <div className="absolute bottom-28 flex h-10 w-full justify-between px-10 md:inset-x-[37.5%] md:bottom-20 md:w-3/12 md:px-0">
          <span className="flex size-16 items-center justify-center rounded-full border-4 border-[#0455fb] bg-white shadow-2xl transition-all duration-200 hover:scale-105 md:size-20">
            <Instagram color="#0455fb" className="size-10" />
          </span>
          <span className="flex size-16 items-center justify-center rounded-full border-4 border-[#0455fb] bg-white shadow-2xl transition-all duration-200 hover:scale-105 md:size-20">
            <Send color="#0455fb" className="size-10" />
          </span>
          <span className="flex size-16 items-center justify-center rounded-full border-4 border-[#0455fb] bg-white shadow-2xl transition-all duration-200 hover:scale-105 md:size-20">
            <PhoneCall color="#0455fb" className="size-10" />
          </span>
          <span className="flex size-16 items-center justify-center rounded-full border-4 border-[#0455fb] bg-white shadow-2xl transition-all duration-200 hover:scale-105 md:size-20">
            <Youtube color="#0455fb" className="size-12" />
          </span>
        </div>
        <svg className="h-64 md:h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0455fb" fill-opacity="1" d="M0,96L26.7,112C53.3,128,107,160,160,165.3C213.3,171,267,149,320,133.3C373.3,117,427,107,480,117.3C533.3,128,587,160,640,197.3C693.3,235,747,277,800,277.3C853.3,277,907,235,960,234.7C1013.3,235,1067,277,1120,250.7C1173.3,224,1227,128,1280,90.7C1333.3,53,1387,75,1413,85.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
        <p className="absolute bottom-2 left-2 text-white">Copyright © Choco West All Rights Reserved 2024</p>
      </footer>

    </div>
  )
}
