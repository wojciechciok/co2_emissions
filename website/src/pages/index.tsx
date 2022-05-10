import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Reference from "@/components/Reference";
import HistorySection from "@/components/Sections/HistorySection";
import ImpactSection from "@/components/Sections/ImpactSection";
import WhyCareSection from "@/components/Sections/WhyCareSection";
import SourcesSection from "@/components/Sections/SourcesSection";
import Head from "next/head";
import Section from "@/components/Layout/Section";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>CO2 Global Overview</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
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
        <Section label={"Links"}>
          <ol className="ml-10 list-decimal">
            <li>
              Python notebook code:{" "}
              <a
                className="text-blue-500 no-underline hover:underline"
                href="https://github.com/wojciechciok/co2_emissions/blob/main/notebook/FinalProjectSocialDataVis.ipynb"
              >
                https://github.com/wojciechciok/co2_emissions/blob/main/notebook/FinalProjectSocialDataVis.ipynb
              </a>
            </li>
            <li>
              Python notebook as Google Colab project:{" "}
              <a
                className="text-blue-500 no-underline hover:underline"
                href="https://colab.research.google.com/drive/1NaHxiZ5GLFFKFlRH-jXmRxW8wh_n27up?usp=sharing"
              >
                https://colab.research.google.com/drive/1NaHxiZ5GLFFKFlRH-jXmRxW8wh_n27up?usp=sharing
              </a>
            </li>
            <li>
              Datasets:{" "}
              <a
                className="text-blue-500 no-underline hover:underline"
                href="https://github.com/wojciechciok/co2_emissions/tree/main/datasets"
              >
                https://github.com/wojciechciok/co2_emissions/tree/main/datasets
              </a>
            </li>
          </ol>
        </Section>
      </Layout>
      <footer className="bg-[#ebb134]">
        <div className=" py-7">
          <div className="text-center text-3xl text-white">
            <div>Made by Wojciech Ciok &amp; Kacper Zyla</div>
          </div>
        </div>
      </footer>
    </>
  );
}
