import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"

function propertyDropdown() {
    const options = ["Newest", "Oldest", "Lowest price", "Highest price"]

    const [isActive, setIsActive] = useState(false)
    const handleActiveState = () => {
        setIsActive(prev => !prev)
    }

    const [chosenOption, setChosenOption] = useState(options[0])

    const handleOptionClick = (option) => {
        setChosenOption(option)
        setIsActive(false)
    }

    return <div className="relative w-[240px] max-w-4/5">
        {/* Option selector */}
        <div 
            onClick={handleActiveState}
            className="bg-main border-1 border-soft-grey h-fit rounded-main max-[360px]:rounded-soft px-4 py-2 font-bold cursor-pointer flex items-center justify-between select-none"
        >
            <span className="flex font-medium flex-wrap">
                <p className="text-non-active mr-4">Sort by:</p>
                {chosenOption}
            </span>
            <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`text-[0.75rem] text-non-active ${isActive ? "-rotate-180" : ""} duration-300`}
            ></FontAwesomeIcon>
        </div>

        {/* Option list */}
        <ul className={`${isActive ? 'absolute' : 'hidden'} z-100 select-none grid gap-4 text-sm text-non-active font-bold left-0 top-[110%] border-1 border-soft-grey rounded-soft px-4 py-2 bg-main w-full`}>
            {
                options.map((option, index) => {
                    return <li 
                        className="cursor-pointer hover:text-contrast duration-300"
                        key={index}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </li>
                })
            }
        </ul>
    </div>
}

export default propertyDropdown