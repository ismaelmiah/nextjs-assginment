import TableData from "@/components/tableData";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState<string>("2023");
  const [yearSummary, setYearSummary] = useState<YearSummary>();

  const handleChangeYear = (value: string) => {
    setYear(value);
  };

  // Standard variation
  function api<T>(url: string): Promise<T> {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    });
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await api<YearSummary>("/https://google.com")
        .catch((err) => {
          console.error(err);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });

      if (data != undefined || data != null) {
        setYearSummary(data);
      }
    };

    fetchData();
  }, [year]);

  return (
    <div className="p-2">
      <div className="flex">
        <div className="text-lg ">Change year</div>
        <div className="ml-2">
          <select
            onChange={(e) => handleChangeYear(e.target.value)}
            name=""
            id=""
            className="text-lg"
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      {loading && <div className="loading">Loading&#8230;</div>}
      <div className="mt-2">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th colSpan={14} className="px-2 py-2 border">
                Year-{year}
              </th>
            </tr>
            <tr>
              <th className="px-2 py-2 border"></th>
              <th className="px-2 py-2 border"></th>
              <th className="px-2 py-2 border">Jan</th>
              <th className="px-2 py-2 border">Feb</th>
              <th className="px-2 py-2 border">Mar</th>
              <th className="px-2 py-2 border">Apr</th>
              <th className="px-2 py-2 border">May</th>
              <th className="px-2 py-2 border">Jun</th>
              <th className="px-2 py-2 border">Jul</th>
              <th className="px-2 py-2 border">Aug</th>
              <th className="px-2 py-2 border">Sep</th>
              <th className="px-2 py-2 border">Oct</th>
              <th className="px-2 py-2 border">Nov</th>
              <th className="px-2 py-2 border">Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2 border"></td>
              <td className="px-2 py-2 border">Income</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border"></td>
              <td className="px-2 py-2 border">Cumulative Income</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border"></td>
              <td className="px-2 py-2 border">Costs</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border"></td>
              <td className="px-2 py-2 border">Cumulative Costs</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td colSpan={14} className="text-center px-2 py-2 border">
                Reconcillation Result
              </td>
            </tr>
            <tr>
              <td rowSpan={3} className="px-2 py-2 border">
                Income
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 border">Type 1</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border">Type 2</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td rowSpan={4} className="px-2 py-2 border">
                Expenses
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 border">Type 1</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border">Type 2</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border">Type 3</td>
              <TableData isEditable={true} handleChangeData={() => console.log('')} identity={"we"} value={"we"}/>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border"></td>
              <td className="px-2 py-2 border">Reconsillation Result</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border"></td>
              <td className="px-2 py-2 border">Final Result</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
            <tr>
              <td className="px-2 py-2 border"></td>
              <td className="px-2 py-2 border">Cumulative Result</td>
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
              <TableData />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
