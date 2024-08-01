// Create a class for the element
class NavBar extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        this.innerHTML = `
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#/home">
              <img src="assets/images/logo.svg" height="30" class="d-inline-block align-top" alt="" loading="lazy">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul class="navbar-nav mr-auto mb-2 mb-md-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="#/home">Home</a>
                </li>
                <li class="nav-item">                  
                  <a class="nav-link" href="#/bio">Bio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/research">Research</a>
                </li>              
                <li class="nav-item">
                  <a class="nav-link" href="#/teaching">Teaching</a>
                </li>              
                <li class="nav-item">
                  <a class="nav-link" href="#/speaking">Speaking</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/podcast">Podcast</a>
                </li>               
              </ul>
            </div>
          </div>
        </nav>    
      `;
    }
}

// Define the new element
customElements.define('abel-navbar', NavBar);




