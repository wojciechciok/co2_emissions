import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Reference from "@/components/Reference";
import HistorySection from "@/components/Sections/HistorySection";
import ImpactSection from "@/components/Sections/ImpactSection";
import WhyCareSection from "@/components/Sections/WhyCareSection";
import SourcesSection from "@/components/Sections/SourcesSection";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="grid h-screen text-center text-7xl font-semibold">
          <div className="self-center">
            Overview and impact of CO2 emissions in the world 🏭
          </div>
        </div>

        <HistorySection />

        <div className="relative w-full">
          <Image
            layout="responsive"
            width={1268}
            height={752}
            src="/pollution.gif"
          />
          <Reference href={"https://giphy.com/"} />
        </div>

        <ImpactSection />

        <div className="relative w-full">
          <Image
            layout="responsive"
            width={1268}
            height={752}
            src="/smog.gif"
          />
          <Reference href={"https://gfycat.com/frightenedlonelyhamadryas"} />
        </div>

        <SourcesSection />

        <div className="relative w-full">
          <Image
            layout="responsive"
            width={1268}
            height={752}
            src="/wind.gif"
          />
          <Reference
            href={
              "https://www.ge.com/news/reports/francois-austin-progress-toward-balanced-sustainable-energy-world-remains-slow"
            }
          />
        </div>

        <WhyCareSection />

        <div className="mt-10">Authors: Wojciech Ciok and Kacper Zyla</div>
      </Layout>
    </>
  );
}
