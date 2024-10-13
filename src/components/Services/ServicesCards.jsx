import AboutUsSingleCard from "./ServiceSingleCard";
import Container from "../Shared/Container";
import iTConsulting from "../../assets/images/it-consulting.png";
import technicalImg from "../../assets/images/technical-supervision.png";
import solutionImg from "../../assets/images/solution-audit.png";
import BookNow from "./BookNow";

const ServicesCards = () => {
  const consulting = [
    "Expert Guidance",
    "Cost Efficiency",
    "Innovation",
    "Risk Management",
    "Objective Perspective",
    "Strategic Planning",
    "Resource Optimization",
  ];

  const solution = [
    "Project Planning and Strategy",
    "Design and Architecture Review",
    "Implementation Oversight",
    "Quality Assurance and Testing",
    "Risk Management",
    "Documentation and Reporting",
    "Post-Implementation Review",
    "Technical Interviews",
  ];

  const technical = [
    "Enhanced Stability and Robustness",
    "Cost Efficiency",
    "Improved Security",
    "Adherence to Best Practices",
    "Scalability",
    "Objective Assessment",
    "Actionable Insights",
    "Risk Mitigation",
  ];

  return (
    <section className="py-10 lg:py-0 lg:pb-20  relative" id="services">
      <div>
        <h2
          className="font-bold lg:text-[38px] sm:text-[32px] text-[24px] text-[#003A74] text-center mb-14"
          id="whyChooseTitle"
        >
          Our Services
        </h2>
      </div>
      <Container>
        <div className="space-y-5 md:space-y-10">
          <AboutUsSingleCard
            title="IT Consulting"
            content="Choosing the right technology can be overwhelming. If you're unsure about implementing your ideas or the resources needed, consider an independent consultant. We offer expert, unbiased advice on technologies and costs, helping you save money and set your project up for success. We'll guide you in selecting the right technology and cloud solutions to meet your business goals, ensuring informed decisions and successful projects."
            contentImg={iTConsulting}
            serviceTag={consulting}
          />
          <AboutUsSingleCard
            title="Solution Audit"
            content="Have a great idea but need help finding the right team to implement it? We provide competent oversight to ensure your project's success. Our expert services include detailed project plans, system architecture reviews, regular code reviews, quality assurance, and risk mitigation. Delegate to us for cost-effective, high-quality implementation that aligns with your vision."
            contentImg={solutionImg}
            serviceTag={solution}
          />
          <AboutUsSingleCard
            title="Technical Supervision"
            content="Are you unsure if your existing IT solution is stable, robust, or cost-effective? Our expert oversight evaluates your IT systems to ensure they meet industry best practices and align with your business goals. We conduct comprehensive assessments, review stability and cost-effectiveness, and provide actionable insights. Our services include project management, supervision of contractors, and thorough vetting to ensure your IT solutions are secure, scalable, and reliable."
            contentImg={technicalImg}
            serviceTag={technical}
          />
          <div className="flex justify-center">
            <BookNow />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCards;
