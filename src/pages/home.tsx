import Header from '../components/header'
import Footer from '../components/footer'
import css from '../styles/home.module.css'
import invertArrow from '../assets/invert.svg'
import Button from '../components/button'
import { useState } from 'react'

function Home() {
    const [tipoDeConversao, setTipoDeConversao] = useState('comprimento')
    const [valor1, setValor1] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [medida1, setMedida1] = useState('km')
    const [medida2, setMedida2] = useState('m')
    const [isInvertido, setIsInvertido] = useState(false)

    const limparCampos = () => {
        setValor1(0)
        setResultado(0)
    }

    const inverterMedida = () => {
        const aux = medida1
        setMedida1(medida2)
        setMedida2(aux)
        setIsInvertido(!isInvertido)
        limparCampos()
    }

    const converter = () => {
        switch (tipoDeConversao) {
            case "comprimento":
                if (medida1 === 'km') {
                    setResultado(valor1 * 1000)
                } else {
                    setResultado(valor1 / 1000)
                }
                break
            case "peso":
                if (medida1 === 'kg') {
                    setResultado(valor1 * 1000)
                } else {
                    setResultado(valor1 / 1000)
                }
                break
            case "temperatura":
                if (medida1 === '°C') {
                    setResultado((valor1 * 9 / 5) + 32)
                } else {
                    setResultado((valor1 - 32) * 5 / 9)
                }
                break
        }
    }

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoDeConversao(event.target.value)
        switch (event.target.value) {
            case 'comprimento':
                setMedida1('km')
                setMedida2('m')
                if (isInvertido) inverterMedida()
                break
            case 'peso':
                setMedida1('kg')
                setMedida2('g')
                if (isInvertido) inverterMedida()
                break
            case 'temperatura':
                setMedida1('°C')
                setMedida2('°F')
                if (isInvertido) inverterMedida()
                break
        }
        limparCampos()
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setValor1(0)
        } else {
            setValor1(parseFloat(event.target.value))
        }
    }

    return (
        <>
            <Header />
            <main>
                <div className={css.conteudo}>
                    <select className={css.select} onChange={handleSelect}>
                        <option value="comprimento">Comprimento</option>
                        <option value="peso">Peso</option>
                        <option value="temperatura">Temperatura</option>
                    </select>
                    <hr className={css.hr} />
                    <div className={css.conversor}>
                        <div className={css.input}>
                            <input
                                type="number"
                                placeholder="0.0"
                                value={valor1}
                                onChange={handleInput}
                            />
                            <div className={css.medida}>{medida1}</div>
                        </div>
                        <div className={css.invert}>
                            <img
                                src={invertArrow}
                                alt="arrow"
                                onClick={inverterMedida}
                            />
                        </div>
                        <div className={css.input + " " + css.locket}>
                            <input
                                type="text"
                                placeholder="0.0"
                                value={resultado}
                                disabled
                            />
                            <div className={css.medida}>{medida2}</div>
                        </div>
                        <div className={css.button}>
                            <Button
                                text='CONVERTER'
                                onClick={converter}
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