import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';



function PropertyCard({image}) {
    return <div className='border-1 border-soft-grey rounded-soft p-2 grid gap-4'>
        <img 
            src={image}
            className='rounded-soft'
        />
        {/* Details */}
        <div className='px-2'>
            <h3 className='text-contrast font-medium text-2xl'>
                $750,000
            </h3>
            <p className='text-non-active'>
                100 West, 15 Street, San Francisco
            </p>
        </div>
        {/* Icons */}
        <div className='flex px-2 gap-x-8 flex-wrap'>
            <span className='text-non-active flex gap-2 items-center'>
                <FontAwesomeIcon 
                    icon={faBath}
                    className='text-non-active'
                ></FontAwesomeIcon>
                2
            </span>
            <span className='text-non-active flex gap-2 items-center'>
                <FontAwesomeIcon 
                    icon={faShower}
                    className='text-non-active'
                ></FontAwesomeIcon>
                2
            </span>
            <span className='text-non-active flex gap-2 items-center'>
                <FontAwesomeIcon 
                    icon={faMaximize}
                    className='text-non-active'
                ></FontAwesomeIcon>
                <p>
                    2500
                    <sup>2</sup>ft
                </p>
            </span>
        </div>
    </div>
}

export default PropertyCard