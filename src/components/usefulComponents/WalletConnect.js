import React, { useState, useEffect,useContext,createContext } from 'react';
import {  Button, CircularProgress, Box,  Typography, Card, CardContent} from "@mui/material"
import { ethers } from 'ethers'
import { ContractContext } from '../../App';

export const WalletContext = createContext();

const WalletConnect = ({
    contract,
    defaultAccount,
    setDefaultAccount,
    walletBalance,
    setWalletBalance,
    setSigner,
    setContract,
    provider,
    setProvider,
}) => {

    const contractinfo = useContext(ContractContext);
    const abi = contractinfo.abi
    const address = contractinfo.address

    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [accountchanging, setAccountChanging] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null);
    const [connectButtonColor, setConnectButtonColor] = useState("primary")
    const [processing, setProcessing] = useState(false)
    const [doorStatus,setDoorStatus] = useState(null)
    const [data, setTxData] = useState(null)

 
    useEffect(()=>{
    setContract(new ethers.Contract(address,abi,provider))
    },[])


    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log("CONNECTING TO WALLET")
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
    
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected');
                    setConnectButtonColor("success")
    
                })
                .catch(error => {
                    setErrorMessage(error.message);
    
                });
    
        } else {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }
    
    const accountChangedHandler = (newAccount) => {
        if (!accountchanging) {
            setAccountChanging(true)
            setDefaultAccount(checkAccountType(newAccount));
            updateEthers();
        }
    
    }
    
    const checkAccountType = (newAccount) => {
        if (Array.isArray(newAccount)) {
            return newAccount[0].toString()
        }
        else {
            return newAccount
        }
    }
    
    const updateEthers = async () => {
        let tempProvider = await new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);
    
        let tempSigner = await tempProvider.getSigner();
        setSigner(tempSigner);
    
        let tempContract = await new ethers.Contract(address, abi, tempSigner);
        setContract(tempContract);
    
    }

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }

    const getWalletBalance = async (provider) => {
        // Look up the balance
        if (provider !== null && !processing && defaultAccount !== null) {
            let balance = await provider.getBalance(defaultAccount);
            setWalletBalance(ethers.utils.formatEther(balance))
        }

    }


    const getDoorStatus = async()=>{
        console.log("Door Status being checked...")
        let status = await contract.getDoorStatus()
        setDoorStatus(status)
    }

    const toggleDoor = async ()=>{
        setErrorMessage(null)
        try{
        setProcessing(true)
        console.log("toggleDoor")
        await contract.toggleDoor()
  
        }
        catch(error){
            setProcessing(false)
            console.log(error.message)
        }
    }


    useEffect(() => {

        getWalletBalance(provider)
      
        if(contract){
        getDoorStatus()
        }
    }, [provider,walletBalance])


    useEffect(() => {
        if (accountchanging === false) {
            // listen for account changes
            window.ethereum.on('accountsChanged', accountChangedHandler);
            window.ethereum.on('chainChanged', chainChangedHandler);
        }
        else {
            window.ethereum.removeListener('accountsChanged', accountChangedHandler);
            window.ethereum.removeListener('chainChanged', chainChangedHandler);
        }

    }, [accountchanging])




    useEffect(()=>{
        console.log("DATA Recieved")
    if(provider && contract){
      getDoorStatus()
      //checkBalance() 
    } 
   
        
    },[data])



    useEffect(()=>{
        if (contract && provider){
      contract.on("DoorTriggered",(status,event)=>{
      let data = {
        status: status.toString(),
        event:event
      }
      console.log(data.status)
      setTxData(data.status)
      setProcessing(false)
    //   contract.removeListener("DoorTriggered",(status,event))

 
      })
      //to have a dynamic check on the contract for door status change
      setInterval(getDoorStatus,1000);
      }},[contract])

  useEffect(()=>{
    console.log("Door Status has been set to ",doorStatus)
    setProcessing(false)
  },[doorStatus])

  return (
      <>
     
    <Box>
    <Button onClick={connectWalletHandler} color={connectButtonColor} variant="contained" sx={{ margin: 2 }}>{connButtonText}</Button>
    </Box>

    {
                defaultAccount ? (

                    <>
                        
                        <Card variant="outlined" sx={{ display: 'inline-block', backgroundColor: "lightgreen" }}>
                            <CardContent>
                                <Typography variant="h3" sx={{ fontSize: 15 }}>Address: {defaultAccount}</Typography>
                                <Typography variant="h3" sx={{ fontSize: 15 }}>Wallet Balance: {walletBalance}</Typography>
                      
                            </CardContent>
                        </Card>
                        
                       

                    </>

                ) :
                    (
                        <Typography>
                            {errorMessage}
                        </Typography>
                    )
            }
           
            <Card>
            <Box>
                Door Status:
               {
                doorStatus==0?(
                    ("Open")
                ):(
                  ("Closed")
                )
               }
            </Box>
            </Card>

         
             {
                
                contract && defaultAccount?(
                    !processing?
                    <>
                    <Box sx={{marginTop:'20px'}}>
                    <Button onClick={toggleDoor} variant="contained" sx={{backgroundColor:"purple"}}>Toggle Door</Button>
                    </Box>
                    
                    </>:<Box sx={{marginTop:'20px'}}>
                        <CircularProgress></CircularProgress>
                        <Typography>Processing...please wait.</Typography>
                    </Box>
                ):null
             }
             {errorMessage} 
      </>

    
  )
}

export default WalletConnect