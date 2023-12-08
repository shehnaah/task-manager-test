import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import TaskList from '../components/taskmanager/TaskList'
function TaskListPage() {
  return (
    <div>
        			<div className='taskmanager'>
				<div className='taskmanager__left'>
					<Sidebar />
				</div>
				<div className='taskmanager__right mt-5'>
					<div className='taskmanager__tasklist'>
						<TaskList />
					</div>
				</div>
			</div>

      
    </div>
  )
}

export default TaskListPage
