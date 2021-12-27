import { NextPage } from 'next';

const DashboardTable: NextPage = () => {
	return (
    <section className="border-2 rounded-lg p-4">
      <div className="flex justify-between py-4">
        <button className="p-2 border-gray-300 border rounded"><i className="bx bx-filter-alt"></i> Filter</button>
        <div className="flex relative w-2/5">
          <span className="search_span"><i className="bx bx-search-alt-2 text-xl" /></span>
          <input type="text" placeholder="Search" className="search_input" />
        </div>
      </div>
      <table className="table-auto w-full mt-5 overflow-x-auto">
        <thead>
          <tr className="text-left">
            <th><input type="checkbox" /></th>
            <th>Invention Title</th>
            <th>Amount Required</th>
            <th>Amount Invested</th>
            <th>No. of Investors</th>
            <th>Likes</th>
            <th>Views</th>
            <th>Published Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Solar Powered Car</td>
            <td>$450,000,000</td>
            <td>$12,000</td>
            <td>3</td>
            <td>49</td>
            <td>34</td>
            <td>Jan 20, 2021</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Solar Powered Car</td>
            <td>$450,000,000</td>
            <td>$12,000</td>
            <td>3</td>
            <td>49</td>
            <td>34</td>
            <td>Jan 20, 2021</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Solar Powered Car</td>
            <td>$450,000,000</td>
            <td>$12,000</td>
            <td>3</td>
            <td>49</td>
            <td>34</td>
            <td>Jan 20, 2021</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Solar Powered Car</td>
            <td>$450,000,000</td>
            <td>$12,000</td>
            <td>3</td>
            <td>49</td>
            <td>34</td>
            <td>Jan 20, 2021</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Solar Powered Car</td>
            <td>$450,000,000</td>
            <td>$12,000</td>
            <td>3</td>
            <td>49</td>
            <td>34</td>
            <td>Jan 20, 2021</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-3">
        <button className="py-1 px-2 mr-2"><i className='bx bx-chevron-left' /></button>
        <button className="py-1 px-2 ml-2"><i className='bx bx-chevron-right' /></button>
      </div>
    </section>
	);
};

export default DashboardTable;
