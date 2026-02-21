export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="45" stroke="#00d4d4" strokeWidth="2" fill="none" />
      
      {/* Inner circle */}
      <circle cx="50" cy="50" r="35" stroke="#00d4d4" strokeWidth="1.5" fill="none" opacity="0.6" />
      
      {/* Circuit lines from center */}
      <line x1="50" y1="50" x2="50" y2="15" stroke="#00d4d4" strokeWidth="2" />
      <line x1="50" y1="50" x2="85" y2="50" stroke="#00d4d4" strokeWidth="2" />
      <line x1="50" y1="50" x2="50" y2="85" stroke="#00d4d4" strokeWidth="2" />
      <line x1="50" y1="50" x2="15" y2="50" stroke="#00d4d4" strokeWidth="2" />
      
      {/* Diagonal lines */}
      <line x1="50" y1="50" x2="75" y2="25" stroke="#00d4d4" strokeWidth="1.5" opacity="0.7" />
      <line x1="50" y1="50" x2="75" y2="75" stroke="#00d4d4" strokeWidth="1.5" opacity="0.7" />
      <line x1="50" y1="50" x2="25" y2="75" stroke="#00d4d4" strokeWidth="1.5" opacity="0.7" />
      <line x1="50" y1="50" x2="25" y2="25" stroke="#00d4d4" strokeWidth="1.5" opacity="0.7" />
      
      {/* Circuit nodes */}
      <circle cx="50" cy="15" r="3" fill="#00d4d4" />
      <circle cx="85" cy="50" r="3" fill="#00d4d4" />
      <circle cx="50" cy="85" r="3" fill="#00d4d4" />
      <circle cx="15" cy="50" r="3" fill="#00d4d4" />
      
      {/* Center hub */}
      <circle cx="50" cy="50" r="8" fill="#00d4d4" />
      <circle cx="50" cy="50" r="5" fill="#0f1729" />
    </svg>
  );
}
