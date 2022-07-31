import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import { useState } from 'react';

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT
function App() {
  const [clientMessage,setClientMessage] = useState('')
  const [serverMessage,setServerMessage] = useState('')

  const sendReceiveMessage = async () => {
    const url = `${urlEndpoint}/post-message`
    const resMessage = await fetch(url, {
      Method:"POST",
      Headers: {
        "content-type":"application/json"
      },
      Body:JSON.stringify({clientMessage})
    })
    const resJSON = await resMessage.json()
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
