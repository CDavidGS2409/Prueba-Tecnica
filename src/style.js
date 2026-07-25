import {css} from "lit";

export const styles = css`

:host {
    display: block;
    min-height: 100vh;
    background: #8d8d8d;
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    width: min(1100px, calc(100% - 40px));
    margin: 0 auto;
    padding: 40px 0;

    display: flex;
    flex-direction: column;
    gap: 35px;
}
.card{

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:40px;

    background: #8D9296;

    padding:25px;

    border-radius:20px;

    box-shadow:0 8px 18px rgba(0,0,0,.2);

    margin:25px 0;
}

.pokemon-image{

    text-align:center;

    width:40%;

}

.pokemon-info{

    width:60%;

}

.fila{

    display:flex;

    justify-content:space-between;

    padding:12px;

    border-bottom:1px solid #ddd;

}

.fila span:first-child{

    font-weight:bold;

}

.botones{

    display:flex;

    gap:15px;

    margin-top:20px;

}

button{
    background: red;
    color: white;
}

.team-section {
    width: 100%;
    margin: 38px auto 0;
    padding: 28px;

    background: #8D9296;
    border-radius: 20px;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
}

.team-section h2 {
    margin: 0 0 24px;
    text-align: center;
    font-size: 28px;
}

.table-container {
    width: 100%;
    overflow-x: auto;
    border-radius: 14px;
}

.pokemon-table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    background: #8D9296;
}

.pokemon-table thead {
    background: #dc2626;
    color: #ffffff;
}

.pokemon-table th,
.pokemon-table td {
    padding: 14px 18px;
    text-align: center;
    vertical-align: middle;
}

.pokemon-table th {
    font-size: 15px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
}

.pokemon-table tbody tr {
    border-bottom: 1px solid #e5e7eb;
    transition:
        background 0.2s ease,
        transform 0.2s ease;
}

.pokemon-table tbody tr:last-child {
    border-bottom: none;
}

.pokemon-table tbody tr:hover {
    background: #f8fafc;
}

.team-image {
    width: 72px;
    height: 72px;
    object-fit: contain;
    image-rendering: pixelated;
    transition: transform 0.2s ease;
}

.pokemon-table tbody tr:hover .team-image {
    transform: scale(1.15);
}

.pokemon-name {
    font-weight: 700;
    letter-spacing: 0.5px;
}

.delete-button {
    padding: 9px 16px;
    border: none;
    border-radius: 8px;

    background: #dc2626;
    color: #ffffff;

    font-weight: 700;
    cursor: pointer;

    transition:
        background 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.delete-button:hover {
    background: #991b1b;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(153, 27, 27, 0.25);
}

.empty-message {
    margin: 0;
    padding: 28px;

    background: #f8fafc;
    border: 2px dashed #cbd5e1;
    border-radius: 14px;

    text-align: center;
    color: #64748b;
}

.header{

    display:flex;

    flex-direction:column;

    align-items:center;

    margin-bottom:35px;

}

.header h1{

    font-size:48px;

    color:#dc2626;

    margin-bottom:25px;

    letter-spacing:2px;

}

.search-bar{

    display:flex;

    gap:12px;

    align-items:center;

}

.search-bar input{

    width:320px;

    padding:12px;

    border-radius:10px;

    border:1px solid #ccc;

    font-size:16px;

}

.search-bar button{

    padding:12px 18px;

    border:none;

    border-radius:10px;

    background:#dc2626;

    color:white;

    font-weight:bold;

    cursor:pointer;

}


`