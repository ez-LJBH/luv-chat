import { BrowserRouter, Route, Routes } from "react-router-dom";

import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Contents from "./components/Contents";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <NavigationBar />
      <div style={{ width: "calc(100% - 200px)" }}>
        <Header />
        <Contents>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/join" element={<Join />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Contents>
      </div>
    </div>
  );
}

export default App;
