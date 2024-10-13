/* eslint-disable react/prop-types */

import shapeImg from "../../assets/images/aboutCardShape.png";

const ServiceSingleCard = ({ title, content, contentImg, serviceTag }) => {
  return (
    <div className=" relative flex flex-col lg:flex-row items-center gap-8 home-shadow p-5 md:p-10 xl:p-[54px] rounded-[7px] bg-[#FEFEFE] hover:bg-[#DAF4FF]  text-[#003A74] transition-all duration-[400]">
      <div className="flex-1 lg:order-1 order-2 relative z-10">
        <h3 className="font-bold  text-[20px] sm:text-[24px] lg:text-[26px] text-center lg:text-start">
          {title}
        </h3>
        <p className=" text-base lg:text-[18px] pt-[16px] pb-6  lg:pb-[34px] max-w-[510px] text-center lg:text-start mx-auto lg:ml-0 lg:mr-auto">
          {content}
        </p>
        <div>
          <h3 className=" font-semibold text-[18px] lg:text-[22px] pb-2 lg:pb-4">
            Benefits:
          </h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start md:items-center max-w-[585px] ">
            {serviceTag?.map((item, indx) => (
              <span
                key={indx}
                className="w-[48%] text-center md:text-start p-4  md:w-auto md:inline-block md:p-2 bg-[#4CC5F8] text-black home-shadow rounded-[3px] text-sm flex items-center justify-center"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[360px] mx-auto sm:max-w-[415px] order-1 lg:order-2 relative z-10">
        <img src={contentImg} className="w-full" alt="" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={shapeImg} alt="" />
      </div>
    </div>
  );
};

export default ServiceSingleCard;
