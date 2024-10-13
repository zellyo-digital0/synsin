import whyChooseBg from "../../assets/images/why-choose-bg.jpg";
import Container from "../Shared/Container";
import MessageBoxes from "./MessageBoxes";
import WhyStars from "../../assets/images/why-choose-stars.png";

const WhyChooseus = () => {
  return (
    <section
      className="hero bg-no-repeat bg-cover bg-center relative min-h-[600px] lg:min-h-[1655px] py-10 lg:py-0 flex flex-col justify-center"
      style={{ backgroundImage: `url(${whyChooseBg})` }}
    >
      <Container>
        <div>
          <h2
            className="font-bold lg:text-[38px] sm:text-[32px] text-[24px] text-[#003A74] text-center mb-14"
            id="whyChooseTitle"
          >
            Why Choose Us
          </h2>
        </div>

        {/* message boxes start  */}
        <MessageBoxes />
      </Container>
      {/* whychoose stars  */}
      <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 w-[120px]">
        <img src={WhyStars} className="w-full" alt="" />
      </div>
    </section>
  );
};

export default WhyChooseus;
