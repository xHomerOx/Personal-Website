import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/Logo.svg"
        width={200}
        height={50}
        alt="OtelloBM"
      />
    </div>
  );
};

export default Logo;
