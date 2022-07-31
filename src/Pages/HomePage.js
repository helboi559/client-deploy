import React from 'react'

const HomePage = (props) => {
  const {serverMessage,clientMessage,setClientMessage,sendReceiveMessage} = props
  return (
    <>
        <p>Client -  {clientMessage}</p>
        <p>Server - {serverMessage}</p>
        <input type="text"  onChange={(e) => {
            const currTime = new Date()
            setClientMessage(`Message: ${e.target.value} at time ${currTime}`)
        }} />
        <button onClick={async () => {
            sendReceiveMessage()
        }}>Send</button>
        
    </>
  )
}

export default HomePage