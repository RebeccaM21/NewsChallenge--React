const HeadlineDescription = ({headline}) => {

    return (
        <>  
            <img src={headline.thumbnail} alt="" />
            <h1>{headline.title}</h1>
        </>
    )
}

export default HeadlineDescription; 