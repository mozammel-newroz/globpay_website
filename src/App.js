import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5CC74C",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: '#595959'
    },
    body2: {
      fontSize: "1.1rem",
      fontWeight: 500,
      color: "#111",
    },
    h4: {
      fontSize: "1.35rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3.1rem",
      fontWeight: 700,
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 800,
      lineHeight: 1.4,

    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1.1rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
