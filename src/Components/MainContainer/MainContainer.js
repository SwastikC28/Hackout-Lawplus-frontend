import MapContainer from "../MapContainer/MapContainer"
import SideBar from "../Sidebar/Sidebar"

const MainContainer = () => {
    return <div>

        <div className="container-fluid" style={{ backgroundColor: "#181820" }}>
            <div className="row">
                <div className="col-2" style={{
                    backgroundColor: "#1D1D27",

                }}>

                    <SideBar />

                </div>

                <div className="col-10" style={{
                    backgroundColor: "#181820",

                }}>

                    <MapContainer />

                </div>

            </div>
        </div>




    </div>
}

export default MainContainer;