import Container from "../Shared/Container";
import bottomLogo from "../../assets/images/logo-white.png";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

const UpperFooter = () => {
  return (
    <div className="bg-gradient-to-b from-[#1873CE] to-[#053B72] text-white py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-y-2 gap-x-5">
          <div className="pb-6 lg:pb-0">
            <img
              src={bottomLogo}
              className="mx-auto lg:ml-0 w-[172px] pb-3 lg:pb-7"
              alt=""
            />
          </div>
          <div>
            <h4 className="font-bold text-2xl uppercase text-center lg:text-start">
              Contacts
            </h4>
            <hr className="bg-white h-[2px] w-[52px] mx-auto lg:ml-0" />
            <ul className="pt-4 lg:pt-7 space-y-3 max-w-[320px] mx-auto lg:ml-0">
              <li>
                <a
                  href="mailto:info@syncsln.com"
                  className="flex items-center gap-2"
                >
                  <span>
                    <FaEnvelope />
                  </span>{" "}
                  info@syncsln.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2"
                  href="https://www.google.com/maps/place/Schr%C3%A4derheide+55,+48157+M%C3%BCnster,+Germany/@51.9824546,7.5668067,12.31z/data=!4m6!3m5!1s0x47b9bbd61d53f7df:0xf6fa81a1b836ef12!8m2!3d52.0268112!4d7.6694391!16s%2Fg%2F11cpb45y86?hl=en&amp;entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaMapMarkerAlt />
                  </span>{" "}
                  Schräderheide 55, 48157 Münster, Germany
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="tel:+49 (0) 251 76 025 196"
              className="flex items-center gap-2 max-w-[320px] mx-auto lg:ml-0"
            >
              <span>
                <BiSolidPhoneCall />
              </span>{" "}
              +49 (0) 251 76 025 196
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpperFooter;
