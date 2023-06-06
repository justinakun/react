import Link from "../components/Link";

const Menu = () => {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="aboutUs">About us</Link>
      <Link to="news">News</Link>
      <Link to="services">Services</Link>
      <Link to="completedTasks">Completed tasks</Link>
      <Link to="contacts">Contacts</Link>
    </div>
  );
};

export default Menu;
