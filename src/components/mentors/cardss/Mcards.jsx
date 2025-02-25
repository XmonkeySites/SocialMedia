import dudu from "/dudu.webp";
import kaka from "/kaka.webp";
import lai from "/lai.webp";
import lud from "/lud.webp";
import loren from "/loren.webp";

export function Cards({ insta, name, imgs, text }) {
  return (
    <div
      className="flex flex-col justify-center lg:w-[30rem] lg:h-[37rem]  px-[1rem] py-[1rem] shadow-lg border border-[#D1AE6C] rounded-md "
      style={{
        background:
          "background: radial-gradient(66.31% 66.31% at 50% 50%, #000000 0%, #242424 100%);box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.4);",
      }}
    >
      <div className="flex flex-row items-center gap-[0.5rem] mb-3 translate-x-[2rem]">
        <hr className="w-[1rem] border-[2.7px] border-[#D1AE6C]  " />
        <span className="text-[#D1AE6C] font-[poppins] font-medium text-md ">
          {insta}
        </span>
      </div>
      <div className="flex flex-col items-center ">
        <img
          src={imgs}
          alt={name}
          className="w-[20rem] h-[22rem] lg:w-[25rem] lg:h-[23rem]  rounded-xl object-cover"
        />
        <div className="flex flex-col items-center justify-center mx-auto mb-[1rem]">
          <span className="mt-2 text-xl font-semibold text-[#F4C257]">
            {name}
          </span>
          <hr className="w-[5rem] border-1 border-[#D1AE6C]  " />
        </div>
        <p className="text-md text-gray-300 w-[90%]">{text}</p>
      </div>
    </div>
  );
}

export function Mcards() {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-wrap lg:flex-row  lg:gap-10 justify-center">
      <Cards
        insta="@Lorem ipsum"
        imgs={dudu}
        name="Eduardo Filho"
        text="loren ispunLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
      />
      <Cards
        insta="@Lorem ipsum"
        imgs={kaka}
        name="Kaka Veloso"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
      />
      <Cards
        insta="@Lorem ipsum"
        imgs={lai}
        name="Laiana Victória"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
      />
      <Cards
        insta="@Lorem ipsum"
        imgs={lud}
        name="Ludmila"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
      />
      <Cards
        insta="@Lorem ipsum"
        imgs={loren}
        name="Lorena"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
      />
    </div>
  );
}
