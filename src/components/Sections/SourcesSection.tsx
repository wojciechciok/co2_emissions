import Section from "../Layout/Section";
import EnergyMap from "@/components/Visualizations/EnergyMap";
import EnergyGraph from "@/components/Visualizations/EnergyGraph";
import Reference from "../Reference";
import Statement, { Highlight } from "./Statement";

export default function SourcesSection() {
  return (
    <Section label="How important are fossil fuels for today's society?">
      <div className="flex flex-col gap-6">
        <div>
          Fossil fuels, including coal, petroleum, and natural gas are known to
          release large amounts of greenhouse gasses when burned for energy -
          leading to our dangerously changing climate. Additionally, the methods
          used to access these fuel sources can be significantly damaging to the
          environment.
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
            <div className="mb-4 text-4xl font-semibold">1. Efficiency</div>
            <div>
              Fossil fuels are fantastic at producing energy. Earth's fossil
              fuel reserves were formed over millions of years as the organic
              material of ancient plants and microorganisms (not dinosaurs) were
              compressed and heated into dense deposits of carbon - basically
              reservoirs of condensed energy. For this reason fossil fuels are
              incredibly “energy dense“, meaning a little bit of a fossil fuel
              can produce a whole lot of energy.
            </div>
          </div>
          <div>
            <div className="mb-4 text-4xl font-semibold">2. Convenience</div>
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
            <div className="mb-4 text-4xl font-semibold">3. Logistics</div>
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
        <Statement>
          In 2020 <Highlight>83%</Highlight> of world's energy came from fossil
          fuels.
        </Statement>
      </div>
      <div className="mt-20 grid grid-cols-[1fr_auto] gap-10">
        <div className="flex flex-col justify-around">
          <div>
            Fine particulate matter, like black carbon along with other fossil
            fuel-produced pollutants, can have major health impacts. Switching
            to renewable energy sources that don't emit pollutants - like solar
            and wind power - could have an almost immediate impact on air
            quality by halting the production of these particles. While some
            renewable energy sources - like biomass and geothermal power - do
            emit air pollutants, they do so at a much lower rate than coil- or
            gas-fired power plants.
            <Reference
              href={
                "https://www.renewableenergymagazine.com/emily-folk/five-ways-renewable-energy-improves-air-quality-20201105"
              }
            />
          </div>
          <div>
            Few countries consume more energy per capita than Sweden, but
            Swedish carbon emissions are low compared with those of other
            countries. According to statistics from the World Bank, the average
            American releases almost four times as much carbon dioxide (CO₂) per
            year into the atmosphere as the average Swede. The reason for
            Sweden's low emission rate is that about 75 per cent of electricity
            production in Sweden comes from hydroelectric (45%) and nuclear
            (30%) power. Sweden currently has three nuclear plants with six
            nuclear reactors in commercial operation.
            <Reference
              href={
                "https://sweden.se/climate/sustainability/energy-use-in-sweden"
              }
            />
          </div>
          <div>
            In 2021, Denmark inaugurated Scandinavia's biggest wind farm.
            "Kriegers Flak" has a total capacity to cover electricity
            consumption of approximately 600,000 Danish households. The wind
            farm is located 15 to 40 kilometers off the Danish coast in a 132
            km2 area in the Baltic Sea and is expected to increase the Danish
            annual electricity production from wind turbines by approximately 16
            per cent. More than two-thirds of Denmark's renewable energy comes
            from bioenergy, which is energy stored in organic material or
            biomass. Agriculture is big business in Denmark, and it indirectly
            helps provide energy too, with manure, animal fats, and straw used
            as the basis for biogas and liquid biofuels.
            <Reference
              href={"https://denmark.dk/innovation-and-design/clean-energy"}
            />
          </div>
        </div>
        <EnergyGraph />
      </div>
    </Section>
  );
}
