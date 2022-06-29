import React, {useState} from 'react';
import './css/CheckoutFormShipping.css';

function CheckoutFormShipping() {
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [fullName, setFullName] = useState('');
  const [cpf, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  return (
      <div className="info-shipping">
        <h2>Informações para envio</h2>
        <div className="item-form">
          <label htmlFor="zipcode">
            CEP:
            <input type="text" name="zipcode" id="zipcode" value={zipcode} className="cep" />
          </label>
        </div>

        <div className="item-form">
          <label htmlFor="state">Estado: </label>
          <select name="state" id="state" value={state} className="state">
            <option value="ac" defaultValue>
              Acre
            </option>
            <option value="al">Alagoas</option>
            <option value="am">Amazonas</option>
            <option value="ap">Amapá</option>
            <option value="ba">Bahia</option>
            <option value="ce">Ceará</option>
            <option value="df">Distrito Federal</option>
            <option value="es">Espírito Santo</option>
            <option value="go">Goiás</option>
            <option value="ma">Maranhão</option>
            <option value="mt">Mato Grosso</option>
            <option value="ms">Mato Grosso do Sul</option>
            <option value="mg">Minas Gerais</option>
            <option value="pa">Pará</option>
            <option value="pb">Paraíba</option>
            <option value="pr">Paraná</option>
            <option value="pe">Pernambuco</option>
            <option value="pi">Piauí</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="rn">Rio Grande do Norte</option>
            <option value="ro">Rondônia</option>
            <option value="rs">Rio Grande do Sul</option>
            <option value="rr">Roraima</option>
            <option value="sc">Santa Catarina</option>
            <option value="se">Sergipe</option>
            <option value="sp">São Paulo</option>
            <option value="to">Tocantins</option>
          </select>
        </div>

        <div className="item-form">
          <label htmlFor="district">Bairro:</label>
          <input
            type="text"
            name="district"
            id="district"
            value={district}
            className="district"
          />
        </div>

        <div className="item-form">
          <label htmlFor="city">Cidade:</label>
          <input type="text" name="city" id="city" value={city} className="city" />
        </div>

        <div className="item-form">
          <label htmlFor="address">Endereço: </label>
          <input type="text" name="address" id="address" value={address} className="address" />
        </div>

        <div className="item-form">
          <label htmlFor="complement">Complemento:</label>
          <input
            type="text"
            name="complement"
            id="complement"
            value={complement}
            className="complement"
          />
        </div>

        <div className="item-form">
          <label htmlFor="number">Número:</label>
          <input type="text" name="number" id="number" value={number} className="number" />
        </div>

        <div className="item-form">
          <label htmlFor="fullname">Nome Completo: </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullName}
            className="fullname"
          />
        </div>

        <div className="item-form">
          <label htmlFor="cpf">CPF:</label>
          <input type="text" name="cpf" id="cpf" value={cpf} className="cpf" />
        </div>

        <div className="item-form">
          <label htmlFor="phone">Telefone: </label>
          <input type="text" name="phone" id="phone" value={phone} className="phone" />
        </div>

        <div className="item-form">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" value={email} className="email" />
        </div>
      </div>
  );
}

export default CheckoutFormShipping;
