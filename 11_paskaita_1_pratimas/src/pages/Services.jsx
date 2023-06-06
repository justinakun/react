import ServiceCard from "../components/ServiceCard";
import "./Services.css";

const Services = () => {
  return (
    <div className="allServiceCards">
      <ServiceCard
        name="Starbucks Drive-thru"
        description="With Starbucks Drive-Thru, you can enjoy the same great coffee, iced and blended drinks and smoothies, and sweet and savoury treats on-the-go."
      />
      <ServiceCard
        name="Starbucks Apple Pay"
        description="Starbucks accepts Apple Pay. You can use Apple Pay at Starbucks in-store, through the Starbucks app, or at the drive-thru at Starbucks. Ensure you have a compatible phone or watch to make the drink store accept your payment."
      />
      <ServiceCard
        name="Starbucks App"
        description="The Starbucks® app is a convenient way to order ahead for pickup, scan and pay in-store and customize your favorites. Rewards are built right in, so you'll earn Stars towards free drinks and food on your purchases.
"
      />
    </div>
  );
};

export default Services;
