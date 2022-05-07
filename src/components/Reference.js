export default function Reference({ href }) {
  return (
    <div className="text-right text-sm text-blue-500">
      <a href={href}>{href}</a>
    </div>
  );
}
