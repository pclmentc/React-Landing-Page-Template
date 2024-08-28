import { useState } from "react";
import emailjs from '@emailjs/browser';
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  category: "",
};

const categoryEmailMap = {
  debanissement: "pclmentc@gmail.com",// Ajoute l'adresse email appropriée si nécessaire
  partenariat: "pclmentc@gmail.com",// Ajoute l'adresse email appropriée si nécessaire
  autres: "pclmentc@gmail.com",// Ajoute l'adresse email appropriée si nécessaire
};

export const Contact = (props) => {
  const [{ name, email, message, category }, setState] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Déterminer l'adresse email en fonction de la catégorie
    const recipientEmail = categoryEmailMap[category] || "default@example.com";
    
    // Préparer les données pour EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      category: category,
      to_email: recipientEmail,
    };

    emailjs
      .send("service_8sb006b", "template_k06vjpg", templateParams, "A3bUCmXSMH6UOaLfu")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Nous contacter</h2>                
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nom"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <label htmlFor="category">Catégories :</label>
                  <select
                    name="category"
                    id="category"
                    className="form-control"
                    required
                    onChange={handleChange}
                    value={category}
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="debanissement">Débanissement</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autres">Autres</option>
                  </select>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg"
                disabled={!category}
                >                
                  {isSubmitted ? "Merci" : "Envoyer le message"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informations de contact</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresse
                </span>
                {props.data ? props.data.address : "chargement"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Téléphone
                </span>{" "}
                {props.data ? props.data.phone : "chargement"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "chargement"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>                  
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 TITANIA-GAMING, Design by{" "}
            <a href="https://pclmentc.github.io/Projet_12_clement_colas_pierre/" target="_blank" rel="noopener noreferrer">
              Pierre Clément-colas.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
