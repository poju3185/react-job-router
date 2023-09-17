import { useLoaderData, Link } from "react-router-dom";

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
  const res = await fetch("http://127.0.0.1:8000/react-job-router/job");
  if (!res.ok) {
    throw Error("Could not fetch career data");
  }
  console.log(res);
  return res.json();
};
