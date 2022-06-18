import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Contents from "./components/Contents";
import NavigationBar from "./components/NavigationBar";
import NeedToken from "./components/NeedToken";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Gallery from "./pages/Gallery";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { useEffect, useState } from "react";

function App() {
  const [isDrawable, setIsDrawable] = useState(true);

  useEffect(() => {
    if (
      window.location.href.indexOf("login") > -1 ||
      window.location.href.indexOf("join") > -1
    ) {
      setIsDrawable(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <NavigationBar isDrawable={isDrawable} />
        <div
          style={
            isDrawable
              ? {
                  width: "calc(100% - 200px)",
                  position: "absolute",
                  left: "200px",
                }
              : {
                  width: "100%",
                  height: "100vh",
                }
          }
        >
          <Header isDrawable={isDrawable} />
          <Contents isDrawable={isDrawable}>
            <Routes>
              <Route element={<NeedToken />}>
                <Route path="/" element={<Main />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/gallery" element={<Gallery />} />
              </Route>
              <Route
                path="/join"
                element={<Join setIsDrawable={setIsDrawable} />}
              />
              <Route
                path="/login"
                element={<Login setIsDrawable={setIsDrawable} />}
              />
            </Routes>
          </Contents>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
