import React, { useEffect } from "react";
import './portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    // Page cursors
    const t = document.getElementById("cursor");
    const e = document.getElementById("cursor2");
    const i = document.getElementById("cursor3");

    const onMouseMove = (n) => {
      t.style.left = `${n.clientX}px`;
      t.style.top = `${n.clientY}px`;
      e.style.left = `${n.clientX}px`;
      e.style.top = `${n.clientY}px`;
      i.style.left = `${n.clientX}px`;
      i.style.top = `${n.clientY}px`;
    };

    document.body.addEventListener("mousemove", onMouseMove);

    const n = () => {
      e.classList.add("hover");
      i.classList.add("hover");
    };
    const s = () => {
      e.classList.remove("hover");
      i.classList.remove("hover");
    };

    s();
    const r = document.querySelectorAll(".hover-target");
    r.forEach((el) => {
      el.addEventListener("mouseover", n);
      el.addEventListener("mouseout", s);
    });

    // About page
    document.querySelector(".about-text").addEventListener("click", () => {
      document.body.classList.add("about-on");
    });
    document.querySelector(".about-close").addEventListener("click", () => {
      document.body.classList.remove("about-on");
    });

    // Contact page
    document.querySelector(".contact-text").addEventListener("click", () => {
      document.body.classList.add("contact-on");
    });
    document.querySelector(".contact-close").addEventListener("click", () => {
      document.body.classList.remove("contact-on");
    });

    // Travel portfolio page
    document.querySelector(".travel").addEventListener("click", () => {
      document.body.classList.add("travel-on");
    });
    document.querySelector(".travel-close").addEventListener("click", () => {
      document.body.classList.remove("travel-on");
    });

    // Wildlife portfolio page
    document.querySelector(".wildlife").addEventListener("click", () => {
      document.body.classList.add("wildlife-on");
    });
    document.querySelector(".wildlife-close").addEventListener("click", () => {
      document.body.classList.remove("wildlife-on");
    });

    // Nature portfolio page
    document.querySelector(".nature").addEventListener("click", () => {
      document.body.classList.add("nature-on");
    });
    document.querySelector(".nature-close").addEventListener("click", () => {
      document.body.classList.remove("nature-on");
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div>
      <center>
      <div className="hero-section">
        <div className="about-text hover-target">About</div>
        <div className="contact-text hover-target">Contact</div>
        <div className="section-center">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1>KIRUTHIK K B</h1>
              </div>
              <div className="col-12 text-center mb-2">
                <div className="dancing"> Software Development Engineer</div>
              </div>
              <br></br>
              <div className="col-12 text-center mt-4 mt-lg-5">
                <p>
                  <span className="travel hover-target">Projects</span>{" "}
                  <span className="wildlife hover-target">Certifications</span>{" "}
                  <span className="nature hover-target">Skills & experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-close hover-target" />
        <div className="section-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <img style={{width : '7%', height : '7%'}}
                  src="https://res.cloudinary.com/ds4xnqiio/image/upload/v1724252699/A14I7178_nlythd.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-8 text-center mt-4">
                <p>
                A Computer Science Engineer with hands on experience in an
intermediate levels of knowledge in my skills. <br></br>My collaborative
approach fosters innovation while my leadership qualities drive
teams towards success.<br></br>I bring a thoughtful and collaborative
approach to every project and I've always striving to exceed my
clients' expectations. <br></br>I'm Sure to meet up with the job demands and
deadlines through diligent work-ethic and dedication to quality
                </p>
                <br></br>
              </div>
              <div className="col-12 text-center">
                <p>
                  <span><b>Kiruthik ;) </b></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-close hover-target" />
        <div className="section-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <a href="#" className="hover-target">
                  kiruthik1616@gmail.com
                </a>
                <br></br>
            <b> 
              <h2>
+91 8667486761
<br></br>
Hope College,Coimbatore - 641004</h2> </b> 
              </div>
              <br></br>
              <div className="col-12 text-center social mt-4">
                <a href="#" className="hover-target">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/agalya-t-798782232/" className="hover-target">
                  LinkedIn
                </a>
                <a href="https://github.com/Kiruthik1616" className="hover-target">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="travel-section">
  <div className="travel-close hover-target" />
  <div className="container">
    <div style ={{height : '100vh',marginBottom: '80%'}}className="row justify-content-center">
      <div className="col-12 text-center">
        <h3><b>EXPLORE</b></h3>
        <div>
          <meta charSet="utf-8" />
          <title>Photo Blog</title>
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,800" rel="stylesheet" type="text/css" />
          <p style={{
            fontFamily: 'Raleway, sans-serif',
            marginLeft: '1.66%',
            fontSize: '23px',
            fontWeight: '800',
            textTransform: 'uppercase',
            borderBottom: '2px solid #f1f1f1',
            width: '30%',
            paddingBottom: '20px',
            marginTop : 'auto',
  padding: '20px',

          }}>
            Project Gallery
          </p>
          {/* Massimo Margagnoni */}
          <div style={{ float: 'left', width: '30%', margin: '1.66%' }}>
            <img
              style={{ width: '100%' }}
              src="https://plus.unsplash.com/premium_photo-1663047302474-c885cc9f68bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludmVudG9yeSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="Massimo Margagnoni's photo of a scenic landscape with mountains and a river"
            />
            <p style={{ textAlign: 'center' }}>This Application is based on the management of stock of an
organization. The application contains general organization profile,
sales details, Purchase details and the remaining stock that are
presented in the organization.</p> <b>
  
  <a href = "https://github.com/a901y0a/Inventory-Management-workflow"><button>GITHUB LINK</button></a></b><br>
</br>
          </div>
          <div style={{ float: 'left', width: '30%', margin: '1.66%' }}>
            <img
              style={{ width: '100%' }}
              src="https://media.istockphoto.com/id/847523382/photo/worldwide-internet-streaming-service-concept-elements-of-this-image-furnished-by-nasa-3d.webp?b=1&s=170667a&w=0&k=20&c=bqbU4Yzj3r-WmS24FO17dJVF2PVo5hdjLQRsVBJ_yaU="
              alt="Massimo Margagnoni's photo of a cityscape with tall buildings and a sunset"
            />
            <p style={{ textAlign: 'center' }}>The News Club application aggregates multiple news channels and
online newspapers into a single platform, providing users with
convenient access to diverse sources of information</p><b>
  
  <a href = "https://github.com/a901y0a/THE-NEWS-CLUB"><button>GITHUB LINK</button></a></b><br>
</br>

          </div>
          <div style={{ float: 'left', width: '30%', margin: '1.66%' }}>
            <img
              style={{ width: '100%' }}
              src="https://media.istockphoto.com/id/1412860430/photo/tic-tac-toe-set-on-yellow-background-flat-lay.webp?b=1&s=170667a&w=0&k=20&c=TnZPwX2TXB9t1cyyEuICaV0iFlUrICmnR1xlSr-yZNU="
              alt="Massimo Margagnoni's photo of a quiet street in an old town with historic architecture"
            />
            <p style={{ textAlign: 'center' }}>A simple Tic Tac Toe game built with React, CSS, and JavaScript that allows two players to take turns marking spaces on a 2x2,3x3,4x4,5x5,6x6 grid. The game features real-time win condition checks and a reset functionality for a fresh start.</p>
            <b>
  
  <a href = "https://github.com/a901y0a/PRODIGY-INFOTECH-INTERN/tree/main/Tic-Tac-Toe"><button>GITHUB LINK</button></a></b><br>
</br>
          </div>
          {/* Giuseppe Milo */}
          <div style={{ float: 'left', width: '30%', margin: '1.66%' }}>
            <img
              style={{ width: '100%' }}
              src="https://media.istockphoto.com/id/624154160/photo/wedding-guest-setup-with-fresh-flowers.webp?b=1&s=170667a&w=0&k=20&c=Wl0MYkmDvLWXotilNklzIyS4xv8ctVPLpRP4HgDp81o="
              alt="Giuseppe Milo's photo of a modern office with computer workstations"
            />
            <p style={{ textAlign: 'center' }}>This application is to streamline event planning and execution
processes. From organizing schedules to managing attendees,
logistics and for seamless event coordination.</p><b>
  
  <a href = "https://github.com/a901y0a?tab=repositories"><button>GITHUB LINK</button></a></b><br>
</br>
          </div>
          <div style={{ float: 'left', width: '30%', margin: '1.66%' }}>
            <img
              style={{ width: '100%' }}
              src="https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Giuseppe Milo's photo of a warehouse with shelves filled with products"
            />
            <p style={{ textAlign: 'center' }}>The Zen Yoga Academy Portal offers a comprehensive platform for
practitioners to explore and deepen their understanding of yoga and
meditation philosophy and mindful living by attending sessions.</p><b>
  
  <a href = "https://github.com/a901y0a/ZEN-YOGA-ACADEMY-"><button>GITHUB LINK</button></a></b><br>
</br>
          </div>
          <div style={{ float: 'left', width: '30%', margin: '1.66%' }}>
            <img
              style={{ width: '100%' }}
              src="https://reactjsexample.com/content/images/2019/02/A-Simple-React-Calculator.jpg"
              alt="Giuseppe Milo's photo of a close-up of inventory management software on a screen"
            />
            <p style={{ textAlign: 'center' }}>A React-based calculator application that performs basic arithmetic operations, including addition, subtraction, multiplication, and division. The app features a user-friendly interface with buttons for digits and operations, a display screen, and error handling for invalid inputs.</p>
          <b>
  
  <a href = "https://github.com/a901y0a/React-Projects/tree/main/calculator"><button>GITHUB LINK</button></a></b><br>
</br>
          </div>
          
         
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="wildlife-section">
        <div className="wildlife-close hover-target" />
        <div style={{height : '100vh'}}className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>CERTIFICATE ACHIEVEMENTS</h3>
            </div>
            <div className="col-12 mt-3 text-center">
              <p>
                <i>
                <span> * AWS Cloud Foundation</span><br></br>
                <span> * CISCO - CyberSecurity</span><br></br>
                <span> * INFOSYS - Ethical Hacking , Serverless Computing</span><br></br>
                <span> * AI 900 - Microsoft Azure AI Fundamendals</span><br></br>
                <span> * Internet of Things</span><br></br>
                <span> * NPTEL - DBMS , Desigh Thinking</span><br></br>
                <span> * CCNA: Enterprise Networking, Security, and Automation</span>
                </i>
              </p>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <img
                src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
                alt=""
              />
            </div>
            {/* Additional images as needed */}
          </div>
        </div>
      </div>
      <div className="nature-section">
        <div className="nature-close hover-target" />
        <div className="container">
        <center>
      <h1 style={{fontFamily : 'revert-layer', fontSize : '300%'}}><b> SKILLS </b></h1>
      </center>
      <br>
      </br>
          <div className="row justify-content-center">
          <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
        padding: '1rem',
        height: '5rem',
        width: '5rem',
        backgroundColor: '#404040',
        color: '#24c6b6',
        border: '5px solid #bababa',
        borderRadius: '100%',
        fontSize: '1.2rem'
      }}>
        
        <p>&lt;JAVA&gt;</p>
      </div>
     
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '1rem',
      padding: '1rem',
      height: '5rem',
      width: '5rem',
      backgroundColor: '#404040',
      color: '#24c6b6',
      border: '5px solid #bababa',
      borderRadius: '100%',
      fontSize: '1.2rem'
    }}>
      <p>&lt;HTML&gt;</p>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '1rem',
      padding: '1rem',
      height: '5rem',
      width: '5rem',
      backgroundColor: '#404040',
      color: '#24c6b6',
      border: '5px solid #bababa',
      borderRadius: '100%',
      fontSize: '1.2rem'
    }}>
        <p>CSS{'{'}{'}'}</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
        padding: '1rem',
        height: '5rem',
        width: '5rem',
        backgroundColor: '#404040',
        color: '#24c6b6',
        border: '5px solid #bababa',
        borderRadius: '100%',
        fontSize: '1.2rem'
      }}>
        <br></br>
        <br></br>
        <p>AWS-Cloud</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
        padding: '1rem',
        height: '5rem',
        width: '5rem',
        backgroundColor: '#404040',
        color: '#24c6b6',
        border: '5px solid #bababa',
        borderRadius: '100%',
        fontSize: '1.2rem'
      }}>
        <p>&lt;Spring Boot(API)&gt;</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
        padding: '1rem',
        height: '5rem',
        width: '5rem',
        backgroundColor: '#404040',
        color: '#24c6b6',
        border: '5px solid #bababa',
        borderRadius: '100%',
        fontSize: '1.2rem'
      }}>
        <p> GIT</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
        padding: '1rem',
        height: '5rem',
        width: '5rem',
        backgroundColor: '#404040',
        color: '#24c6b6',
        border: '5px solid #bababa',
        borderRadius: '100%',
        fontSize: '1.2rem'
      }}>
        <p> My SQL(DBMS)</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
        padding: '1rem',
        height: '5rem',
        width: '5rem',
        backgroundColor: '#404040',
        color: '#24c6b6',
        border: '5px solid #bababa',
        borderRadius: '100%',
        fontSize: '1.2rem'
      }}>
        <p>REACT</p>
        
      </div>
    </div>
    <div> 
    <center>
      <h1 style={{fontFamily : 'revert-layer', fontSize : '300%'}}><b> EXPERIENCE </b></h1>
      <p> Prodigy InfoTech - Remote (1st August - 31st August)---> Web Development Intern </p> 
        <p>Academic Projects (Full stack Web Development , Front-End Development and Console Applications)
      </p>
      
      </center>
    </div>
            
            {/* Additional images as needed */}
          </div>
        </div>
      </div>
      <div className="cursor" id="cursor" />
      <div className="cursor2" id="cursor2" />
      <div className="cursor3" id="cursor3" />
      <a href="http://www.ivang-design.com/svg-load/portfolio/">
        ivang-design.com
      </a>
      </center>
    </div>
  );
};

export default Portfolio;