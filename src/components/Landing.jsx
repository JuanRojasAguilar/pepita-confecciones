import usePageSelect from "../hooks/usePageSelect";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactForm from "./Form";

export const Landing = () => {
    const { renderPage, setPage } = usePageSelect();

    const buttonClick = () => {
        setPage("form")
    }

    const Styles = {
        title: `
            text-3xl
            font-bold
            text-red-600
        `,
        button: `
            rounded
            bg-indigo-200 
            w-24
            h-8
        `
    }

    return (
        <div>
            <h1 className={Styles.title}>Confecciones Pepita</h1>
            <p>Donde la confeccion se junta con la pasion</p>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/inv" element={<ReactForm />} />
                    </Routes>
                </BrowserRouter>
                <button
                    className={Styles.button}
                >
                    <a to="/inv">
                        botoncito

                    </a>
                </button>
            </div>
        </div>
    )
}