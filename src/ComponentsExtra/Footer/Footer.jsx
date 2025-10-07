import './Footer.css'

function Footer(){
    return(   
<footer>
      <div class="footer-content">
        <h3>Om denne siden</h3>
        <p>Denne siden er laget i et skoleprosjekt og er laget av Ask Emilio Helland. 
            Siste oppdatering: 30.08.2025
            Spørsmål? Ta kontakt her:  <li><a href="HTML/AboutMe.html">About Me</a></li></p>
            </div>
      <div class="footer-bottom">
        <p>copyright &copy;{new Date().getFullYear()}</p> 
      </div>
        </footer>
    );
}
export default Footer
