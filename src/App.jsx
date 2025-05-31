import { useState, useEffect } from "react"
import Perfil from "./components/Perfil/Perfil"
import "./app.scss"

export default function App() {
  const [ usuario, setUsuario ] = useState(null)
  const [ carregando, setCarregando ] = useState(true)
  const [ erro, setErro ] = useState(false)
   

  useEffect(() => {
    setTimeout(() => {
      const sucesso = true
      if (sucesso) {
        setUsuario({
          nome: "Julia Cabral",
          foto: 'https://plus.unsplash.com/premium_photo-1679865372194-11f7d6bf8839?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBicmF6aWxpYW58ZW58MHx8MHx8fDA%3D',
          cargo: 'Desenvolvedora Front-End',
          localizacao: 'São Paulo, SP',
          bio: 'Apaixonada por tecnologia, React e café ☕.',
        })
      } else {
        setErro(true)
      }
      setCarregando(false)
    }, 2000);

  }, [])

  const handleSeguir = () => alert("Você está seguindo Julia!")
  const handleMensagem = () => alert("Mensagem enviada para Julia!")

  return (
    <div className="app" >
      <Perfil 
        {...usuario}
        carregando={carregando}
        erro={erro}
        onSeguir={handleSeguir}
        onMensagem={handleMensagem}
      />
    </div>
  )
}
