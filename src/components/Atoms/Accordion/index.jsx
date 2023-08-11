import { Container, Details, Summary }  from './styles.js';
import { PropTypes } from 'prop-types';

export default function Accordion ( { subtitle, resume } )  {
  return(
    <Container>
      <h2>Hypertext Accordion</h2>
      <Details>
        <Summary>{subtitle}</Summary>
        <p>{resume}</p>
      </Details>
    </Container>
  )
}

Accordion.propTypes = {
  subtitle: PropTypes.oneOf(['Details', 'Features', 'Information', 'Specifications']),
  resume: PropTypes.string,
}