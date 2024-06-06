import "./Menu.scss";
import image5 from "../img/image5.png"
    

const Artist = ({card}) => {
  return (
    <div className="card-wrapper">
      <div className="seller">
        <button>Become a Seller</button>
      </div>
      <div className="tab">
        <span><b>Artist</b></span>
        <span>Photographers</span>
      </div>
      
      {
        card.map((card, index) => {
            return (
              
                <div key={index} className="card">
                    
                <img src={card.image1} alt='image1'/>
        
                <div className='card-content'>
                    <img src={card.img} alt='image1' />
                    <span className='info'>
                        <p>{card.name}</p>
                        <span>{card.email} </span>
                    </span>
        
                </div>
              </div>
            )
        })
        
      }
      <img className="crop" src={image5}/>
      <div className="copyright">
      <p>Privacy </p> <p>Terms of Service</p> <p>Cookie Notice</p>
      </div>
    </div>
  );
};

export default Artist;
