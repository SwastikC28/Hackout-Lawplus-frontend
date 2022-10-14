import classes from './Case.module.css';
const Case = () => {
  return (
    <>
      <div className="col" id="card221001134128">
        <div className={`card text-white bg-dark mb-3 ${classes['main-card']}`}>
          <div className={`card-header ${classes.header}`}>
            <i className="fas fa-exclamation-triangle" aria-hidden="true" />{' '}
            Case ID #221001134128{' '}
            <a href="#map" onclick="reply_click(this.id)" id={221001134128}>
              <i
                className="fas fa-crosshairs"
                aria-hidden="true"
                style={{ color: 'white' }}
              />
            </a>
          </div>

          <div className="card-body">
            <h5 id="cardcrime221001134128" className="card-title">
              <i className="fas fa-skull" aria-hidden="true" /> Narcotics
            </h5>
            <hr />
            <p className="card-text">
              <i className="fas fa-calendar-alt" aria-hidden="true" /> Sat Oct
              01 2022 13:41:28
            </p>
            <hr />
            <p className="card-text">
              <i className="fas fa-user" aria-hidden="true" /> Darshan Rao
              <i className="fas fa-mars" aria-hidden="true" />
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
            <i className="fas fa-info-circle" aria-hidden="true" /> Drugs near
            campus<p></p>{' '}
            <button
              onclick="deleteReport1(this.id)"
              className={`${classes['close-button']} c btn hover-item}`}
              id="del221001134128"
            >
              Close case
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;