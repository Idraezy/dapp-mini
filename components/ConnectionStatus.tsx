import React from 'react'

interface ConnectionStatusProps{
    walletAddress?: string;
}


const ConnectionStatus = ({walletAddress}: ConnectionStatus) => {
  return (
    <div>ConnectionStatus</div>
  )
}

export default ConnectionStatus