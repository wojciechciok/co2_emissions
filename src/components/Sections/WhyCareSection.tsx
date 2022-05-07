import Section from "../Layout/Section";

export default function WhyCareSection() {
  return (
    <Section label="Why should we care about CO2?">
      <div className="grid grid-cols-2 gap-10">
        <div>
          Climate change is primarily a problem of too much carbon dioxide (CO2)
          in the atmosphere. This carbon overload is caused mainly when we burn
          fossil fuels like coal, oil and gas or cut down and burn forests.
          There are many heat-trapping gases (from methane to water vapor), but
          CO2 puts us at the greatest risk of irreversible changes if it
          continues to accumulate unabated in the atmosphere.
        </div>
        <div className="text-5xl">
          CO2 has contributed more than any driver to climate change between
          1750 and 2011.
        </div>
      </div>
    </Section>
  );
}
