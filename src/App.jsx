
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
import SignupLayout from './Layout/SignupLayout';
import Account from './components/Account/Accounts/Account';
import SignInUsers from './components/Account/SignIn/SignInUsers';
import PwdAccount from './components/Account/SignUp/PwdAccount'
import EmailSignup from './components/Account/SignUp/EmailSignup'
import NameAccount from './components/Account/SignUp/NameAccount';
import SignUp from './components/Account/SignUp/SignUp'


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
        <Route index path='Auth' element={<Account />} />
        <Route path='signup' element={<SignupLayout />}>
          <Route path='email' element={<EmailSignup />}/>
          <Route path='email/pwd' element={<PwdAccount />}/>
          <Route path='email/pwd/name' element={<NameAccount />}/>
          <Route path='create' element={<SignUp />}/>
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
