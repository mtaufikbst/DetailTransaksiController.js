import ProdukList from "./components/ProdukList";
import AddProduk from "./components/AddProduk";
import UpdateProduk from "./components/UpdateProduk";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProdukList />}/>
        <Route path="Add" element={<AddProduk/>}/>
        <Route path="edit/:id" element={<UpdateProduk/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
