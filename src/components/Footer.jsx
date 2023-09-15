import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between my-auto py-10 mx-12 opacity-70 text-sm font-light">
        <p className="">
          © 2023 Developed by •{" "}
          <a
            href="https://pappudutta.netlify.app"
            className="font-semibold   hover:underline underline-offset-4"
          >
            Pappu Dutta
          </a>
        </p>
        <p>Mrinal's Portfolio</p>
      </div>
    </>
  );
};

export default Footer;
