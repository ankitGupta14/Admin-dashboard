import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Topbar from "./scenes/global/Topbar";
import CustomSidebar from "./scenes/global/CustomSidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import CustomForm from "./scenes/form/CustomForm"; 
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from './scenes/line';
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [isCustomSidebar, setIsCustomSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <CustomSidebar isCustomSidebar={isCustomSidebar} />
          <main className="content">
          <Topbar setIsCustomSidebar={setIsCustomSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path ="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/form" element={<CustomForm/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/faq" element={<FAQ/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/line" element={<Line/>} />
              <Route path="/geography" element={<Geography/>} />
              <Route path="*" element={<Dashboard />} />
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
