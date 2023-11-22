import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div class="flex flex-col bg-slate-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
