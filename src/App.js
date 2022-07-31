import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import { useState } from 'react';

const serverEndpoint = process.env.REACT_APP_URL_ENDPOINT
// REACT_APP_URL_ENDPOINT = https://server-deploy123.herokuapp.com
// REACT_APP_URL_ENDPOINT= http://localhost:4000
function App() {
  const [clientMessage,setClientMessage] = useState('')
  const [serverMessage,setServerMessage] = useState('')
  // console.log(serverEndpoint)
  const sendReceiveMessage = async () => {
    const url = `${serverEndpoint}/post-message`
    const resMessage = await fetch(url, {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({clientMessage})
    })
    const resJSON = await resMessage.json()
    // console.log(resJSON.message)
    setServerMessage(resJSON.serverMessage)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route index element={<HomePage clientMessage={clientMessage} setClientMessage={setClientMessage} serverMessage={serverMessage} sendReceiveMessage={sendReceiveMessage}/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
