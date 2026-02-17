import CheckBoxFilter from "../components/checkBoxFilter";
import DropDownFilter from "../components/dropDownFilter";

function Filters() {
    const filterOptionsOne = ['House', 'Apartment', 'Room', 'Townhall', 'Parking'];
    const filterOptionsTwo = ['A-frame', 'Bungalow', 'Cottage', 'Dome', 'Spanish'];
    const filterOptionsThree = ['Extra-wide doorways', 'Ramps', 'Grab bars', 'Lower counter heights', 'Spanish'];

    const dropDownOptions = {
        price: ['Any', '$100,000', '$250,000', '$500,000', '$750,000', '$1,000,000'],
        rooms: ['Any', '1+', '2+', '3+', '4+', '5+'],
        size: ['Any', '500 sqft', '1000 sqft', '1500 sqft', '2000 sqft', '2500 sqft']
    };

    return <section className="max-h-[100dvh]">
            {/* Filter section header */}
            <div className="flex justify-between">
                <h2 className="font-medium text-contrast text-xl">
                    Filters
                </h2>
                <button className="underline text-non-active relative mr-8
                    after:content-['5'] after:font-bold after:text-sm after:text-accent after:bg-soft-grey after:rounded-main after:absolute after:-right-8 after:w-6 after:h-6 after:leading-[175%]">
                    Reset filters
                </button>
            </div>

            {/* Filters */}
            <CheckBoxFilter heading="Property Type" filterOptions={filterOptionsOne}></CheckBoxFilter>
            <CheckBoxFilter heading="Style of Home" filterOptions={filterOptionsTwo}></CheckBoxFilter>

            {/* Price range filters */}
            <div className="my-4 flex justify-between">
                <DropDownFilter heading="Min. Price" options={dropDownOptions.price}></DropDownFilter>
                <DropDownFilter heading="Max. Price" options={dropDownOptions.price}></DropDownFilter>
            </div>

            {/* Room filters */}
            <div className="my-4 flex justify-between">
                <DropDownFilter heading="Bedroom" options={dropDownOptions.rooms}></DropDownFilter>
                <DropDownFilter heading="Bathroom" options={dropDownOptions.rooms}></DropDownFilter>
            </div>

            {/* Size filters */}
            <div className="my-4 flex justify-between">
                <DropDownFilter heading="Size (Min)" options={dropDownOptions.size}></DropDownFilter>
                <DropDownFilter heading="Size (Max)" options={dropDownOptions.size}></DropDownFilter>
            </div>
            <CheckBoxFilter heading="Accessibillity Features" filterOptions={filterOptionsThree}></CheckBoxFilter>
    </section>
}

export default Filters;