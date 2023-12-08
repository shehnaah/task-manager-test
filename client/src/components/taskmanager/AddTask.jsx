import { useState } from 'react';
// import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import Sort from './Sort';
const AddTask = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	const [state, setState] = useState({
		task: '',
		description: '', 
		addedDate: '',
		endDate: '', 
  
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask(state.task, currentUser.id,
			state.description,
			state.addedDate,
			state.endDate));
		console.log(state);
		setState({
			task: '',
			description: '',
			addedDate: '',
			endDate: '',
			});
	};

	return (
		<div>
<div className='addtask d-flex flex-row justify-content-evenly mt-5 ms-5 mb-5 ' style={{}}>
    <form onSubmit={handleSubmit} className='d-flex flex-row justify-content-around'>
        <div className="col-md-2 mb-3">
            <div className="form-outline">
                <input
                    type="text"
                    id="firstName"
                    className="form-control  shadow"
                    placeholder='Add your task'
                    name='task'
                    onChange={handleChange}
                    value={state.task}
                />
            </div>
        </div>

        <div className="col-md-2 mb-3">
            <div className="form-outline">
                <input
                    type="text"
                    id="description"
                    className="form-control  shadow"
                    placeholder='Add description'
                    name='description'
                    onChange={handleChange}
                    value={state.description}
                />
            </div>
        </div>

        <div className="col-md-2 mb-3">
            <div className="form-outline">
                <input
                    type="date"
                    id="endDate"
                    className="form-control  shadow"
                    placeholder='End Date'
                    name='endDate'
                    onChange={handleChange}
                    value={state.endDate}
                />
            </div>
        </div>

        <div className="col-md-2 mb-3 ">
            <button className='btn btn-primary'>Add Task</button>
        </div>
<div className='col-md-2'>
    <Sort/>
</div>
    </form>
</div>
		</div>
	);
};

export default AddTask;
