
import React, { useState } from 'react';
import { Library, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from './background.jpeg';
import './App.css';


function App() {
  const [selectedPopup, setSelectedPopup] = useState(null);
  const openPopup = (popupId) => {
    setSelectedPopup(popupId);
  };
  
  const PopUpContent3 = () => {
    return (
      <div className="popup">
        <p class="textPrimary">info.sedemmusic@gmail.com</p><br/>
        <p class="textPrimary">+41 78 899 32 60</p>
      </div>
    );
  };




  return (
    <div className="app-container">
      <img src={logo} alt="Background" className="App-Background" />
      <div className="containter">
        <div className="top">
          <p className="sub-title">orchestra</p>
          <h1 className="main-title">SEDEM</h1>
        </div>

        <div className="bottom">
          <div className="sedem-wrapper">

            {selectedPopup === 3 && (
              <div >
                <PopUpContent3 />
              </div>
            )}

            <div className="vertical-space">
              <ul className="popup-buttons">
                <a class="button" href="https://docs.google.com/document/d/1-8Dv47UEMhtV2EFvJzRUtvvO1uAtz7w_abso76i5MCM/edit">Kalender</a>
                <button onClick={() => openPopup(3)}><div class="button">Kontakt</div></button>
                <a class="button" href="https://www.youtube.com/@Sedemmusic388">Youtube</a>
                <a class="button" href="https://www.instagram.com/sedem.music?igsh=eTZtYmxxMHh4eHl1&utm_source=qr">Instagram</a>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// <FontAwesomeIcon icon={faCalendarAlt} size="1x" href="https://docs.google.com/document/d/1-8Dv47UEMhtV2EFvJzRUtvvO1uAtz7w_abso76i5MCM/edit"/>

/*
<button onClick={() => openPopup(3)}>
                  <FontAwesomeIcon className="button" icon={faEnvelope} size="2x" />
                </button>*/

export default App;

/*
        <div className="bottom">
          <div className="sedem-wrapper">
            {selectedPopup === 1 && (
              <div >
                <PopUpContent1 />
              </div>
            )}

            {selectedPopup === 2 && (
              <div >
                <PopUpContent2 />

              </div>
            )}

            {selectedPopup === 3 && (
              <div >
                <PopUpContent3 />

              </div>
            )}
            <div className="popup-icons-wrapper">
              <ul className="popup-buttons">

                <button onClick={() => openPopup(1)}>
                  <FontAwesomeIcon className="icon-wrapper" icon={faCalendarAlt} size="2x" />
                </button >

                <button onClick={() => openPopup(2)}>
                  <FontAwesomeIcon className="icon-wrapper" icon={faHeart} size="2x" />
                </button>

                <button onClick={() => openPopup(3)}>
                  <FontAwesomeIcon className="icon-wrapper" icon={faEnvelope} size="2x" />
                </button>
              </ul>
            </div>
          </div>
        </div>
*/



/*
const ImageList = ({ images }) => {
  return (
    <div>
      <h2>Image List</h2>
      <ul>
        {images.map((imageUrl, index) => (
          <li key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const PopUpContent1 = () => {
  return (
    <div>
      <a class="text" href="https://docs.google.com/document/d/1-8Dv47UEMhtV2EFvJzRUtvvO1uAtz7w_abso76i5MCM/edit">Auftritte</a>
    </div>
  );
};

const PopUpContent2 = () => {
  return (
    <div class="slide_horizontal" >
        <div class="" ><ImageList images={images} /></div>
    </div>
  );
};

const PopUpContent3 = () => {
  return (
    <div>
      <p class="text">info.sedemmusic@gmail.com</p>
      <p class="text">+41 78 899 32 60</p>
    </div>
  );
};
*/





// old 

/*
<div>
          {showButtons ? (
            <div>
              {data.map((item, index) => {
                let iconComponent;

                switch (item.What) {
                  case "Kontakt":
                    iconComponent = <FontAwesomeIcon className="icon-wrapper" icon={faCalendarAlt} size="2x" />;
                    break;
                  case "SomeOtherCondition":
                    iconComponent = <FontAwesomeIcon className="icon-wrapper" icon={faHeart} size="2x" />;
                    break;
                  // Add more cases as needed

                  default:
                    iconComponent = null; // Handle the default case if necessary
                }

                return (
                  <React.Fragment key={index}>
                    <button className="button" onClick={() => handleButtonClick(index)}>
                      {iconComponent}
                      {item.What}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          ) : (
            <Popup dataToShow={selectedData} onClose={handleClosePopup} />
          )}
        </div>
*/