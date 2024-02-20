import './App.css'
import { useReducer, useState } from 'react';

import { v4 } from 'uuid';
import { notificationReduser } from './lib/notificationrender'
import { classEndPoints, exitEndPoints, sideEndPoints, typeEndPoints } from './config/constants'
import { Notification } from './components/notification/Notification';

function App() {
  const side = sideEndPoints;
  const type = typeEndPoints;
  const classNot = classEndPoints;
  const exitNot = exitEndPoints

  const [state, dispatch] = useReducer(notificationReduser, []);
  const [message, setMessage] = useState('');
  const [notificationClass, setNotificationClass] = useState('')

  const onClick = (side, type, classNot, exit) => {
    setNotificationClass(side);

    if (message === '') {
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: v4(),
          type,
          message: 'This is a notification!',
          classNot,
          exit
        }
      })
    } else {
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: v4(),
          type,
          message,
          classNot,
          exit
        }
      });
    };
  };

  const changeHandler = (e) => {
    setMessage(e.target.value);

  }

  return (
    <>
      <div className="app">
        <div className="content">
          <h1>notification</h1>
          <p>choice notifications</p>

          <form method='POST' >
            <input
              type="text"
              name='name'
              placeholder="Text..."
              value={message}
              onChange={changeHandler}
            />
          </form>
          <div >
            <button className="left"
              onClick={() => onClick(side.left, type.info, classNot.left, exitNot.left)}
            ><span></span>left info</button>
            <button className="left"
              onClick={() => onClick(side.left, type.success, classNot.left, exitNot.left)}
            ><span></span>left success</button>
            <button className="left"
              onClick={() => onClick(side.left, type.warning, classNot.left, exitNot.left)}
            ><span></span>left warning</button>
            <button className="left"
              onClick={() => onClick(side.left, type.error, classNot.left, exitNot.left)}
            ><span></span>left error</button>
          </div>
          <div >
            <button className="bottom"
              onClick={() => onClick(side.right, type.info, classNot.right, exitNot.right)}
            ><span></span>right info</button>
            <button className="bottom"
              onClick={() => onClick(side.right, type.success, classNot.right, exitNot.right)}
            ><span></span>right success</button>
            <button className="bottom"
              onClick={() => onClick(side.right, type.warning, classNot.right, exitNot.right)}
            ><span></span>right warning</button>
            <button className="bottom"
              onClick={() => onClick(side.right, type.error, classNot.right, exitNot.right)}
            ><span></span>right error</button>
          </div>
          <div >
            <button className="left"
              onClick={() => onClick(side.top, type.info, classNot.top, exitNot.top)}
            ><span></span>top info</button>
            <button className="left"
              onClick={() => onClick(side.top, type.success, classNot.top, exitNot.top)}
            ><span></span>top success</button>
            <button className="left"
              onClick={() => onClick(side.top, type.warning, classNot.top, exitNot.top)}
            ><span></span>top warning</button>
            <button className="left"
              onClick={() => onClick(side.top, type.error, classNot.top, exitNot.top)}
            ><span></span>top error</button>
          </div>
          <div >
            <button className="bottom"
              onClick={() => onClick(side.botton, type.info, classNot.botton, exitNot.botton)}
            ><span></span>bottom info</button>
            <button className="bottom"
              onClick={() => onClick(side.botton, type.success, classNot.botton, exitNot.botton)}
            ><span></span>bottom success</button>
            <button className="bottom"
              onClick={() => onClick(side.botton, type.warning, classNot.botton, exitNot.botton)}
            ><span></span>bottom warning</button>
            <button className="bottom"
              onClick={() => onClick(side.botton, type.error, classNot.botton, exitNot.botton)}
            ><span></span>bottom error</button>
          </div>



        </div>
        <div className={notificationClass}>
          {state.map(x => {
            return <Notification dispatch={dispatch} key={x.id} {...x} />
          })}
        </div>
        {/* <div className="notificationBotton">
        {<NotificationBotton/>}
        </div>
        <div className="notificationLeft">
        {<NotificationLeft/>}
        </div>
        <div className="notificationRight">
        {<NotificationRight/>}
        </div> */}
      </div>
    </>
  )
}

export default App
