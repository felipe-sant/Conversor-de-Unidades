import Button from "../components/button"

function Home() {
    return (
        <main>
            <Button 
                text="CALCULAR" 
                onClick={() => console.log("Botão clicado!")}
            />
        </main>
    )
}

export default Home