export default function Reference({ href }) {
  return (
    <div className="text-sm text-blue-500">
      <a href={href}>{href}</a>
    </div>
  );
}
