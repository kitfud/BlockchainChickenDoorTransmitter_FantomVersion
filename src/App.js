
import './App.css';
import { createTheme, ThemeProvider, Container, Card, CardContent} from "@mui/material";
import {Routes, Route,Link, Redirect} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ABI from "./chain-info/abi.json"
import FlowWallet from './components/FlowWallet';
import { useState, createContext } from "react";

export const ContractContext = createContext();

//testnet contract below
//const contractDeploymentAddress = '0x17AE6Db98d462f0F76F68bcd4cC025cc3C4a4F32'

//mainnet contract 
const contractDeploymentAddress= '0xD14EcfE4e1E5B7e9Bd1368Bbb3820061cE222133'

let theme = createTheme({
  palette: {
    primary: {
      main: '#aa2e25',
    },
    secondary: {
      main: '#ffef62',
    },
  },
  typography: {
    fontFamily: "Lato"
  }
});

function App() {

  const flowWalletAddress = contractDeploymentAddress
  const {abi} = ABI
  const contractDetails = {
    address: flowWalletAddress,
    abi: abi
  }

  return (
    <ContractContext.Provider value={contractDetails}>
   <ThemeProvider theme={theme}>
     <Container className="App">

       <Navbar/>
       <Card sx={{height:'80vh',backgroundColor:'gold'}}>
  <CardContent>
  <Routes>
           <Route path="/" element={<Home/>}/> 
           <Route path="flow" element={<FlowWallet/>}/>
  </Routes>
  </CardContent>
      </Card>
      <Footer/>


     </Container>
   </ThemeProvider>
    </ContractContext.Provider>

  );
}

export default App;
