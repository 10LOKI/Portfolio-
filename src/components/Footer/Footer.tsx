import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Made with <span>❤️</span> using <img src={reactIcon} alt="React" />
        </p>
      </div>
    </Container>
  )
}
