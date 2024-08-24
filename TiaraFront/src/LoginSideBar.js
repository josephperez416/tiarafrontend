import Login from './components/Login';
import SideBar from './components/SideBar';

function LoginSideBar() {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <SideBar/>
      <Login/>
      </div>
    </div>
  );
}

export default LoginSideBar;
