import React from 'react'
import './App.scss'
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import theme from "./theme";
import {LandingPage} from "./pages/LandingPage";
import {EscapeRoomBookingPage} from "./pages/EscapeRoomBookingPage";

export const AppContext = React.createContext<undefined | { apiKey: string }>(undefined)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppContext.Provider
                    value={{apiKey: "15992aedd137cb7ad552550d3b9deb"}}
                >
                    <Routes>
                        <Route path="/szabaduloszoba" element={<EscapeRoomBookingPage/>}/>
                        <Route index element={<LandingPage/>}/>
                    </Routes>
                </AppContext.Provider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App



