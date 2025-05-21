import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="https://drive.google.com/file/d/1si7n4_IrWnEqHF7xrjC5dRInRC-GhPPT/view?usp=sharing">See my Resume</a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
             <a className="icon" target="_blank" href={socialImg.url} key={socialImg.url} >
            
               
              <img  src={socialImg.imgPath} />
             
           
            </a>
        
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Nikhil Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;