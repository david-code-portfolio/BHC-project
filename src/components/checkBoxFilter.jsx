import { useEffect, useState } from "react";

function checkBoxFilter({heading, filterOptions}) {


    return <div className="mt-4">
        <h3 className="text-non-active">{heading}</h3>
        <ul className="text-non-active font-normal grid gap-2 mt-2">
            {
                filterOptions.map((option, index) => {
                    return <li key={index}>
                        <input 
                            type="checkbox" 
                            name={option} 
                            id={option}
                            className="border-accent focus:ring-contast hidden"
                        />
                        <label htmlFor={option} className="w-fit flex gap-2 cursor-pointer hover:text-contrast duration-300 hover:border-contrast group/checkbox">
                            <div className={`w-4 h-4 border-2 border-soft-grey rounded-sm self-center group-hover/checkbox:border-contrast duration-300`}></div>
                            {option}
                        </label>
                    </li>
                })
            }
        </ul>
    </div>
}

export default checkBoxFilter;