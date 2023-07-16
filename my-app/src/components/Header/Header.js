import React from 'react';
import './header.sass'


const Header = () => {
  return (
    <div>
      <nav>
        <div className="homeNavContent myContainer">
          <div id="navContentLogoImg">
            <img src="../img/theatre-icon-8129-Windows.png" alt="Theatre Icon" />
            <a href="home.html">
              <h1>Theatre</h1>
            </a>
          </div>
          <div className="navContentMenu">
            <a href="home.html">MÖVSÜM22/23</a>
            <a href="repertuar.html">REPERTUAR</a>
            <div className="theatreList">
              <span className="listTitle">TEATR</span>
              <div className="tlist">
                <a href="theatr.html">TEATR HAQQINDA</a>
                <a href="operaHall.html">ZALIN SXEMİ</a>
              </div>
            </div>
            <div className="kollektivList">
              <span className="listTitle">KOLLEKTİV</span>
              <div className="kList">
                <a href="bediHeyet.html" target="_blank">BƏDİİ HEYƏT</a>
                <a href="baletTruppası.html">BALET TRUPPASI</a>
                <a href="vokalTruppası.html">VOKAL TRUPPASI</a>
                <a href="orchestra.html">ORKESTR</a>
              </div>
            </div>
            <a target="_blank" href="news.html">XƏBƏRLƏR</a>
          </div>
          <div className="navContentIcons">
            <a href="login.html"><i className="fas fa-user"></i></a>
            <a href="wishlist.html"><i className="fas fa-heart"></i></a>
            <a href="basket.html"><i className="fas fa-shopping-basket"></i></a>
          </div>
          <i id="icon" className="fas fa-bars"></i>
        </div>
        <div className="list">
          <div className="hanIcons">
            <i className="fas fa-user"></i>
            <a href="wishlist.html"><i className="fas fa-heart"></i></a>
            <i className="fas fa-shopping-basket"></i>
          </div>
          <a href="home.html" target="_blank">MÖVSÜM22/23</a>
          <a href="repertuar.html" target="_blank">REPERTUAR</a>
          <div className="theatreList">
            <span className="listTitle">TEATRIMIZ</span>
            <div className="tlist">
              <a href="theatr.html">TEATR HAQQINDA</a>
              <a href="operaHall.html">ZALIN SXEMİ</a>
            </div>
          </div>
          <div className="kollektivList">
            <span className="listTitle">KOLLEKTİV</span>
            <div className="kList">
              <a href="bediHeyet.html">BƏDİİ HEYƏT</a>
              <a href="baletTruppası.html">BALET TRUPPASI</a>
              <a href="vokalTruppası.html">VOKAL TRUPPASI</a>
              <a href="orchestra.html">ORKESTR</a>
            </div>
          </div>
          <a href="news.html">XƏBƏRLƏR</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
