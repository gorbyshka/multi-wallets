import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { Chain, mainnet, arbitrum, bsc } from "wagmi/chains";
import { defaultWagmiConfig } from "@web3modal/wagmi";
import { quanta } from "./quanta";

const projectId = "a31577a44b26e995462542a763255e27";

const wagmiConfig = defaultWagmiConfig({

  projectId,
  chains: [quanta, mainnet, bsc, arbitrum] as [Chain, ...Chain[]],
  metadata: {
    name: "test",
    description: "Test App",
    url: "http://localhost:3000",
    icons: ["http://localhost:3000/icon.png"],

  },

});

document.addEventListener("DOMContentLoaded", function () {

  createWeb3Modal({

    projectId,
    wagmiConfig,

  });

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <React.StrictMode>

      <WagmiConfig config={wagmiConfig}>

        <App />

      </WagmiConfig>

    </React.StrictMode>

  );

});
