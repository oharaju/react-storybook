import { Container, Details, Summary, Resume }  from './styles.js';
import { PropTypes } from 'prop-types';

export default function Accordion ( { title, list } )  {
  return(
    <Container>
      <h2>{title}</h2>
      {list.map((item) => 
        <Details key={item.subtitle}>
          <Summary>{item.subtitle}</Summary>
          <Resume>{item.resume}</Resume>
        </Details>
      )}
    </Container>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  list : PropTypes.arrayOf(PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired
  }))
}
