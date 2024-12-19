import { Icons } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import Image from "next/image";
import Link from "next/link";

export default function Page() {



  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <section className="relative flex w-full flex-col justify-center">

          <div className="mx-auto flex w-10/12 flex-col items-end gap-y-5 px-5 pt-10 text-right md:pt-20">
            <TypingAnimation className="text-xl font-bold text-[#0455fb] md:text-4xl">فروشگاه شکلات بوستان</TypingAnimation>
            <TypingAnimation className="h-12 w-full text-base text-gray-400 md:h-10 md:w-5/12 md:text-lg">{"بهترین فروشگاه آنلاین برای خرید انواع شکلات، آب‌ نبات، قهوه و محصولات خوشمزه دیگر با کیفیت عالی و قیمت مناسب. تجربه‌ای شیرین و متفاوت از خرید آنلاین"}</TypingAnimation>
            <Button className="mt-20 w-full rounded-[2em] bg-[#0455fb] py-3 text-white md:mt-10 md:w-3/12">
              <Link className="flex gap-3  text-lg font-bold" type={'tel'} href={'09046329661'}>
                <Icons.PhoneCall />
                ثبت سفارش
              </Link>
            </Button>
          </div>

          <div className="relative w-full md:-mt-10">
            <Image
              className="absolute md:top-[-35%] md:ml-10"
              alt={'oreo'}
              src={'/images/oreo/3d-oreo.png'}
              width={700}
              height={700}
            />
            <svg className="h-[30em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#0455fb" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,90.7C320,96,400,128,480,149.3C560,171,640,181,720,186.7C800,192,880,192,960,181.3C1040,171,1120,149,1200,128C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
          </div>
        </section>


        <div className="w-full">
          <svg className="h-[30em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0455fb" fill-opacity="1" d="M0,256L20,250.7C40,245,80,235,120,208C160,181,200,139,240,133.3C280,128,320,160,360,154.7C400,149,440,107,480,122.7C520,139,560,213,600,208C640,203,680,117,720,96C760,75,800,117,840,117.3C880,117,920,75,960,101.3C1000,128,1040,224,1080,245.3C1120,267,1160,213,1200,170.7C1240,128,1280,96,1320,122.7C1360,149,1400,235,1420,277.3L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
