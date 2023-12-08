import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './dashboard.scss';
import { useEffect } from 'react';
import { getAllTasks } from '../../redux/taskSlice';
import ListCard from '../../components/taskmanager/ListCard';
import TaskList from '../../components/taskmanager/TaskList';
const Dashboard = () => {
	const tasklist = useSelector((state) => state.task);
	const { AllTasks } = tasklist;
	const user = useSelector((state) => state.auth);
	const { currentUser } = user;

	let pendingTask = [];
	let completedTask = [];
	for (let i = 0; i < AllTasks.length; i++) {
		if (AllTasks[i].status === 'todo') {
			pendingTask.push(AllTasks[i]);
		} else if (AllTasks[i].status === 'done') {
			completedTask.push(AllTasks[i]);
		}
	}

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTasks(currentUser.token, currentUser.id));
	}, [dispatch, currentUser.token, currentUser.id]);

	return (
		<div>
			<div className='dashboard'>
				<div className='dashboard__left'>
					<Sidebar />
				</div>
				<div className='dashboard__right'>
					<div className='dashboard__rightContent'>
						<h2 className='text-success'>Task Status Dashboard</h2>
						<div className='taskcount'>
							<div className='todo box w-25'><h6 className='me-1 mt-1'>Todo </h6> <span className='p-1 text-light' style={{backgroundColor:'red',borderRadius:'100%',width:'20px',height:'30px',fontSize:'15px'}}>{pendingTask.length}</span></div>
							<div className='todo box w-25'><h6 className='me-1 mt-1'>Completed </h6> <span className='p-1 text-light' style={{backgroundColor:'blue',borderRadius:'100%',width:'20px',height:'30px',fontSize:'15px'}}>{completedTask.length}</span></div>

						</div>
						<div className='createButton mb-5'>
							<Link to='/taskmanager' className='btn btn-danger w-25'>
								Create Task
							</Link>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
