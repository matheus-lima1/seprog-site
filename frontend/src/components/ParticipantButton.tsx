import React from 'react'

interface IProps {
    imgUrl: string;
    name: string;
    content: string;
};

const ParticipantButton = ({imgUrl, name, content}: IProps) => {
  return (
    <div className='p-3 bg-blue-light rounded-2xl'>
        <div className='flex items-center p-4 gap-9 bg-white rounded-2xl'>
            <picture>
                <img className='rounded-xl border-2 border-blue-light w-16' 
                     src={imgUrl}
                     alt="Logo da byron" />
            </picture>

            <div className="flex flex-col items-start text-black">
                <span className='font-bold'>{name}</span>
                <span>{content}</span>
            </div>

            <button className='hover:scale-105 transition-all'>
                <picture>
                    <img className='w-12' src="img/arrow-bottom.png" alt="Seta para baixo" />
                </picture>
            </button>
        </div>
    </div>
  )
}

export default ParticipantButton