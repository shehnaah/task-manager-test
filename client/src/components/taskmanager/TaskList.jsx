import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/taskSlice';
import ListCard from './ListCard';
import './tasklist.scss';

const TaskList = () => {
	const auth = useSelector((state) => state.auth);
	const tasks = useSelector((state) => state.task);

	const { currentUser } = auth;
	const { AllTasks} = tasks;
	// const { AllTasks, currentPage, totalPages } = useSelector((state) => state.task);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTasks(currentUser.token, currentUser.id));
	}, [dispatch, currentUser.token, currentUser.id]);
	  
	//   const handlePageChange = (page) => {
	// 	dispatch(getAllTasks({ token: currentUser.token, userId: currentUser.id, page, pageSize: 5 }));
	// 	console.log();
	//   };
	  
	return (
		<div>
			<ul className='list-header bg-primary'>
				{/* <li>
					<h5>Id</h5>
				</li> */}
				<li>
					<h5>Task Name</h5>
				</li>
				<li>
					<h5>Deadline</h5>
				</li>

				<li>
					<h5>Status</h5>
				</li>
				<li>
					<h5>Action</h5>
				</li>
			</ul>
			{Object.values(AllTasks).map((item) => {
				return <ListCard key={item._id} item={item} />;
			})}

{/* <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div> */}
		</div>
	);
};

export default TaskList;
