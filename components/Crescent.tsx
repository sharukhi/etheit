/* pixel crescent traced from the etheit logo. colours come from the theme. */
export default function Crescent({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 44 32"
      width={size}
      height={(size * 32) / 44}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path fill="var(--accent)" d="M20 2h14v1h-14zM17 3h20v1h-20zM15 4h24v1h-24zM12 5h28v1h-28zM11 6h30v1h-30zM9 7h33v1h-33zM7 8h35v1h-35zM6 9h37v1h-37zM5 10h38v1h-38zM5 11h6v1h-6zM20 11h23v1h-23zM4 12h4v1h-4zM23 12h20v1h-20zM4 13h2v1h-2zM26 13h17v1h-17zM3 14h1v1h-1zM27 14h16v1h-16zM2 15h1v1h-1zM28 15h15v1h-15zM29 16h14v1h-14zM29 17h13v1h-13zM30 18h12v1h-12zM30 19h11v1h-11zM30 20h10v1h-10zM30 21h9v1h-9zM30 22h8v1h-8zM29 23h9v1h-9zM29 24h8v1h-8zM28 25h7v1h-7zM28 26h6v1h-6zM27 27h5v1h-5zM26 28h4v1h-4zM24 29h4v1h-4zM23 30h2v1h-2z" />
      <path fill="var(--ink)" d="M20 1h14v1h-14zM17 2h3v1h-3zM34 2h3v1h-3zM15 3h2v1h-2zM37 3h2v1h-2zM12 4h3v1h-3zM39 4h1v1h-1zM11 5h1v1h-1zM40 5h1v1h-1zM9 6h2v1h-2zM41 6h1v1h-1zM7 7h2v1h-2zM42 7h1v1h-1zM6 8h1v1h-1zM42 8h1v1h-1zM5 9h1v1h-1zM43 9h1v1h-1zM4 10h1v1h-1zM43 10h1v1h-1zM4 11h1v1h-1zM11 11h9v1h-9zM43 11h1v1h-1zM3 12h1v1h-1zM8 12h3v1h-3zM20 12h3v1h-3zM43 12h1v1h-1zM3 13h1v1h-1zM6 13h2v1h-2zM23 13h3v1h-3zM43 13h1v1h-1zM2 14h1v1h-1zM4 14h2v1h-2zM26 14h1v1h-1zM43 14h1v1h-1zM1 15h1v1h-1zM3 15h1v1h-1zM26 15h2v1h-2zM43 15h1v1h-1zM1 16h2v1h-2zM28 16h1v1h-1zM43 16h1v1h-1zM28 17h1v1h-1zM42 17h1v1h-1zM29 18h1v1h-1zM42 18h1v1h-1zM29 19h1v1h-1zM41 19h1v1h-1zM29 20h1v1h-1zM40 20h1v1h-1zM29 21h1v1h-1zM39 21h1v1h-1zM29 22h1v1h-1zM38 22h1v1h-1zM28 23h1v1h-1zM38 23h1v1h-1zM28 24h1v1h-1zM37 24h1v1h-1zM27 25h1v1h-1zM35 25h2v1h-2zM27 26h1v1h-1zM34 26h1v1h-1zM26 27h1v1h-1zM32 27h2v1h-2zM24 28h2v1h-2zM30 28h2v1h-2zM23 29h1v1h-1zM28 29h2v1h-2zM21 30h2v1h-2zM25 30h3v1h-3zM21 31h4v1h-4z" />
    </svg>
  );
}
