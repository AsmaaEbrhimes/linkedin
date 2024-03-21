import Header from "./Components/Header/Header"
import Content from "./Components/ContentPage/Content"
import { Routes, Route } from 'react-router-dom'
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Content />
                    </>
                } />
            </Routes>

        </>
    )
}

export default App;
