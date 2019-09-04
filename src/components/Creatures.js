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
    const creatureElements = this.props.creatures.map(creature => {
      const bool = creature.pretty ? 'true' : 'false';
      return <p key={creature.name}>Name: {creature.name} ~ Magic Ability: {creature.magic} ~ Pretty: {bool}</p>;
    });

    return <ul>{creatureElements}</ul>;
  }
}


export default Creatures;
