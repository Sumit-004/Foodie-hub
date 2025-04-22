// FoodieHubIcon.js
const FoodieHubIcon = ({ size = 100 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cloche (plate cover) */}
      <path
        d="M20 50 C20 30, 80 30, 80 50 L80 55 H20 Z"
        fill="#FF6600"
      />
      {/* Fork handle */}
      <rect x="25" y="58" width="50" height="6" rx="2" fill="#FF6600" />
      {/* Fork prongs */}
      <rect x="30" y="65" width="4" height="8" rx="1" fill="#FF6600" />
      <rect x="36" y="65" width="4" height="8" rx="1" fill="#FF6600" />
      <rect x="42" y="65" width="4" height="8" rx="1" fill="#FF6600" />
      {/* Brand name text (optional, small) */}
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fontSize="10"
        fill="black"
        fontFamily="Arial, sans-serif"
      >
        Foodie Hub
      </text>
    </svg>
  );
  
  export default FoodieHubIcon;
  