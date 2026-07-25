import { html, css, LitElement } from 'lit';

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

    static styles = css`
        .container{
            max-width:700px;
            margin:auto;
            padding: 20px;
        }

        input{
            padding: 8px;
        }

        button{
            padding: 8px 15px;
            margin-left: 5px;
            cursor : pointer;

        }

        .card{
            margin-top: 20px;
            border: 1px solid red;

            padding:20px;
            border-radius: 10px;
            text-align: center;
        }

        table{
            width: 100%;
            margin-top: 20px;
        }

        td,th{
            border: 1px solid blue;
            padding:8px;
        }
    `;

    render(){
        return html`
        <div class= "container">
            <h2>Pokedex</h2>
            <input id="txtPokemon" placeholder="Nombre">
            <button @click=${this.buscarPokemon}>Buscar</button>
            <button @click=${this.buscarAleatorio}> Busqueda Aleatoria </button>
            ${this.pokemon ? html`
            <div class="card">
              <h2>${this.pokemon.name}</h2>
              <img src="${this.pokemon.sprites.front_default}"
                      alt="${this.pokemon.name}">
                      <p>ID: ${this.pokemon.id}</p>
                      <p>Altura: ${this.pokemon.height}</p>
                      <p>Peso: ${this.pokemon.weight}</p>
                      <button @click=${this.agregarPokemon}>Agregar</button>
                      <button @click=${this.mostrarDetalle}>Mas información</button>

            </div>
            ` : ""}

            <h2>Equipo Pokemon</h2>

            <table>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>ID</th>
              </tr> 
              ${this.pokemon1.map(p => html`
                <tr> 
                  <td>
                      <img width="60" src="${p.sprites.front_default}">
                  </td>
                  <td>${p.name}</td>
                  <td>${p.id}</td>

                </tr>
                
              `)}
            </table>

        </div>
        
        `;
    }

}
