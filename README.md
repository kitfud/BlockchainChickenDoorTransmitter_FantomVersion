<h1 align="center">The Blockchain Chicken Coop Door Concept</h1>

![diagram](https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/App_Diagram.png)

<a href="https://www.youtube.com/watch?v=GRRlAFD2J1c"><h3 align="center" >Click For YouTube Video Walkthrough </h3></a>

<h1 align="center">This is the Repo for the Transmitter App</h1>

<p>
The purpose of the trasmitter app is to act as an interface for toggling a state change on the <a href="https://ftmscan.com/address/0xD14EcfE4e1E5B7e9Bd1368Bbb3820061cE222133#code">DoorV3.sol</a> contract. Becase of the way the smart contract is built- only the contract owner can call functions on it- this ensures that I am the only one who can operate the coop door however, the code could easily be amended to include more permissions. When this application is paried with the <a href="https://github.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion">Blockchain Door Receiver App</a> it will cause the remote chicken door (picture below) to open or close: 
<p>
  
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/AssembledDoor.jpg" alt="door"/>
</p>

<h1 align="center">Using the Transmitter App</h1>

<h2>1. Navigate to the Toggle Door Route:</h2>

<p>Once at this route you will already be able to see the current status of the blockchain door-as it is recorded on the blockchain. Proceed to click the connect wallet button and data will populate regarding the user's address and account balance. To use this application a user's MetaMask wallet must be connected to the Fantom Opera Mainnet and they must hold some FTM token for paying transaction fees. </p>
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/TransmitterApp/setup1.png" alt="setup1"/>
</p>

<h2>2. Click the "Toggle Door" Button</h2>
<p>The toggle door button will be visible once a user connects their wallet. The button's functionality will only be available to the contract deployer (me)- so that I am the only one who can operate teh chicken coop door on via the web app.</p>
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/TransmitterApp/setup2.png" alt="setup2"/>
</p>

<h2>3. Sign off on Smartcontract Interaction via MetaMask</h2>
<p>Once the 'Toggle Door' button has been clicked a user will need to sign off on the transaction to interact with the smart contract (DoorV3.sol)</p>
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/TransmitterApp/setup3.png" alt="setup3"/>
</p>

<h2>4.When The Spinner Stops The Door Status Will Change</h2>
When the spinner stops then the state of the door has successfully changed between open/close. This recorded state change on the blockchain will eventually be picked up by the Blockchain Receiver app which in turn will handle the triggering of the coop door (hardware). 
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/TransmitterApp/setup4.png" alt="setup4"/>
</p>
