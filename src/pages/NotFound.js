import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, delectus
        fugiat. Voluptatum magnam ab minus recusandae incidunt tempore ut nisi
        quis, officia porro iure enim, nemo vel ex impedit deleniti.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
