
import { NextPage } from 'next';
import {  inventorsClient } from '../../lib/client';
import { InventionDetail } from '../../lib/types';
import InventionList from '../../src/components/General/InventionList';

const inventionCategories = ["Entertainment", "Sport", "Handcraft", "Technology", "Medical", "Artifical Intelligence", "Clothing", "Financial Technology", "Engineering", "Aircraft", "Agriculture", "Design"];


interface InventionProps{
	data:Array<InventionDetail>
}

const Inventions:NextPage<InventionProps> = ({data:inventions}) => {
	return (
		<div className="grid grid-cols-4 gap-4">
			<div className="bg-gray-50 h-screen border">
				<div>
					<div className="flex justify-between p-8 items-center">
						<p className="text-xl font-extrabold">Industry</p>
						<p className="flex items-center">See All <i className='bx bx-chevron-right' /></p>
					</div>
					<hr />	
					<div className="p-3 flex flex-wrap">
						{
							inventions.map(invention => <span key={invention.id} className="px-4 m-1 py-1 text-xs rounded-md border text-gray-800 hover:text-white hover:bg-primary cursor-pointer">{invention.industry}</span>)
						}
					</div>
				</div>
				<div>
					<div className="flex justify-between p-8 items-center">
						<p className="text-xl font-extrabold">Invention Tags</p>
						<p className="flex items-center">See All <i className='bx bx-chevron-right' /></p>
					</div>
					<hr />	
					<div className="p-3 flex flex-wrap">
						{
							inventions.map(invention => <span key={invention.id} className="px-4 m-1 py-1 text-xs rounded-md border text-gray-800 hover:text-white hover:bg-primary cursor-pointer">{invention.tag}</span>)
						}
					</div>
				</div>
			</div> 	
			<div className="col-span-3">
				<div className="px-10">
					{
						inventions.map((invention) => <InventionList invention={invention}  key={invention.id} />)
					}
				</div>
			</div>
		</div>
	);
};

export default Inventions;

export async function getServerSideProps(){
	const {data} = await inventorsClient.get('/all-inventions/');
	// console.log(data);
	
	return {
		props:{data}
	}
}