import logo from "@/assets/sc-logo.png.asset.json";

const BrandBadge = () => {
  return (
    <a
      href="https://socialcurrency.agency"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social Currency"
      className="fixed bottom-4 right-4 z-50 block h-12 w-12 md:h-14 md:w-14 transition-transform hover:scale-105"
    >
      <img
        src={logo.url}
        alt="Social Currency"
        className="h-full w-full object-contain"
      />
    </a>
  );
};

export default BrandBadge;
