const AboutUs = () => {
  return (
    <div>
      <h1>Starbucks</h1>
      <img
        src="data:image/jpeg;base64,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"
        alt="Starbucks"
      />
      <p>
        Starbucks Corporation is an American multinational chain of coffeehouses
        and roastery reserves headquartered in Seattle, Washington. It is the
        world's largest coffeehouse chain.
      </p>
    </div>
  );
};

export default AboutUs;