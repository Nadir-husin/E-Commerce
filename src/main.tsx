import { createRoot } from 'react-dom/client'
import AppRoutes from "@routes/AppRoutes"


// css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css"



createRoot(document.getElementById('root')!).render(<AppRoutes/>)
