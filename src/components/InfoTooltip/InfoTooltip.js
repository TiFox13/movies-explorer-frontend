import React from "react";

import './InfoTooltip.css'

function InfoTooltip({message, isOpen, onClose}) {


    return (
        <div className={isOpen ? `info-tooltip  info-tooltip_opened` : `info-tooltip`}>
        <div className='info-tooltip__container'>
          <button type="button" onClick={onClose} className="button button_info-tooltip" aria-label="закрыть."></button>
          <div className='form info-tooltip__info'  method='post'>
              {/* <div className={`info-tooltip__icon info-tooltip__icon_${status}`} ></div>  тут тапи была бы картинка. но я не хочу картинку */} 
              <h2 className='info-tooltip__heading'>{message}</h2>
          </div>
       </div>
       </div>
    )
}

export default InfoTooltip;