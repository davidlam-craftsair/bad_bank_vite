import React from 'react';

export default function Card(props) {
  function classes(props) {
    // assign the appropriate className based on the props
    // use tenary operator if bgcolor is given, then append to the bg- otherwise empty string 
    // concatenate the bgcolor and txtcolor to form the className for bootstrap
    const bgcolor = props.bgcolor ? `bg-${props.bgcolor} mx-3 my-3` : "";
    const txtcolor = props.txtcolor ? "text-" + props.txtcolor : "text-white";
    const cardWidth = props.cardWidth ? props.cardWidth : "w-50";


    // mb-3 specifies that margin bottom of having
    return "card mb-3" + bgcolor + " " + cardWidth + " " + txtcolor;
  }
  return (
    <div className={classes(props)}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>
  )
};
