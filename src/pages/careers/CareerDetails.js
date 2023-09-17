import { useParams, useLoaderData } from "react-router-dom";
import JobData from "../../data/db.json";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Careers details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          architecto ipsum repellat iste laudantium, dolor facilis magnam
          tempore vel rem quis atque fuga quae reprehenderit obcaecati nesciunt
          impedit sit amet!
        </p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  return JobData.careers.filter((jobDetail) => jobDetail.id === id);
};
