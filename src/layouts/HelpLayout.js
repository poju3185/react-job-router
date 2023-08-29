import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
        mollitia.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
