import { useState, useEffect } from "react";

const CookieBar = () => {
  const [showCookieBar, setShowCookieBar] = useState(true);

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem("cookieAccepted");
    if (isCookieAccepted) {
      setShowCookieBar(false);
    }
  }, []);

  const acceptCookie = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowCookieBar(false);
  };

  return (
    showCookieBar && (
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-[999]">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between">
          <p className="text-sm">
            This website uses cookies to ensure you get the best experience.
            <a
              href="https://syncsln.com/privacy-policy"
              className="underline ml-1"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://syncsln.com/terms-and-conditions"
              className="underline"
            >
              Terms of Conditions
            </a>
            .
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={acceptCookie}
          >
            OK
          </button>
        </div>
      </div>
    )
  );
};

export default CookieBar;
