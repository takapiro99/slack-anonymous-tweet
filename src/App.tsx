import React, { useState, FormEvent } from 'react'

import M from 'materialize-css'

const App = () => {
  const [text, setText] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    window.M.toast({ html: '送信しました！', classes: 'green rounded' })
    setSubmitting(false)
  }

  return (
    <div className='App blue lighten-5' style={{ minHeight: '100vh' }}>
      <nav>
        <div className='nav-wrapper indigo'>
          <span className='brand-logo center'>&#x1f423;</span>
        </div>
      </nav>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input type='text' />
          <button
            className='btn waves-effect waves-light indigo'
            type='submit'
            name='action'
          >
            送信
            <i className='material-icons right'>send</i>
          </button>
          <div
            className={`preloader-wrapper small ${isSubmitting && 'active'}`}
          >
            <div className='spinner-layer spinner-green-only'>
              <div className='circle-clipper left'>
                <div className='circle'></div>
              </div>
              <div className='gap-patch'>
                <div className='circle'></div>
              </div>
              <div className='circle-clipper right'>
                <div className='circle'></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
