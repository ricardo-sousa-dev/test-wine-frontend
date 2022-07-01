import React,{useContext} from 'react';
import Context from '../../context/Context';
import './css/FilterAside.css';

export default function FilterAside() {
const{setFilterPrice} = useContext(Context);

  return (
    <div className="filter-aside">
      <h3>Refine sua busca</h3>
      <h4>Por preço</h4>
      <div className="radio-buttons" >
        <label>
          <input type="radio" name="price" value="1" onChange={(value)=> setFilterPrice(value)}/>
          Até R$40
        </label>
        <label>
          <input type="radio" name="price" value="2" onChange={(value)=> setFilterPrice(value)}/>
          R$40 A R$60
        </label>
        <label>
          <input type="radio" name="price" value="3" onChange={(value)=> setFilterPrice(value)}/>
          R$100 A R$200
        </label>
        <label>
          <input type="radio" name="price" value="4" onChange={(value)=> setFilterPrice(value)}/>
          R$200 A R$500
        </label>
        <label>
          <input type="radio" name="price" value="5" onChange={(value)=> setFilterPrice(value)}/>
          Acima de R$500
        </label>
      </div>
    </div>
  )
}