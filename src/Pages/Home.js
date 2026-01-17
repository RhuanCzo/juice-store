import styled from "styled-components"
import Juice from "../Images/image.png"
import { ShoppingCart } from "lucide-react"
import Car from "../Components/Car"
import NavBar from "../Components/NavBar.js"
import { useState } from "react"

const products = [
    { id: 1, name: 'Juice 1', price: 105.36, volume: '300 ml' },
    { id: 2, name: 'Juice 2', price: 105.36, volume: '300 ml' },
];

export default function Home() {
    const [selected, setSelected] = useState([{id: 2, name: 'Juice 2', price: 105.36, volume: '300 ml'}])

    function addToCart(product) {
        setSelected([...selected, product])
    }

    return (
        <HomeStyled>
            <NavBar />
                <Car
                    selected={selected}
                />
            <ContainerContent>
                <ContainerAd>
                    <header>
                        Faster juice delivery service
                    </header>
                    <Title>
                        Juice to make your day Fresh
                    </Title>
                    <Descrição>
                        Stay cool this summer as fruit jucies and Drinks are available online.
                    </Descrição>
                    <Interativos>
                        <Cart><ShoppingCart color="white" /></Cart>
                        <AddToCart>ADD TO CART</AddToCart>
                        <HowItWorks>HOW IT WORKS</HowItWorks>
                    </Interativos>
                </ContainerAd>
                <Img src={Juice}></Img>
                <Info>
                    <div>
                        <span>Details</span>
                        <h1>$105.36</h1>
                    </div>
                    <h3>300 ml</h3>
                </Info>
                <ContainerProducts>
                    <h1>Best Juice</h1>
                    <Products>
                        {products.map((p) => (
                            <Product key={p.id} onClick={() => addToCart(p)}>
                                <img src={Juice}></img>
                                <div>
                                    <span>Details</span>
                                    <h1>R${p.price}</h1>
                                    <h3>{p.volume}</h3>
                                </div>
                            </Product>
                        ))}
                    </Products>
                </ContainerProducts>
            </ContainerContent>
        </HomeStyled>
    )
}

const HomeStyled = styled.main`
position: absolute;
width: 100%;
height: 100%;
`
const ContainerContent = styled.div`
padding-top: 100px;
width: 100%;
height: 70%;
display: flex;
flex-wrap: wrap;
`
const ContainerAd = styled.div`
padding-top: 2%;
width: 38%;
height: 80%;
margin-left: 150px;
display: flex;
flex-direction: column;
justify-content: space-around;

header {
    width: 35%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: beige;
    font-size: 20px;
}
`
const Img = styled.img`
width: 500px;
height: 500px;
border-radius: 30px;
`

const Info = styled.div`
font-size: 20px;
width: 180px;
height: 200px;
margin-left: 100px;
margin-top:100px;
background-color: beige;
border-radius: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:40px;

h1 {
    font-size: 30px;
}
`
const ContainerProducts = styled.div`
width: 80%;
height: 300px;
margin-left: 150px;
padding-top: 50px;
`
const Products = styled.div`
width: 100%;
height: 100%;
padding-top: 30px;
display: flex;
gap: 50px;
`
const Product = styled.div`
font-size: 20px;
width: 350px;
height: 240px;
background-color: beige;
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;

h1 {
    font-size: 30px;
}
img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
}
`

const Title = styled.span`
font-size: 90px;
`
const Descrição = styled.span`
font-size: 20px;
color: gray;
`
const Interativos = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
gap: 20px;
`
const AddToCart = styled.button`
color: white;
border: none;
background-color: orange;
width: 30%;
height: 50px;
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
`
const HowItWorks = styled.button`
border-color: orange;
color: orange;
width: 30%;
height: 50px;
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
`
const Cart = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: orange;
`
