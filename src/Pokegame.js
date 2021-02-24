import React, { Component } from 'react'
import Pokedex from './Pokedex'
import './Pokegame.css'

class Pokegame extends Component {
    static defaultProps = {
        pokemons: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }
    render() {
        // console.log(this.props);
        const hand1 = [...this.props.pokemons]
        const hand2 = []
        while (hand1.length > hand2.length) {
            let randIdx = Math.floor(Math.random() * hand1.length)
            let randPokemon = hand1.splice(randIdx, 1)[0]
            hand2.push(randPokemon)
        }
        let sumHand1 = hand1.reduce((total, el) => el.base_experience + total, 0)
        let sumHand2 = hand2.reduce((total, el) => el.base_experience + total, 0)
        // console.log('sum', sumHand1, sumHand2);
        // console.log(this.props);
        return (
            <div>
                <h1 className="Pokegame-title">POKECARD!!</h1>
                <Pokedex pokemons={hand1} isWinner={sumHand1 > sumHand2} exp={sumHand1} />
                <Pokedex pokemons={hand2} isWinner={sumHand2 > sumHand1} exp={sumHand2} />
            </div>
        )
    }
}


export default Pokegame;