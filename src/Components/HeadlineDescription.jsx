const HeadlineDescription = ({ headline }) => {

    return (
        <div className="card" style={{width: "80%" , margin: "auto"}}>
            <img className="card-img-top" src={headline.fields.thumbnail} alt="Headline"></img>
    <div className="card text-center">
  <div className="card-header">
  </div>
  <div className="card-body">
    <h5 className="card-title">{headline.fields.headline}</h5>
    <a href="/summary" className="btn btn-primary">Read More...</a>
  </div>
  <div className="card-footer text-muted">
  </div>
</div>
</div>
    )
} 

export default HeadlineDescription; 