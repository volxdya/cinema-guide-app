import './Loader.css'
import {Spinner} from "react-bootstrap";

export function Loader() {
    return (
      <div className="d-flex justify-content-center align-items-center container-loading">
          <div>
              <div>
                  <div className="d-flex justify-content-center">
                      <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                      </Spinner>
                  </div>
                  <h1 className="text-center my-5">Загрузка данных, пожалуйста подождите</h1>
                  <div className="d-flex justify-content-center">
                      <img src="https://i.ibb.co/njDs10f/1-88375-512b-Photoroom.png" height={230} className="mt-4"
                           alt=""/>
                  </div>
              </div>
          </div>
      </div>
    );
}
