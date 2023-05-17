import React, { useState, useEffect } from 'react';
//import { getAuctionItems, placeBid } from './api'; // import API functions to get auction items and place bids
import Card from './Card';

function Auction() {
  const [items, setItems] = useState([]); // state for auction items
  const [selectedItem, setSelectedItem] = useState(null); // state for selected item
  const [bidAmount, setBidAmount] = useState(0); // state for bid amount
  const [highestBid, setHighestBid] = useState(0); // state for highest bid
  const [message, setMessage] = useState(''); // state for error/success message



  const item = [
    {
        id:1,
        name:"Banner1",
        highestBid:5000
    },
    {
        id:2,
        name:"Banner2",
        highestBid:3000
    },{
        id:3,
        name:"Banner3",
        highestBid:2000
    },{
        id:4,
        name:"Banner4",
        highestBid:1000
    }
  ]
  
  useEffect(()=>{
      setItems(item);
      
  },[])
//   useEffect(() => {
//     // Fetch auction items from API on component mount
//     getAuctionItems()
//       .then((data) => {
//         setItems(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

// const handleBid = () => {
//     // Check if bid amount is greater than current highest bid
//     if (bidAmount > highestBid) {
//       // Call API to place bid
//       placeBid(selectedItem.id, bidAmount)
//         .then((data) => {
//           setHighestBid(data.highestBid);
//           setMessage('Bid placed successfully!');
//         })
//         .catch((error) => console.log(error));
//     } else {
//       setMessage('Bid amount must be higher than current highest bid.');
//     }
//   };
   const handleBid = () => {
    // Check if bid amount is greater than current highest bid
    if (bidAmount > highestBid) {
      // Call API to place bid
  
          setHighestBid(highestBid);
          alert('Bid placed successfully!')
          setMessage('Bid placed successfully!');
        }   
     else {
      alert('Bid amount must be higher than current highest bid.')
      setMessage('Bid amount must be higher than current highest bid.');
    }
  };

  const handleSelectItem = (item) => {
    
    setSelectedItem(item);
    setHighestBid(item.highestBid);
  };

  return (
    <div>
      <h1>Auction</h1>
      <div>
        <h2>Items</h2>
        {
        // items.map((item) => (
        //   <div key={item.id} onClick={() => handleSelectItem(item)}>
        //     <h3>{item.name}</h3>
        //     <p>Current Highest Bid: {item.highestBid}</p>
        //   </div>
        // ))
        items.map((item)=>(
          <>
      <div class="card" onClick={() => handleSelectItem(item)} style={{width:'14rem'}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p>Current Highest Bid: {item.highestBid}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </>
        ))
        }
      </div>
      {selectedItem && (
        <div>
          <h2>{selectedItem.name}</h2>
          <p>Current Highest Bid: {highestBid}</p>
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
          <button onClick={handleBid}>Place Bid</button>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Auction;
