import {useState, React, useEffect} from 'react'
import DataTable from 'react-data-table-component'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Homepage = () => {

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonEdit = (e, row) => {
    setTitle(row.title);
    setYear(row.year);
    setShow(true);
  }

  const fnSubmit = () => {
    let baru = {
      title: title,
      year: year
    };
    setData([...data, baru]);
  }

  const get = () => {
    setColumns([
      {
        name: 'Title',
        selector: 'title',
        sortable: true,
      },
      {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
      },
      {
        name: "Actions",
        button: true,
        cell: (row) => (
            <Button
              variant="warning" onClick={(e) => handleButtonEdit(e, row)}
            >
                Edit
            </Button>
        ),
      }
    ]);
    setData([
      {
        title: 'Beetlejuice',
        year: '1988',
        id: 1
      },
      {
        title: 'Ghostbusters',
        year: '1984',
        id: 2
      },
      {
        title: 'Ghostbusters 2',
        year: '1989',
        id: 3
      },
    ]);
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <div className='container mt-5'>
      <Button variant="primary" onClick={handleShow}>
        Tambah Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" onChange={(e) => setYear(e.target.value)} value={year}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={fnSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
      />
    </div>
  )
}

export default Homepage;