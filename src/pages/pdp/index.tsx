import React from 'react'

const Pdp:React.FC = () => {

    const suratebi = [1,2,3,4,5];
    const attributeName = [
        "Color",
        "Size",
        "Capacity"


    ]
    const atributes =  [
        {
            "displayValue": "Blue",
            "value": "#030BFF",
            "id": "Blue",
            "__typename": "Attribute"
        },        
        {
            "displayValue": "Extra Large",
            "value": "XL",
            "id": "Extra Large",
            "__typename": "Attribute"
        },
        {
            "displayValue": "256GB",
            "value": "256GB",
            "id": "256GB",
            "__typename": "Attribute"
        },
    ]

  return (
    <div className='pdp grid grid-cols-1 md:grid-cols-12 gap-4 h-[541px] border'>
        <div className='col-span-1 flex flex-col gap-5'>
            {suratebi.map(
                (surati,index) => (
                    <div key={index} className='border h-full flex justify-center items-center'>
                        {surati}
                    </div>
                )
            )}
        </div>
        <div className='col-span-6 flex justify-center items-center border'>
2             
        </div>
        <div className='col-span-5'>
            <h1>Running Shorts</h1>
            <div>
                <h2>SIZE:</h2>
                <div>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
            </div>
            <div>
                <h2>COLOR:</h2>
                
            </div>
        </div>
    </div>
  )
}

export default Pdp
