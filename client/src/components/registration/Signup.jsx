import './registration.scss';
import '../../styles/components/_button.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice';
import { Link } from 'react-router-dom';
const Signup = () => {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		email: '',
		password: '',
		username: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			register({
				username: state.username,
				password: state.password,
				email: state.email,
			})
		);
	};
	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	console.log(state.email, state.password, state.username);
	return (
<div style={{backgroundColor:'#ccddff',height:'100vh'}}>
	<div className='row '>
		<div className="col-lg-3 "></div>
				<div className='signup-form col-lg-6 ' >
					<div className='d-flex justify-content-around align-items-center border rounded shadow p-5 mt-5 ' style={{backgroundColor:'#e6eeff'}}>
						<div className='col-lg-6 d-flex justify-content-around me-3'>
							<img src="https://t3.ftcdn.net/jpg/01/22/71/96/360_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg" alt="" style={{borderRadius:'20px'}}/>
						</div>
						<form className='form col-lg-6 ms-3'>
							<h4 className='text-primary'>Sign In to Task Manager</h4>
							<div class="mb-3">
		    <label for="exampleInputEmail1" class="form-label ">Username</label>
		    <input type="text" class="form-control" id="username"  aria-describedby="emailHelp" name='username' value={state.username} onChange={handleChange}/>
		  </div>

							<div class="mb-3">
		    <label for="exampleInputEmail1" class="form-label ">Email address</label>
		    <input type="email" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" name='email' value={state.email} onChange={handleChange}/>
		    <div id="emailHelp" class="form-text"></div>
		  </div>
		  <div class="mb-3">
		    <label for="exampleInputEmail1" class="form-label">Password</label>
		    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='password' value={state.password} onChange={handleChange}/>
		    <div id="emailHelp" class="form-text"></div>
		  </div>
		
							
							<div className='form-group'>
								<button className='btn btn-primary' onClick={handleSubmit}>Register</button>
							</div>
							<Link to={'/signin'}><h6 className='mt-3 text-primary'>Already have an account? <span className='underline'>Login here</span></h6></Link>
						</form>

					</div>
				</div>
		<div className="col-lg-6"></div>
	</div>	
	
</div>);
	
};

export default Signup;
