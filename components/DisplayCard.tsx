import React from 'react'

interface DisplayCardProp{
  loading?: boolean;
  title: string;
  description: string;
  isSpanTwo?: boolean;
  descColor: string;
}

const DisplayCard = ({loading, title, description, isSpanTwo, descColor}: DisplayCardProp) => {
  return (
    <div className={`border-border border bg-card rounded-xl flex flex-col uppercase items-center py-4 ${isSpanTwo ? "col-span-2" : ""}`}>
      <h1 className='text-lg text-gray font-bold'>{title}</h1>
      <div>
        {

          loading? (
            <div className={`animate-pulse text-xl font-bold ${descColor}`}>loading....</div>
          ) : (
            <p className={`text-xl font-bold ${descColor}`}>{description}</p>
          )
    
        }
      </div>
    
    DisplayCard
    </div>
  )
}

export default DisplayCard