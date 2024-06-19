
// const NewsItem = ({title, description, src, url}) => {
//     return (
//         <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
//   <img src={src} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
//     <p className="card-text">{description?description.slice(0,90):"News About Current News. "}</p>
//     <a href={url} className="btn btn-primary">Read More</a>
//   </div>
// </div>
//     )
// }

// export default NewsItem;

import image from "../assets/news.jpg"
const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img 
                src={src?src:image} 
                className="card-img-top" 
                alt="News" 
                style={{ height: "200px", objectFit: "cover", width: "100%" }} 
            />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "News About Current News."}</p>
                <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    );
}

export default NewsItem;
