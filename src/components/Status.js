import React from 'react'

const Status = () => {
  return (
    <div>
        <details className='detail'>
            <summary>Status</summary>
            <div>
                <button>Alive</button>
                <button>Dead</button>
                <button>Unknown</button>
            </div>
        </details>
    </div>
  )
}

export default Status;