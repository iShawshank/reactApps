

const Actions = ({direction, handleMove}) => {
  return (
    <div className='actions flex column'>
      <button onClick={() => handleMove('right')}>&gt;&gt;</button>
      <button onClick={() => handleMove('left')}>&lt;&lt;</button>
    </div>
  )
}

export default Actions