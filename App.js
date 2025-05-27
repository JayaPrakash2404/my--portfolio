import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";
import MyProfile from "./images/my-profile-img.jpg";
import MyProfile1 from "./images/my-profile-img (1).jpg";
import Hero from "./images/hero-bg.jpg";
import App1 from "./images/app-1.jpg";
import Product1 from "./images/product-1.jpg";
import Branding1 from "./images/branding-1.jpg";
import Books1 from "./images/books-1.jpg";
import Product2 from "./images/product-2.jpg";
import App2 from "./images/app-2.jpg";
import App3 from "./images/app-3.jpg";
import Branding2 from "./images/branding-2.jpg";
import Books2 from "./images/books-2.jpg";
import Books3 from "./images/books-3.jpg";
import Branding3 from "./images/branding-3.jpg";
import Product3 from "./images/product-3.jpg";
import Testimonials1 from "./images/testimonials-1.jpg";
import Testimonials2 from "./images/testimonials-2.jpg";
import Testimonials3 from "./images/testimonials-3.jpg";
import Testimonials4 from "./images/testimonials-4.jpg";
import Testimonials5 from "./images/testimonials-5.jpg";
function App() {
  //   const fruits=['apple','banana','orange']
  //  fruits.map((fruits)=>{
  // console.log('fruits', fruits.toUpperCase())
  //   }
  //   )
console.dir (document.body)
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setDeepDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const portfolioItems = [
    {
      src: App1,
      category: "APP",
    },
    { src: Product1, category: "PRODUCT" },
    { src: Branding1, category: "BRANDING" },
    { src: Books1, category: "BOOKS" },
    { src: App2, category: "APP" },
    { src: Product2, category: "PRODUCT" },
    { src: Branding2, category: "BRANDING" },
    { src: Books2, category: "BOOKS" },
    { src: App3, category: "APP" },
    { src: Product3, category: "PRODUCT" },
    { src: Branding3, category: "BRANDING" },
    { src: Books3, category: "BOOKS" },
  ];
  const [showScroll, setShowScroll] = useState(false);

  const [previewImages, setPreviewImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (images, index = 0) => {
    setPreviewImages(images);
    setCurrentIndex(index);
  };

  const closePreview = () => {
    setPreviewImages([]);
    setCurrentIndex(0);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % previewImages.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? previewImages.length - 1 : prev - 1
    );
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  useEffect(() => {
    const roles = [
      "a Web Developer",
      "a UI/UX Designer",
      "a Freelancer",
      "a Designer",
      "an Innovator",
    ];
    const typedElement = document.querySelector(".typed-role");

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      if (typedElement) {
        typedElement.textContent = currentRole.substring(0, charIndex);
      }

      let delay = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        delay = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 500;
      }

      setTimeout(type, delay);
    };

    type();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const onClickImage = (image) => {
    console.log(image, "");
  };
  const filteredItems =
    filter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="container-fluid d-flex">
      <button className="hamburger-btn d-lg-none" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </button>
      <div className={`side-bar ${sidebarOpen ? "open" : ""}`}>
        {/* <div className="side-bar"> */}
        <div className="header">
          <div className="profile-img">
            <img
              src={MyProfile}
              alt="Profile"
              className="img-fluid rounded-circle w-50"
            />
          </div>
        </div>
        <a
          href="index.html"
          className="logo d-flex align-item-center mt-3 ms-4"
        >
          <h1 className="name">Alex Smith</h1>
        </a>
        <div className="social-links text-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bi bi-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#home" className="active">
                <i className="bi bi-house color-white"></i> Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bi bi-person"></i> About
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="bi bi-file-earmark-text"></i> Resume
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i className="bi bi-images"></i> Portfolio
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="bi bi-hdd-stack"></i> Services
              </a>
            </li>

            {/* Dropdown Menu */}
            <li className="dropdown">
              <a href="#!" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                <i className="bi bi-menu-button"></i>
                <span> Dropdown </span>
                <i
                  className={`bi bi-chevron-${
                    isDropdownOpen ? "up" : "down"
                  } toggle-dropdown`}
                ></i>
              </a>

              {/* Dropdown Items */}
              {isDropdownOpen && (
                <ul className="dropdown-active">
                  <li className="drop pt-4">
                    <a href="#!">Dropdown 1</a>
                  </li>

                  {/* Deep Dropdown */}
                  <li className="dropdown">
                    <a
                      href="#!"
                      onClick={() => setDeepDropdownOpen(!isDeepDropdownOpen)}
                    >
                      <span> Deep Dropdown </span>
                      <i
                        className={`bi bi-chevron-${
                          isDeepDropdownOpen ? "up" : "down"
                        } toggle-dropdown`}
                      ></i>
                    </a>

                    {isDeepDropdownOpen && (
                      <ul>
                        <li>
                          <a href="#!">Deep Dropdown 1</a>
                        </li>
                        <li>
                          <a href="#!">Deep Dropdown 2</a>
                        </li>
                        <li>
                          <a href="#!">Deep Dropdown 3</a>
                        </li>
                        <li>
                          <a href="#!">Deep Dropdown 4</a>
                        </li>
                        <li>
                          <a href="#!">Deep Dropdown 5</a>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <a href="#!">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#!">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#!">Dropdown 4</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#contact">
                <i className="bi bi-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div id="home" className="hero">
          <img src={Hero} alt="hero" className="img-fluid"></img>
          {/* <span className="cursor">|</span> */}
          <h2 className="hero-text">Alex Smith</h2>
          <p className="typewriter-text">
            I'm <span className="typed-role"></span>
          </p>
        </div>
        {/* About Section */}
        <div id="about" className="section">
          <div className="about" data-aos="fade-up">
            <h2 className="about-heading">About</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          {/* Person Detail */}
          <div className="row gy-4" data-aos="fade-up">
            <div className="col-lg-4 pt-4">
              <img
                src={MyProfile1}
                alt="Profile"
                className="img-fluid h-auto"
              />
            </div>
            <div className="col-lg-8 pt-4">
              <h2>UI/UX Designer & Web Developer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-chevron-right "></i>
                      <strong className="ms-2">Birthday:</strong>
                      <span className="ms-2">1 May</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-chevron-right "></i>
                      <strong className="ms-2">Website:</strong>
                      <span className="ms-2">www.example.com</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-chevron-right"></i>
                      <strong className="ms-2">Phone:</strong>
                      <span className="ms-2">+123 456 7890</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-chevron-right"></i>
                      <strong className="ms-2">City:</strong>
                      <span className="ms-2">New York, USA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-chevron-right"></i>
                      <strong className="ms-2">Age:</strong>
                      <span className="ms-2">30</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-chevron-right"></i>
                      <strong className="ms-2">Degree:</strong>
                      <span className="ms-2">Master</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-chevron-right "></i>
                      <strong className="ms-2">Email:</strong>
                      <span className="ms-2">email@example.com</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="bi bi-chevron-right"></i>
                      <strong className="ms-2">Freelance:</strong>
                      <span className="ms-2">Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
          {/* End Person Detail */}
          <div className="item" data-aos="fade-up">
            <div className="row gy-4  mt-4">
              <div className="col-lg-3 col-md-6">
                <div className="client-value ">
                  <i className="bi bi-emoji-smile fs-1 mb-3"></i>
                  <span className="counter">232</span>
                </div>

                <div className="happy1">Happy Clients</div>
                <div className="happy">consequuntur quae</div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="client-value ">
                  <i className="bi bi-journal-richtext fs-1 mb-3"></i>
                  <span className="counter">521</span>
                </div>

                <div className="happy1">Projects</div>
                <div className="happy">consequuntur quae</div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="client-value ">
                  <i className="bi bi-headset fs-1 mb-3"></i>
                  <span className="counter">1453</span>
                </div>

                <div className="happy1">Hours of support</div>
                <div className="happy">consequuntur quae</div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="client-value ">
                  <i className="bi bi-people fs-1 mb-3"></i>
                  <span className="counter">32</span>
                </div>

                <div className="happy1">Happy Clients</div>
                <div className="happy">consequuntur quae</div>
              </div>
            </div>
          </div>
          {/* <!--Skills--> */}

          <div className="item1">
            <div className="about" data-aos="fade-up">
              <h2 className="about-heading">Skills</h2>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="bar">
                  <div>HTML</div>
                  <div>100%</div>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar w-100"></div>
                </div>
                <div className="bar">
                  <div>CSS</div>
                  <div>90%</div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="CSS Progress"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>

                <div className="bar">
                  <div>JAVASCRIPT</div>
                  <div>75%</div>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="col-lg-6 w-50" data-aos="fade-up">
                <div className="bar">
                  <div>PHP</div>
                  <div>80%</div>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: "80%" }}></div>
                </div>
                <div className="bar">
                  <div>WORDPRESS/CMS</div>
                  <div>90%</div>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: "90%" }}></div>
                </div>
                <div className="bar">
                  <div>PHOTOSHOP</div>
                  <div>55%</div>
                </div>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: "55%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Skills End--> */}
          <div className="item">
            <div id="resume" className="about" data-aos="fade-up">
              <h2 className="about-heading">Resume</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
          </div>
          {/* <!--sumary--> */}
          <div className="item">
            <div className="row" data-aos="fade-up">
              <div className="col-lg-6">
                <h3 className="resume">Summary</h3>
                <div className="resume-item">
                  <h4>BRANDON JOHNSON</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Graphic Designer with 3+
                      years of experience designing and developing user-centered
                      digital/print marketing material from initial concept to
                      final, polished deliverable.
                    </em>
                  </p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>
                <h3 className="resume">Education</h3>
                <div className="resume-item">
                  <h4>Master of Fine Arts & GRAPHIC DESIGN</h4>
                  <h5>2015-2016</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend
                  </p>
                </div>
                <div className="resume-item">
                  <h4>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h4>
                  <h5>2010-2014</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto
                    quae reiciendis et quis Eius vel ratione eius unde vitae
                    rerum voluptates asperiores voluptatem Earum molestiae
                    consequatur neque etlon sader mart dila
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume">Professional Experience</h3>
                <div className="resume-item">
                  <h4>SENIOR GRAPHIC DESIGN SPECIALIST</h4>
                  <h5>2019-present</h5>
                  <p>
                    <em>Experion, New York, NY</em>
                  </p>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order
                      to ensure quality and accuracy of the design
                    </li>
                    <li>
                      Oversee the efficient use of production project budgets
                      ranging from $2,000 - $25,000
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>GRAPHIC DESIGN SPECIALIST</h4>
                  <h5>2017-2018</h5>
                  <p>
                    <em>Stepping Stone Advertising, New York, NY</em>
                  </p>
                  <ul>
                    <li>
                      Developed numerous marketing programs (logos,
                      brochures,infographics, presentations, and
                      advertisements).
                    </li>
                    <li>
                      Managed up to 5 projects or tasks at a given time while
                      under pressure
                    </li>
                    <li>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </li>
                    <li>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End sumary--> */}

          <div className="item1">
            <div id="portfolio" className="about" data-aos="fade-up">
              <h2 className="about-heading">Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>

              <div className="app">
                {["ALL", "APP", "PRODUCT", "BRANDING", "BOOKS"].map((cat) => (
                  <span
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={filter === cat ? "active" : ""}
                    style={{ cursor: "pointer", marginRight: "10px" }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {previewImages.length > 0 && (
                <div className="popup-backdrop" onClick={closePreview}>
                  <div
                    className="popup-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={previewImages[currentIndex].src}
                      alt="Preview"
                      className="img-fluid rounded"
                    />
                    <button className="popup-close" onClick={closePreview}>
                      ×
                    </button>
                    {previewImages.length > 1 && (
                      <>
                        <button className="popup-nav left" onClick={showPrev}>
                          ‹
                        </button>
                        <button className="popup-nav right" onClick={showNext}>
                          ›
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="row mt-4">
                {filteredItems.map((item, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div
                      className="portfolio-image"
                      onClick={() => handleImageClick(filteredItems, index)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={item.src}
                        className="img-fluid"
                        alt={item.category.toLowerCase()}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <!--sercives--> */}
          <div className="item">
            <div id="services" className="about" data-aos="fade-up">
              <h2 className="about-heading">Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-4 col-md-6 services d-flex">
              <div className="icons">
                <i className="bi bi-briefcase"></i>
              </div>
              <div>
                <h4 className="title">Lorem Ipsum</h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services d-flex">
              <div className="icons">
                <i className="bi bi-card-checklist"></i>
              </div>
              <div>
                <h4 className="title">Dolor Sitema</h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services d-flex">
              <div className="icons">
                <i className="bi bi-bar-chart"></i>
              </div>
              <div>
                <h4 className="title">Sed ut perspiciatis</h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services d-flex">
              <div className="icons">
                <i className="bi bi-binoculars"></i>
              </div>
              <div>
                <h4 className="title">Magni Dolores</h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services d-flex">
              <div className="icons">
                <i className="bi bi-brightness-high"></i>
              </div>
              <div>
                <h4 className="title">Nemo Enim</h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 services d-flex">
              <div className="icons">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <div>
                <h4 className="title">Eiusmod Tempor</h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
          </div>
          {/* <!--Testimonal-section--> */}
          <div className="item1">
            <div className="about" data-aos="fade-up">
              <h2 className="about-heading">Testimonials</h2>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>

            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
              data-bs-pause="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="content-box">
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid malis quorum velit fore
                        eram velit sunt aliqua noster fugiat irure amet legam
                        anim culpa.
                      </div>
                      <div className="testimonial-card">
                        <img
                          src={Testimonials1}
                          className="img-fluid"
                          alt="Testimonials1"
                        />
                        <div className="overlay">
                          <h5>Saul Goodman</h5>
                          <p>Ceo & Founder </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="testimonial-card">
                        <div className="content-box">
                          Proin iaculis purus consequat sem cure digni ssim
                          donec porttitora entum suscipit rhoncus. Accusantium
                          quam, ultricies eget id, aliquam eget nibh et. Maecen
                          aliquam, risus .
                        </div>
                        <img
                          src={Testimonials2}
                          className="img-fluid"
                          alt="Testimonial 2"
                        />
                        <div className="overlay">
                          <h5>Sara Wisson</h5>
                          <p>Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="testimonial-card">
                        <div className="content-box">
                          Enim nisi quem export duis labore cillum quae magna
                          enim sint quorum nulla quem veniam duis minim tempor
                          labore quem eram duis noster aute amet eram fore quis
                          sint minim.
                        </div>
                        <img
                          src={Testimonials3}
                          className="img-fluid"
                          alt="Testimonial 3"
                        />
                        <div className="overlay">
                          <h5>Jena Karalis</h5>
                          <p>Store Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="content-box">
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                      </div>
                      <i className="bi bi-quota quota-icon-right"></i>
                      <div className="testimonial-card">
                        <img
                          src={Testimonials1}
                          className="img-fluid"
                          alt="Testimonials1"
                        />
                        <div className="overlay">
                          <h5>Saul Goodman</h5>
                          <p>Ceo & Founder </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="content-box">
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid malis quorum velit fore
                        eram velit sunt aliqua noster fugiat irure amet legam
                        anim culpa.
                      </div>
                      <div className="testimonial-card">
                        <img
                          src={Testimonials2}
                          className="img-fluid"
                          alt="Testimonial 2"
                        />
                        <div className="overlay">
                          <h5>Sara Wisson</h5>
                          <p>Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="content-box">
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid malis quorum velit fore
                        eram velit sunt aliqua noster fugiat irure amet legam
                        anim culpa.
                      </div>
                      <div className="testimonial-card">
                        <img
                          src={Testimonials3}
                          className="img-fluid"
                          alt="Testimonial 3"
                        />
                        <div className="overlay">
                          <h5>Jena Karalis</h5>
                          <p>Store Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="content-box">
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid malis quorum velit fore
                        eram velit sunt aliqua noster fugiat irure amet legam
                        anim culpa.
                      </div>
                      <div className="testimonial-card">
                        <img
                          src={Testimonials1}
                          className="img-fluid"
                          alt="Testimonials1"
                        />
                        <div className="overlay">
                          <h5>Saul Goodman</h5>
                          <p>Ceo & Founder </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="content-box">
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid malis quorum velit fore
                        eram velit sunt aliqua noster fugiat irure amet legam
                        anim culpa.
                      </div>
                      <div className="testimonial-card">
                        <img
                          src={Testimonials4}
                          className="img-fluid"
                          alt="Testimonial 4"
                        />
                        <div className="overlay">
                          <h5>Sara Wisson</h5>
                          <p>Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="content-box">
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid malis quorum velit fore
                        eram velit sunt aliqua noster fugiat irure amet legam
                        anim culpa.
                      </div>
                      <div className="testimonial-card">
                        <img
                          src={Testimonials5}
                          className="img-fluid"
                          alt="Testimonial 5"
                        />
                        <div className="overlay">
                          <h5>Jena Karalis</h5>
                          <p>Store Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--contact section--> */}
          <div className="item">
            <div id="contact" className="about" data-aos="fade-up">
              <h2 className="about-heading">Contact</h2>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-5">
              <div className="contact">
                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>
                  <div>
                    <h3>Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>
                      <a href="tel:+1 5589 55488 55">+1 5589 55488 55</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019163365459!2d-122.41941568468158!3d37.77492977975917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c4d933b3f%3A0xf4f16114cc03f9e6!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1713358589051"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <div className="contact">
                <form className="row">
                  <div className="col-lg-6 mb-4">
                    <label htmlFor="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <label htmlFor="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-field"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject-field"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-4">
                    <label htmlFor="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message-field"
                      rows="10"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="col-lg-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="item1">
            <div className="footer text-center">
              <p>
                ©<span>copyright</span>
                <strong className="px-1 sitename">iPortfolio</strong>
                <span>All Rights Reserved </span>
              </p>
            </div>
            <div className="credits text-center">
              Designed by
              <a href="https://bootstrapmade.com"> BootstrapMade</a>
              Distributed by<a href="https://themewagon.com">ThemeWagon</a>
            </div>
            {/* <!--scroll top--> */}
            {showScroll && (
              <a
                href="#"
                id="scroll-top"
                className="scroll-top d-flex align-item-center justify-content-center active"
              >
                <i className="bi bi-arrow-up-short"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
