import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const user = { email, password }
    const userRegister = { email: registerEmail, password: registerPassword }

    async function login(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:4000/sign-in", user)
            navigate("/")
        } catch (err) {
            console.log(err.message)
        }
    }

    async function register(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:4000/sign-up", userRegister)
            console.log("registro feito com sucesso")
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <ContainerForms>
            <form onSubmit={login}>
                <div>
                    Ja sou cliente
                    <input required type="email" onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                    <input required type="password" onChange={e => setPassword(e.target.value)} placeholder="senha"></input>
                    <button type="submit">Entrar</button>
                </div>
            </form>
            <form onSubmit={register}>
                <div>
                    Criar conta
                    <input required type="email" onChange={e => setRegisterEmail(e.target.value)} placeholder="email"></input>
                    <input required type="password" onChange={e => setRegisterPassword(e.target.value)} placeholder="senha"></input>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </ContainerForms>
    )
}
const ContainerForms = styled.div`
width: 100%;
height: 100dvh;
border-radius: 30px;
padding: 30px;
display: flex;
gap: 50px;
justify-content: center;
align-items: center;

div {
    width: 400px;
    height: 400px;
    border-radius: 30px;
    padding: 30px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: orange;
}

input, button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid gray;
}
`