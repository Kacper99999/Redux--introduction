import css from "./App.Bar.module.css"

export const AppBar = () =>{
    return(
        <header className={css.header}>
            <section className={css.section}>
                <h2>Tasks</h2>
            </section>
            <section className={css.section}>
                <h2>Filter by status</h2>
            </section>
        </header>
    )
}