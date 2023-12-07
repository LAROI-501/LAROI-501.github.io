import foodYumIP from "./assets/img/foodyumIP.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        {" "}
        <img src={foodYumIP} className="imgFoot" alt="" />
        <h1 className="quote">First we eat, then we do everything else!</h1>
      </footer>
    </>
  );
}
