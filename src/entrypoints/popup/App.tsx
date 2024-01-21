import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import wxtLogo from "@/public/wxt.svg";
import "./App.css";
import { Trans, t } from "@lingui/macro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://wxt.dev" target="_blank">
          <img src={wxtLogo} className="logo" alt={t`WXT logo`} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt={t`React logo`} />
        </a>
      </div>
      <h1>
        <Trans>WXT + React</Trans>
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <Trans>count is {count}</Trans>
        </button>
        <p>
          <Trans>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">
        <Trans>Click on the WXT and React logos to learn more</Trans>
      </p>
    </>
  );
}

export default App;
