
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
import Users from './components/Users/Users';
import LogInUsers from './components/Users/LogInUsers';
import SignInUsers from './components/Users/SignInUsers';
import AccountPage from './pages/Account';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<IndexMenuPage/>} />
        <Route exact path='/Projects-menu/' element={<ProjectsMenu />} /*loader={ProjectsLoader}*/ />
        <Route exact path='/Folders/' element={<a />} />
        <Route exact path='/*' element={<NotFound/>} />
      <Route path='/Project' element={<ProjectsMenu />}>
        <Route path='/Project/:id' element={<TextEditor />} />
      </Route>
      <Route path='Account' element={<UsersLayout />}>
        <Route index path='Auth' element={<Users />} />
        <Route path='LogIn' element={<AccountPage />} />
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
