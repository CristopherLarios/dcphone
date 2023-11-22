import Login from "./Pages/Login"
import Menu from "./Pages/Menu"
import GestionInventario from "./Pages/GestionInventario"
import { DataProvider } from "./Context/DataContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { gestionInventario, login, menu } from './Routes/Patch'
import PublicRoutes from "./Routes/PublicRoutes"
import PrivateRoutes from "./Routes/PrivateRoutes"


const Roles =[
  'Admin',
  'Sales'
]

function App() {

  return (
    <div>
      <DataProvider>
        <BrowserRouter>
          <Routes>


            <Route path="/" element={<PublicRoutes />}>
              <Route index path={login} element={<Login />} />
            </Route>

            <Route path="/" element={<PrivateRoutes allowroled={[
              Roles[0],
              Roles[1]
            ]}/>}>
              <Route index path={menu} element={<Menu/>}/>
            </Route>

            <Route path="/" element={<PrivateRoutes allowroled={[
              Roles[0]
            ]}/>}>
              <Route index path={gestionInventario} element={<GestionInventario/>}/>
            </Route>
            
            

          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  )
}

export default App
