import { Button } from "../components/Button";
import Pages from "./Pages";

export const Landing = () => {
    const Styles = {
        container: `
            h-full
            flex
            items-center
            justify-around
        `,
        textArea: `
            h-40
            w-2/5
            text-white
        `,
        title: `
            leading-normal
            text-7xl
            text-[64px]
        `,
        buttonArea: `
            w-2/5
            flex
            flex-col
            gap-4
        `
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.textArea}>
                <h1 className={Styles.title}>Confecciones Pepita</h1>
            </div>
            <div className={Styles.buttonArea}>
                {Pages.map(page => <Button page={page} key={page.title}/>)}
            </div>
        </div>
    )
}
