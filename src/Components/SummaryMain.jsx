import SummaryText from "./SummaryText";


const SummaryMain = ({ headlines }) => {

    return ( 
        <>
            
        {headlines.map((headline) => (<SummaryText key={headline.id} headline = {headline}/>))}
            
        </>
    )
}

export default SummaryMain;