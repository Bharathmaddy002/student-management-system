import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const EditList = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setemail] = useState("");
  const [dob, setDOB] = useState("");
  const [education, setEducation] = useState("");
  const [about,setAbout]=useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updatelists = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/list/${id}`, {
      firstname: firstname,
      lastname: lastname,
      location: location,
      email: email,
      dob: dob,
      education: education,
      about: about,
    }).then(() => {
        navigate("/");
    })
  };

  useEffect(() => {
    getlistsById();
  }, []);

  const getlistsById = async () => {
    const response = await axios.get(`http://localhost:5000/list/${id}`);
    setFirstName(response.data.firstname);
    setLastName(response.data.lastname);
    setLocation(response.data.location);
    setemail(response.data.email);
    setDOB(response.data.dob);
    setEducation(response.data.education);
    setAbout(response.data.about);
  };

  return (
    <div>
      <Container>
      <Form>
      <br/>
        <Row>
            <Col md={6} sm={6} xs={6}>
        <Form.Group className="mb-1" controlId="formFirstname">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            size="sm"
            className="input"
            type="text"
            placeholder="f-name"
            value={firstname}
            style={{width:"82%"}}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        </Col>
        <Col md={6} sm={6} xs={6}>
        <Form.Group className="mb-1" controlId="formLastname">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            size="sm"
            className="input"
            type="text"
            placeholder="L-name"
            value={lastname}
            style={{width:"82%"}}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        </Col>
        </Row>
        
        <Form.Group className="mb-1" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            size="sm"
            className="input"
            type="text"
            placeholder="location"
            value={location}
            style={{width:"40%"}}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="sm"
            className="input"
            type="text"
            placeholder="email"
            value={email}
            style={{width:"40%"}}
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formDOB">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            size="sm"
            className="input"
            type="text"
            placeholder="DATE OF BIRTH"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            style={{width:"40%"}}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formEducation">
          <Form.Label>Education</Form.Label>
          <Form.Control
            size="sm"
            className="input"
            type="text"
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            style={{width:"40%"}}
          />
        </Form.Group>
        <Form.Label>About</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" >
        
        <Form.Control
          as="textarea"
          value={about}
          placeholder="Leave a comment here"
          onChange={(e) => setAbout(e.target.value)}
          style={{ height: '100px',width:"40%" }}
        />
      </FloatingLabel>
        <br/>
        <div className="field">
          <button style={{borderRadius:"100px"}} type="button" class="btn btn-dark" onClick={updatelists}>
            submit
          </button>
        </div>
      </Form>
      </Container>
    </div>
  );
};

export default EditList;
