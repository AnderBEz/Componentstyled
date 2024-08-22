// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';
import featuredIcon from '../src/assets/Featured icon.svg'
import closeIcon from '../src/assets/close.svg'
import downloadIcon from '../src/assets/Dowload.svg'
import qrIcon from '../src/assets/Vector.svg'
import linkIcon from '../src/assets/Icon.svg'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(2px);
  background: gray 2%;
  z-index: 0;
`;

const OverlayComponent = styled.div`
  position: relative;
  z-index: 10;
  padding: 2rem;
  background-color: white;
  width: 150%;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  text-align: left;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    display: block;
    background-color: transparent;
  }

  &:hover {
    background-color: #f0f0f0; /* Ejemplo de color de fondo al pasar el mouse */
  }
`;

const QrandClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;


const FocusableDiv = styled.div`
  width: 100%px;
  border: 2px solid gray; /* Borde predeterminado */
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  
  /* Estilos para cuando el div recibe el foco */
  &:focus {
    border-color: purple;
    outline: none; /* Elimina el contorno predeterminado del navegador */
  }
`;

const Buttonblue = styled.button`
  width: 47%;
  background-color: #2f306c;
  color: white; 
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Buttonwhite = styled.button`
  width: 47%;
  background-color: white;
  border: 1px solid gray;
  color: gray;
`;

const Containerbuttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 2rem;
`;

const ContainerQr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #efefef;
`;

const ContainerLink = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: #efefef;
`;

const LinkQr = styled.text`
  display: flex;
  color: #a0a0a0;
`;
//div contenedor
const Content = () => (
  <OverlayComponent>
    <QrandClose>
      <Button>
        <img src={featuredIcon} alt="" />
      </Button>
      <Button>
         <img src={closeIcon} alt="" />
      </Button>   
    </QrandClose>
    <div>
      <p>Copia o descarga el QR</p>
      <p>Ideal para usarse en material POP</p>
    </div>
    <FocusableDiv tabIndex="0">
      <p>Monitoriar QR</p>
      <p>Asigna un nombre y guarda sus resultados</p>
    </FocusableDiv>
    <br />
    <FocusableDiv tabIndex="0">
      <p>No guardar</p>
      <p>Uso simple, no guardara resultados</p>
    </FocusableDiv>
    <br />
    <Containerbuttons>
    <Buttonwhite>
      Cancelar
    </Buttonwhite>
    <Buttonblue>
      Confirmar
    </Buttonblue>
    </Containerbuttons>

  </OverlayComponent>
);

const Secondcontent = () => (
  <OverlayComponent>
    <QrandClose>
      <Button>
        <img src={featuredIcon} alt="" />
      </Button>
      <Button>
         <img src={closeIcon} alt="" />
      </Button>   
    </QrandClose>
    <div>
      <p>Copia o descarga el QR</p>
      <p>Tambien podras utilizar la liga para compartir</p>
    </div>
    <ContainerQr>
      <img src={qrIcon} alt="" />
    </ContainerQr>
    <br />
    <ContainerLink>
      <p>Liga de la solicitud</p>
      <LinkQr>
        <img src={linkIcon} alt="" />
        <p>aqui va el link ya chido hiram se la come</p>
      </LinkQr>
    </ContainerLink>
    <Containerbuttons>
    <Buttonwhite>
      Cerrar
    </Buttonwhite>
    <Buttonblue>
      <img src={downloadIcon} alt="" />
      Descargar
    </Buttonblue>
    </Containerbuttons>

  </OverlayComponent>

);


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Background />
    {/* <Content /> */}
    <Secondcontent />
    </>
  )
}

export default App
