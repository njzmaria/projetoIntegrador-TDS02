import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

import './style/global.css'

export default function App() {
    return (
        <HashRouter>
            <div>
            <Header />
                <Routes>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/cadastro' element={<Cadastro />}/>
                </Routes>
            <Footer />
            </div>
        </HashRouter>
    )
}