import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";


const StuList = () => {
  
  const [list, setlist] = useState([]);

  useEffect(() => {
    getlist();
  }, []);

  const getlist = async () => {
    const response = await axios.get("http://localhost:5000/list");
    
    setlist(response.data);
  };

  const [show, setShow] = useState(false);
  
  const [id, setId] = useState();

  const handleClose = () => setShow(false);
  
  const deletelists = async (stuid) => {
    // await axios.delete(`http://localhost:5000/list/${id}`);
    // getlist();
   
    setShow(true)
    setId(stuid);
  };
    const deleteById = async () => {
      await axios.delete(`http://localhost:5000/list/${id}`);
      getlist();
     
      setShow(false)
    };

  return (
    <div>
      <div className="navbar"> Student management system</div>
      <div className="addnew">
        <Form.Control
          size="sm"
          className="input"
          type="text"
          placeholder="search"
          style={{ width: "20%" }}
        />
        <Link to="/add" class="text-dark">
          <button
            style={{ borderRadius: "100px", width: "10%" }}
            type="button"
            class="btn btn-dark"
          >
            ADD
          </button>
        </Link>{" "}
      </div>
      <div className="bg">
      <Modal show={show} onHide={handleClose} >
      <div className="body">
        <Modal.Body>
           <div className="specialP"> 
        <p>Are you sure you want to</p>
         <p>Delete</p> 
         </div> 
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          {'                    '}
          <Button variant="outline-dark" onClick={deleteById}>
            Yes
          </Button>
         </Modal.Body>
        
          </div>
      </Modal>
      </div>
           <Table responsive>
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Location</th>
              <th scope="col">email</th>
              <th scope="col">DOB</th>
              <th scope="col">Education</th>
              <th scope="col">Actions</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {list.map((lists, index) => (
              <tr key={lists.id}>
                <td>{index + 1}</td>
                <td>{lists.firstname}</td>
                <td>{lists.lastname}</td>
                <td>{lists.location}</td>
                <td>{lists.email}</td>
                <td>{lists.dob}</td>
                <td>{lists.education}</td>
                <td>
                  <div className="editt">
                    <Link to={`/edit/${lists.id}`} class="text-success">
                      <button className="btn btn-success">Edit</button>
                    </Link>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => deletelists(lists.id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Table>
    </div>
  );
};

export default StuList;
