import { ReactElement } from 'react';

const DashboardTable = ():ReactElement => {
	return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y table-auto divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="dashboard_table-th">
                    <input type="checkbox" />
                  </th>
                  <th scope="col" className="dashboard_table-th">
                    Invention Title
                  </th>
                  <th scope="col" className="dashboard_table-th">
                    Amount Required
                  </th>
                  <th scope="col" className="dashboard_table-th">
                    Amount Invested
                  </th>
                  <th scope="col" className="dashboard_table-th">
                    No. of Investors
                  </th>
                  <th scope="col" className="dashboard_table-th">
                    Likes
                  </th>
                  <th scope="col" className="dashboard_table-th">
                    Views
                  </th>
                  <th scope="col" className="dashboard_table-th">
                    Published Date
                  </th>
                  <th scope="col" className="dashboard_table-th">
                    <i className='bx bx-dots-vertical-rounded' />
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-gray-600 text-sm">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Solar Powered Car
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    $450,000,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    $12,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    3
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    49
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    34
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Jan 20, 2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <i className='bx bx-dots-vertical-rounded' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
	);
};

export default DashboardTable;
