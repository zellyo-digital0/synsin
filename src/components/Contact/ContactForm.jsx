import user from "../../assets/images/user.png";
import mail from "../../assets/images/email.png";
import check from "../../assets/images/check.png";
import downArrow from "../../assets/images/down-arrow.png";
import pen from "../../assets/images/pen.png";

import Swal from "sweetalert2";

const ContactForm = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    const userMail = e.target.user_email.value;
    const userMessage = e.target.message.value;
    const choice = e.target.choice.value;
    const isChecked = true;
    const data = { userMail, userMessage, choice, isChecked };

    try {
      const response = await fetch(
        "https://prod-161.westeurope.logic.azure.com:443/workflows/c6eebb988975469bbe2d796509313cd3/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=owzbD3B4124LUodY_T0cwqa_V5Qf4Z19z_gyft8b-E0",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify({ ...data }),
        }
      );

      if (!response.ok) {
        Swal.fire({
          title: "Error",
          text: "Network response was not ok",
          icon: "error",
          showConfirmButton: true,
        });
        throw new Error("Network response was not ok");
      }

      Swal.fire({
        title: "Mail has been sent",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    } catch (error) {
      Swal.fire({
        title: "Error sending mail",
        text: error.message,
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <form onSubmit={sendEmail}>
        <div className="flex items-center justify-between flex-col md:flex-row gap-y-4">
          {/* name  */}
          <div className="relative w-full md:w-[32%] h-[60px]">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              className="w-full h-full  rounded-lg pl-16 text-[#003A74] focus:outline-none"
              id="name"
            />
            <label
              htmlFor="name"
              className="w-4 absolute left-7 top-1/2 -translate-y-1/2"
            >
              <img src={user} className="w-full" alt="" />
            </label>
          </div>
          {/* email  */}
          <div className="relative w-full md:w-[32%] h-[60px]">
            <input
              type="email"
              name="user_email"
              placeholder="E-mail"
              required
              className="w-full h-full  rounded-lg pl-16 text-[#003A74] focus:outline-none"
              id="email"
            />
            <label
              htmlFor="email"
              className="w-4 absolute left-7 top-1/2 -translate-y-1/2"
            >
              <img src={mail} className="w-full" alt="" />
            </label>
          </div>
          {/* select  */}
          <div className="relative w-full md:w-[32%] h-[60px]">
            <select
              className="w-full h-full rounded-lg pl-16  text-[#003A74] focus:outline-none"
              id="make-a-choice"
              defaultValue="General Inquiries"
              required
              name="choice"
            >
              <option>General Inquiries</option>
              <option>Project offer</option>
              <option>Career opportunities</option>
            </select>
            <label
              htmlFor="make-a-choice"
              className="w-4 absolute left-7 top-1/2 -translate-y-1/2"
            >
              <img src={check} className="w-full" alt="" />
            </label>
            <label
              htmlFor="make-a-choice"
              className="w-4 absolute right-7 top-1/2 -translate-y-1/2"
            >
              <img src={downArrow} className="w-full" alt="" />
            </label>
          </div>
        </div>
        {/*  textarea */}
        <div className="relative my-4 lg:my-7 w-full h-[120px]">
          <textarea
            placeholder="Text..."
            className="w-full h-full rounded-lg pl-16 pt-4 text-[#003A74] focus:outline-none resize-none"
            id="message"
            required
            minLength={50}
            maxLength={300}
            name="message"
          ></textarea>
          <label htmlFor="message" className="w-4 absolute left-7 top-[22px]">
            <img src={pen} className="w-full" alt="" />
          </label>
        </div>
        {/* radio check  */}
        <div className="w-full lg:w-[550px] mx-auto text-center">
          <input
            type="radio"
            id="radioButton"
            className="accent-[#00A1E4]"
            name="radioGroup"
            required
          />
          <label htmlFor="radioButton" className="text-white pl-2">
            I have read and agree to{" "}
            <a href="https://syncsln.com/privacy-policy">
              <u>privacy policy</u>
            </a>{" "}
            and{" "}
            <a href="https://syncsln.com/terms-and-conditions">
              <u>terms &amp; conditions</u>
            </a>
          </label>
        </div>
        {/* submit  */}
        <div className="text-center">
          <button className=" text-white bg-[#00A1E4] text-[20px] py-[14px] px-[38px] rounded-[30px] hover:bg-[#3f88a7] capitalize w-[245px] mt-4">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
