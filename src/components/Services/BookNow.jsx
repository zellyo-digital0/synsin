import { FaAngleRight } from "react-icons/fa6";
import { InlineWidget } from "react-calendly";

const BookNow = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="flex items-center gap-2 bg-[#003A74] text-white text-[20px] py-[14px] px-[38px] rounded-[30px] hover:bg-[#0051A4] capitalize"
      >
        book a free call now{" "}
        <span>
          <FaAngleRight />
        </span>
      </button>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-[1140px]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <InlineWidget url="https://calendly.com/vo-syncsln/30min" />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BookNow;
