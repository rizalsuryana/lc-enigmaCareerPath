import { useEffect, useState } from "react";
import type { ActivityInterface } from "../../types/ActivityInterface";
import type { StudentInterface } from "../../types/StudentTypes";
import type { JobInterface } from "../../types/JobInterface";
import { PiStudentFill } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import StatCard from "../atoms/StatCard";
// import { RoleInterface } from "../../types/userTypes";

export default function DashBoardHome() {
  const [activity, setActivity] = useState<ActivityInterface[]>([]);
  const [students, setStudents] = useState<StudentInterface[]>([]);
  const [jobs, setJobs] = useState<JobInterface[]>([]);
  const [loading, setLoading] = useState(true);
  // const [users, setUsers] = useState<RoleInterface[]>([]);

  useEffect(() => {
    const fechData = async () => {
      try {
        setLoading(true);

        //student
        const fetchStudent = await fetch("json/student.json");
        const studentData = await fetchStudent.json();
        setStudents(studentData);

        // jobs
        const fecthJobs = await fetch("json/jobs.json");
        const jobsData = await fecthJobs.json();
        setJobs(jobsData);

        //activity
        const fecthActivity = await fetch("json/activity.json");
        const activityData = await fecthActivity.json();
        setActivity(activityData);

        //users
        // const fetchUser = await fetch("json/users.json");
        // const userData = await fetchUser.json();
        // setUsers(userData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fechData();
  }, []);

  if (loading) {
    <p>Loading....</p>;
  }

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Wellcome back, admin
        </h2>
        <p className="text-gray-600">
          This is what happened with your dashboar today!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <StatCard
          icon={<PiStudentFill />}
          title="Students Total"
          value={students.length}
        />
        <StatCard
          icon={<FaBagShopping />}
          title="Career Total"
          value={jobs.length}
        />
      </div>

      <div className="grid gap-4">
        {activity.map((activit) => (
          <div
            key={activit.id}
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition-all"
          >
            <FaHistory className="text-gray-500 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">{activit.title}</h4>
              <p className="text-gray-600 text-sm">{activit.description}</p>
              <p className="text-gray-400 text-xs mt-1">{activit.time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
