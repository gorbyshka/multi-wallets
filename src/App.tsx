import { useWeb3Modal } from "@web3modal/wagmi/react";
import "./App.css";
import { LuNetwork } from "react-icons/lu";
const App = () => {

  const { open } = useWeb3Modal();

  return (
    <div className="App">

      <w3m-button />

      <button className="network-btn" onClick={() => open({ view: "Networks" })}>

        <LuNetwork size={30} />

      </button>

    </div>
  );
};

export default App;
