import MapContainer from '../MapContainer/MapContainer';
import SideBar from '../Sidebar/Sidebar';
import classes from './MainContainer.module.css';

const MainContainer = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#181820' }}>
        <div className="row">
          <div className={`col-2 ${classes['sidebar-containe']}`}>
            <SideBar />
          </div>

          <div className={`col-10 ${classes['map-container']}`}>
            <MapContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
