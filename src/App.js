import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper header">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div>
            <h1>BOATRIDE ADVENTURES</h1>
          </div>
          </div>
        </header>

        <section className="aboutUs">
          <div className="wrapper">
          <ul>
            <li>
              <div>
                <h2>NEW DESTINATIONS</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore aliquam ea nihil facilis culpa nemo modi neque iste. Magnam accusantium id vel saepe neque!</p>
              </div>
            </li>
            <li>
              <div>
                <h2>COMMUNITY</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus magni eius excepturi possimus atque, ex, debitis autem totam perferendis commodi iusto tempore doloremque consectetur.</p>
              </div>
            </li>
            <li>
              <div>
                <h2>BLOG</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime quidem atque nisi, nostrum fuga tempore, aperiam quo quasi asperiores ipsum dicta non delectus praesentium.</p>
              </div>
            </li>
            <li>
              <div>
                <h2>GET IN TOUCH</h2>
              </div>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi cupiditate fuga facere soluta ipsam aperiam. Totam temporibus culpa, laborum minima incidunt repudiandae. Nam, nostrum voluptates!</p>
              </div>
            </li>
          </ul>
          </div>
        </section>

        <section className="whatWeDo">
          <div className="wrapper">
            <div>

              <div>
                <img src="" alt=""/>
              </div>
              <div>
                <h2>OUR PROGRAMS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident maxime quis aliquid voluptatibus culpa nostrum? Dolor eius excepturi incidunt. Deleniti autem similique ratione! Deserunt?</p>
                <button>READ MORE</button>
              </div>

            </div>

            <div>
              
              <div>
                <h2>NEW LOCATIONS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident maxime quis aliquid voluptatibus culpa nostrum? Dolor eius excepturi incidunt. Deleniti autem similique ratione! Deserunt?</p>
                <button>READ MORE</button>
              </div>
              <div>
                <img src="" alt="" />
              </div>

            </div>

          </div>
        </section>

        <section className="timeOff">

          <div className="wrapper">
            <div>
              <h2>EXTRA VACATION DAYS?</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum perferendis qui assumenda repudiandae pariatur nisi! Tempora eius dolorem perferendis quis labore nisi asperiores laudantium quas culpa, facere molestiae amet voluptates fugiat nostrum molestias sit itaque. Sapiente consequuntur nisi necessitatibus quam, ullam modi facilis facere quod. Quam similique quibusdam perferendis aspernatur.</p>
              <button>FIND OUT MORE</button>
            </div>
          </div>

        </section>

        <section className="banner">
          {/* <img src={require("./assets/banner.jpg")} alt=""/> */}
        </section>

        <section className="prize">
          <div className="wrapper prizeMainContent">
            <div>
              <img src={require("./assets/small-box.jpg")} alt="Girl in hat looking at snowy mountains"/>
            </div>

            <div className="prizeInfo">
              <h2>WIN A TRIP OF A LIFETIME</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore laudantium dolorem! Eligendi natus perferendis similique harum, corrupti possimus quod nesciunt veritatis sequi aut blanditiis accusamus modi voluptatibus praesentium est laborum rem, repellendus magnam? Ab temporibus, consectetur delectus officiis atque ut, amet magnam optio id necessitatibus ex placeat officia! Quidem?</p>
              <button>FIND OUT MORE</button>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="wrapper">
            <ul>
              <li><img src={require("./assets/gallery-image-1.jpg")} alt="School playground"/></li>
              <li><img src={require("./assets/gallery-image-2.jpg")} alt="Kid hiding in school playground"/></li>
              <li><img src={require("./assets/gallery-image-3.jpg")} alt="Kids playing tug-of-war"/></li>
            </ul>
          </div>

        </section>

        <footer>
          <p>Copyright &copy; 2020</p>
        </footer>

      </div>
    );
  }
}

export default App;
