import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Comment from './components/Comment/Comment';
import CommentCreator from './components/CommentCreator/CommentCreator';

function App() {

  const deleteHandler = () => {
    console.log('Comment Deleted');
  }

  const replyHandler = () => {
    console.log('Comment replied');
  }

  const createComment = (message, ) => {

  }

  const commentBox = {
    display: 'block',
    padding: '10px',
    border: '2px #3f3f3f solid',
    boxSizing: 'border-box',
    margin: '10px 0'
  }

  
  const [commentState, setCommentState] = useState(
    {
      comments: [
        { id: 1,
          message: "Wow great video!",
        delete: deleteHandler,
        timeStamp: '01-02-2005',
        reply: replyHandler,
        children: []
      }]
    })

  const comments = commentState.comments.map((commentObj) => 
    <Comment
    key={commentObj.id} 
    message={commentObj.message} 
    delete={commentObj.delete} 
    timeStamp={commentObj.timeStamp}
    style={commentBox}></Comment>
  );


  return (
    <div>
      <h1>Comment Test</h1>
      <CommentCreator></CommentCreator>
      {comments}
    </div>
  );
}

export default App;
