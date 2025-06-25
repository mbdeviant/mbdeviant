// components/Logo.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo({ link = true }: { link?: boolean }) {
  const logoElement = (
    <Image
      src={"/data/icons/header-logo.svg"}
      alt="mbdeviant logo"
      width={112}
      height={0}
      className="h-auto z-2"
      priority
    />
  );

  return link ? (
    <Link href="/" className="block z-2">
      {logoElement}
    </Link>
  ) : (
    logoElement
  );
}
