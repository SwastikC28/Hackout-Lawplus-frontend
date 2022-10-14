const Case = () => {
  return (
    <div>
      <div className="col" id="card221001134128">
        <div
          className="card text-white bg-dark mb-3"
          style={{
            maxWidth: '20rem',
            borderStyle: 'solid',
            borderColor: '#FC76A1',
            zIndex: 1,
          }}
        >
          <div className="card-header">
            <i
              className="fas fa-exclamation-triangle"
              style={{ color: '#FC76A1' }}
              aria-hidden="true"
            />{' '}
            Case ID #221001134128{' '}
            <a
              href="#map"
              onclick="reply_click(this.id)"
              id={221001134128}
              style={{
                backgroundColor: '#FC76A1',
                padding: 8,
                fontSize: 18,
                borderRadius: '1vw',
                float: 'right',
                margin: '0.5vw',
              }}
            >
              <i className="fas fa-crosshairs" aria-hidden="true" />
            </a>
          </div>
          <div className="card-body">
            <h5 id="cardcrime221001134128" className="card-title">
              <i
                className="fas fa-skull"
                style={{ color: '#FC76A1' }}
                aria-hidden="true"
              />{' '}
              Narcotics
            </h5>
            <hr />
            <p className="card-text">
              <i
                className="fas fa-calendar-alt"
                style={{ color: '#FC76A1' }}
                aria-hidden="true"
              />{' '}
              Sat Oct 01 2022 13:41:28
            </p>
            <hr />
            <p className="card-text">
              <i
                className="fas fa-user"
                style={{ color: '#FC76A1' }}
                aria-hidden="true"
              />{' '}
              Darshan Rao
              <i
                className="fas fa-mars"
                style={{ color: '#FC76A1' }}
                aria-hidden="true"
              />
            </p>
            <hr />
            <i
              className="fas fa-phone"
              style={{ color: '#FC76A1' }}
              aria-hidden="true"
            />{' '}
            +91 7715073593
            <hr />
            <i
              className="fas fa-map-marker-alt"
              style={{ color: '#FC76A1' }}
              aria-hidden="true"
            />{' '}
            22VG+P3X, Nerul, Navi Mumbai, 400706
            <hr />
            <i
              className="fas fa-info-circle"
              style={{ color: '#FC76A1' }}
              aria-hidden="true"
            />{' '}
            Drugs near campus<p></p>{' '}
            <button
              onclick="deleteReport1(this.id)"
              className="btn hover-item"
              id="del221001134128"
              style={{
                float: 'right',
                color: 'white',
                backgroundColor: '#30303D',
                borderRadius: '1vw',
                borderStyle: 'solid',
              }}
            >
              Close case
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
