import Section from "../Layout/Section";
import EnergyMap from "@/components/Visualizations/EnergyMap";
import EnergyGraph from "@/components/Visualizations/EnergyGraph";
import Reference from "../Reference";

export default function SourcesSection() {
  return (
    <Section label="How important are fossil fuels for today's society?">
      <div className="flex flex-col gap-6">
        <div>
          Fossil fuels, including coal, petroleum, and natural gas are known to
          release large amounts of greenhouse gases when burned for
          energy—leading to our dangerously changing climate. Additionally, the
          methods used to access these fuel sources can be significantly
          damaging to the environment.
        </div>
        <div>
          If burning fossil fuels really is damaging life on earth, then why are
          we still using them as the main source of our energy in most of the
          world? Although both the problems of fossil fuels and the benefits of
          “green” energy have been known for decades, our global consumption of
          energy has only increased. Here are the 3 reasons we are still using
          fossil fuels:
        </div>
      </div>
      <div className="my-20">
        <div className="mb-6 grid grid-cols-3 gap-20">
          <div>
            <div className="mb-4 text-center text-4xl font-semibold">
              1. Efficiency
            </div>
            <div>
              Fossil fuels are fantastic at producing energy. Earth's fossil
              fuel reserves were formed over millions of years as the organic
              material of ancient plants and microorganisms (not dinosaurs) were
              compressed and heated into dense deposits of carbon—basically
              reservoirs of condensed energy. For this reason fossil fuels are
              incredibly “energy dense“, meaning a little bit of a fossil fuel
              can produce a whole lot of energy.
            </div>
          </div>
          <div>
            <div className="mb-4 text-center text-4xl font-semibold">
              2. Convenience
            </div>
            <div>
              To unlock most alternative fuels (think solar, geothermal, wind,
              etc…) we first have to figure out how to efficiently collect,
              transform, and store the energy before we can even begin to think
              about using it. Fossil fuels, on the other hand, require no such
              innovation. The work of collecting and storing the energy in
              fossil fuels has already been accomplished, and all that's now
              needed to access the abundant energy reservoir is the technology
              of fire.
            </div>
          </div>
          <div>
            <div className="mb-4 text-center text-4xl font-semibold">
              3. Logistics
            </div>
            <div>
              Fossil fuels have been the main source energy in much of the world
              for the past two centuries. Two centuries may not seem like such a
              long time in the grand scheme of things, but this particular set
              of 200 years was a bit more remarkable than most. It contained the
              industrial revolution which changed the way humans do everything.
              Switching to another energy source would mean completely
              rethinking the way we live and the way we understand energy.
            </div>
          </div>
        </div>
        <Reference href="https://wordpressua.uark.edu/sustain/3-reasons-we-are-still-using-fossil-fuels/" />
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-10">
        <EnergyMap />
        <div className="self-center text-7xl">
          In 2020 <span className="font-semibold">83%</span> of world's enregry
          came from fossil fuels.
        </div>
      </div>
      <EnergyGraph />
    </Section>
  );
}
