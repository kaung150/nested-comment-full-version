import React, { useState } from 'react'

const CommentForm = ({handleSubmit, submitLabel}) => {
  const [text, setText] = useState('');
  const isTextareaDisabled = text.length === 0;

  const onSubmit = event => {
    event.preventDefault()
    handleSubmit(text);
    setText('');
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea value={text}  className="comment-form-textarea" onChange={(e) => setText(e.target.value)}></textarea>

      <button className="comment-form-button" disabled={isTextareaDisabled}>{submitLabel}</button>

    </form>
  )
}

export default CommentForm
