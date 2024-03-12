import "./ListaSuspensa.css";
import React from "react";

interface ListaSuspensaProps {
  aoAlterado: (valor: string) => void;
  valor: string;
  label: string;
  obrigatorio: boolean;
  itens: string[];
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
