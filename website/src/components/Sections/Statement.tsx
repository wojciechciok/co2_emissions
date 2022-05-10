export default function Statement({ children }) {
  return <div className="self-center text-7xl font-semibold">{children}</div>;
}

export function Highlight({ children }) {
  return <span className="font-bold">{children}</span>;
}
