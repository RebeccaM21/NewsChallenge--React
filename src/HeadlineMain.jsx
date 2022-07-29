import HeadlineDescription from "./HeadlineDescription";

const HeadlineMain = ({ headlines }) => {

    return ( 
        <>
            
         {headlines.map((headline) => (<HeadlineDescription key={headline.id} headline = {headline}/>))}
            
        </>
    )
}

export default HeadlineMain;