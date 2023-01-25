import Contactform from "../../components/Contactform/Contactform";
import "./Contact.css"


const Contact = () => {
  return (
    <div className="Contact">     
    <div className="Contact-intro">
      <h3>Vous souhaitez me contacter ? Rien de plus simple : vous pouvez m'envoyer un message via ce formulaire. 👇</h3>
    </div>            
        <Contactform />           
    </div>
  );
}

export default Contact;