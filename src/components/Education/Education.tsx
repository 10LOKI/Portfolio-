import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useLanguage } from "../../LanguageContext";

export function Education() {
  const { t } = useLanguage();
  
  return (
    <Container id="education">
      <h2>{t.education}</h2>
      <div className="education-items">
        <ScrollAnimation animateIn="fadeInLeft">
          <div className="education-item">
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h3>{t.educationTitle1}</h3>
              <p className="institution">{t.educationDesc1}</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <div className="education-item">
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h3>{t.educationTitle2}</h3>
              <p className="institution">{t.educationDesc2}</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <div className="education-item">
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h3>{t.educationTitle3}</h3>
              <p className="institution">{t.educationDesc3}</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
