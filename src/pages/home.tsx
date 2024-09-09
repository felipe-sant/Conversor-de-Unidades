import Header from '../components/header'
import Footer from '../components/footer'
import css from '../styles/home.module.css'
import invertArrow from '../assets/invert.svg'
import Button from '../components/button'

function Home() {
    return (
        <>
            <Header />
            <main>
                <div className={css.conteudo}>
                    <select className={css.select}>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select>
                    <hr className={css.hr} />
                    <div className={css.conversor}>
                        <div className={css.input}>
                            <input
                                type="text"
                                placeholder="0.0"
                            />
                            <div className={css.medida}>km</div>
                        </div>
                        <div className={css.invert}>
                            <img
                                src={invertArrow}
                                alt="arrow"
                                onClick={() => alert("dasdsad")}
                            />
                        </div>
                        <div className={css.input + " " + css.locket}>
                            <input
                                type="text"
                                placeholder="0.0"
                            />
                            <div className={css.medida}>m</div>
                        </div>
                        <div className={css.button}>
                            <Button
                                text='CONVERTER'
                                onClick={() => alert("dasdsad")}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home