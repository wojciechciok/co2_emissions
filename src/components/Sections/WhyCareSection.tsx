import Section from "../Layout/Section";
import RiskGraph from "@/components/Visualizations/RiskGraph";
import TemperatureGraph from "@/components/Visualizations/TemperatureGraph";
import ExpectancyMap from "@/components/Visualizations/ExpectancyMap";
import Reference from "../Reference";

export default function WhyCareSection() {
  return (
    <Section label="Why should we care about CO2?">
      <div className="grid grid-cols-2 gap-10">
        <div>
          Climate change is primarily a problem of too much carbon dioxide (CO2)
          in the atmosphere. This carbon overload is caused mainly when we burn
          fossil fuels like coal, oil and gas or cut down and burn forests.
          There are many heat-trapping gasses (from methane to water vapor), but
          CO2 puts us at the greatest risk of irreversible changes if it
          continues to accumulate unabated in the atmosphere.
        </div>
        <div className="text-5xl">
          CO2 has contributed more than any driver to climate change between
          1750 and 2011.
        </div>
      </div>
      <Reference
        href={
          "https://www.ucsusa.org/resources/why-does-co2-get-more-attention-other-gases"
        }
      />
      <div className="my-20">
        Air pollution is a leading risk factor that contributes to millions of
        deaths each year. Air pollution accounts for more than 1 in 9 deaths
        globally. It is estimated to have contributed to 6.67 million deaths
        worldwide in 2019. In 2019, air pollution was the 4th leading risk
        factor for death globally. Its total impact is exceeded only by high
        blood pressure, dietary risks, and tobacco use. Every year, more people
        die as a result of air pollution exposure than die from alcohol use
        worldwide, a number estimated at 2.44 million in 2019. Its impacts also
        exceed those of other widely recognized risk factors for chronic disease
        such as being overweight (high body-mass index), having high
        cholesterol, and malnutrition.
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-10">
        <RiskGraph />
        <div className="self-center text-7xl">
          Air pollution contributed to{" "}
          <span className="font-semibold">6.67 million</span> deaths in 2019.
        </div>
      </div>
      <div className="my-20 grid grid-cols-[1fr_auto] gap-10">
        <div className="flex flex-col justify-around">
          <div>
            Carbon dioxide causes an effect like the glass in a greenhouse,
            trapping heat and warming up the inside. This effect is important:
            without the CO2 that naturally exists in the atmosphere, Earth might
            be too cold to support human life. However, the atmosphere is very
            sensitive to changing levels of CO2. Even though this gas makes up
            less than 0.1% of the atmosphere, it can have a huge effect on how
            much heat the planet's surface retains. When energy from the Sun
            reaches the top of our atmosphere, most of it passes through to
            Earth's surface, where it is absorbed. Some of this energy is
            re-emitted, heading back towards space. At this stage, it interacts
            with molecules of CO2 in a way that prevents some of it from
            escaping Earth's atmosphere. The trapped heat energy leads to
            increased average global surface air temperatures.
            <Reference
              href={
                "https://www.nhm.ac.uk/discover/quick-questions/how-does-carbon-dioxide-increase-global-temperature.html"
              }
            />
          </div>
          <div>
            The amount of rise in carbon dioxide levels since the late 1950s
            would naturally, in the context of past ice ages, have taken
            somewhere in the range of 5,000 to 20,000 years; we've managed to do
            it in about 60. At the same time, global median temperature has
            risen by more than 1 degree Celsius since 1850. The rapid rate of
            temperature rise over such a short period time points to only one
            thing, and that is the addition of greenhouse gasses, primarily
            carbon dioxide, into the environment.
            <Reference
              href={
                "https://www.climate.gov/news-features/climate-qa/if-carbon-dioxide-hits-new-high-every-year-why-isn%E2%80%99t-every-year-hotter-last"
              }
            />
          </div>
        </div>
        <TemperatureGraph />
      </div>
      <div className="mb-20">
        Greenhouse gasses have a very direct impact on peoples' health. The Air
        Quality Life Index translates long-term exposure to particulate
        pollution concentrations into their impact on life expectancy. The
        AQLI’s core finding is that sustained exposure to an additional 10
        micrograms per cubic meter (μg/m3) of PM2.5 (particulate matter with
        diameter less than 2.5 μm) reduces life expectancy by 0.98 years. This
        means that Shanghai’s residents could expect to live 2.3 years longer if
        it permanently reduced concentrations to the WHO guideline. In the
        United States, where the severity of particulate pollution is generally
        relatively small compared to that in many other countries, California’s
        Central Valley residents could expect to live up to six months longer
        than they currently would if particulate pollution in the city were
        reduced to the WHO guideline.
        <Reference href={"https://aqli.epic.uchicago.edu/"} />
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-10">
        <ExpectancyMap />
        <div className="self-center text-7xl">
          Life expectancy shortened almost{" "}
          <span className="font-semibold">1.5 years</span> in Poland in 2005.
        </div>
      </div>
    </Section>
  );
}
