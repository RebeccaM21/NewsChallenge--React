const SummaryText = ({headline}) => {

    return (
        <>  
            <img src={headline.thumbnail} alt="" />
            <h1>{headline.title}</h1>
            <p>{headline.text}</p>
        </>
    )
}

export default SummaryText; 