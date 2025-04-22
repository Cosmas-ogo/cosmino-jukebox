import { useState } from "react";
import {
  copyright,
  initialPlayCounts,
  playListTitle,
  SongsData,
} from "./components/Data";
import Heading from "./components/Heading";
import SongList from "./components/SongList";
import PlayCounts from "./components/PlayCounts";
import Balance from "./components/Balance";
import Footer from "./components/Footer";

function App() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(0);
  const [balance, setBalance] = useState(0);
  const [playCounts, setPlayCounts] = useState(initialPlayCounts);
  return (
    <div className="App">
      <Heading title={playListTitle} />
      <Balance balance={balance} setBalance={setBalance} />
      <SongList
        songs={SongsData}
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        playCounts={playCounts}
        setPlayCounts={setPlayCounts}
        balance={balance}
        setBalance={setBalance}
      />
      <PlayCounts playCounts={playCounts} />
      <Footer copyright={copyright} />
    </div>
  );
}

export default App;
