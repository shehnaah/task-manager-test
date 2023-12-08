import React from 'react'
import SortButton from './SortButton'
function Sort({onSelect,onSort }) {
  return (
    <div>
<div>
    <span className='fw-bolder' style={{fontSize:'14px'}}>Sort by: </span>
    <select className=' btn btn-outline-success' onChange={(e) => onSort(e.target.value)}>
      <option value="task">Task</option>
      <option value="date">Date</option>
      <option value="status">Status</option>
    </select>
  </div>   </div>
  )
}

export default Sort
