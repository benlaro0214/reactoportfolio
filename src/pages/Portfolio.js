import React, { Component } from "react";
import quiz from "./quiz350.png"
import burger from "./burger350.png"
import notetaker from "./notetaker.png"
import passgen from "./passwordgen.png"
import teamo from "./teamo.png"
import reado from "./reado.png"
function Portfolio() {
  return (
 
   <div class="album py-5 ">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" src={quiz} alt="Card image cap"></img>

            <div class="card-body bg-dark">
              <p class="card-text">A simple quiz game made in Javascript. Can be extended to include more trivia and improved upon as well.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-outline-secondary active" href="https://benlaro0214.github.io/prestoquizzo/" role="button">Link</a>

                </div>
                
               </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" src={passgen} alt="Card image cap"></img>

            <div class="card-body bg-dark">
              <p class="card-text">This is a simple password generator made in Javascript. The user selects via prompt boxes the parameters desired for it.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-outline-secondary active" href="https://github.com/benlaro0214/pass0Gen0" role="button">Link</a>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" src={reado} alt="Card image cap"></img>

            <div class="card-body bg-dark">
              <p class="card-text">This README.md generator's purpose is to make it so that one can spin a quick, painless README.md. </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-outline-secondary active" href="https://github.com/benlaro0214/ReadoMedo" role="button">Link</a>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" src={teamo} alt="Card image cap"></img>

            <div class="card-body bg-dark">
              <p class="card-text">An application that takes in information about employees, then generates an HTML webpage with the results.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-outline-secondary active" href="https://github.com/benlaro0214/Team0Manag0" role="button">Link</a>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" src={notetaker} alt="Card image cap"></img>

            <div class="card-body bg-dark">
              <p class="card-text">A notepad app. This application uses an express backend and will save and retrieve note data from a JSON file.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-outline-secondary active" href="https://github.com/benlaro0214/NotreTaker01" role="button">Link</a>

                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" src={burger} alt="Card image cap"></img>

            <div class="card-body bg-dark">
              <p class="card-text">A burger eating app. It can be used as the basis for an actual Snackbar app (Not unlike then ones large chains use). </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-outline-secondary active" href="https://github.com/benlaro0214/snackobarro" role="button">Link</a>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Portfolio;


