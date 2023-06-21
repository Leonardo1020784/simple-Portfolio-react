import styles from "./style";
import {  Home } from "./components";
import {  Routes, Route } from "react-router-dom";

// import './i18next'
// import { LanguageContextProvider } from "./context/languageContext";

function App() {
  return (
    

    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}></div>
      {/* <LanguageContextProvider> */}
    <Routes>
    <Route index element={<Home />} /> 
    {/* <Route path="mentalhealth" element={<Mentalhealth />} /> */}

    </Routes>
    {/* </LanguageContextProvider> */}
    </div>
  )
}

export default App

