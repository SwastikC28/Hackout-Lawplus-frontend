import classes from './Sidebar.module.css';

const SideBar = () => {
  return (
    <>
      <div className={classes['side-bar']}>
        <table className="container">
          <tbody>
            <tr className="fade-item">
              <td className="fade-item">
                <i className="fas fa-exclamation-circle" />
                <span>
                  &nbsp;
                  <a href="home.html"> Cases</a>
                </span>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td className="fade-item">
                <i className="fas fa-chart-line" />
                <span>
                  &nbsp;<a href="analytics.html"> Analytics</a>
                </span>{' '}
              </td>
            </tr>
            <tr />
            <tr>
              <td className="fade-item">
                <i className="fas fa-book" />
                <span style={{ fontSize: 15, fontWeight: 500 }}>
                  &nbsp;<a href="documentation.html"> Documentation</a>
                </span>{' '}
              </td>
            </tr>
            <tr />
            <tr>
              <td className="fade-item">
                <i className="fas fa-user-friends" />
                <span style={{ fontSize: 15, fontWeight: 500 }}>
                  &nbsp;<a href="aboutus.html"> About Us</a>
                </span>{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SideBar;
