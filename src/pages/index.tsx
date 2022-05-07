import Layout from "@/components/Layout/Layout";
import EmissionsMap from "@/components/Visualizations/EmissionsMap";
import Image from "next/image";
import EmissionsGraph from "@/components/Visualizations/EmissionsGraph";
import Reference from "@/components/Reference";
import Section from "@/components/Layout/Section";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="grid h-screen text-center text-7xl font-semibold">
          <div className="self-center">
            Overview and impact of CO2 emissions in the world 🏭
          </div>
        </div>
        <Section label="Brief look at the history">
          <div className="grid grid-cols-[auto_1fr] gap-10">
            <div>
              <EmissionsGraph />
            </div>
            <div className="flex flex-col justify-evenly">
              <div className="mb-10">
                For 250 years we have been burning coal, oil, and gas. We have
                thereby increased the CO2 concentration in the atmosphere by
                40%. And we are now just starting to experience the climate
                impacts that we have already triggered. To curtail global
                warming in the long run, we must not even emit half of the CO2
                we have produced so far. The object to limit global warming well
                below 2°C, that was decided at the 2015 UN Climate Conference in
                Paris, is otherwise not accomplishable.
                <Reference
                  href={
                    "https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement"
                  }
                />
              </div>

              <div className="mb-10">
                While change is necessary it's not easy to implement it. Fossil
                fuels are still the cheapest, most reliable energy resources
                available. When a developing country wants to build a functional
                economic system and end rampant poverty, it turns to fossil
                fuels. Pressure to decrease greenhouse gases emissions is a
                source of controversy as poor and developing countries are asked
                to give up a resource which was exploited for western countries
                for so long.
                <Reference
                  href={
                    "https://www.theguardian.com/global-development/2022/jan/28/west-accused-of-climate-hypocrisy-as-emissions-dwarf-those-of-poor-countries"
                  }
                />
              </div>

              <div className="mb-10">
                Fortunately, awarness about CO2 emissions is there and efforts
                to decrease it are in place. European Union's 2030 Climate
                Target Plan is a proposal which assumes decreasing greenhouse
                gas emissions by at least 55% compared to 1990 levels by 2030.
                The assessment shows how all sectors of the economy and society
                can contribute, and sets out the policy actions required to
                achieve this goal. This plan is a part of a roadmap to achieving
                climate neutrality by 2050.
                <Reference
                  href={
                    "https://ec.europa.eu/clima/eu-action/european-green-deal/2030-climate-target-plan_en"
                  }
                />
              </div>
            </div>
          </div>
        </Section>
        <div className="relative w-full">
          <Image
            layout="responsive"
            width={1268}
            height={752}
            src="/pollution.gif"
          />
          <Reference href={"https://giphy.com/"} />
        </div>
        <Section label={"Which countries have the biggest impact?"}>
          <div className="grid justify-center">
            <EmissionsMap />
          </div>
        </Section>

        <Section label="Why should we care about CO2?">
          <div className="grid grid-cols-2 gap-10">
            <div>
              Climate change is primarily a problem of too much carbon dioxide
              (CO2) in the atmosphere. This carbon overload is caused mainly
              when we burn fossil fuels like coal, oil and gas or cut down and
              burn forests. There are many heat-trapping gases (from methane to
              water vapor), but CO2 puts us at the greatest risk of irreversible
              changes if it continues to accumulate unabated in the atmosphere.
            </div>
            <div className="text-5xl">
              CO2 has contributed more than any driver to climate change between
              1750 and 2011.
            </div>
          </div>
        </Section>
        {/* <div className="mt-10 text-center">with:</div>
        <div className="relative h-56">
          <Image layout="responsive" width={1268} height={752} src="/us.jpg" />
        </div> */}
      </Layout>
    </>
  );
}
