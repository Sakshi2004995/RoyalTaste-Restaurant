import { useEffect, useState } from "react";

function Loader() {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={hideLoader ? "hide" : ""}>
      <div className="loader-content">
        <h1>RoyalTaste</h1>

        <div className="loader-line"></div>

        <p>Preparing Your Experience...</p>
      </div>
    </div>
  );
}

export default Loader;