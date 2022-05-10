export default function Reference({ href }) {
  return (
    <div className="text-sm text-blue-500">
      <a className="no-underline hover:underline" href={href}>
        {href}
      </a>
    </div>
  );
}
