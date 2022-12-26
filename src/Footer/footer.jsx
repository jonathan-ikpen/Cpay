const Footer = () => {
  return (
    <footer className="mt-20 p-6 pb-12 w-full flex flex-col justify-center items-center bg-white text-[16px] text-black-3">
      <div>
        <span className="font-bold">Socials:</span>{" "}
        <a
          href="https://twitter.com/paywithluca"
          className="underline hover:no-underline"
          target="_blank"
        >
          twitter
        </a>
      </div>
      <div>copyright &copy; 2022-2023 Luca Inc. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
