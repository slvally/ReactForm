import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Table} from 'react-bootstrap';
import { useState } from 'react';

function App() {
const [name, isinama] = useState("");
const [lahir, isilahir] = useState("");
const [pesan, isipesan] = useState("");
const [gender, isigender] = useState("");
const [agama, isiagama] = useState("");
const [show, tampil] = useState(false);
const [userinfo, setUserInfo] = useState({
  hobi: [],
  response: [],
});
  
const handleChange = (e) => {
  // Destructuring
  const { value, checked } = e.target;
  const { hobi } = userinfo;
  // Case 1 : The user checks the box
  if (checked) {
    setUserInfo({
      hobi: [...hobi, value],
      response: [...hobi, value],
    });
  }
  // Case 2  : The user unchecks the box
  else {
    setUserInfo({
      hobi: hobi.filter((e) => e !== value),
      response: hobi.filter((e) => e !== value),
    });
  }
};
const handleSubmit = (event) => {
  event.preventDefault();
}
return (
  <div className='container border p-4' id='myc'>
    <h1 className='text-center'>BIODATA</h1>
    <form onSubmit={handleSubmit}>
        <Form.Label >Nama Lengkap</Form.Label>
        <Form.Control
          type="text"
          placeholder='Nama Lengkap'
          onChange={(e) => isinama(e.target.value)}
        />
        <Form.Label className='mt-2'>Tanggal Lahir</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => isilahir(e.target.value)}
        />
    <Form>
    <Form.Label className='mt-2'>Jenis Kelamin</Form.Label>  
      {['radio'].map((type) => (
        <div key={`inline-${type}`}>
          <Form.Check
            inline
            label="Laki-Laki"
            value = "Laki-Laki"
            name="lahir"
            type={type}
            onChange = {(e) => isigender(e.target.value)}
          />
          <Form.Check
            inline
            label="Perempuan"
            value = "Perempuan"
            name="lahir"
            type={type}
            onChange = {(e) => isigender(e.target.value)}
          />
        </div>
      ))}
    </Form>
    <Form >
    <Form.Label className='mt-2' htmlFor="inputtanggal">Hobi</Form.Label>  
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`}>
          <Form.Check
            inline
            label="Ngoding"
            value = "Ngoding, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Rebahan"
            value = "Rebahan, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Melamun"
            value = "Melamun, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Baca Buku"
            value = "Baca Buku, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Nonton Youtube"
            value = "Nonton Youtube, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Dengerin Lagu"
            value = "Dengerin Lagu, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
          <Form.Check
            inline
            label="Other"
            value = "Other, "
            name="hobi"
            type={type}
            onChange = {handleChange}
          />
        </div>
      ))}
    </Form>
  <Form.Label className='mt-2' htmlFor="inputtanggal">Agama</Form.Label>
  <Form.Select aria-label="Default select example" onChange={(e) => isiagama(e.target.value)}>
    <option>Pilih Agama</option>
    <option value="Budha">Budha</option>
        <option value="Hindu">Hindu</option>
        <option value="Islam">Islam</option>
        <option value="Katolik">Katolik</option>
        <option value="Tao">Tao</option>
        <option value="Protestan">Protestan</option>
        <option value="Other">Other</option>
    </Form.Select>
    <Form.Group className="mt-2">
      <Form.Label>Pesan</Form.Label>
      <Form.Control as="textarea" rows={3} onChange={(e) => isipesan(e.target.value)}/>
    </Form.Group>
    <Button className='mt-4' type='submit' variant="primary" onClick={() => tampil(prev => !prev)}>Show Result</Button>{' '}{show &&
    <Table className='mt-4' responsive>
    <thead>
      <tr>
        <th>Label</th>
          <th >Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nama</td>
          <td >{name}</td>
      </tr>
      <tr>
        <td>Tanggal Lahir</td>
          <td>{lahir}</td>
      </tr>
      <tr>
        <td>Jenis Kelamin</td>
          <td>{gender}</td>
      </tr>
      <tr>
        <td>Hobi</td>
        <td>{userinfo.response}</td>
      </tr>
      <tr>
        <td>Agama</td>
          <td>{agama}</td>
      </tr>
      <tr>
        <td>Pesan</td>
          <td>{pesan}</td>
      </tr>
    </tbody>
  </Table>
    }
  </form>
  
</div>
);}

export default App;
