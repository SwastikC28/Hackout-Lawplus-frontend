const SideBar = () => {
    return <div>

<div
  style={{
    backgroundColor: "#1D1D27",
    textAlign: "left",
    borderBottomRightRadius: "1vw"
  }}
>
  <table className="container" style={{ marginTop: "3vw" }}>
    <tbody style={{ color: "white" }}>
      <tr className="fade-item">
        <td
          className="fade-item"
          style={{
            padding: "1vw",
            borderRadius: "0.5vw",
            backgroundColor: "#272732"
          }}
        >
          <i
            style={{
              backgroundColor: "#FC76A1",
              padding: 8,
              fontSize: 20,
              borderRadius: "1vw"
            }}
            className="fas fa-exclamation-circle"
          />
          <span style={{ fontSize: 15, fontWeight: 500 }}>
            &nbsp;<a href="home.html"> Cases</a>
          </span>{" "}
        </td>
      </tr>
      <tr style={{ height: "1vw" }}></tr>
      <tr>
        <td
          className="fade-item"
          style={{ padding: "1vw", borderRadius: "0.5vw" }}
        >
          <i
            style={{
              backgroundColor: "#70C4BF",
              padding: 8,
              fontSize: 20,
              borderRadius: "1vw"
            }}
            className="fas fa-chart-line"
          />
          <span style={{ fontSize: 15, fontWeight: 500 }}>
            &nbsp;<a href="analytics.html"> Analytics</a>
          </span>{" "}
        </td>
      </tr>
      <tr style={{ height: "1vw" }} />
      <tr>
        <td
          className="fade-item"
          style={{ padding: "1vw", borderRadius: "0.5vw" }}
        >
          <i
            style={{
              backgroundColor: "#AE68E6",
              padding: 8,
              fontSize: 20,
              borderRadius: "1vw"
            }}
            className="fas fa-book"
          />
          <span style={{ fontSize: 15, fontWeight: 500 }}>
            &nbsp;<a href="documentation.html"> Documentation</a>
          </span>{" "}
        </td>
      </tr>
      <tr style={{ height: "1vw" }} />
      <tr>
        <td
          className="fade-item"
          style={{ padding: "1vw", borderRadius: "0.5vw" }}
        >
          <i
            style={{
              backgroundColor: "#E39264",
              padding: 8,
              fontSize: 20,
              borderRadius: "1vw"
            }}
            className="fas fa-user-friends"
          />
          <span style={{ fontSize: 15, fontWeight: 500 }}>
            &nbsp;<a href="aboutus.html"> About Us</a>
          </span>{" "}
        </td>
      </tr>
    </tbody>
  </table>
</div>



    </div>
}

export default SideBar;