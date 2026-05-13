import styled from "styled-components"
import { Search, User, ShoppingCart } from "lucide-react"

export default function NavBar({setCarOpen, carOpen}) {

    function cartOpen() {
        setCarOpen(!carOpen)
    }
    return (
        <TopBar>
            <h1>Juice</h1>
            <ContainerNavigation>
                <button>Menu</button>
                <button>About</button>
                <button>Our specials</button>
                <button>Our locations</button>
                <button>Blog</button>
            </ContainerNavigation>
            <ContainerUser>
                <div><Search /></div>
                <div onClick={() => cartOpen()}><ShoppingCart />
                </div>
                <div><User /></div>
            </ContainerUser>
        </TopBar>
    )
}

const TopBar = styled.header`
position: fixed;
width: 100%;
height: 100px;
display: flex;
justify-content: space-around;
align-items: center;
`
const ContainerNavigation = styled.div`
width: 40%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;

button {
    background-color:white;
    border: solid 1px white;
    min-width: 70px;
    height: 40px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}

button:hover {
    border: solid 1px gray;
}
`
const ContainerUser = styled.div`
min-width: 10%;
height: 50px;
display: flex;
align-items: center;
justify-content:space-around;

div {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`