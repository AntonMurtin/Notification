
import './App.css'
import NotificationBotton from './components/notificationBotton/NotificationBotton'
import NotificationLeft from './components/notificationLeft/NotificationLeft'


function App() {


  return (
    <>
      <div className="app">
        <div className="content">
          <h1>notification</h1>
          <p>choice notifications</p>

          <form method='POST' >
            <input
              // required
              // onBlur={changeFocus}
              // focused={focus.searchName.toString()}
              // pattern={inputValidtion.name}
              type="text"
              name='searchName'
              placeholder="Text..."
            // value={values.searchName}
            // onChange={changeHandler}
            />
          </form>
          <div >
            <button className="left"><span></span>left info</button>
            <button className="left"><span></span>left success</button>
            <button className="left"><span></span>left warning</button>
            <button className="left"><span></span>left error</button>
          </div> 

          <div >
            <button className="bottom"><span></span>right info</button>
            <button className="bottom"><span></span>right success</button>
            <button className="bottom"><span></span>right warning</button>
            <button className="bottom"><span></span>right error</button>
          </div>

          <div >
            <button className="left"><span></span>top info</button>
            <button className="left"><span></span>top success</button>
            <button className="left"><span></span>top warning</button>
            <button className="left"><span></span>top error</button>
          </div>

          <div >
            <button className="bottom"><span></span>bottom info</button>
            <button className="bottom"><span></span>bottom success</button>
            <button className="bottom"><span></span>bottom warning</button>
            <button className="bottom"><span></span>bottom error</button>
          </div>
        </div>
        <div className="notificationBotton">
        {<NotificationBotton/>}
        </div>
        <div className="notificationLeft">
        {<NotificationLeft/>}
        </div>
      </div>
    </>
  )
}

export default App
