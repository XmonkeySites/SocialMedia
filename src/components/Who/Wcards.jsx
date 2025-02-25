import { VscFolderOpened } from "react-icons/vsc";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/200.css";

function getIcon(type) {
  switch (type) {
    case "folder":
      return VscFolderOpened;
    case "check":
      return IoCheckmarkCircleOutline;
    default:
      return null;
  }
}

function Makecards({ paragraph, type }) {
  const Icon = getIcon(type);

  return (
    <div className="bg-[#0f0f0f]/45  mx-auto rounded-[10px] py-[0.4rem] px-[1rem] ">
      <div className="flex flex-row justify-center items-center gap-[1rem]">
        {Icon && (
          <Icon className="text-[2rem] text-[#000000] my-1 translate-x-[0.4rem]" />
        )}
        <p className="text-[1.2rem] lg:text-[1.5rem] text-[#f1f1f1] font-[montserrat] ">
          {" "}
          <span className="font-medium  font-[montserrat]">{paragraph}</span>
        </p>
      </div>
    </div>
  );
}

export function Wcards() {
  return (
    <div className="flex flex-col gap-[1.5rem] lg:flex-row items-center ">
      <Makecards type="check" paragraph=" Metodologia validada" />
      <Makecards type="folder" paragraph=" Arquivos prontos para usar " />
    </div>
  );
}
