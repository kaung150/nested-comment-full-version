import Comments from './comments/Comments';
// eslint-disable-next-line no-unused-vars
import React from 'react';
const App = () => {
  return (
    <div>
      <h1>Hello monster lessons</h1>
      <Comments currentUserId="1" />
    </div>
  )
}

export default App
