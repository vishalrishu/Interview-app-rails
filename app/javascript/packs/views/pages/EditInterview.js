import Utils from "../../services/Utils";
import getParticipants from "../../services/getParticipants";
let updateInterview = async (interview) => {
    console.log(JSON.stringify(interview))
    const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interview),
      };
      try {
        const response = await fetch(`http://localhost:3000/interviews/`+interview.id, options);
        const json = await response.json();

        console.log(json)
        if(json.success){
         alert("Interview Updated");
           Redirect('/')
        }
        else{
          alert("Interview not Updated");
        }
      } catch (err) {
        console.log(err);
      }
}

let selectParticipant =  async (participants, ids) =>{
    let list='';
    for( var i =0; i< ids.length;i++)
    {
        var flag=0;
        for(var j=0;j< participants.length;j++)
        {
            if(participants[j]==id[i])
            {
                flag=1;
            }
        }

        if(flag)
        {
            list+=  `<input type="checkbox" id=${id[i]} name="participant_id"  value=${id[i]} checked >
                  <label for=${id[i]}> ${participants[i].name}</label><br>`
        }
        else{

            list+=  `<input type="checkbox" id=${id[i]} name="participant_id"  value=${id[i]} >
                  <label for=${id[i]}> ${participants[i].name}</label><br>`

        }
    }
    return list;
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
        console.log(interview)
        console.log("Interview")
        let participants = await getParticipants();
        console.log(participants);
        let select_participants = await selectParticipant(participants, interview.participant_ids);
        console.log("Particiapnst");
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
                <input type="datetime-local" name="start_time" class="form-control" id="start_time" value=${interview.start_time}>
            </div>
            <div class="form-group">
                <label for="endtime">End time</label>
                <input type="datetime-local" name="end_time" class="form-control" id="end_time" value=${interview.end_time}>
            </div>
            <div class="form-group">
                <label for="interviewee">Interviewee</label>
                ${select_participants}
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
    }

}

export default EditInterview;