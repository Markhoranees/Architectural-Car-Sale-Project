import React from 'react'

const ListItem = ({item}) => {
  return (
    <li key={item.id} className="mb-2">
            <div className="border p-4 rounded">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-lg">{item.price}</p>
            </div>
    </li>
  )
}

export default ListItem
