import React from 'react'

interface IProps{
    start: boolean;
}
const CallButton = ({start}: IProps) => {
  return (
    <button className="flex items-center justify-center gap-4 bg-yellow rounded-xl text-xl shadow py-5 px-8 hover:scale-105 transition-all focus:scale-105 focus:outline-none" style={{alignSelf: start?"start":"unset"}}>
    <picture>
      <img className="w-6" src="img/mao.png" alt="ícone de uma mão clicando" />   
    </picture>
    Garanta já sua vaga
    </button>
  )
}

export default CallButton