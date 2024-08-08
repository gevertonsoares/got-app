import { Provider } from "react-redux";
import { AppRoutes } from "./config/routes/AppRoutes";
import { GlobalStyles } from "./config/routes/global/GlobalStyles";
import { store } from "./store";



export default function App() {
  

  return (
    <Provider store = {store}>
      <GlobalStyles />
      <AppRoutes />
    </Provider>
  )
}


