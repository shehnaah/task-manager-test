// TaskEditForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../../redux/taskSlice';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const dispatch = useDispatch();
  const [updatedData, setUpdatedData] = useState({
    task: '',
    description: '',
    endDate: '',
  });
  const navigate = useNavigate()
  const { taskId } = useParams();
  const location = useLocation();
  const initialData = location.state?.initialData || {};

  useEffect(() => {
    // Set initial data when component mounts
    setUpdatedData(initialData);
  }, [initialData]);

  const handleEdit = () => {
    dispatch(editTask(taskId, updatedData));
navigate('/taskmanager')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3 className='text-center text-primary mt-3'>Edit your Task</h3>
      <div className='row'>
        <div className="col-lg-4"></div>
        <form className='col-lg-4 d-flex flex-column justify-content-center p-5 mt-5 card rounded shadow'>
          <div className=" mb-3">
            <div className="form-outline">
              <input
                type="text"
                id="task"
                className="form-control  shadow"
                placeholder='Edit your task'
                name='task'
                value={updatedData.task}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className=" mb-3">
            <div className="form-outline">
              <input
                type="text"
                id="description"
                className="form-control  shadow"
                placeholder='Add description'
                name='description'
                value={updatedData.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className=" mb-3">
            <div className="form-outline">
              <input
                type="date"
                id="endDate"
                className="form-control  shadow"
                placeholder='End Date'
                name='endDate'
                value={updatedData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="text-center mb-3">
            <button className='btn btn-primary' onClick={handleEdit}>Edit Task</button>
          </div>
        </form>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default EditTask;
