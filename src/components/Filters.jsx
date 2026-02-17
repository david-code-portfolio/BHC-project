function Filters() {
    return <section className="">
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
    </section>
}

export default Filters;