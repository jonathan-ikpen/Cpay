import "./buttons.css";
import "../index.css";

const HomeBtn = ({ url, name }) => {
  return (
    <button
      className="border-solid border-[1px] bg-primary2 w-[336.48px] h-[50px] hover:bg-tinted2 text-xl text-white font-medium font-rubik tracking-[.02em] leading-7 rounded-[20px]"
      onClick={() => {
        location.href = "url";
      }}
    >
      {name}
    </button>
  );
};

const LoginBtn = ({ name, url, title, color = "#333" }) => {
  const loginBtnStyle = {
    color: color,
  };
  return (
    <a
      href={url}
      className="text-[16px] font-medium whitespace-nowrap hover:text-black-7"
      title={title}
      style={loginBtnStyle}
    >
      {name}
    </a>
  );
};

export { HomeBtn, LoginBtn };
