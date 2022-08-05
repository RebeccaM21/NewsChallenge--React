const HeadlineDescription = ({headline}) => {

    return (
        <>  
            <img src={headline.fields.thumbnail} alt="" />
            <h1>{headline.fields.headline}</h1>
        </>
    )
}

export default HeadlineDescription; 