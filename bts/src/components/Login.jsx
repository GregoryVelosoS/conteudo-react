import styles from "./Login.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Login = () => {
  return (
    <div className={styles.centro}>
      <Container>
        <Form>
          <span className={`material-symbols-outlined ${styles.iconForm}`}>
            tv_signin
          </span>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button variant="primary" type="submit" className={styles.btnmy}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
