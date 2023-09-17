import { useLoaderData, Link } from "react-router-dom";
import JobData from "../../data/db.json"

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>{career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// loader function
export const careersLoader = async () => {
  return JobData.careers
};
