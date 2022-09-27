import "./App.scss";
import {
  BsPencil,
  BsPencilSquare,
  BsTwitter,
  BsInstagram,
  BsGlobe,
  BsPhone,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { GiPalmTree } from "react-icons/gi";
import {
  GrFacebookOption,
  GrLinkedinOption,
  GrUserManager,
} from "react-icons/gr";
import { AiFillCloseSquare } from "react-icons/ai";

function App() {
  return (
    <div className="app">
      <header>
        <div className="all">
          <div className="header-text">
            <h1 className="display-5">Rustieke Roots</h1>
            <p className="lead">Groceries</p>
          </div>
          <BsPencil color="whitesmoke" size="20px" className="pencil" />
        </div>
      </header>
      <main className="container">
        <div className="card-group one">
          <div className="card card1 m-3">
            <GiPalmTree color="orange" size="30px" />
            <div>
              <BsPencilSquare color="green" size="30px" />
              <AiFillCloseSquare color="red" size="30px" />
            </div>
          </div>
          <div className="card m-3 p-3">
            <h4 className="card-header p-3 text-center">About</h4>
            <div className="card-body">
              <p className="card-text">
                Rediscover the lost mysterious Masala recipes crafted with soul
                full of love from your Dad's, Nani's, Ma's, Kaki's & Sis.
              </p>
              <p className="link">
                <i>https://www.rustiekeroots.com/</i>
              </p>
            </div>
          </div>
          <div className="card card3 m-3">
            <div className="card">
              <h4 className="card-header mb-3">Social Links</h4>
              <div className="card-header d-flex justify-content-between">
                <BsTwitter size="20px" />
                <GrFacebookOption size="20px" />
                <BsInstagram size="20px" />
                <GrLinkedinOption size="20px" />
              </div>
            </div>
            <div className="card inner">
              <h4 className="card-header">Preferred Partners(0)</h4>
              <div className="card-text"></div>
            </div>
          </div>
        </div>
        <div className="card-group two">
          <div className="card m-3">
            <div className="card-header">
              <h5 className="card-title">Category</h5>
            </div>
            <div className="muted m-4 p-2">
              <h5>groceries</h5>
            </div>
          </div>
          <div className="card m-3">
            <div className="card-header">
              <h5 className="card-title">Subcategory</h5>
            </div>
            <div className="muted m-4 p-2">
              <h5>groceries</h5>
            </div>
          </div>
        </div>
        <div className="card-group two">
          <div className="card m-3">
            <div className="card-header">
              <h5 className="card-title">Customer Profile</h5>
            </div>
            <div className="people m-4">
              <div className="muted p-2 text-center">
                <h5>
                  <GrUserManager />
                  :18-74years
                </h5>
              </div>
              <div className="muted p-2 w-100 text-center">
                <h5>
                  <GrUserManager />
                  :18-74years
                </h5>
              </div>
              <div className="muted p-2 text-center">
                <h5>
                  <GrUserManager />
                  :18-74years
                </h5>
              </div>
            </div>
          </div>
          <div className="card m-3">
            <div className="card-header">
              <h5 className="card-title">Delivery Locations</h5>
            </div>
            <div className="muted m-4 p-2">
              <h5>
                <BsGlobe /> Maharashtra
              </h5>
            </div>
          </div>
        </div>
        <div className="card-group two">
          <div className="card m-3">
            <div className="card-header">
              <h5 className="card-title">Company Information</h5>
            </div>
            <div className="card m-4">
              <div className="card-header">
                <strong>Company:</strong>
                <small className="text-muted"> Rustieke Agro Roots</small>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Type:</strong>
                  <small className="text-muted">
                    {" "}
                    Limited Liability Partnership
                  </small>
                </li>
                <li className="list-group-item headerR">
                  <strong>Website:</strong>
                  <small className="text-muted">
                    {" "}
                    http://www.rustiekeoots.com/
                  </small>
                </li>
                <li className="list-group-item">
                  <strong>
                    <BsPhone />
                  </strong>
                  <small className="text-muted"> 9920738485</small>
                </li>
              </ul>
            </div>
          </div>
          <div className="card m-3">
            <div className="card-header">
              <h5 className="card-title">Address</h5>
            </div>
            <div className="card m-4">
              <div className="card-header text-muted">
                11/1, Plot No. 49, 172C, Swa Sadan
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Dr. SS Rao Road, Ganesh Gully, Lalbaug.
                </li>
                <li className="list-group-item headerR">
                  Mumbai, Maharashtra.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="two card m-3">
          <div className="card-header p-4">
            <h5 className="card-title">Rustieke Roots</h5>
            <h6 className="card-title">Groceries</h6>
          </div>
          <div className="muted m-4 p-2">
            <div className="end">
              <small>
                <BsFillBookmarkCheckFill /> <span>MASALAS</span>
              </small>
              <small>
                <BsFillBookmarkCheckFill /> <span>KONKANI</span>
              </small>
              <small>
                <BsFillBookmarkCheckFill /> <span>AUTHENTIC</span>
              </small>
              <small>
                <BsFillBookmarkCheckFill /> <span>ORGANIC</span>
              </small>
              <small>
                <BsFillBookmarkCheckFill /> <span>HOMEMADE</span>
              </small>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
