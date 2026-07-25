import { html, css, LitElement } from 'lit';

export class Pokemon extends LitElement {

    static properties = {
        pokemon: { type: Object},
        pokemon1: { type: Array}
    };

    constructor(){
        super();
        this.pokemon = null;
        this.pokemons = [];
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

        </div>
        
        `;
    }

}