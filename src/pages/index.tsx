import Layout from "@/components/Layout/Layout";
import EmissionsMap from "@/components/Visualizations/EmissionsMap";
import Image from "next/image";
import EmissionsGraph from "@/components/Visualizations/EmissionsGraph";
import Reference from "@/components/Reference";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="grid h-screen text-center text-7xl font-semibold">
          <div className="self-center">
            Overview and impact of CO2 emissions in the world 🏭
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-10">
          <div>
            <EmissionsGraph />
          </div>
          <div>
            <div className="text-lg">
              For 250 years we have been burning coal, oil, and gas. We have
              thereby increased the CO2 concentration in the atmosphere by 40%.
              And we are now just starting to experience the climate impacts
              that we have already triggered. To curtail global warming in the
              long run, we must not even emit half of the CO2 we have produced
              so far. The object to limit global warming well below 2°C, that
              was decided at the 2015 UN Climate Conference in Paris, is
              otherwise not accomplishable.
            </div>
            <Reference
              href={
                "https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement"
              }
            />
          </div>
        </div>
        <div className="h-screen">
          <div className="mb-12 text-3xl text-black">
            Why should we care about CO2?
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="text-lg">
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
        </div>
        <div>
          <div className="text-3xl">
            Overview of historical data of CO2 emissions per country
          </div>
          <div>Lorem ipsum</div>
        </div>
        {/* <EmissionsMap /> */}
        {/* <div className="mt-10 text-center">with:</div>
        <div className="relative h-56">
          <Image layout="responsive" width={1268} height={752} src="/us.jpg" />
        </div> */}
      </Layout>
    </>
  );
}
