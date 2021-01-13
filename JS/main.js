document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
  document.querySelector(".nav-list").addEventListener("click", e => {
    const el = e.target.parentNode;
    console.log(el);
    if (el.classList[0] === "nav-link") {
      el.nextElementSibling.classList.toggle("change");
      el.classList.toggle("change");
    }
  });
  
  function loading() {
    document.getElementsByClassName("loader")[0].style.display = "block";
    document.getElementsByClassName("backdrop")[0].style.display = "block";
  }

    function Loader(){
    modal.style.display = "block";   
  }

  var close = document.getElementsByClassName("close")[0];
  var element = document.getElementById("hat");
  element.addEventListener("click", function(e){
    e.preventDefault;
    element.classList.remove("hat-anime");
    void element.offsetWidth;
    element.classList.add("hat-anime");
  }, false);
  
  
