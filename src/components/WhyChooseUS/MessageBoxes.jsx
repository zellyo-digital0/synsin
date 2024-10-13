import MessageBox from "./MessageBox";

const MessageBoxes = () => {
  return (
    <div className=" flex flex-wrap gap-[30px] justify-center">
      <MessageBox
        title="Independent Advisory"
        content=" Receive unbiased, expert advice tailored to your specific business needs. Our independent advisory services help you navigate the complexities of technology, ensuring that you choose the right solutions to support your goals without any hidden agendas."
      />
      <MessageBox
        title="Expert Guidance"
        content="Leverage the knowledge and experience of seasoned IT professionals. Our expert guidance helps you make informed decisions, stay ahead of technological trends, and implement strategies that drive growth and efficiency in your business."
      />
      <MessageBox
        title="Cost and Resource Optimization"
        content="Optimize your IT investments by identifying cost-saving opportunities and efficient resource allocation. We help you reduce unnecessary expenses and maximize the value of your technology budget, ensuring a better return on investment."
      />
      <MessageBox
        title="Independent Assessments"
        content=" Benefit from thorough and objective evaluations of your existing IT solutions. Our independent assessments identify areas for improvement, ensure adherence to best practices, and provide actionable insights to enhance performance and security."
      />
      <MessageBox
        title="Enhanced Security"
        content="Protect your business with robust security evaluations and recommendations. Our services help you identify and mitigate potential vulnerabilities, ensuring your data and systems are secure and compliant with industry standards."
      />
    </div>
  );
};

export default MessageBoxes;
