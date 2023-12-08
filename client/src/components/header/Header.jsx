import './header.scss';
import '../../styles/components/_button.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';
import history from '../../history';

const Header = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(logoutSuccess());
		localStorage.removeItem('auth');
		history.push('/signin');
		window.location.reload();
	};
	return (
		<div>
			<nav className='header' style={{backgroundColor:'#e6e6ff',height:'90px'}}>
				<div className=''>
					<h5 className='text-primary'><i class="fa-brands fa-stack-overflow fa-bounce fs-2 me-1" style={{overflow:'hidden'}}></i><i><b>Task Manager</b></i></h5>
				</div>
				<div className='header__buttons'>
					{auth.currentUser && auth.currentUser.token ? (
						<Link to='/signin' className='button' onClick={handleClick}>
							SignOut
						</Link>
					) : (
						<>
							<Link to='/signin' className='button'>
								Login
							</Link>
						</>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Header;
