import EmissionsMap from "@/components/Visualizations/EmissionsMap";
import EmissionsMapPerCapita from "@/components/Visualizations/EmissionsMapPerCapita";
import Reference from "@/components/Reference";
import Section from "@/components/Layout/Section";
import Top10Graph from "@/components/Visualizations/Top10Graph";
import Statement, { Highlight } from "./Statement";
export default function ImpactSection() {
  return (
    <Section label={"Which countries have the biggest impact?"}>
      <div className="grid gap-10">
        <div className="self-center">
          Not all countries face the same level of responsibility regarding the
          climate crisis. Taking a look at how CO2 emissions per country changed
          in the last 40 years (interactive map below), it's clear to see that
          some countries stand out and their emissions seem to increase.
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-10">
          <EmissionsMap />
          <Statement>
            China's CO2 emission levels grew by <Highlight>614%</Highlight> in
            last 40 years.
          </Statement>
        </div>
      </div>
      <div className="my-20">
        In general data about CO2 emissions is attributed to the country of
        production. Developing countries are under pressure to commit to binding
        emissions but China is resistant, partly because it does not accept
        responsibility for the emissions involved in producing goods for foreign
        markets. About 9% of total Chinese emissions are the result of
        manufacturing goods for the US, and 6% are from producing goods for
        Europe. Dieter Helm, professor of economics at Oxford University, said
        "focusing on consumption rather than production of emissions is the only
        intellectually and ethically sound solution. We've simply outsourced our
        production."
        <Reference
          href={
            "https://www.theguardian.com/environment/2009/feb/23/china-co2-emissions-climate"
          }
        />
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-10">
        <Statement>
          Three countries are producing more than <Highlight>51%</Highlight> of
          global CO2 emissions.
        </Statement>
        <div>
          <Top10Graph />
        </div>
      </div>

      <div className="grid gap-10">
        <div className="my-20">
          There are two parameters that determine our collective carbon dioxide
          (CO2) emissions: the number of people, and quantity emitted per
          person. We either talk about total annual or per capita emissions.
          They tell very different stories. Looking at absolute numbers in CO2
          emissions is perhaps unfair and countries shouldn't be compared this
          way but rather by emissions per capita. This way we can better see
          which countries better handle their emissions taking into
          consideration populations' demand for energy.
          <Reference href={"https://ourworldindata.org/co2-by-income-region"} />
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-10">
          <EmissionsMapPerCapita />
          <Statement>
            USA had <Highlight>8x</Highlight> more emissions per capita than
            India in 2020.
          </Statement>
        </div>
      </div>
    </Section>
  );
}
