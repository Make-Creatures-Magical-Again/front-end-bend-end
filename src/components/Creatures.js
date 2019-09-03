import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import MagicCreatures from '../container/MagicCreatures';

class Creatures extends Component {
  static propTypes = {
    creatures: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    console.log('creatures', this.props.creatures);
    const creatureElements = this.props.creatures.map(creature => (
      <p key={creature.name}>Name: {creature.name} ~ Magic Ability: {creature.magic} ~ Pretty: {creature.pretty}</p>
    ));

    return <ul>{creatureElements}</ul>;
  }
}


export default Creatures;
