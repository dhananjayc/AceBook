import "../src/Assets/common.css"
import Layout from "./Layout";
import routes from "./routes"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ErrorHandlerProvider from "./Providers/ErrorHandlerProvider";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ErrorHandlerProvider>
          <BrowserRouter>
            <Routes>
              {routes?.map((e, index)=>
                e.route==="common" ? <Route
                key={`route-key-${index}-${e.path}`}
                exact 
                path={e.path}
                element={<Layout component={<e.component/>}/>}
              />:
              <Route
                key={`route-keys-${index}-${e.path}`}
                exact 
                path={e.path}
                element={<e.component/>}
              />
              )}
            </Routes>
          </BrowserRouter>
        </ErrorHandlerProvider>
      </Provider>
    </div>
  );
}

export default App;
