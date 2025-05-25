import { createRoot } from "react-dom/client";  
import './tailwind.css';  
import AdminSupermarketList from "./AdminSupermarketList";

createRoot(document.getElementById("root"))  
  .render(  
    <div>
        <AdminSupermarketList/>
    </div>

  );  