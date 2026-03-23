import "./App.css";
import { useState } from "react";
import Shop from "./components/Shop";
import bgImage from "./assets/pictures/20260320_125323.jpg";
import logo from "./assets/pictures/logo.png";
//import Cart from "./Features/cart/Cart";
type Page = "home" | "products" | "cart";

function App() {
  const [page, setPage] = useState<Page>("home");

  // const backgroundClasses = page === "home" 
  // ? "min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" 
  // : "min-h-screen";

  const appStyle =
    page === "home"
      ? {
          minHeight: "100vh",          
          padding: "20px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
         
          
        }
      : { padding: "20px" };

  return (
   

  
    <div  style={appStyle}>
      <header
      //  className="fixed top-0 left-0 right-0 w-full z-[1000] bg-white/98 border-b border-[#ddd] p-[10px_20px] flex flex-col items-center box-border"

       
      >
        
        <h1 style={{ display: "flex",justifyContent: "center",textAlign: "center",alignItems: "center",
         gap: "16px",
           fontSize: "70px", fontWeight: "bold", color: "#094e4e" }}>
           <img src={logo} alt="Description" width="200px" height="200px" ></img>
          Tal's Crochet Shop
        </h1>
        <nav
          style={{
            marginTop: "8px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
            Home
          </button>
          <button onClick={() => setPage("products")} style={{ cursor: "pointer" }}>
            Products
          </button>
          <button onClick={() => setPage("cart")} style={{ cursor: "pointer" }}>
            Cart
          </button>
        </nav>
      </header>

      <main
        style={{
          paddingTop: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          minHeight: "calc(100vh - 120px)",
          width: "100%",
        }}
      >
        {page === "home" && <div style={{ textAlign: "center", marginTop: "20px" }} />}
        {page === "products" && <Shop />}
        {page === "cart" && (
          //<Cart/>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Cart</h2>
            <p>The cart is currently empty.</p>
          </div>
        )}
      </main>
    </div>
   
  );
}

export default App;
