import React, { Component } from 'react';
import './GuestList.css';

export default function GuestList(props) {
  const guests = props.guests.map((guest, i) => {
    return (
      <li key={i}>{guest}</li>
    )
  })

  return (
    <ul className="guest-list">
      {guests}
    </ul>
  )
}

// class GuestList extends Component {
//   render() {

//     return (
//       <ul>
//         {guests}
//       </ul>
//     )
//   }
// }

// export default GuestList