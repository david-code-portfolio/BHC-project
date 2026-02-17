import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import profileImage from '../images/Profile Photo.jpg'

function Topbar() {
    return <section className="flex items-center justify-between col-span-2 max-xl:col-span-3 border-b-1 border-gray-300 pb-5 h-max">
        {/* Company name */}
        <h1 className="text-[1.25rem]">
            Real<span className="font-normal">Estate</span>
        </h1>

        {/* Navigation */}
        <div className="flex justify-between text-md text-non-active w-1/5 max-md:hidden">
            <button className="text-contrast hover:text-contrast duration-200">Buy</button>
            <button className='hover:text-contrast duration-200'>Sell</button>
            <button className='hover:text-contrast duration-200'>Rent</button>
        </div>

        {/* right menu */}
        <div className='flex items-center justify-between w-[240px] max-md:w-fit'>
            <button className="listing-btn capitalize py-4 px-5 bg-accent rounded-main text-main text-center gap-5 flex items-center leading-[100%] max-md:hidden">
                <FontAwesomeIcon icon={faPlus} size='sm'/>
                Add listing
            </button>
            {/* Profile image */}
            <button className='flex items-center gap-2 profile-image-btn'>
                <FontAwesomeIcon icon={faCaretDown} size='sm' className='text-non-active icon'/>
                <img 
                    src={profileImage} 
                    alt="profile image" 
                    className='w-[32px] h-[32px] rounded-full object-cover'
                />
            </button>
        </div>
    </section>
}

export default Topbar;