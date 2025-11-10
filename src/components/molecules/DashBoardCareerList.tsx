import { useEffect, useState } from "react";
import { type JobInterface } from "../../types/JobInterface";
import { FaBagShopping, FaLocationDot, FaRupiahSign } from "react-icons/fa6";
import { BsBuildingFill } from "react-icons/bs";
import SearchMenu from "../atoms/SearchMenu";
import Title from "../atoms/Title";

export default function DashBoardCareerList() {
  const [jobs, setJobs] = useState<JobInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchJobs, setSearchJobs] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await fetch("/json/jobs.json");
        if (!jobsData.ok) {
          throw new Error(`Failed to fetch: ${jobsData.status}`);
        }
        const data: JobInterface[] = await jobsData.json();
        setJobs(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchJobs.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading jobs...</p>;
  }

  return (
    <>
      <Title
        title="Master Career List"
        description="Browse available career opportunities."
      />

      <SearchMenu
        title="Jobs List"
        placeholder="Search jobs..."
        searchTerm={searchJobs}
        onSearchChange={setSearchJobs}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200  hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                <FaBagShopping className="text-gray-800 text-xl" />
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  job.type === "Full-Time"
                    ? "bg-green-100 text-green-700"
                    : job.type === "Part-Time"
                    ? "bg-blue-100 text-blue-700"
                    : job.type === "Hybrid"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {job.type}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
              {job.title}
            </h3>

            <div className="flex items-center gap-2 mb-2 text-gray-700">
              <BsBuildingFill className="text-gray-500 text-base" />
              <p className="text-sm font-medium">{job.company}</p>
            </div>

            <div className="flex items-center gap-2 mb-2 text-gray-600">
              <FaLocationDot className="text-red-500 text-sm" />
              <p className="text-sm">{job.location}</p>
            </div>

            <div className="flex items-center gap-2 mt-3 text-gray-700">
              <FaRupiahSign className="text-emerald-600 text-sm" />
              <p className="font-medium">{job.salary}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
