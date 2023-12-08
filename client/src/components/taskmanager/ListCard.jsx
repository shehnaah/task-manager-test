/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './listcard.scss';
import { arrowClick, deleteItem } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sort from './Sort';
import Editbutton from './Editbutton';
const ListCard = (items) => {
  const { tasks } = useSelector((state) => state);
  const { item } = items;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);
  const [sortCriteria, setSortCriteria] = useState('task')
  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string));
  };
  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };

  const handleEdit = () => {
    navigate('/edittask');
  };

  const inputDate = new Date(item.endDate);
  const formattedDate = inputDate.toLocaleDateString('en-US', {
    day: 'numeric',
    weekday: 'short',
    month: 'short',
    year: 'numeric',
  });
  const taskId = item._id // Replace with the actual task ID
  const initialData = {
    task: item.task,
    description: item.description,
    endDate: item.endDate
  };
  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };
//   const handleSort = (criteria) => {
//     setSortCriteria(criteria);
//   };
//   const sortedTasks = Array.isArray(tasks) ? tasks.slice() : [];
// sortedTasks.sort((a, b) => {
//     if (sortCriteria === 'date') {
//       return new Date(a.endDate) - new Date(b.endDate);
//     } else if (sortCriteria === 'status') {
//       return a.status.localeCompare(b.status);
//     } else {
//       return a.task.localeCompare(b.task);
//     }
//   });
  return (
    <div>

      <ul  className={` ${item.status === 'done' ? 'completed menu' : 'menu'}`} >
        <li className=''>
          <p onClick={toggleCollapse}>{item.task}</p>
		  {/* <p>{item.description}</p> */}
        </li>
        <li>
          <p>{formattedDate}</p>
        </li>
        <li>
          <p>{item.status}</p>
        </li>
        <li>
          <div className='btn btn-primary me-2 ' style={{ width: '10px' }} disabled={item.status === 'backlog'} onClick={() => ArrowClick('left')}>
            <i class="fa-solid fa-caret-left"></i>
          </div>
          <div className='btn btn-primary' style={{ width: '10px' }} disabled={item.status === 'done'} onClick={() => ArrowClick('right')}>
            <i class="fa-solid fa-caret-right"></i>
          </div>
          <div className='btn text-success'>
            <Editbutton taskId={taskId} initialData={initialData}/>
          </div>
          
          <div className='btn text-danger' onClick={handleDelete}>
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </li>
      </ul>
      {/* Collapse content */}
      {!isCollapsed && (
        <div className="collapse-content ms-5 text-center justify-content-center card  w-50 d-flex shadow" style={{width:'90px'}}>
          <h6>{item.description}</h6>
        </div>
      )}
    </div>
  );
};

export default ListCard;
