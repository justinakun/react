import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <h1>STARBUCKS</h1>
      <img
        className="aboutImage"
        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72908.jpg"
        alt="Starbucks"
      />
      <h3 className="aboutDescription">
        Starbucks Corporation is an American multinational chain of coffeehouses
        and roastery reserves headquartered in Seattle, Washington. It is the
        world's largest coffeehouse chain.
      </h3>
    </div>
  );
};

export default AboutUs;
