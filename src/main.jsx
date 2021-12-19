import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './components/Comment'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
  const data = {
    first: {
      avatar: "https://source.unsplash.com/random/75x75?=portrait",
      author: "Jack",
      message: "Hey there!",
      time: "06:00 PM"
    },
    second: {
      avatar: "https://source.unsplash.com/random/75x75?=portrait",
      author: "Mike",
      message: "Hi!",
      time: "07:00 PM"
    },
    third: {
      avatar: "https://source.unsplash.com/random/75x75?=portrait",
      author: "Argo",
      message: "I am excited to be here",
      time: "08:00 PM"
    },
  }
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <Comment
          avatar={data.first.avatar}
          author={data.first.author}
          message={data.first.message}
          time={data.first.time} 
          />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={ data.second.avatar }
          author={ data.second.author }
          message={ data.second.message }
          time={ data.second.time }
          />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={ data.third.avatar}
          author={ data.third.author }
          message={ data.third.message }
          time={ data.third.time }
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
