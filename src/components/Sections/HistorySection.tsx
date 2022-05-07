import EmissionsGraph from "@/components/Visualizations/EmissionsGraph";
import Reference from "@/components/Reference";
import Section from "@/components/Layout/Section";

export default function HistorySection() {
  return (
    <Section label="Brief look at the history">
      <div className="grid grid-cols-[auto_1fr] gap-10">
        <div>
          <EmissionsGraph />
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="mb-10">
            For 250 years we have been burning coal, oil, and gas. We have
            thereby increased the CO2 concentration in the atmosphere by 40%.
            And we are now just starting to experience the climate impacts that
            we have already triggered. To curtail global warming in the long
            run, we must not even emit half of the CO2 we have produced so far.
            The object to limit global warming well below 2°C, that was decided
            at the 2015 UN Climate Conference in Paris, is otherwise not
            accomplishable.
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
            economic system and end rampant poverty, it turns to fossil fuels.
            Pressure to decrease greenhouse gases emissions is a source of
            controversy as poor and developing countries are asked to give up a
            resource which was exploited by western countries for so long.
            <Reference
              href={
                "https://www.theguardian.com/global-development/2022/jan/28/west-accused-of-climate-hypocrisy-as-emissions-dwarf-those-of-poor-countries"
              }
            />
          </div>

          <div className="mb-10">
            Fortunately, awarness about CO2 emissions is there and efforts to
            decrease it are in place. European Union's 2030 Climate Target Plan
            is a proposal which assumes decreasing greenhouse gas emissions by
            at least 55% compared to 1990 levels by 2030 and, according to data,
            it's on its way to meet the goal. The assessment shows how all
            sectors of the economy and society can contribute, and sets out the
            policy actions required to achieve this goal. This plan is a part of
            a roadmap to achieving climate neutrality by 2050.
            <Reference
              href={
                "https://ec.europa.eu/clima/eu-action/european-green-deal/2030-climate-target-plan_en"
              }
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
