// import './Sidebar.scss';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';

const Sidebar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	const handleClick = (e) => {
		e.preventDefault();
		navigate('/tasklist')
	};


	return (
		<div>
<div className='d-flex flex-row text-center mt-2 bg-primary text-light'>
								<i class="fa-solid fa-circle-user fs-3 mt-2 me-1 ms-5 "></i><h5>{currentUser.username}</h5>
	
</div>
			<ul className='sidebar mt-2 p-2' style={{backgroundColor:'#ccddff',height:'80vh'}}>
				<li className='list-item mt-3 btn btn-success w-100' >
					<Link to='/dashboard'>Dashboard</Link>
				</li>
				<li className='list-item   mt-2' >
					<button className='btn btn-primary w-100' onClick={handleClick}>Task List</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
