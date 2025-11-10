import { useEffect, useState } from "react";
import type { StudentInterface } from "../../types/StudentTypes";
import SearchMenu from "../atoms/SearchMenu";
import Title from "../atoms/Title";
import StatCard from "../atoms/StatCard";

export default function DashboardStudentList() {
  const [students, setStudent] = useState<StudentInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [averageGpa, setAverageGpa] = useState<number>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const dataStudent = await fetch("/json/student.json");
        if (!dataStudent.ok) {
          throw new Error(`Failed to fetch: ${dataStudent.status}`);
        }
        const data: StudentInterface[] = await dataStudent.json();
        setStudent(data);

        const totalGpa = data.reduce((sum, s) => sum + s.gpa, 0);
        const avg = totalGpa / data.length;
        setAverageGpa(avg);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  // search filter
  const filteredStudent = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-600">Loading students...</p>
    );
  }
  return (
    <>
      <Title
        title="Master Student List"
        description="Manage and view all registerd students"
      />

      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Total Students" value={students.length} />
        <StatCard
          title="Average GPA"
          value={averageGpa ? averageGpa.toFixed(2) : "-"}
        />
        <StatCard title="Search Result" value={filteredStudent.length} />
      </div>

      <div className="mt-5 p-4 bg-white rounded-xl shadow-md overflow-x-auto">
        <SearchMenu
          title="Students List"
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search students.."
        />

        {filteredStudent.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No results found.</p>
        ) : (
          <table className="w-full mt-5 border border-gray-200 text-left text-sm text-gray-700 min-w-[600px]cursor:po">
            <thead className="bg-linear-to-br from-gray-950 via-gray-700 to-gray-950 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold tracking-wide">ID</th>
                <th className="px-4 py-3 font-semibold tracking-wide">Name</th>
                <th className="hidden sm:table-cell px-4 py-3 font-semibold tracking-wide">
                  Major
                </th>
                <th className="hidden sm:table-cell px-4 py-3 font-semibold tracking-wide">
                  Year
                </th>
                <th className="px-4 py-3 font-semibold tracking-wide text-right">
                  GPA
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudent.map((student, index) => (
                <tr
                  key={student.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-all duration-150`}
                >
                  <td className="px-4 py-2 border-t border-gray-200">
                    {student.id}
                  </td>
                  <td className="px-4 py-2 border-t border-gray-200 font-medium text-gray-900">
                    {student.name}
                  </td>
                  {/* sumputkeun (<sm) */}
                  <td className="hidden sm:table-cell px-4 py-2 border-t border-gray-200">
                    {student.major}
                  </td>
                  {/* sumputkeun di layar kecil (<sm) */}
                  <td className="hidden sm:table-cell px-4 py-2 border-t border-gray-200">
                    {student.year}
                  </td>
                  <td className="px-4 py-2 border-t border-gray-200 text-right">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        student.gpa >= 3.8
                          ? "bg-green-100 text-green-800"
                          : student.gpa >= 3.5
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.gpa.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
