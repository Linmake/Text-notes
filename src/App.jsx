
import { createBrowserRouter, createRoutesFromElements, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import IndexMenuPage from './pages/IndexMenu';
import TextEditor from './pages/TextEditor';
import ProjectsMenu, { ProjectsLoader } from './pages/ProjectsMenu';
import RootLayout from './Layout/RootLayout';
import NotFound from './pages/NotFound';
import UsersLayout from './Layout/UsersLayout';
import LoginLayout from './Layout/LoginLayout';
import Users from './components/Users/Users';
import SignInUsers from './components/Users/SignInUsers';
import PwdAccount from './components/Users/PwdAccount'
import EmailLogin from './components/Users/EmailLogin'
import NameAccount from './components/Users/NameAccount';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<IndexMenuPage/>} />
        <Route exact path='/Projects-menu/' element={<ProjectsMenu />} /*loader={ProjectsLoader}*/ />
        <Route exact path='/Folders/' element={<a />} />
        <Route exact path='/*' element={<NotFound/>} />
      <Route path='/Project/:projectId' element={<TextEditor />}>
        
      </Route>
      <Route path='Account' element={<UsersLayout />}>
        <Route index path='Auth' element={<Users />} />
        <Route path='login' element={<LoginLayout />}>
          <Route path='email' element={<EmailLogin />}/>
          <Route path='email/pwd' element={<PwdAccount />}/>
          <Route path='email/pwd/name' element={<NameAccount />}/>
        </Route>
        <Route path='SignIn' element={<SignInUsers />} />
      </Route>
    </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
