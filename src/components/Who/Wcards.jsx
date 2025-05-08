import { VscFolderOpened } from "react-icons/vsc";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";

import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/200.css";

function getIcon(type) {
  switch (type) {
    case "folder":
      return VscFolderOpened;
    case "check":
      return IoCheckmarkCircleOutline;
      case "map":
      return FaMapPin;
    default:
      return null;
  }
}

function Makecards({ paragraph, type }) {
  const Icon = getIcon(type);

  return (
    <div className="bg-[#0f0f0f]/45  mx-auto w-full h-full rounded-[10px] py-[0.4rem] px-[1rem] ">
      <div className="flex flex-row justify-center items-center gap-[1rem]">
        {Icon && (
          <Icon className="min-w-6 min-h-6 text-[#000000] my-1 translate-x-[0.4rem]" />
        )}
        <p className="text-[1.2rem] min-lg:text-[1.4rem] text-[#f1f1f1] font-[montserrat] ">
          {" "}
          <span className="font-medium  font-[montserrat]">{paragraph}</span>
        </p>
      </div>
    </div>
  );
}

export function Wcards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:w-4xl mx-auto  ">
      <Makecards type="check" paragraph=" Metodologia validada" />
      <Makecards type="folder" paragraph=" Arquivos prontos para usar " />
      <Makecards type="map" paragraph="Evento Presencial " />
    </div>
  );
}
