import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import CheckBoxFilter from "../components/checkBoxFilter";
import DropDownFilter from "../components/dropDownFilter";

import { useState } from "react";

function Filters() {
    const filterOptionsOne = ['House', 'Apartment', 'Room', 'Townhall', 'Parking'];
    const filterOptionsTwo = ['A-frame', 'Bungalow', 'Cottage', 'Dome', 'Spanish'];
    const filterOptionsThree = ['Extra-wide doorways', 'Ramps', 'Grab bars', 'Lower counter heights', 'Spanish'];

    const dropDownOptions = {
        price: ['Any', '$100,000', '$250,000', '$500,000', '$750,000', '$1,000,000'],
        rooms: ['Any', '1+', '2+', '3+', '4+', '5+'],
        size: ['Any', '500 sqft', '1000 sqft', '1500 sqft', '2000 sqft', '2500 sqft']
    };

    const [filtersOpen, setFiltersOpen] = useState(false)
    const handleFiltersOpenState = () => {
        filtersOpen ? setFiltersOpen(false) : setFiltersOpen(true);
    }

    /* Dropdown open/close */
    const [opened, setOpened] = useState(null)

    return <section className="max-md:col-span-full h-fit">
            {/* Filter section header */}
            <div className="flex justify-between">
                <h2 className="font-medium text-contrast text-xl max-md:hidden">
                    Filters
                </h2>

                {/* Mobile filter button */}
                <button
                    onClick={handleFiltersOpenState}
                    className="min-md:hidden cursor-pointer font-medium text-contrast text-xl flex gap-2 items-center"
                >
                    Filters
                    <FontAwesomeIcon 
                        icon={faAngleDown} 
                        className={`text-[1rem] ${filtersOpen ? '-rotate-180' : ''} duration-300`}
                    ></FontAwesomeIcon>
                </button>

                <button className="underline text-non-active relative mr-8
                    after:content-['5'] after:font-bold after:text-sm after:text-accent after:bg-soft-grey after:rounded-main after:absolute after:-right-8 after:w-6 after:h-6 after:leading-[175%]">
                    Reset filters
                </button>
            </div>

            {/* Filters */}
            <div className={`${filtersOpen || `` ? '' : 'hidden'} min-md:block`}>
                <CheckBoxFilter heading="Property Type" filterOptions={filterOptionsOne}></CheckBoxFilter>
                <CheckBoxFilter heading="Style of Home" filterOptions={filterOptionsTwo}></CheckBoxFilter>

                {/* Price range filters */}
                <div className="my-4 flex min-md:justify-between gap-2">
                    <DropDownFilter heading="Min. Price" options={dropDownOptions.price} opened={opened} setOpened={setOpened}></DropDownFilter>
                    <DropDownFilter heading="Max. Price" options={dropDownOptions.price} opened={opened} setOpened={setOpened}></DropDownFilter>
                </div>

                {/* Room filters */}
                <div className="my-4 flex min-md:justify-between gap-2">
                    <DropDownFilter heading="Bedroom" options={dropDownOptions.rooms} opened={opened} setOpened={setOpened}></DropDownFilter>
                    <DropDownFilter heading="Bathroom" options={dropDownOptions.rooms} opened={opened} setOpened={setOpened}></DropDownFilter>
                </div>

                {/* Size filters */}
                <div className="my-4 flex min-md:justify-between gap-2 col-span-full">
                    <DropDownFilter heading="Size (Min)" options={dropDownOptions.size} opened={opened} setOpened={setOpened}></DropDownFilter>
                    <DropDownFilter heading="Size (Max)" options={dropDownOptions.size} opened={opened} setOpened={setOpened}></DropDownFilter>
                </div>
                <CheckBoxFilter heading="Accessibillity Features" filterOptions={filterOptionsThree}></CheckBoxFilter>
            </div>
    </section>
}

export default Filters;