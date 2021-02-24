import React, { Component } from 'react';
import './Pokecard.css';


const URL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

class Pokecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnim: { opacity: 0, transform: 'translateX(-200px)' }
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ cardAnim: { opacity: 1 } })
    }, this.props.delay)
  }

  render() {
    const { name, type, exp, id } = this.props;
    let imgSrc = `${URL}${('000' + id).slice(-3)}.png`
    const bg = { background: `linear-gradient( hsl(${Number(360 / 51 * id)}, 100%, 80%) 20%, white 100%)` }
    return (
      <div className="Pokecard" style={{ ...bg, ...this.state.cardAnim }}>
        <h2 className="Pokecard-name" >{name}</h2>
        <div className="Pokecard-img">
          <img alt='pokemons' src={imgSrc} />
        </div>
        <div className="Pokecard-desc">
          <p className="Pokecard-desc-type">Type: {type}</p>
          <p className="Pokecard-desc-exp">EXP: {exp}</p>
        </div >
      </div >
    )
  }
}

export default Pokecard;