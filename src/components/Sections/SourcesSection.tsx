import Section from "../Layout/Section";
import EnergyMap from "@/components/Visualizations/EnergyMap";
import EnergyGraph from "@/components/Visualizations/EnergyGraph";

export default function SourcesSection() {
  return (
    <Section label="Comparison of energy sources in the world">
      <EnergyMap />
      <EnergyGraph />
    </Section>
  );
}
