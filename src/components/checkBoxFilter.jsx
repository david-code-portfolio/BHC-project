import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function checkBoxFilter({heading, filterOptions}) {

    return <div className="mt-4">
        <h3 className="text-non-active">{heading}</h3>
        <ul className="text-non-active font-normal grid gap-2 mt-2">
            {
                filterOptions.map((option, index) => {
                    return <li key={index}>
                        <label 
                            htmlFor={option} 
                            className="w-fit flex gap-2 cursor-pointer hover:text-contrast duration-300 hover:border-contrast group/checkbox"
                        >
                            <input 
                                type="checkbox" 
                                name={option} 
                                id={option}
                                className="hidden peer"
                            />
                            <div className={`peer-checked:bg-accent peer-checked:border-0 w-4 h-4 items-center justify-center flex border-2 border-soft-grey rounded-sm self-center group-hover/checkbox:border-contrast duration-300`}>
                                <FontAwesomeIcon icon={faCheck} className="text-[0.5rem] text-main"></FontAwesomeIcon>
                            </div>
                            <span className="peer-checked:text-accent peer-checked:font-medium">
                                {option}
                            </span>
                        </label>
                    </li>
                })
            }
        </ul>
    </div>
}

export default checkBoxFilter;