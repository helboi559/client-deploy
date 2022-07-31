import React from 'react'

const HomePage = ({serverMessage,clientMessage,setClientMessage,sendReceiveMessage}) => {
  return (
    <>
        <p>Client -  {clientMessage}</p>
        <input type="text"  onChange={(e) => {
            const currTime = new Date()
            setClientMessage(`Message: ${e.target.value} at time ${currTime}`)
        }} />
        <button onClick={() => {
            sendReceiveMessage()
        }}>Send</button>
        <p>Server -  {serverMessage}</p>
    </>
  )
}

export default HomePage