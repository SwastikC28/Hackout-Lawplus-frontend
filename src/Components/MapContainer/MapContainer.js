const MapContainer = () => {
    return <div>

<div
  style={{ backgroundColor: "yellow", textAlign: "center" }}
>
  <div
    className="btn-group"
    role="group"
    aria-label="Basic example"
    style={{ position: "relative", zIndex: 1, top: "11%", left: "34%" }}
  >
    <button
      onclick="GetPoliceStations()"
      type="button"
      className="btn"
      style={{ backgroundColor: "#FC76A1" }}
    >
      <img src="assets/badge.png" />
    </button>
    <button
      onclick="switchLayer('dark-v10')"
      type="button"
      className="btn btn-dark"
    >
      <i className="fas fa-moon" style={{ color: "#FAB91D", fontSize: 24 }} />
    </button>
    <button
      onclick="switchLayer('streets-v11')"
      type="button"
      className="btn"
      style={{ backgroundColor: "#71c7ec" }}
    >
      <i className="fas fa-sun" style={{ color: "#FF781F", fontSize: 24 }} />
    </button>
    <button
      onclick="switchLayer('satellite-v9')"
      type="button"
      className="btn"
      style={{ backgroundColor: "#8ABAAE" }}
    >
      <i
        className="fas fa-globe-americas"
        style={{ color: "#0D6EFD", fontSize: 24 }}
      />
    </button>
    <button
      onclick="switchLayer2()"
      type="button"
      className="btn"
      style={{ backgroundColor: "#348361" }}
    >
      <img src="assets/radioactivity.png" style={{ height: 28, width: 28 }} />
    </button>
  </div>
  <div
    id="map"
    className="container"
    style={{ marginTop: 0, width: "95%", height: 620, borderRadius: "2vw" }}
  ></div>
</div>




    </div>
}

export default MapContainer;