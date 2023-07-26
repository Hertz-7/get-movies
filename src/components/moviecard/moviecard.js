
import './moviecard.css';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
function Moviecard(props) {
    const [show, setshow] = useState(false);
    const handleShow = () => setshow(true);
    const handleClose = () => setshow(false);
    const truncate = (input,size) =>
        input.length > size? `${input.substring(0,size)}...` : input;

  return (<>
   
     <div className="card" style={{width: '20rem'}}>
        <img src={props.img} className="card-img-top" alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{truncate(props.title,25)}</h5>
            <p className="card-text">{truncate(props.info,80)}</p>
            <span className='rating-site'>IMDB</span><p className="card-text"> {props.rating}/10</p>
            <button className="view-btn btn" onClick={handleShow} >viewinfo</button>
        </div>
    </div>
    <Modal show={show} onHide={handleClose} className='modal'>
            
            <Modal.Header className="modal-header"  closeButton>
                
            </Modal.Header>
            <Modal.Body className="modal-body">
                <img className='movieimg' src={props.img} alt={props.title}/>
                <div className='line'></div>
                <h1 className='title'>{props.title}</h1>
                
                <p>{props.info}</p>
                <p>Release Date: {props.release_date}</p>
                <span className='rating-site'>IMDB</span><p className="card-text"> {props.rating}/10({props.vcount})</p>
                
            </Modal.Body>
            
    
    </Modal>
    </>
  );
}

export default Moviecard;
