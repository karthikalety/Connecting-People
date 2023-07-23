import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () =>{
    if(!localStorage.getItem('username'))
        return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="1cbbdc02-6d5a-4edc-9e03-60a0ba265493"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />

    );
}
export default App;