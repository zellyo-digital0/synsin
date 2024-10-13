import Container from "../Shared/Container";

const BottomFooter = () => {
  return (
    <div className="bg-gradient-to-b from-[#1873CE] to-[#053B72] text-white py-5">
      <Container>
        <div className=" flex flex-col sm:flex-row items-center justify-between gap-y-2">
          <p>All rights reserved 2023-2024</p>
          <div className="flex items-center gap-5">
            <a
              href="https://syncsln.com/privacy-policy"
              className="hover:text-black"
            >
              Privacy Policy
            </a>
            <a
              href="https://syncsln.com/terms-and-conditions"
              className="hover:text-black"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomFooter;
