 
    // Create a App class
    class App 
    constructor() {
    this.notes = []
    // Use query selector
    this.$activeForm = document.querySelector(".active-form");
    this.$inactiveForm = document.querySelector(".inactive-form");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    
    this.addEventListeners();
    }
    
    addEventListeners() {
    document.body.addEventListener("click", (event) => {
    this.handleFormClick(event);
    })
    }handleFormClick(event){
    const isActiveFormClickedOn = this.$activeForm.contains(event.target);
    const isInactiveFormClickedOn = this.$inactiveForm.contains(event.target);
    
    if(isInactiveFormClickedOn) {
    this.openActiveForm();
    }
    else if(!isInactiveFormClickedOn && !isActiveFormClickedOn){
    this.closeActiveForm();
    }
    }
    
    openActiveForm() {
    this.$activeForm.style.display = "block";
    this.$inactiveForm.style.display = "none ";
    this.$noteText.focus();
    }
    
    closeActiveForm() {
    this.$activeForm.style.display = "none";
    this.$inactiveForm.style.display = "block ";
    }