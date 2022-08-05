const SummaryText = ({headline}) => {

    return (
        <>  
            <img src={headline.fields.thumbnail} alt="" />
            <h1>{headline.fields.headline}</h1>
            <p>{headline.fields.bodyText}</p>
        </>
    )
}

export default SummaryText; 