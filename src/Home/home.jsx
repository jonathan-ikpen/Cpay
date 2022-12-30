import { useState, useEffect } from "react";
import "./home.css";
import "../index.css";
import { HomeBtn } from "../Buttons/buttons";
import emoji from "../assets/emoji.svg";
import tools from "../assets/tools2.svg";
import construction from "../assets/comingsoon.svg";
import construction2 from "../assets/comingsoon2.svg";
import first from "../assets/first.svg";
import receipt from "../assets/receipt2.svg";

// import image1 from "../assets/Landing_image1.svg";
// import image2 from "../assets/Landing_image2.svg";
// import receipt from "../assets/receipt.svg";

const url = "https://www.google.com";
const h4styles = "font-bold text-[18px] text-black-3";
const underConstruction = true;

const Home = () => {
  return (
    <main className="pt-40 ss:pt-[120px] relative mx-auto w-full h-fit px-5 max-w-5xl ">
      <Hero />
      <Steps />
      <Compare />
    </main>
  );
};

const Hero = () => {
  const shortTitle = true;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="">
      <h1 className="text-45 font-bold flex items-center text-black-3">
        {/* {shortTitle
          ? "Conveniently pay all school dues and fees"
          : "The one tool to Conveniently pay all school dues and fees."} */}

        {/* {console.log(windowSize)} */}

        {windowSize > 547
          ? "The one tool to Conveniently and Securely pay all school dues and fees."
          : "Conveniently pay all school dues and fees"}
      </h1>
      <HeroImg
        imgPath={underConstruction ? tools : construction2}
        // width="20%"
      />
    </div>
  );
};

const HeroImg = ({ imgPath, width = "" }) => {
  return (
    <section className="pt-8 flex items-center justify-center flex-col ">
      <div className="flex justify-center items-center">
        <img src={imgPath} alt="" width={width} />
      </div>
      <div className="bg-black-6 w-fit mt-12 mb-20 flex justify-center items-center px-8 py-0 rounded-[15px]">
        <p className="text-[28px] text-black-7 font-ubuntu" id="tag-coming">
          Coming soon.
        </p>
      </div>
      <HomeBtn
        url={url}
        name={underConstruction ? "Join the waitlist" : "Get Started"}
      />
    </section>
  );
};

const Steps = () => {
  return (
    <section className="pt-12">
      <h4 className={h4styles}>How it works:</h4>
      <div className="pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 pb-40 gap-20">
          <div className="pb-12">
            <span className="block w-14 p-4 border-solid rounded-[100%] bg-black-6 text-center text-black-3 font-bold h-fit text-[18px]">
              1
            </span>
            <p className="block text-[18px] text-black-3 pt-4">
              Create a <a href="#">free account</a> or <a href="#">Login</a> to
              select what dues or fees you want to pay or even pay all in
              one-go.
            </p>
          </div>
          <div className="flex justify-center items-start">
            <img src={first} alt="pay all dues image" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          <div className="row-start-2 flex justify-center items-start sm:row-start-1">
            <img
              src={receipt}
              alt="collect a signed receipt"
              className="w-[65%]"
            />
          </div>
          <div className="pb-12 row-start-1 sm:row-start-1">
            <span className="block w-14 p-4 border-solid rounded-[100%] bg-black-6 text-center text-black-3 font-bold h-fit text-[18px]">
              2
            </span>
            <p className="block text-[18px] text-black-3 pt-4">
              Once you complete the payment, download your signed receipt
              immediately with an additional copy sent directly to your email
              which you can use for future reference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Compare = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="mt-40 mm:grid grid-cols-2 border-b-2 mb-20">
        <section className="mb-8 mm:mb-0">
          <h4 className={h4styles}>Before Cpay:</h4>
          <div className="p-6 grid gap-2 bg-[#F9F9F9] mm:border-r-2">
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM9 9l6 6M15 9l-6 6"
                  stroke="#999999"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-[18px] text-black-3">Long queue at the bank</p>
            </div>
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM9 9l6 6M15 9l-6 6"
                  stroke="#999999"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-[18px] text-black-3">
                Long queue to collect signed receipts
              </p>
            </div>
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM9 9l6 6M15 9l-6 6"
                  stroke="#999999"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-[18px] text-black-3">
                Loss/Damage of paper receipts
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <h4 className={h4styles}>After Cpay:</h4>
          <div className="p-6 grid gap-2 bg-[#F9F9F9]">
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9 11 3 3L22 4"
                  stroke="#8DE1B9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                  stroke="#8DE1B9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-[18px] text-black-3">
                Pay your dues from anywhere
              </p>
            </div>
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9 11 3 3L22 4"
                  stroke="#8DE1B9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                  stroke="#8DE1B9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-[18px] text-black-3">
                Collect your signed receipts electronically
              </p>
            </div>
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9 11 3 3L22 4"
                  stroke="#8DE1B9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                  stroke="#8DE1B9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-[18px] text-black-3">
                Regenerate lost/damaged receipts
              </p>
            </div>
          </div>
        </section>
      </div>
      <HomeBtn
        url={url}
        name={underConstruction ? "Join the waitlist" : "Get Started"}
      />
    </section>
  );
};

export default Home;
