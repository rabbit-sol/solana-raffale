import styled from "styled-components";
import Button from "@mui/material/Button";
import "./App.css";

export const CTAButton = styled(Button)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`; // add your own styles here

export const Card = () => {



  return (
    <div>
      <div className="relative">
        <div className="corner">
          <button className="wishlist">
            <a href="https://twitter.com/SushiesThe" rel="noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="wishlistImg">
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
              </path>
            </svg>
            </a>
            </button>
        </div>

        <div className="maindiv">
          <h4 className="info">FP: 1.36</h4>
          <h4 className="info">TTV: 1.65</h4>
        </div>
        <div >
          <img className="raffaleimage" src="https://pbs.twimg.com/media/FojPwA4XsAQqoe7?format=jpg&name=large" loading="lazy"/>
            </div>
        </div>



      </div>
      );
};


