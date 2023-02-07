import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import CalendarPage from './pages/CalendarPage';
import NotesPage from './pages/NotesPage';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Routes>
        <Route path='/todo-app' element={<HomePage/>}/>
        <Route path='/todo-app/todo-list' element={<TodoPage/>}/>
        <Route path='/todo-app/calender' element={<CalendarPage/>}/>
        <Route path='/todo-app/notes' element={<NotesPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
