let createParticipant = async (participant) => {
    let data = {
      name: participant.name, 
      email: participant.email,
      address: participant.address,
      role: participant.role
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const res = await fetch(`http://localhost:3000/participants`, options);
      location.hash = "/participants";
    } catch (err) {
      console.log(err);
    }
  };
  
let NewParticipant = {
    render : async () => {
        let view =  /*html*/`
            <h1> Create New Participant</h1>
            <div class="container">
            <form id="participant">
                
                <label for="name">Name</label>
                <input class="form-control" type="text" name="name" id="name">
                
                <label for="email">Email Id</label>
                <input type="text" name="email" class="form-control" id="email">
            
                <label for="address">Address</label>
                <input type="text" name="address" class="form-control" id="address">
                
                <label for="role">Choose a role:</label>
                <select name="role" id="role" form="carform">
                    <option value="Interviewer">Interviewer</option>
                    <option value="Interviewee">Interviewee</option>
                </select><br>
                <div class="button" id="btn">
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
        document.getElementById("btn").addEventListener("click", () => {
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            let address = document.getElementById("address");
            let role = document.getElementById("role");
            let participant = {
              name: name.value,
              email: email.value,
              address: address.value,
              role: role.value
            };
            createParticipant(participant);
          });
    },
};

export default NewParticipant;