import styled from "styled-components"
import { Search, User, ShoppingCart } from "lucide-react"

export default function Home() {
    return (
        <HomeStyled>
            <NavBar>
                <h1>Juice</h1>
                <ContainerNavigation>
                    <button>Menu</button>
                    <button>About</button>
                    <button>Our specials</button>
                    <button>Our locations</button>
                    <button>Blog</button>
                </ContainerNavigation>
                <ContainerUser>
                    <button><Search /></button>
                    <button><ShoppingCart /></button>
                    <button><User /></button>
                </ContainerUser>
            </NavBar>
        </HomeStyled>
    )
}

const HomeStyled = styled.main`
position: absolute;
width: 100%;
height: 100%;
`
const NavBar = styled.header`
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
    transform: scale(1.05);
}
`
const ContainerUser = styled.div`
width: 10%;
height: 50px;
display: flex;
align-items: center;
justify-content:space-around ;

button {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`