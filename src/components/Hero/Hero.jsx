import Container from "../Shared/Container";
import heroImg from "../../assets/images/hero-img.png";
import heroBg from "../../assets/images/hero-bg.png";
import heroStar from "../../assets/images/stars.png";
import { HashLink } from "react-router-hash-link";
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="hero"
    >
      <Container>
        <div className="flex flex-col lg:flex-row sm:min-h-[776px] min-h-[650px] items-center pt-24 pb-10 lg:py-0">
          {/* hero content  */}
          <div className=" flex-1 space-y-[24px] order-2 lg:order-1">
            <h1 className="font-bold text-center lg:text-start lg:text-[40px] sm:text-[32px] text-[26px] lg:max-w-[480px]">
              Expert IT Advisory Services Tailored for Your Business
            </h1>
            {/* button  */}
            <div className="mx-auto lg:mr-auto lg:ml-0 max-w-[265px]">
              <HashLink
                to="#contact"
                className="flex justify-center items-center gap-2 bg-[#003A74] text-white text-[20px] py-[14px] px-[38px] rounded-[30px] hover:bg-[#0051A4] capitalize"
                smooth
              >
                Contact us today{" "}
                <span>
                  <FaAngleRight />
                </span>
              </HashLink>
            </div>
          </div>

          {/* hero img  */}
          <div className=" flex-1 order-1 lg:order-2">
            <img
              src={heroImg}
              className="w-full lg:max-w-[96%] sm:max-w-[380px] max-w-[280px] ml-auto"
              alt=""
            />
          </div>
        </div>
      </Container>

      {/* hero star  */}
      <div className="hidden lg:block absolute lg:w-[100px] 2xl:w-[150px] lg:-bottom-[7%]  2xl:-bottom-[10%] left-[10%]">
        <img src={heroStar} className="w-full" alt="" />
      </div>
    </section>
  );
};

export default Hero;
