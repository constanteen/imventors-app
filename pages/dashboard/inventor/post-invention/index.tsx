import { NextPage } from 'next';

const Tags = [
  {id: 1, name: 'Music'}, 
  {id: 2, name: 'Portray'},
  {id: 3, name: 'Games'},
  {id: 4, name: 'Events'},
  {id: 5, name: 'Sea'},
  {id: 6, name: 'Ocean'},
  {id: 7, name: 'Building'},
  {id: 8, name: 'Technology'},
  {id: 9, name: 'Water'},
  {id: 10, name: 'Jogging'},
  {id: 11, name: 'etc.'},
]

const index: NextPage = () => {
  return (
    <>
      <div>
        <p className="font-bold text-3xl">Profile</p>
      </div>
      <div className="my-8">
        <hr />
      </div>
      <div>
        <form>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
            <div className="w-full md:w-1/2 my-5 md:mb-0">
              <label className="profile_formLabel" htmlFor="invention-caption">
                Invention Caption
              </label>
              <input className="profile_formInput" id="full-name" type="text" />
            </div>
            <div className="w-full md:w-1/2 my-5">
              <label className="profile_formLabel" htmlFor="publish-date">
                Publish Date
              </label>
              <input className="profile_formInput" id="publish-date" type="date" />
            </div>
          </div>

          <div className="w-full my-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Invention Details
            </label>
            <textarea className="profile_formInput" id="hobbies" rows={5} placeholder="Invention Details" />
          </div>

          {/* Upload Banner */}
          <div className="w-full my-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
              Upload Banner
              </label>
              <div className="mt-1 flex justify-center px-6 py-12 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <i className='text-4xl bx bx-cloud-upload text-gray-600' />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-gray-600">
                      <span>Upload invention image, it will be shown as invention background</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
            <div className="w-full md:w-1/2 my-5 md:mb-0">
              <label className="profile_formLabel" htmlFor="invention-industry">
                Industry
              </label>
              <input className="profile_formInput" id="invention-industry" type="text" />
            </div>
            <div className="w-full md:w-1/2 my-5">
              <label className="profile_formLabel" htmlFor="related-industry">
                Related Industry
              </label>
              <input className="profile_formInput" id="related-industry" type="text" />
            </div>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
            <div className="w-full md:w-1/2 my-5 md:mb-0">
              <label className="profile_formLabel" htmlFor="required-amount">
                Required Amount
              </label>
              <input className="profile_formInput" id="required-amount" type="text" />
            </div>
            <div className="w-full md:w-1/2 my-5">
              <label className="profile_formLabel" htmlFor="sum-reqd">
                Sum Required To Complete
              </label>
              <input className="profile_formInput" id="sum-reqd" type="text" />
            </div>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-0 md:gap-8 mb-0 md:mb-3">
            <div className="w-full md:w-1/2 my-5 md:mb-0">
              <label className="profile_formLabel" htmlFor="equity">
                Equity Per Investment
              </label>
              <input className="profile_formInput" id="equity" type="text" />
            </div>
            <div className="w-full md:w-1/2 my-5">
              <label className="profile_formLabel" htmlFor="budget">
                Current Budget
              </label>
              <input className="profile_formInput" id="budget" type="text" />
            </div>
          </div>
          {/* Tags */}
          <div className="w-full md:w-1/2 my-5 md:mb-0">
            <label className="profile_formLabel" htmlFor="invention-industry">
              Tags
            </label>
            <div>
            {
              Tags.map((tag) => (
                <span key={tag.id} className="px-4 mx-2 py-1 text-base rounded-full border text-gray-800 hover:text-white hover:bg-gray-700 cursor-pointer">
                  {tag.name}
                </span>
              ))
            }
            </div>
          </div>
          {/* Gallery */}
          <div className="w-full my-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
              Gallery
              </label>
              <div className="mt-1 flex justify-center px-6 py-12 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <i className='text-4xl bx bx-cloud-upload text-gray-600' />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-gray-600">
                      <span>Drag as many images as possibe in here</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="flex flex-1 items-center hover:underline text-gray-700 cursor-pointer">
              <i className='bx bx-plus-circle' /> Add Additional Invention Detail
            </span>
            <span className="flex flex-auto items-center hover:underline text-gray-700 cursor-pointer">
              <i className='bx bx-plus-circle' /> Add Additional File
            </span>
          </div>
        </form>
      </div>
    </>
  )
}

export default index; 