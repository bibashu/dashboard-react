import React, { useEffect, useRef } from "react";
import { Trash, PenFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import profil from "../../assets/profil.png";
import 'bootstrap/dist/css/bootstrap.min.css';

// Importer bootstrap.bundle.min.js en utilisant require
const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

export function StudentSection({ listStudent }) {
  const modalRef = useRef();

  useEffect(() => {
    if (modalRef.current) {
      const modalInstance = new bootstrap.Modal(modalRef.current, {
        keyboard: false,
      });
      // Store the instance in the ref
      modalRef.current.modalInstance = modalInstance;
    }
  }, []);

  function ouvrirModal(){
    if (modalRef.current && modalRef.current.modalInstance) {
      modalRef.current.modalInstance.show();
    }
  }
  function ModalStudent(student){
    alert('oui') 
  }

  function ajoutStudent(e){
    e.preventDefault()
    alert('oui')
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-4 mb-3 px-4">
        <h4 className="fw-bold">Students List</h4>
        <button
          style={{
            background: "#FEAF00",
            border: "none",
            borderRadius: "5px",
            padding: "5px 15px",
            color: "white"
          }}
          onClick={ouvrirModal}
        >
          ADD NEW STUDENTS
        </button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Enroll Number</th>
            <th scope="col">Date of Admission</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {listStudent.map((student, id) => (
            <tr key={id}>
              <td className="gy-auto">
                <img
                  src={profil}
                  className="img-fluid w-50 rounded-2"
                  alt="Student profile"
                />
              </td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.phone}</td>
              <td>{student.website}</td>
              <td>
                <button>
                  <PenFill className={s.iconPen} onClick={() => ModalStudent(student)} />
                </button>
                <button>
                  <Trash className={s.iconTrash}  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ouvrir modal */}
      <div
        className="modal fade"
        id="AjoutModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ajout Students
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="nom" className="col-form-label">
                    Name:
                  </label>
                  <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="prenom" className="col-form-label">
                    Email:
                  </label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="col-form-label">
                    Phone:
                  </label>
                  <input type="number" className="form-control" id="age" />
                </div>
                <div className="mb-3">
                  <label htmlFor="note" className="col-form-label">
                    Enroll Number:
                  </label>
                  <input type="number" className="form-control" id="note" />
                </div>
                <button type="submit" id="submit" onClick={ajoutStudent} className="btn btn-success">
                  Ajouter
                </button>
                <button type="reset" className="btn btn-danger">
                  Effacer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modication students  */}
      <div
        className="modal fade"
        id="AjoutModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modifier Students
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="nom" className="col-form-label">
                    Name:
                  </label>
                  <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="prenom" className="col-form-label">
                    Email:
                  </label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="col-form-label">
                    Phone:
                  </label>
                  <input type="number" className="form-control" id="age" />
                </div>
                <div className="mb-3">
                  <label htmlFor="note" className="col-form-label">
                    Enroll Number:
                  </label>
                  <input type="number" className="form-control" id="note" />
                </div>
                <button type="submit" id="submit" onClick={ajoutStudent} className="btn btn-success">
                  Ajouter
                </button>
                <button type="reset" className="btn btn-danger">
                  Effacer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
