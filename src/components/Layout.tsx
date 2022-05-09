import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="layout">
        <header></header>
        <aside></aside>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </div>
  )
}