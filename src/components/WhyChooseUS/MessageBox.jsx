/* eslint-disable react/prop-types */
import messagebg from "../../assets/images/message-box.png";

const MessageBox = ({ title, content }) => {
  return (
    <div
      className="w-full lg:w-[450px] xl:w-[550px] min-h-[300px] sm:min-h-[354px] xl:min-h-[433px] bg-no-repeat bg-contain bg-center flex flex-col sm:justify-center items-center text-center pt-16 sm:pt-0 lg:pb-[50px]"
      style={{ backgroundImage: `url(${messagebg})` }}
    >
      <h4 className="text-[#242A31] font-semibold text-[18px] md:text-[22px]">
        {title}
      </h4>
      <hr className="bg-[#424242] h-1 w-[114px] my-[12px] md:my-[18px]" />
      <p className="max-w-[300px] md:max-w-[383px] mx-auto text-xs md:text-base xl:text-[18px]">
        {content}
      </p>
    </div>
  );
};

export default MessageBox;
