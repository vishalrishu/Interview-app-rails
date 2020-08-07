import Utils from "../../services/Utils";
import getParticipants from "../../services/getParticipants";
let updateInterview = async (interview) => {
    // console.log(JSON.stringify(interview))
    let data = {
        interview: {
        start_time: interview.start_time, 
        end_time: interview.end_time,
        description: interview.description,
        participant_ids: interview.participant_ids
        }
      };
    const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(`http://localhost:3000/interviews/`+interview.id, options);
        const json = await response.json();

        console.log(json)
        if(json.success){
         alert("Interview Updated");
        }
        else{
          alert("Interview not Updated");
        }
      } catch (err) {
        console.log(err);
      }
}

let getInterview = async (id) => {
    const options = {
       method: 'GET',
       headers: {
        'Content-Type': 'application/json',
       }
    };
    try {
       const response = await fetch(`http://localhost:3000/interviews/${id}`, options)
       const json = await response.json();
       console.log(json)
       return json
    } catch (err) {
       console.log('Error', err)
   }
}

let EditInterview = {
    render : async () => {
        let request = Utils.parseRequestURL();
        let id = request.id;
        let interview = await getInterview(id);
        // console.log(interview)
        // console.log("Interview")
        let participants = await getParticipants();
        // console.log(participants);
        var start_time = new Date(interview.start_time);
        // console.log(start_time);
        var end_time = new Date(interview.end_time);
        // console.log("Particiapnst");
        let view =  /*html*/`
        <h1>Edit Interview</h1>
        <div class="container">
        <form id="interview_create">
            <div class="form-group">
              <label for="Desc">Description</label>
              <input class="form-control" type="text" name="desc" id="description" value=${interview.description}>
            </div>
            <div class="form-group">
                <label for="starttime">Start time</label>
                <input type="datetime-local" name="start_time" class="form-control" id="start_time" value=${start_time}>
            </div>
            <div class="form-group">
                <label for="endtime">End time</label>
                <input type="datetime-local" name="end_time" class="form-control" id="end_time" value=${end_time}>
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
        let request = Utils.parseRequestURL()
        let id = request.id
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
            // console.log(interview);
            interview["id"] = id;
            updateInterview(interview);
    });
}
}

export default EditInterview;