import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  const history = useHistory();

  const handleOrderClick = () => {
    history.push("/order-pizza");
  };

  return (
    <div>
      <header>
        <a href="./">
          <img src={require("./Assets/logo.svg")} alt="" />
        </a>
        <p className="satisfy-text">fırsatı kaçırma</p>
        <p className="text" style={{ fontSize: "3rem" }}>
          KOD ACIKTIRIR
        </p>
        <p className="text" style={{ fontSize: "3rem" }}>
          PIZZA, DOYURUR
        </p>
        <button
          id="order"
          onClick={handleOrderClick}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          ACIKTIM
        </button>
      </header>
      <div className="svg-container">
        <nav>
          <a href="./">
            <img src={require("./Assets/adv-aseets/icons/1.svg")} alt="" />{" "}
            YENİ! Kore
          </a>
        </nav>
        <nav>
          <a href="./">
            <img src={require("./Assets/adv-aseets/icons/2.svg")} alt="" />
            Pizza
          </a>
        </nav>
        <nav>
          <a href="./">
            <img src={require("./Assets/adv-aseets/icons/3.svg")} alt="" />{" "}
            Burger
          </a>
        </nav>
        <nav>
          <a href="./">
            <img src={require("./Assets/adv-aseets/icons/4.svg")} alt="" />
            Kızartmalar
          </a>
        </nav>
        <nav>
          <a href="./">
            <img src={require("./Assets/adv-aseets/icons/5.svg")} alt="" /> Fast
            Food
          </a>
        </nav>
        <nav>
          <a href="./">
            <img src={require("./Assets/adv-aseets/icons/6.svg")} alt="" />
            Gazlı İçecek
          </a>
        </nav>
      </div>
      <div className="contents">
        <div className="contents-container">
          <div className="ozel">
            <h1>Özel Lezzetus</h1>
            <p>Position Absolute Acı Burger</p>
            <button
              id="order"
              onClick={handleOrderClick}
              style={{
                background: "white",
                color: "#CE2829",
                fontFamily: "Barlow",
              }}
            >
              SİPARİŞ VER
            </button>
          </div>
          <div className="hackathlon-kurye">
            <div className="hackathlon">
              <h2>Hackathlon Burger Menü</h2>
              <button
                id="order"
                onClick={handleOrderClick}
                style={{
                  background: "white",
                  color: "#CE2829",
                  fontFamily: "Barlow",
                }}
              >
                SİPARİŞ VER
              </button>
            </div>
            <div className="kurye">
              <h2
                style={{
                  paddingTop: "10%",
                  color: "#CE2829",
                  fontFamily: "Barlow",
                }}
              >
                Çoooook hızlı
              </h2>
              <h2>npm gibi kurye</h2>
              <button
                id="order"
                onClick={handleOrderClick}
                style={{
                  background: "white",
                  color: "#CE2829",
                  marginTop: "2%",
                  fontFamily: "Barlow",
                }}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <p
            style={{
              color: "#CE2829",
              fontFamily: "Satisfy",
              width: "100%",
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "0%",
            }}
          >
            en çok paketlenen menüler
          </p>
          <h4
            style={{
              color: "#292929",
              fontFamily: "Barlow",
              width: "100%",
              textAlign: "center",
              fontSize: "2.5rem",
              marginTop: "1%",
              marginBottom: "1%",
            }}
          >
            Acıktıran Kodlara Doyuran Lezzetler
          </h4>
          <div className="svg-button">
            <button onClick={handleOrderClick}>
              <a href="./">
                <img src={require("./Assets/adv-aseets/icons/1.svg")} alt="" />
                Ramen
              </a>
            </button>
            <button onClick={handleOrderClick}>
              <a href="./">
                <img src={require("./Assets/adv-aseets/icons/2.svg")} alt="" />
                Pizza
              </a>
            </button>
            <button onClick={handleOrderClick}>
              <a href="./">
                <img src={require("./Assets/adv-aseets/icons/3.svg")} alt="" />
                Burger
              </a>
            </button>
            <button onClick={handleOrderClick}>
              <a href="./">
                <img src={require("./Assets/adv-aseets/icons/4.svg")} alt="" />
                French fries
              </a>
            </button>
            <button onClick={handleOrderClick}>
              <a href="./">
                <img src={require("./Assets/adv-aseets/icons/5.svg")} alt="" />
                Fast food
              </a>
            </button>
            <button onClick={handleOrderClick}>
              <a href="./">
                <img src={require("./Assets/adv-aseets/icons/6.svg")} alt="" />
                Soft drinks
              </a>
            </button>
          </div>
          <div className="card-container">
            <div className="card" onClick={handleOrderClick}>
              <img src={require("./Assets/adv-aseets/food-1.png")} alt=""></img>
              <h5 style={{ color: "black" }}>Terminal Pizza</h5>
              <div className="card-price">
                <p style={{ color: "#5F5F5F" }}>4.9</p>
                <p style={{ color: "#5F5F5F" }}>(200)</p>
                <p style={{ color: "black", fontWeight: "bold" }}>60₺</p>
              </div>
            </div>
            <div className="card" onClick={handleOrderClick}>
              <img src={require("./Assets/adv-aseets/food-2.png")} alt=""></img>
              <h5 style={{ color: "black" }}>Position Absolute Acı Pizza</h5>
              <div className="card-price">
                <p style={{ color: "#5F5F5F" }}>4.9</p>
                <p style={{ color: "#5F5F5F" }}>(928)</p>
                <p style={{ color: "black", fontWeight: "bold" }}>85₺</p>
              </div>
            </div>
            <div className="card" onClick={handleOrderClick}>
              <img src={require("./Assets/adv-aseets/food-3.png")} alt=""></img>
              <h5 style={{ color: "black" }}>useEffect Tavuklu Burger</h5>
              <div className="card-price">
                <p style={{ color: "#5F5F5F" }}>4.9</p>
                <p style={{ color: "#5F5F5F" }}>(462)</p>
                <p style={{ color: "black", fontWeight: "bold" }}>75₺</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
