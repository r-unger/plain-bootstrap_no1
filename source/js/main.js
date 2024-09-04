/* 
 * Custom JS functions
 */

window.addEventListener('load', fillGallery);

const initialDelay = 100;
const iterationDelay = 100;

// delay function to simulate a sluggish API response
function delayFor(duration){
    var now = new Date().getTime();
    while (new Date().getTime() < now + duration) { 
        /* Do nothing */ 
    }
}

const galleryJson = `
{
  "gallery": {
    "items": [
      {
        "id": 678,
        "name": "John Doe",
        "imgurl": "https://picsum.photos/id/678/300/200",
        "description": "Some intro about him"
      },
      {
        "id": 157,
        "name": "Diane Miller",
        "imgurl": "https://picsum.photos/id/157/300/200",
        "description": "Some intro about her"
      },
      {
        "id": 464,
        "name": "Jeff Done",
        "imgurl": "https://picsum.photos/id/464/300/200",
        "description": "Some intro about him"
      },
      {
        "id": 342,
        "name": "Jane Smith",
        "imgurl": "https://picsum.photos/id/342/300/200",
        "description": "Other intro about her"
      }
    ]
  }
}`;

function fillGallery() {

  const galleryObj = JSON.parse(galleryJson);
    // TODO: not yet error checking on the JSON object; it's still static
  const noOfItems = galleryObj["gallery"]["items"].length;

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
      let galItem = galleryObj["gallery"]["items"][i];
      let id = galItem["id"];
      let name = galItem["name"];
      let imgurl = galItem["imgurl"];
      let description = galItem["description"];
      
      let itemDiv = document.createElement("div");
      itemDiv.setAttribute("class", "col");
      let itemHTMLcode = `
              <div class="card shadow-sm" id="card_${id}">
                <img class="card-img-top"
                     src="${imgurl}"
                     alt="Picture of ${name}">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">
                    ${description}
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
        // composing the child elements piece by piece should be faster
        // than having a large string assigned to x.innerHTML;
        // however, working with a large string (as done here) is
        // easier to overview
      itemDiv.innerHTML = itemHTMLcode;
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
