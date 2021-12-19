import React from 'react'

const Comment = props => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img
                    src={ props.avatar }
                    alt='avatar'
                />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    { props.author }
                </a>
                <div className='metadata'>
                    <span className='date'>Today at { props.time }</span>
                </div>
                <div className='text'>{ props.message }</div>
            </div>
        </div>        
    )
}

export default Comment
