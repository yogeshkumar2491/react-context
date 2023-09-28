import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Address from "./components/Address";
import addressContext from "./utils/addressContext";
import { API_URL } from "./utils/constants";

function App() {
  const [counter, setCounter] = useState(0);
  const [fetchedAddress, setFetchedAddress] = useState(null);
  useEffect(() => {
    fetchAddress();
  }, [counter]);

  const fetchAddress = async () => {
    if (counter === 0) return;
    const data = await fetch(API_URL + counter);
    let json = await data.json();
    if (!Array.isArray(json)) json = [json];
    setFetchedAddress(json);
  };

  return (
    <div className="size-10">
      <div className="flex justify-center p-3 bg-gray-600">
        <button
          className="bg-yellow-300 mr-3 p-2 rounded-md"
          onClick={() => setCounter(counter + 1)}
        >
          Click to Increase Count of addresses
        </button>
        <span className="pt-1 text-2xl text-white">{counter}</span>
      </div>
      <addressContext.Provider value={{ address: fetchedAddress }}>
        <Address counter={counter} />
      </addressContext.Provider>
    </div>
  );
}

export default App;
