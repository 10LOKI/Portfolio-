import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { useLanguage } from "../../LanguageContext";


export function Contact(){
  const { t } = useLanguage()

  return(
    <Container id="contact">
      <header>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText1}</p>
        <p>{t.contactText2}</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ayoubouharda33@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ayoubouharda33@gmail.com">ayoubouharda33@gmail.com</a>
        </div>
        <div>
        <a href="tel:+212684093893"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+212684093893">+212 684 093 893</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}