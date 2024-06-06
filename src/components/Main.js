import search from "../img/search.png";
import filter from "../img/filter.png";
import lara from "../img/lara.png";
import laraA from "../img/laraA.png";
import thomas from "../img/thomas.png";
import thomasA from "../img/thomasA.png";
import heartb from "../img/heartb.png";
import heartw from "../img/heartw.png";
import comment from "../img/comment.png";
import share from "../img/share.png";
import star from "../img/star.png";
import gallery1 from "../img/gallery1.png";
import gallery2 from "../img/gallery2.png";
import gallery3 from "../img/gallery3.png";
import gallery4 from "../img/gallery4.png";


const Main = () => {

    const cardObject = [{
        profile: lara,
        name: "Lara Leones",
        tag: "@thewallart",
        image: laraA,
    },
    {
        profile: thomas,
        name: "Thomas J.",
        tag: "@thecustomercreater",
        image: thomasA,
    }];

    const galleryObject = [
        {
        image: gallery1,
    },
    {
        image: gallery2,
    },
    {
        image: gallery3,
    },
    {
        image: gallery4,
    }
];


  return (
    <div className="menu">
        <div className="searchBar">
        <div className="search"><img src={search} alt="home" />
        <span>Search here...</span></div>
        <div className="filter"><img src={filter} alt="home" />
        <span>Filters</span></div>
    </div>

        {cardObject.map((obj, key)=>{
            return(
                <div key={key} className="cardMain">
                <div className="top">
                    <div className="details">
                    <img src = {obj.profile}/>
                    <div className="names">
                    <span className="name">{obj.name}</span>
                    <span className="tag">{obj.tag}</span>
                    </div>
                    </div>

                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                    </div>
                </div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span>Read More</span></p>
                
                <img className="overlay" src = {heartw}/>
                <img src = {obj.image}/>
                <hr/>

                <div className="bottom">
                    <img src ={heartb}/>
                    <span>9.8k</span>
                    <img src ={comment}/>
                    <span>8.6k</span>
                    <img src ={share}/>
                    <span>7.2k</span>
                </div>
        </div>
            )
        })}
        
        <div className="gallery">
            
            {galleryObject.map((gallery, index) =>{
                return(
                    <div key={index} className="footer">
                    <img className="fimage" src={gallery.image}/>
                    <p>Modern Wall Decor Framed Painting</p>
                    <div className="price">
                    <h2>$199.99</h2>
                    <span>{[...Array(5)].map((_, index) => (
                    <img key={index} src={star} alt="star" />
                    ))}</span>
                    </div>
                    </div>
                )
            })}
            <div className="scrollbar">a</div>
           <div className="hide1">Asmallworlddhfbekrejrbvrbveurbvhh</div>
           <div className="hide2">Asmallworlddhfbekrejrbvrbveurbvhh</div>
        </div>
    </div>
  )
}

export default Main