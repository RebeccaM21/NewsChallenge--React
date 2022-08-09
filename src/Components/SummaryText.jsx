const SummaryText = ({headline}) => {

    return (
        <main id={headline.id}>  
            <img src={headline.fields.thumbnail} alt="" />
            <h1>{headline.fields.headline}</h1>
            <p>{headline.fields.bodyText}</p>
        </main>
    )
}

export default SummaryText; 