const SectionWrapper = ( { children, sectionClass } ) => {
    return (
        <div className={ `${ sectionClass }-con section-con` }>
            <section className={ `${ sectionClass }-inside section-inside` }>
                { children }
            </section>
        </div>
    )
}

export default SectionWrapper;