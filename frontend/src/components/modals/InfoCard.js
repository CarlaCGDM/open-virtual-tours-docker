import './InfoCard.css'
import ModelPreview from '../canvases/ModelPreview.js';

const InfoCard = (props) => {
    return (
      <div className='info-card'>
        <h1>{props.content.name}</h1>

        {props.isModel && <ModelPreview modelURL={props.content.modelURL}/>}

        {!props.isModel && <img 
          className='content-image'
          src={props.content.imgURL} 
          alt={props.content.name}/>}

        <p className='content-description'>{props.content.description}</p>
        <small>Author: {props.content.author}</small><br/>
        <small>License: {props.content.license}</small>
      </div>
    );
  }
  
  export default InfoCard