import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useLanguage } from "../../LanguageContext";

export function Experience() {
  const { t } = useLanguage();
  
  return (
    <Container id="experience">
      <h2>{t.experienceTitle}</h2>
      <div className="experience-items">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="experience-item">
            <div className="experience-icon">💼</div>
            <div className="experience-content">
              <h3>{t.experienceTitle1}</h3>
              <p className="company">{t.experienceDesc1}</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="experience-item">
            <div className="experience-icon">💼</div>
            <div className="experience-content">
              <h3>{t.experienceTitle2}</h3>
              <p className="company">{t.experienceDesc2}</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
