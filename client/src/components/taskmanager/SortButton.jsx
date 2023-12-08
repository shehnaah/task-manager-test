import React from 'react'

function SortButton({ label, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default SortButton
