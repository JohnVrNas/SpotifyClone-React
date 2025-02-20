import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
  return (
    <div className='main'>
      {/* Músicas populares */}
      <div className='item-list'>
        <div className='item-list__header'>
          <h2>Artista populares</h2>
          <a href="" className='item-list__link'>Mostrar tudo</a>
        </div>
        <div className="item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                src="https://i.scdn.co/image/ab6761610000517439ba6dcd4355c03de0b50918" 
                className="single-item__image" 
                alt="imagem do artista"
                />
              </div> {/*single-item__div-image*/}

              <FontAwesomeIcon className="single-item__icon"icon={faCirclePlay} /> {/*icone de play (hover) artista*/}
            </div> {/*single-item__div-image-button*/}

            <div className="single-item__texts">  

              <div className="single-item__2lines">
                <p className="single-item__title">Kendrick Lamar</p>
              </div>

              <p className="single-item__type">Artista</p>

            </div>
            
          </div> {/*single-item*/}
        </div> {/*item-list__container*/}
      </div> {/*item-list*/}

      {/* Músicas populares */}
      <div className='item-list'>
        <div className='item-list__header'>
          <h2>Músicas populares</h2>
          <a href="" className='item-list__link'>Mostrar tudo</a>
        </div>

        <div className="item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img 
                src="https://i.scdn.co/image/ab6761610000517439ba6dcd4355c03de0b50918" 
                className="single-item__image" 
                alt="imagem do artista"
                />
              </div> {/*single-item__div-image*/}

              <FontAwesomeIcon className="single-item__icon"icon={faCirclePlay} /> {/*icone de play (hover) artista*/}
            </div> {/*single-item__div-image-button*/}

            <div className="single-item__texts">  

              <div className="single-item__2lines">
                <p className="single-item__title">Kendrick Lamar</p>
              </div>

              <p className="single-item__type">Artista</p>

            </div>
            
          </div> {/*single-item*/}

        </div> {/*item-list__container*/}
      </div> {/*item-list*/}
    </div> 
  );
};

export default Main