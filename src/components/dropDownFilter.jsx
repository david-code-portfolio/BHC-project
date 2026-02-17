import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function dropDownFilter({heading, options}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const togleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return <div>
        <h3 className="text-non-active">{heading}</h3>
        <div className='relative mt-4 w-32'>
            {/* Option selector */}
            <div
                className='flex items-center select-none justify-between border-1 border-soft-grey px-4 py-2 cursor-pointer rounded-main text-sm font-bold text-non-active'
                onClick={togleDropdown}
            >
                {selectedOption}
                <FontAwesomeIcon icon={faAngleDown} className={`${isOpen ? `-rotate-180` : ''} duration-300`}></FontAwesomeIcon>
            </div>

            {/* List of options */}
            <ul className={`${isOpen ? 'absolute' : 'hidden'} z-100 select-none grid gap-4 text-sm text-non-active font-bold left-0 top-[110%] border-2 border-soft-grey rounded-soft px-4 py-2 bg-main w-full`}>
                {
                    options.map((option, index) => {
                        return <>
                            <li 
                                key={index} 
                                className='cursor-pointer hover:text-contrast duration-300'
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        </>
                    })
                }
            </ul>
        </div>
        
    </div>
}

export default dropDownFilter;