import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-action flex px-5 justify-between">
      {/* left side */}
      <Link href="/">
        <Image src="/Logo.png" width={50} height={50} alt="logo" />
      </Link>
      {/* left side */}

      {/* right side */}
      <div className="flex items-center gap-2">
        <div>Login</div>
        <Image src="/profile.png" width={30} height={30} alt="profile" />
        <div></div>
      </div>
      {/* right side */}
    </div>
  );
};

export default Navbar;
