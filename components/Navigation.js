import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <nav
      className ="navbar navbar-expand-lg navbar-light fixed-top headView"
      style={{
        background: `rgb(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="container">
        <Link  className ="navbar-brand" href="/">
          <a> Revved Pets Adoption </a>
        </Link>
        <button
          className ="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse" id="navbarText">
          <ul className ="navbar-nav mr-auto">
            <li className ="nav-item">
              <Link  className ="nav-link" href="#">
                <a>Make A Donation</a>
              </Link>
            </li>
            <li className ="nav-item">
              <Link  className ="nav-link" href="#">
                <a>Contact </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}