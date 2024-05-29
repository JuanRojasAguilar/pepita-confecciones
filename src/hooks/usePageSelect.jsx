import { useState } from "react"
import ReactForm from "../components/Form";
const usePageSelect = () => {
    const [page, setPage] = useState("");

    const renderPage = () => {
        switch (page) {
            case "form":
                return <ReactForm />
            default:
                break
        }
    }

    return { renderPage, setPage }
}

export default usePageSelect;