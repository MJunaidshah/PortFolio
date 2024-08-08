import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <nav className="nav-bar">
          <input type="checkbox" id="check" />
          <label htmlFor="check" id="check-button">
            <i className="fa-solid fa-bars" style={{ color: '#ffffff' }}></i>
          </label>
          <label className="Logo">
            Junaid<span style={{ color: 'rgb(48, 211, 189)' }}>Shah</span>
          </label>
          <ul>
            <li className="nav-items">
              <a href="#Home">Home</a>
            </li>
            <li className="nav-items">
              <a href="#About">About</a>
            </li>
            <li className="nav-items">
              <a href="#Services">Services</a>
            </li>
            <li className="nav-items">
              <a href="#Skill">Skill</a>
            </li>
            <li className="nav-items">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="Home">
          <div className='img-file'>
          <img src= "/portflio.jpg" alt="junaid" /></div>
          <div className="div-text">
            <h2 className="text-a">
              He<span style={{ color: 'rgb(27, 214, 214)' }}>llo</span>
            </h2>
            <h1 className="text-b">
              I am <span style={{ color: 'rgb(27, 214, 214)' }}>Junaid Shah</span>
            </h1>
            <h5 className="text-c">
              Web<span style={{ color: 'rgb(27, 214, 214)' }}> Developer</span>
            </h5>
          </div>
        </div>
        <div className="container-fluid" id="Home">
          <section id="About"></section>
          <div className="container-fluid py-4" data-aos="fade-up" data-aos-duration="3000">
            <div className="row">
              <div className="col-sm-6 col-lg-6 col-md-6 m-auto px-4 py-4">
                <img
                  src="data:image/jpeg;base64,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"
                  style={{ width: '70%', borderRadius: '10px', marginLeft: '20%', marginTop: '20px' }}
                  alt=""
                />
              </div>
              <div className="col-sm-6 col-lg-6 col-md-6 m-auto px-4 py-4">
                <h1 className="aboutme">
                  <span className="col-6" style={{ color: 'rgb(27, 214, 214)' }}>
                    About
                  </span>{' '}
                  Me.
                </h1>
                <p className="Aboutme-b m-auto py-5 px-4">
                  Hi there! I'm Junaid Shah, a passionate React Frontend Developer . With a background in Saylani insitute, I bring
                  a blend of creativity and technical expertise to every project I tackle. My journey into the world of
                  Web development started with a fascination for creating seamless user experiences and has evolved into
                  a commitment to crafting elegant and efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center my-3" id="Services">
          <h1 className="text-center">
            Our <span style={{ color: 'rgb(27, 214, 214)' }}>Services</span>
          </h1>
          <div className="row m-auto py-5" id="serveuc">
            <div
              className="col-lg-3 col-md-6 col-sm-6 m-auto"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Web <span style={{ color: 'rgb(27, 214, 214)' }}>Development</span>
                  </h5>
                  <p className="card-text">
                    I am a skilled web frontend developer with a passion for crafting engaging and visually appealing
                    user experiences. Proficient in HTML5, CSS3, and JavaScript (ES6+), I specialize in creating clean
                    and responsive web interfaces. My expertise extends to front-end frameworks, particularly React.js
                    and Vue.js, where I excel in building dynamic and interactive components.
                  </p>
                  <button
                    className="card-button"
                    style={{
                      border: '2px solid rgb(48, 211, 189)',
                      background: 'rgb(27, 214, 214) !important',
                      color: 'black',
                      borderRadius: '25px',
                      width: '30%',
                      height: '2rem',
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 m-auto"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Word <span style={{ color: 'rgb(27, 214, 214)' }}>Press</span>
                  </h5>
                  <p className="card-text">
                    I possess comprehensive skills in WordPress development, utilizing the platform to create dynamic and
                    feature-rich websites. Proficient in custom theme development, I bring designs to life with a keen
                    eye for aesthetics and functionality. My expertise extends to plugin customization, allowing for
                    tailored solutions to meet specific project requirements.
                  </p>
                  <button
                    className="card-button"
                    style={{
                      border: '2px solid rgb(48, 211, 189)',
                      background: 'rgb(27, 214, 214) !important',
                      color: 'black',
                      borderRadius: '25px',
                      width: '30%',
                      height: '2rem',
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-12 col-sm-12 my-5 m-auto"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Web <span style={{ color: 'rgb(27, 214, 214)' }}>Designing</span>
                  </h5>
                  <p className="card-text">
                    I am a skilled and creative designer with a passion for crafting visually stunning and impactful
                    designs. Proficient in graphic design tools such as Adobe Photoshop, Illustrator, and InDesign, I
                    bring concepts to life with a keen focus on aesthetics and user engagement. t. My expertise extends
                    to web design, where I use my understanding of user experience (UX).
                  </p>
                  <button
                    className="card-button"
                    style={{
                      border: '2px solid rgb(48, 211, 189)',
                      background: 'rgb(27, 214, 214) !important',
                      color: 'black',
                      borderRadius: '25px',
                      width: '30%',
                      height: '2rem',
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid my-5" id="Skill">
          <h1 className="text-center">
            My <span style={{ color: 'rgb(27, 214, 214)' }}>Skill</span>
          </h1>
        </div>
        <div className="container-fluid" data-aos="fade-right">
          <div className="absd col-12 col-lg-12 col-md-12 col-sm-12">
            <div className="d col-12 col-lg-12 col-md-12 col-sm-12" style={{ color: 'black !important' }}>
              <p className="slide-bar-text">HTML</p>
              <div className="c">
                <div className="skills" style={{ backgroundColor: 'rgb(48, 211, 189)', width: '90%', color: 'black' }}>
                  90%
                </div>
              </div>
              <p className="slide-bar-text">CSS</p>
              <br />
              <div className="c">
                <div className="skills" style={{ backgroundColor: 'rgb(48, 211, 189)', color: 'black', width: '90%' }}>
                  90%
                </div>
              </div>
              <p className="slide-bar-text">JAVASCRIPT</p>
              <br />
              <div className="c">
                <div className="skills" style={{ backgroundColor: 'rgb(48, 211, 189)', color: 'black', width: '80%' }}>
                  80%
                </div>
              </div>
              <p className="slide-bar-text">BOOTSTRAP</p>
              <br />
              <div className="c">
                <div className="skills" style={{ backgroundColor: 'rgb(48, 211, 189)', color: 'black', width: '75%' }}>
                  75%
                </div>
              </div>
              <p className="slide-bar-text">REACT.JS</p>
              <br />
              <div className="c">
                <div className="skills" style={{ backgroundColor: 'rgb(48, 211, 189)', color: 'black', width: '90%' }}>
                  90%
                </div>
              </div>
              <p className="slide-bar-text">REDUX</p>
              <br />
              <div className="c">
                <div className="skills" style={{ backgroundColor: 'rgb(48, 211, 189)', color: 'black', width: '75%' }}>
                  75%
                </div>
              </div>
              <p className="slide-bar-text">WORDPRESS</p>
              <br />
              <div className="c">
                <div className="skills" style={{ backgroundColor: 'rgb(48, 211, 189)', color: 'black', width: '90%' }}>
                  90%
                </div>
              </div>
              <p className="slide-bar-text">TAILWINDCSS</p>
              <br />
              <div className="c">
                <div className="skills" style={{ backgroundColor: 'rgb(48, 211, 189)', color: 'black', width: '90%' }}>
                  90%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-sm-6 col-lg-6 col-md-6 m-auto px-4 py-4" id="contact">
              <img
                src="data:image/jpeg;base64,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"
                style={{ width: '60%', borderRadius: '10px', marginLeft: '20%', marginTop: '20px' }}
                alt=""
              />
            </div>
            <div className="col-sm-6 col-lg-6 col-md-6 m-auto px-4 py-4">
              <h1 className="Aboutme">
                <span style={{ color: 'rgb(27, 214, 214)' }}>About</span> Me.
              </h1>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
