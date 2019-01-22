import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Initiator from '../../diagramElements/Initiator';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Updating = ({ advanced }) => (advanced ? (
  <Section advanced name="Updating" col={4} colspan={2}>
    <Initiator
      name="setAttribute()"
      docname="setstate"
      row={2}
      col={5}
    />
    <Arrow colspan={2} />
    <Method
      main
      name="attributeChangedCallback"
      docname="static-getderivedstatefromprops"
      type="upgrade"
      col={4}
      row={3}
      colspan={2}
    />
    <Arrow withAlt solid colspan={2} />
    <Method
      secondar
      name="custom render"
      type="custom"
      row={6}
      col={2}
      colspan={4}
    />
  </Section>
) : (
  <Section name="Updating" col={4} colspan={2}>
    <Initiator
      name="setAttribute()"
      docname="setstate"
      row={2}
      col={5}
    />
    <Arrow colspan={2} />
    <Method
      main
      name="attributeChangedCallback"
      docname="static-getderivedstatefromprops"
      type="upgrade"
      col={4}
      row={3}
      colspan={2}
    />
    <Arrow withAlt solid colspan={2} />
    <Method
      secondary
      name="custom render"
      type="custom"
      row={6}
      col={2}
      colspan={4}
    />
  </Section>
));

Updating.propTypes = {
  advanced: PropTypes.bool,
};

export default Updating;
