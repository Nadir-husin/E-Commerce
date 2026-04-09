import { createRoot } from 'react-dom/client'
import AppRoutes from "@routes/AppRoutes"



//redux
import {store , persistor} from "@store/index"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css"
//axios

import "@services/axios-global"


createRoot(document.getElementById('root')!).render(

            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <AppRoutes/>
            </PersistGate>
            </Provider>
)
