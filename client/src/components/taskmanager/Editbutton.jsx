import React from 'react'
import { useNavigate } from 'react-router-dom'

function Editbutton({taskId,initialData}) {
    const navigate = useNavigate()
    const handleEditClick = () => {
        // Navigate to the '/edittask' route with taskId and initialData as props
        navigate(`/edittask/${taskId}`, { state: { initialData } });
      };
      return (
    <div>
      <div className='btn text-success' onClick={handleEditClick}>
      <i class="fa-solid fa-pen-to-square"></i>

      </div>
    </div>
  )
}

export default Editbutton
