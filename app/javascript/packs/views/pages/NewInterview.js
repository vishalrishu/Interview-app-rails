import Redirect from '../../services/Redirect.js';
let getParticipants = async() => {
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/participants`, options)
        const json = await response.json();
        return json;
    } catch(err) {
        console.log('Error getting data', err)
    }
}
let createInterview = async (interview) => {
    let data = {
        interview: {
        start_time: interview.start_time, 
        end_time: interview.end_time,
        description: interview.description,
        participant_ids: interview.participant_ids
        }
      };
    console.log(data);
    console.log("data");
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(`http://localhost:3000/interviews`, options);
        const json = await response.json();
        if(json.success){
            alert("Interview Created");
            // Redirect('/')
        }
        else{
            alert("Interview not Created");
        }
      } catch (err) {
        console.log(err);
      }
}

let NewInterview = {
    render : async () => {
        let participants = await getParticipants();
        let view =  /*html*/`
        <h1> Schedule Interview</h1>
        <div class="container">
            <form id="interview_create">
                <div class="form-group">
                  <label for="description">Description</label>
                  <input class="form-control" type="text" name="description" id="description">
                </div>
                <div class="form-group">
                    <label for="start_time">Start time</label>
                    <input type="datetime-local" name="start_time" class="form-control" id="start_time">
                </div>
                <div class="form-group">
                    <label for="end_time">End time</label>
                    <input type="datetime-local" name="end_time" class="form-control" id="end_time">
                </div>
                <div class="form-group">
                    <label for="participants">Participants</label>
                    ${ participants.map(p => 
                        /*html*/`
                        <input type="checkbox" id=${p.id} name="participant_id"  value=${p.id} >
                        <label for=${p.id}> ${p.name}</label><br>
                        
                        `
                        )
                    }
                </div>
        
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
               
            </form>
                <div class="text-center">
                    <a onclick = "window.location.href= '/#/'">
                    Interview List
                    </a>
                </div>
             
        </div>
         
        `
        return view
    }
    , after_render: async () => {
        const form = document.getElementById('interview_create');

        form.addEventListener('submit', event => {
            event.preventDefault();
            let interview = {};
            let participant_ids = [];
            Object.keys(form.elements).forEach(key => {
                let element = form.elements[key];
                if (element.type !== "submit") {
                    if(element.name == "participant_id")
                    {
                        if(element.checked == true)
                        {
                        participant_ids.push(element.value);
                        }
                    }
                    else{
                        interview[element.id] = element.value;
                    }
                }
                interview["participant_ids"] = participant_ids
              });
            console.log(interview);
            createInterview(interview);

          })
    }
}
export default NewInterview;