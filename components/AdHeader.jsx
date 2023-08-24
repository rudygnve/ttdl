import Link from "next/link";

const AdHeader = ({ randomBanner }) => {
  return (
    <div className="w-full pb-5 sm:pb-10">
      <Link
        href={!randomBanner?.affLink ? "" : randomBanner?.affLink}
        target="_blank"
        id="1393509"
      >
        <img
          src={!randomBanner?.imgUrl ? "" : randomBanner?.imgUrl}
          alt=""
          className="w-full"
        />
      </Link>
      <img
        className="w-0 h-0 border-0 absolute hidden"
        src="https://imp.pxf.io/i/3239329/1393509/12282"
      />
    </div>
  );
};

export default AdHeader;
