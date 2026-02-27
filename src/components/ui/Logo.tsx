export function Logo({ className ="w-8 h-8", color ="currentColor"}: { className?: string, color?: string }) {
 return (
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 200 200"
 className={className}
 fill="none"
 >
 {/* Outer Hexagon (Shield/Safety concept) - Enlarged */}
 <path
 d="M100 8 L185 55 L185 145 L100 192 L15 145 L15 55 Z"
 stroke={color}
 strokeWidth="12"
 strokeLinejoin="round"
 />

 {/* Inner abstract dining concept (Table + Plates/Connection) */}
 <path
 d="M60 100 Q100 130 140 100"
 stroke={color}
 strokeWidth="16"
 strokeLinecap="round"
 />

 {/* Interlocking circles representing connection & plates */}
 <circle cx="85"cy="80"r="16"fill={color} />
 <circle cx="115"cy="80"r="16"fill={color} />

 {/* Decorative dots for elegance */}
 <circle cx="100"cy="45"r="5"fill={color} />
 <circle cx="100"cy="140"r="5"fill={color} />
 </svg>
 );
}
