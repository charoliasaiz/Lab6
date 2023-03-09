import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
  // Tabel referred from React Bootstrap
  // URL: https://react-bootstrap.github.io/components/table/
  // Date Accessed: 03/09/2023
  return (
    // Names generated from Squid
    // URL: https://squid.org/rpg-random-generator
    // Date Accessed: 03/09/2023
    <div className="container">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Stark</td>
          <td>Altar</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Guardian</td>
          <td>Scrub</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Deeping</td>
          <td>War</td>
        </tr>
	<tr>
          <td>4</td>
          <td>Abandoned</td>
          <td>Mark</td>
        </tr>
	<tr>
          <td>5</td>
          <td>Old</td>
          <td>Duchy</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default App;
