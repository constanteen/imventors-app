import { ReactElement } from 'react';

interface IProps {
  header: string;
  details: string | number;
  lineColor: string;
}


export default function BigBadge ({header, details, lineColor}: IProps):ReactElement {
  return (
    <div className="flex items-center bg-white py-3 px-10 my-4 rounded-xl min-w-14">
      <div className={`w-0.5 h-8 ${lineColor}`}></div> {/*bg-yellow-400 */}
      <div className="ml-10">
        <p className="text-xs mb-1">{header}</p> {/* Date Joined */}
        <p className="font-bold">{details}</p> {/*Oct. 5th, 2020 */}
      </div>
    </div>
  )
}