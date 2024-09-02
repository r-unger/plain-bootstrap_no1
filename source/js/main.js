/* 
 * Custom JS functions
 */

window.addEventListener('load', fillGallery);

const initialDelay = 5000;
const iterationDelay = 1000;

// delay function to simulate a sluggish API response
function delayFor(duration){
    var now = new Date().getTime();
    while (new Date().getTime() < now + duration) { 
        /* Do nothing */ 
    }
}

const itemBlob = `
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top"
                     width="100%" height="225"
                     xmlns="http://www.w3.org/2000/svg"
                     role="img" aria-label="Placeholder: Thumbnail"
                     preserveAspectRatio="xMidYMid slice"
                     focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"/>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text
                    below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button"
                              class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button"
                              class="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                    </div>
                    <small class="text-body-secondary">
                      9 mins
                    </small>
                  </div>
                </div>
              </div>
`;

function fillGallery() {

  const noOfItems = 10;

  delayFor(initialDelay);
  if (noOfItems < 1) {
    // set a placeholder
    const gallery = document.getElementById("gallery");
    var messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "row py-lg-5");
    var oldDiv = gallery.firstElementChild;
      // I expect there only to be 1 child (or else the other ones are ignored)
    messageDiv.innerHTML = `
            <div class="col-lg-6 col-md-8 mx-auto">
              <p class="lead text-body-secondary">Nothing to see here...</p>
            </div>`;
    gallery.replaceChild(messageDiv, oldDiv);
  } else {
    // build up a new gallery
    const gallery = document.getElementById("gallery");
    var wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute(
            "class", "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3");
    var oldDiv = gallery.firstElementChild;
      // I expect there only to be 1 child (or else the other ones are ignored)
    gallery.replaceChild(wrapperDiv, oldDiv);

    for (let i = 0; i < noOfItems; i++) {
      delayFor(iterationDelay);
      var itemDiv = document.createElement("div");
      itemDiv.setAttribute("class", "col");
      itemDiv.innerHTML = itemBlob;
      wrapperDiv.appendChild(itemDiv);
    }
  }
}

function refreshGallery() {

  const noOfItems = 0;

  delayFor(initialDelay);
  if (noOfItems < 1) {
    // set a placeholder
    const gallery = document.getElementById("gallery");
    var messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "row py-lg-5");
    var oldDiv = gallery.firstElementChild;
      // I expect there only to be 1 child (or else the other ones are ignored)
    messageDiv.innerHTML = `
            <div class="col-lg-6 col-md-8 mx-auto">
              <p class="lead text-body-secondary">Nothing to see here...</p>
            </div>`;
    gallery.replaceChild(messageDiv, oldDiv);
  } else {
    // TODO
    // don't throw away the whole gallery and insert a new one,
    // but examine the individual items
  }
}