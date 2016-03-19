import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { Card } from 'components';

export default class Hand extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(List),
    playCard: PropTypes.func.isRequired,
  }

  render() {
    const { cards, playCard } = this.props;
    const styles = require('./Hand.scss');

    const cardList = cards.map((card, index) => (
      <Card card={card} key={card.uniqId} index={index} onCardClick={playCard} />
    ));

    return (
      <div className={styles.Hand}>
        { cardList }
      </div>
    );
  }
}
