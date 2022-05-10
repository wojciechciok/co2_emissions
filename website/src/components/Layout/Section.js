export default function Section({ label, children }) {
  return (
    <div className="my-40">
      <div className="mb-12 text-4xl font-bold">{label}</div>
      {children}
    </div>
  );
}
