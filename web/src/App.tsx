import { useState } from "react";
import "./App.css";
import "~/core/tex.css";
import { Editor } from "~/views";
import { Providers } from "./components";

function App() {
  return (
    <Providers>
      <Editor />
    </Providers>
  );
}

export default App;
