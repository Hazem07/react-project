import React, { useState } from "react";
function Search({ setSearchn}) {
  return (
    <div style={{marginTop: '20px'}}>
      <input
      style={{   width: '53em',
      height: '3em',
      borderRadius: '3em',
      borderBlock: 'inherit',
      border: 'aliceblue',
      textAlign: 'center'
  }}
        type="search"
        placeholder="Search Drink"
        onChange={(e) => setSearchn(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default Search ;
