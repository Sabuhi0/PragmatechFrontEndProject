import React from 'react'
// import Modal from './Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Contact = ({ cards }) => {
  console.log(cards)
  return (
    <div>
      {/* <Modal /> */}
      {
        cards.map((card) => {
          return(
            <div key={card.id} className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
              <Link to={""} className='ui header'>{card.title}</Link>
              <p>{card.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const {cards} = state;
  return {
    // cards:cards
    cards
  }
}
  
export default connect(mapStateToProps)(Contact);
