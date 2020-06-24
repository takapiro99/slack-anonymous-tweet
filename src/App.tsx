import React, { useState, FormEvent, ChangeEvent } from 'react'
import axios from 'axios'
import M from 'materialize-css'

const webhookURL: string = process.env.REACT_APP_SLACK_WEBHOOK || ''

const App = () => {
  const [text, setText] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value
    setText(input)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(webhookURL)
    setSubmitting(true)
    console.log(text)
    const payload: any = {
      channel: '#つぶやき',
      username: 'tweet bot', //name
      text: text,
      icon_emoji: 'hatching_chick' // 絵文字
    }

    const config: any = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }

    axios
      .post(webhookURL, payload, config)
      .then(res => {
        console.log(res)
        window.M.toast({ html: '送信しました！', classes: 'green rounded' })
        setText('')
      })
      .catch(e => {
        window.M.toast({
          html: `送信に失敗しました… ${e}`,
          classes: 'red rounded'
        })
      })
    setSubmitting(false)
  }

  return (
    <div className='App blue lighten-5' style={{ minHeight: '100vh' }}>
      <nav>
        <div className='nav-wrapper indigo'>
          <span className='brand-logo center'>&#x1f423;</span>
        </div>
      </nav>
      <div style={{ height: '5em' }} />
      <div className='container'>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <p className='grey-text small'>　つぶやきはこちらから!!!!!!!!</p>
        <form onSubmit={(e: FormEvent) => e.preventDefault()}>
          <div className='row'>
            <div className='col s8'>
              <input
                type='text'
                placeholder='いまどうしてる？'
                value={text}
                onChange={handleChange}
              />
            </div>
            <div
              className='col s4 valign-wrapper'
              style={{ textAlign: 'center' }}
            >
              <button
                className='btn waves-effect waves-light indigo'
                type='button'
                onClick={handleSubmit}
                disabled={!text}
              >
                送信
                <i className='material-icons right'>send</i>
              </button>
              <div
                className={`preloader-wrapper small ${
                  isSubmitting && 'active'
                }`}
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
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
