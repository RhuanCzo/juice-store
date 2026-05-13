import styled from "styled-components"
import Juice from "../Images/image.png"
import axios from "axios"

export default function Car ({selected = [], setSelected}) {


    function updateItem(s, action) {
  setSelected(selected.map(item => {
    if (item.id === s.id) {
      if (action === "decrease" && item.qtd > 1)
        return { ...item, qtd: item.qtd - 1 }

      if (action === "increase")
        return { ...item, qtd: item.qtd + 1 }
    }
    return item
  }))
}


    function getTotal () {
        let sum = 0
        for (let s of selected) {
            sum += s.price * s.qtd
        }
        return (sum)
    }
    const cartTotal = getTotal()

    return (
        <>
            <Container>
                <header>
                    <span>carrinho</span>
                    <span>total: R$ {cartTotal}</span>
                </header>
                <CarProducts>
                    {selected.map((s) => (
                    <Product>
                        <img src={Juice}/>
                        <div>
                            <span>{s.name}</span>
                           <button onClick={() => updateItem(s, "decrease")}>-</button> Qtd:{s.qtd} <button onClick={() => updateItem(s, "increase")}>+</button> R$ {s.price}
                        </div>
                    </Product>
                    ))}
                    <button>Finalizar</button>
                </CarProducts>
            </Container>
        </>
    )
}

const Container = styled.div`
width: 400px;
min-height: 500px;
margin-top: 100px;
padding: 30px;
background-color: beige;
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

button {
    width: 10px;
    height: 10px;
}
`