import React from "react";
import { Column, ColumnWrapper, FooterContainer } from "./footerElements";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterContainer>
      <ColumnWrapper>
        <Column>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </Column>

        <Column>
          <li>
            <h3>Our services</h3>
          </li>
          <li>Pricing</li>
          <li>Discount</li>
        </Column>

        <Column>
          <li>
            <h3>Our company</h3>
          </li>
          <li>About us</li>
          <div>
            <div className="media">
              <div className="icon">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <AiOutlineTwitter />
                </a>
              </div>
              <div className="icon">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://github.com/bart6g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </Column>
      </ColumnWrapper>
    </FooterContainer>
  );
};

export default Footer;
