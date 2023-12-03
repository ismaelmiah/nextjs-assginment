export default function Home() {
  return (
    <div>
      <div className="flex">
        <div className="text-lg ">Change year</div>
        <div className="ml-2">
          <select name="" id="" className="text-lg">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      <div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2  border"></th>
              <th className="px-4 py-2  border"></th>
              <th className="px-4 py-2  border">Jan</th>
              <th className="px-4 py-2  border">Feb</th>
              <th className="px-4 py-2  border">Mar</th>
              <th className="px-4 py-2  border">Apr</th>
              <th className="px-4 py-2  border">May</th>
              <th className="px-4 py-2  border">Jun</th>
              <th className="px-4 py-2  border">Jul</th>
              <th className="px-4 py-2  border">Aug</th>
              <th className="px-4 py-2  border">Sep</th>
              <th className="px-4 py-2  border">Oct</th>
              <th className="px-4 py-2  border">Nov</th>
              <th className="px-4 py-2  border">Dec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2  border"></td>
              <td className="px-4 py-2  border"></td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
              <td className="px-4 py-2  border">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
