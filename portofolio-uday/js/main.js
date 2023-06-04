class Search {
  constructor() {
    this.searchInput = document.getElementById("search-input");
    this.searchForm = document.querySelector(".search-form");
    this.searchForm.addEventListener("submit", this.handleSearch.bind(this));
  }

  handleSearch(event) {
    event.preventDefault();
    const searchText = this.searchInput.value.toLowerCase();

    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      const projectTitle = project.querySelector("h3").textContent.toLowerCase();
      if (projectTitle.includes(searchText)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  }
}

const search = new Search();


function scrollToProjects() {
  const projectsElement = document.querySelector(".projects");
  projectsElement.scrollIntoView({ behavior: "smooth", block: "start" });
}


function toggleFlip(card) {
  card.classList.toggle('hover');
}


class TypedAnimation {
    constructor(elementId, texts) {
      this.textElement = document.getElementById(elementId);
      this.texts = texts;
      this.index = 0;
      this.isFinished = false;
    }
  
    typeText(text) {
      const length = text.length;
      let i = 0;
  
      const typingInterval = setInterval(() => {
        if (i === length) {
          clearInterval(typingInterval);
          if (this.index === this.texts.length - 1) {
            this.textElement.textContent = text;
            this.isFinished = true;
          } else {
            setTimeout(() => this.typeNextText(), 950);
          }
        }
  
        this.textElement.textContent += text.charAt(i);
        i++;
      }, 90); 
    }
  
    typeNextText() {
      this.index++;
      this.textElement.textContent = '';
      this.typeText(this.texts[this.index]);
    }
  
    startAnimation() {
      this.typeText(this.texts[this.index]);
    }
  }
  
  // Gebruik van de klasse
  const typedAnimation = new TypedAnimation('text', [
    "Hallo ik ben Uday,",
    "Ik ben een Ambitieuze Software Developer."
  ]);
  typedAnimation.startAnimation();
  

//cursor
// const cursor = document
//     .querySelector(".custom-cursor");
  
// Adding the animations when the
// mouse button is clicked
  
// window.addEventListener("mousedown", (event) => {
//     if (!cursor.classList.contains("click")) {
//         cursor.classList.add("click");
  
//         setTimeout(() => {
//             cursor.classList.remove("click");
//         }, 800);
//     }
// });
  
// Getting the position of the cursor
// window.addEventListener("mousemove", (event) => {
//     let x = event.pageX - cursor.offsetWidth / 2,
//         y = event.pageY - cursor.offsetHeight / 2;
  
//     cursor.style.left = `${x}px`;
//     cursor.style.top = `${y}px`;
// });


const rootElement = document.querySelector(":root");
const darkMode = document.getElementById('js--darkmode');


darkMode.checked = false;

darkMode.onchange = function () {

}

function myFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");
  }