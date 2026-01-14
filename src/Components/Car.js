import styled from "styled-components"
import Juice from "../Images/image.png"

export default function Car () {
    return (
        <>
            <Container>
                <header>
                    <span>carrinho</span>
                    <span>total: R$ 240,00</span>
                </header>
                <CarProducts>
                    <Product>
                        <img src={Juice}/>
                        <div>
                            <span>Suquin de laranjinha</span>
                            Qtd: 1 R$ 100,00
                        </div>
                    </Product>
                    <Product>
                        <img src={Juice}/>
                        <div>
                            <span>Suquin de laranjinha</span>
                            Qtd: 1 R$ 100,00
                        </div>
                    </Product>
                    <button>Finalizar</button>
                </CarProducts>
            </Container>
        </>
    )
}

const Container = styled.div`
width: 400px;
height: 500px;
margin-top: 100px;
padding: 30px;
background-color: aqua;
position: absolute;
right: 0;
font-size: 20px;

header {
    background-color: beige;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
`
const CarProducts = styled.div`
width: 100%;
max-height: 80%;
padding-top: 20px;

button {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const Product = styled.div`
width: 100%;
height: 100px;
border-radius: 30px;
margin-top: 10px;
background-color: white;
display: flex;

div {
    display: flex;
    flex-direction: column;
}
`