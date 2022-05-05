import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
      <div className='ui list'>
        <p className='item'>Plan the family</p>
        <p className='item'>Go for shopping for dinner</p>
        <p className='item'>Go for a walk</p>
      </div>
    )
  }
}

export default TodoList;
