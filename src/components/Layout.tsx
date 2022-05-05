import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="layout">
        <header>Massa text</header>
        <aside>Ännu mer text</aside>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </div>
  )
}