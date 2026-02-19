import PropertyDropdown from "../components/propertyDropdown"
import PropertyCard from "../components/propertyCard"

import propertyImg1 from '../images/property_1.jpg';
import propertyImg2 from '../images/property_2.jpg';
import propertyImg3 from '../images/property_3.jpg';
import propertyImg4 from '../images/property_4.jpg';

function PropertyList() {
    const propertyList = ['1', '2', '3', '4']
    return<section className="max-xl:col-span-2 max-lg:col-span-full">
        {/* Property list section header */}
        <div className="flex justify-between h-fit items-center max-xl:col-span-2 max-lg:col-span-full">
            <h2 className="font-medium text-[1.25rem] max-sm:text-[1rem] text-wrap text-contrast">
                Showing 577 search results
            </h2>
            <PropertyDropdown></PropertyDropdown>
        </div>

        {/* Property list */}
        <div className="grid grid-cols-2 max-[480px]:grid-cols-1 mt-8 gap-6">
            <PropertyCard image={propertyImg1}></PropertyCard>
            <PropertyCard image={propertyImg2}></PropertyCard>
            <PropertyCard image={propertyImg3}></PropertyCard>
            <PropertyCard image={propertyImg4}></PropertyCard>
            <PropertyCard image={propertyImg1}></PropertyCard>
            <PropertyCard image={propertyImg2}></PropertyCard>
            <PropertyCard image={propertyImg3}></PropertyCard>
            <PropertyCard image={propertyImg4}></PropertyCard>
            <PropertyCard image={propertyImg1}></PropertyCard>
            <PropertyCard image={propertyImg2}></PropertyCard>
            <PropertyCard image={propertyImg3}></PropertyCard>
            <PropertyCard image={propertyImg4}></PropertyCard>
        </div>
    </section>
}

export default PropertyList