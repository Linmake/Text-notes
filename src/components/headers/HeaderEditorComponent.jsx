import '../../sass/components/headers/css/HeaderEditorComponent.css'

const HeaderEditorComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='headerEditor'>
        <div className="container-fluid" id='navContend'>
          <a className="navbar-brand" href="#">Notas</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarSection1'>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mis notas
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Proyectos</a></li>
                <li><a className="dropdown-item" href="#">Carpetas</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Ideas</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarCuenta'>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cuenta
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Configuracion</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default HeaderEditorComponent