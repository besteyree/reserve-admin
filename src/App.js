import './App.css';
import RouterPage from './Components/RouterPage';
import axios from 'axios'
import Scripts from './Components/Scripts';


axios.defaults.baseURL = "https://api-stage.whitealba.in/api/";
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(function (config){
  const bearertoken = localStorage.getItem('auth-token');  
  config.headers.Authorization = bearertoken ? `Bearer ${bearertoken}` : ''; 
  return config;
});



function App() {
  return (
   <>
   <RouterPage/>
   <Scripts/>
   </>
  );
}

export default App;
