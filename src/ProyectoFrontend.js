import { html, css, LitElement } from 'lit';
import {styles} from "./style.js";

export class ProyectoFrontend extends LitElement {

      static properties = {
        pokemon: { type: Object},
        pokemon1: { type: Array},
        mostrarInfo: { type: Boolean}
    };

    constructor(){
        super();
        this.pokemon = null;
        this.pokemon1 = [];
        this.mostrarInfo = false;
    }

    //Metodos 
    async buscarPokemon(){
      const param = this.renderRoot.querySelector("#txtPokemon").value;

      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`);
      const datos = await respuesta.json();
      this.pokemon = datos;
      
    }

    agregarPokemon(){
      if(!this.pokemon) return;
      if(this.pokemon1.length >= 6){
        alert("Solo puedes tener 6 pokemon");
        return;
      }

      const existe = this.pokemon1.some(p => p.id === this.pokemon.id);
      if(existe){
        alert("Pokemon agregado, intenta con otro");
        return;
      }
      console.log(this.pokemon1);
      this.pokemon1 = [... this.pokemon1,this.pokemon];
    }

    mostrarDetalle(){
      this.mostrarInfo = !this.mostrarInfo;
    }

    async buscarAleatorio(){
      const numero = Math.floor(Math.random() * 150) + 1;

      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);

      const datos = await respuesta.json();

      this.pokemon=datos;
    }

    eliminarPokemon(id){
      this.pokemon1 = this.pokemon1.filter(pokemon => pokemon.id !== id);
    }

    //Estilos

    static styles = styles;
    
    //Render
    render(){
        return html`
            <div class="header">
              <h1>Pokédex</h1>
              <div class="search-bar">
                  <input id="txtPokemon" placeholder="Nombre o ID">
                  <button @click=${this.buscarPokemon}>
                      Buscar
                  </button>
                  <button @click=${this.buscarAleatorio}>
                      Busqueda Aleatoria
                  </button>
              </div>
          </div>

            ${this.pokemon ? html`
              <div class = "card">
                <div class="pokemon-image">
                  <h2>${this.pokemon.name.toUpperCase()}</h2>

                  <img 
                    src="${this.pokemon.sprites.front_default}"
                    alt="${this.pokemon.name}"
                    >
                </div>

                <div class="pokemon-info">
                
                <div class = "fila">
                  <span>ID</span>
                  <span>${this.pokemon.id}</span>
                </div>


                <div class = "fila">
                  <span>Altura</span>
                  <span>${this.pokemon.height}</span>
                </div>

                <div class = "fila">
                  <span>Peso</span>
                  <span>${this.pokemon.weight}</span>
                </div>

                
        ${this.mostrarInfo ? html`



            <div class="fila">
                <span>Tipo</span>
                <span>${this.pokemon.types[0].type.name}</span>
            </div>

            <div class="fila">
                <span>Habilidad</span>
                <span>${this.pokemon.abilities[0].ability.name}</span>
            </div>

        ` : ""}

                    <div class="botones">

                        <button @click=${this.agregarPokemon}>
                            Agregar
                        </button>

                        <button @click=${this.mostrarDetalle}>
                            ${this.mostrarInfo ? "Ocultar información" : "Más información"}
                        </button>

                    </div>
                </div>
              </div>

            ` : ""}

<section class="team-section">

    <h2>Equipo Pokémon</h2>

    ${this.pokemon1.length === 0
        ? html`
            <p class="empty-message">
                Ningún Pokemon Registrado.
            </p>
        `
        : html`
            <div class="table-container">

                <table class="pokemon-table">

                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${this.pokemon1.map(p => html`
                            <tr>
                                <td>
                                    <img
                                        class="team-image"
                                        src="${p.sprites.front_default}"
                                        alt="${p.name}"
                                    >
                                </td>

                                <td class="pokemon-name">
                                    ${p.name.toUpperCase()}
                                </td>

                                <td>#${p.id}</td>

                                <td>
                                    <button
                                        class="delete-button"
                                        @click=${() => this.eliminarPokemon(p.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        `)}
                    </tbody>

                </table>

            </div>
        `
    }

</section>

        </div>
        
        `;
    }

}
