import SearchBar from "./components/SearchBar";
import ResultDisplay from "./components/ResultDisplay";
import Location from "./components/Location";
import { TailSpin } from "react-loading-icons";
import { useState } from "react";

function App() {
  const [ipGeoInfo, setIpGeoInfo] = useState({
    ipAddress: "",
    location: "",
    timeZone: "",
    isp: "",
    position: "",
  });

  return (
    <div className="App-container">
      <h1>IP Address Tracker</h1>
      <SearchBar setOnSearch={setIpGeoInfo} />
      <ResultDisplay
        ipAddress={ipGeoInfo.ipAddress}
        location={ipGeoInfo.location}
        timeZone={ipGeoInfo.timeZone}
        isp={ipGeoInfo.isp}
      />
      {ipGeoInfo.position === "" ? (
        <>
          <TailSpin stroke="#4d51aa" strokeWidth="4" height="4em" />
          <p style={{ color: "#4d51aa" }}>Loading...</p>
        </>
      ) : (
        <Location position={ipGeoInfo.position} />
      )}
    </div>
  );
}

export default App;
