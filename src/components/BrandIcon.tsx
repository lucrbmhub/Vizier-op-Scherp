/**
 * Merkiconen — afgeleid van het logo (bron: Iconen.dc.html).
 *
 * Vijf iconen met vaste betekenis:
 *   vizier        = scherpstellen / matching
 *   gesprek       = kennismaking / dialoog
 *   stap          = actie / nieuwe richting
 *   traject       = fasen / voortgang
 *   vertrouwelijk = privacy / veilige ruimte
 *
 * Regels (uit de iconenset):
 * - Raster 100×100, stroke 6; bij ≤30px render stroke 7–8.
 * - Kleuren: petrol #1F3D3B (op donker #F5EFE3), koraal #E8714A,
 *   goud #F2C879 — koraal en goud wisselen nóóit van rol.
 * - Bij 20px (badge) de gouden stip weglaten (te klein).
 * - Altijd aria-hidden: decoratief naast tekst. Max 1 icoon per kaart.
 */

export type BrandIconName =
  | "vizier"
  | "gesprek"
  | "stap"
  | "traject"
  | "vertrouwelijk";

type Props = {
  name: BrandIconName;
  size?: number;
  onDark?: boolean;
  className?: string;
};

export function BrandIcon({ name, size = 44, onDark = false, className }: Props) {
  const ink = onDark ? "#F5EFE3" : "#1F3D3B";
  const koraal = "#E8714A";
  const goud = "#F2C879";
  const sw = size <= 20 ? 8 : size <= 30 ? 7 : 6;
  const showGold = size > 20;

  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    "aria-hidden": true as const,
    className,
  };

  switch (name) {
    case "vizier":
      return (
        <svg {...shared}>
          <path d="M38 30 L50 18 L62 30" stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M70 38 L82 50 L70 62" stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M62 70 L50 82 L38 70" stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 62 L18 50 L30 38" stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 39 L61 50 L50 61 L39 50 Z" fill={koraal} />
          {showGold && <circle cx="50" cy="50" r="4.5" fill={goud} />}
        </svg>
      );
    case "gesprek":
      return (
        <svg {...shared}>
          <path d="M38 20 L62 44 L38 68 L14 44 Z" stroke={ink} strokeWidth={sw} strokeLinejoin="round" />
          <path d="M62 32 L86 56 L62 80 L38 56 Z" stroke={koraal} strokeWidth={sw} strokeLinejoin="round" />
        </svg>
      );
    case "stap":
      return (
        <svg {...shared}>
          <path d="M20 78 H44 V56 H64 V34 H80" stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 60 L41 69 L32 78 L23 69 Z" fill={koraal} />
          {showGold && <circle cx="80" cy="24" r="6.5" fill={goud} />}
        </svg>
      );
    case "traject":
      return (
        <svg {...shared}>
          <path d="M28 62 L40 74 L28 86 L16 74 Z" stroke={ink} strokeWidth={sw} strokeLinejoin="round" />
          <path d="M52 38 L62 48 L52 58 L42 48 Z" fill={koraal} />
          {showGold && <circle cx="76" cy="24" r="7" fill={goud} />}
          <path d="M40 62 L44 58" stroke={ink} strokeWidth={4} strokeLinecap="round" />
          <path d="M62 40 L66 36" stroke={ink} strokeWidth={4} strokeLinecap="round" />
        </svg>
      );
    case "vertrouwelijk":
      return (
        <svg {...shared}>
          <path d="M50 18 L82 50 L50 82 L18 50 Z" stroke={ink} strokeWidth={sw} strokeLinejoin="round" />
          <path d="M50 36 L64 50 L50 64 L36 50 Z" stroke={koraal} strokeWidth={sw} strokeLinejoin="round" />
          {showGold && <circle cx="50" cy="50" r="5" fill={goud} />}
        </svg>
      );
  }
}
