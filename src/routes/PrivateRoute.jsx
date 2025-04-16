import { Navigate } from "react-router-dom"
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({children}) {

  const {user,loading} = useAuth()
  
if(loading){
  return <span className='block mx-auto loading loading-infinity loading-lg'></span>

}
if(user){
    return children;
}
return (
  <Navigate to='/login'></Navigate>
)
  }