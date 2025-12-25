
import './App.css';
import { Route, Routes } from 'react-router-dom';
import User from './modules/components/user';
import Dashboard from './modules/components/Dashborad';
import Courses from './modules/components/course';
import Sitting from './modules/components/Sitting';
import Logout from './modules/components/logout';
import Report from './modules/components/report';
import AdminPanel from './modules/components/AdminPanal';

import Totalcourse from './modules/components/totalcourse';
import Monthly from './modules/components/montlyreport';
import TotalUser from './modules/components/totaluser';




function App() {
  return (<>

<Routes>
  <Route path='/' element={<AdminPanel/>}>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/User' element={<User/>}></Route>
      <Route path='/course' element={<Courses/>}></Route>
      <Route path='/report' element={<Report/>}></Route>
      <Route path='/sitting' element={<Sitting/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
</Route>

      <Route path='/totaluser' element={<TotalUser/>}></Route>
        <Route path='/totalcourse' element={<Totalcourse/>}></Route>
      <Route path='/monthlyreport' element={<Monthly/>}></Route>
</Routes>
  
  </>)

}

export default App;
