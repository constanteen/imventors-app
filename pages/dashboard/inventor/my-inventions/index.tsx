import { ReactElement, useState } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Invention = dynamic(() => import('../../../../src/components/invention/Invention'));
const AboutInvention = dynamic(() => import('../../../../src/components/invention/AboutInvention'));
const Recommendation = dynamic(() => import('../../../../src/components/invention/Recommendation'));

const index: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState(1);

  const RenderActiveComponent = ():ReactElement => {
    if (activeTab === 2) {
      return <AboutInvention />
    }
    if (activeTab === 3) {
      return <Recommendation />
    }
    return <Invention />
  }

  
  return (
    <>
      <div className="flex mb-4">
        <button 
          className={ activeTab === 1 ? 'active_tab' : 'inactive_tab' } 
          onClick={() => setActiveTab(1)}>Invention</button>

        <button 
          className={ activeTab === 2 ? 'active_tab' : 'inactive_tab' }
          onClick={() => setActiveTab(2)}>About Inventor</button>

        <button 
          className={ activeTab === 3 ? 'active_tab' : 'inactive_tab' }
          onClick={() => setActiveTab(3)}>Recommendations</button>
        <button className="border-b p-2 flex flex-1"></button>
      </div>

      <RenderActiveComponent />
    </>
  )
}

export default index; 