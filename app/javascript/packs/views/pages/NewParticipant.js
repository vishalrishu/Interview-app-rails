import Redirect from '../../services/Redirect.js';

let createParticipant = async (participant) => {
    let data = {
      participant: {
      name: participant.name, 
      email: participant.email,
      address: participant.address,
      role: participant.role,
      pdf: participant.pdf
      }
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(`http://localhost:3000/participants`, options);
      const json = await response.json();
      if(json.success){
          alert("Participant Created");
      }
      else{
          alert("Participant not Created");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
let NewParticipant = {
    render : async () => {
        let view =  /*html*/`
            <h1> Create New Participant</h1>
            <div class="container">
            <form id="create_participant" >
                
                <label for="name">Name</label>
                <input class="form-control" type="text" name="name" id="name">
                
                <label for="email">Email Id</label>
                <input type="text" name="email" class="form-control" id="email">
            
                <label for="address">Address</label>
                <input type="text" name="address" class="form-control" id="address">
                
                <label for="pdf">Resume</label>
                <input class="form-control" type="file" name="pdf" id="pdf" accept="application/pdf">
              
                <label for="role">Choose a role:</label>
                <select name="role" id="role">
                    <option value="Interviewer" selected>Interviewer</option>
                    <option value="Interviewee">Interviewee</option>
                </select><br>
                <div class="button" id="button">
                    <button type="submit" name="submit" class="btn btn-primary">Submit</button>
                </div>
                
            </form>
                <div class="text-center">
                    <a onclick = "window.location.href= '/#/'">
                    Interview List
                    </a>
                    <a onclick = "window.location.href= '/#/participants'">
                    Participant List
                    </a>
                </div>
             
        </div>
        `
        return view
    }
    , after_render: async () => {
      const form = document.getElementById('create_participant');

      form.addEventListener('submit', event => {
          event.preventDefault();
          let participant = {};
          Object.keys(form.elements).forEach(key => {
              let element = form.elements[key];
              if (element.type !== "submit") {
                participant[element.id] = element.value;
              } 
            });
          
          console.log(participant);
          createParticipant(participant);
    })
  }
}

export default NewParticipant;