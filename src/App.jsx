import avatar from '../assets/images/avatar-jessica.jpeg'

export default function App() {
  return (
    <div className="bg-custom-offblack min-h-screen px-5 py-[7.25rem]">
      <div className="bg-custom-darkgrey rounded-xl pt-6 px-6 pb-4">
        <img src={avatar} alt="avatar" className='rounded-full mx-auto size-[5.5rem]' />
        <h1 className="text-custom-white text-2xl font-inter font-semibold text-center pt-7">Jessica Randall</h1>
        <p className='text-custom-green text-center font-inter font-semibold p-1 text-sm'>London, United Kingdom</p>
        <p className='text-gray-300 text-center font-inter py-5 text-sm'>"Front end developer and avid reader."</p>
        <div className='flex flex-col'>
          <button className='text-custom-white font-inter text-sm font-semibold bg-custom-grey rounded-lg p-3 mx-1 mt-2 mb-2 hover:bg-custom-green hover:text-custom-offblack'>Github</button>
          <button className='text-custom-white font-inter text-sm font-semibold bg-custom-grey rounded-lg p-3 mx-1 mt-2 mb-2 hover:bg-custom-green hover:text-custom-offblack'>Frontend Mentor</button>
          <button className='text-custom-white font-inter text-sm font-semibold bg-custom-grey rounded-lg p-3 mx-1 mt-2 mb-2 hover:bg-custom-green hover:text-custom-offblack'>LinkedIn</button>
          <button className='text-custom-white font-inter text-sm font-semibold bg-custom-grey rounded-lg p-3 mx-1 mt-2 mb-2 hover:bg-custom-green hover:text-custom-offblack'>Twitter</button>
          <button className='text-custom-white font-inter text-sm font-semibold bg-custom-grey rounded-lg p-3 mx-1 mt-2 mb-2 hover:bg-custom-green hover:text-custom-offblack'>Instagram</button>
        </div>
      </div>
    </div>
  )
}

