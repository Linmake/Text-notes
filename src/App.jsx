import { createBrowserRouter, createRoutesFromElements, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainPage from './pages/Main/MainPage';
import TextEditor from './pages/TextEditor/TextEditor';
import ProjectsMenu from './pages/ProjectsMenu/ProjectsMenu';
import RootLayout from './Layout/RootLayout';
import NotFound from './pages/NotFound/NotFound';
import UsersLayout from './Layout/UsersLayout';
import SignupLayout from './Layout/SignupLayout';
import Account from './components/Account/Accounts/Account';
import SignInUsers from './components/Account/SignIn/SignInUsers';
import PwdAccount from './components/Account/SignUp/PwdAccount'
import EmailSignup from './components/Account/SignUp/EmailSignup'
import NameAccount from './components/Account/SignUp/NameAccount';
import SettingsAccountPage from './pages/SettingsAccount/SettingsAccountPage';
import AccountPage from './pages/Account/AccountPage';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<MainPage/>} />
        <Route exact path='/Projects-menu/' element={<ProjectsMenu />} /*loader={ProjectsLoader}*/ />
        <Route exact path='/Folders/' element={<a />} />
        <Route exact path='/*' element={<NotFound/>} />
      <Route path='/Project/:projectId' element={<TextEditor />}>
      </Route>
      <Route path='Account' element={<UsersLayout />}>
        <Route index path='Enter' element={<AccountPage />} />
        <Route path='signup' element={<SignupLayout />}>
          <Route path='email' element={<EmailSignup />}/>
          <Route path='email/pwd' element={<PwdAccount />}/>
          <Route path='email/pwd/name' element={<NameAccount />}/>
        </Route>
        <Route path='SignIn' element={<SignInUsers />} />
      </Route>
      <Route index path='settings' element={<SettingsAccountPage/>} />
    </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}
export default App