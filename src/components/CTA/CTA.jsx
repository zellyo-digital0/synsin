import Container from "../Shared/Container";
import ctaBg from "../../assets/images/cta-bg.jpg";
import { FaAngleRight } from "react-icons/fa6";
import ctaStar from "../../assets/images/cta-stars.png";

const Cta = () => {
  return (
    <section className="py-10 lg:py-16">
      <Container>
        <div
          className="bg-no-repeat bg-cover bg-bottom  min-h-[380px] md:min-h-[437px] text-center flex justify-center items-center flex-col px-5 lg:px-0 rounded-xl relative"
          style={{ backgroundImage: `url(${ctaBg})` }}
        >
          <h3 className="max-w-[520px] font-bold lg:text-[38px] sm:text-[32px] text-[24px] text-white leading-tight mx-auto">
            SyncSIn – Your Partner in Digital Transformation
          </h3>
          <p className="max-w-[925px] text-white text-lg lg:text-2xl mx-auto py-5 lg:pb-[54px]">
            Choosing SyncSIn means partnering with a team of experts with
            extensive industry experience who are committed to your success.
          </p>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="flex items-center gap-2 text-[#003A74] bg-white text-[20px] py-[14px] px-[38px] rounded-[30px] hover:bg-[#0051A4] hover:text-white capitalize"
          >
            book a free call now
            <span>
              <FaAngleRight />
            </span>
          </button>
          <div className="hidden lg:block absolute top-0 right-20 w-[110px]">
            <img src={ctaStar} className="w-full" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
