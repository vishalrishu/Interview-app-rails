let EditInterview = {
    render : async () => {
        let view =  /*html*/`
        <h1>Edit Interview</h1>
        <div class="container">
        <form id="interview_create">
            <div class="form-group">
              <label for="Desc">Description</label>
              <input class="form-control" type="text" name="desc" id="description">
            </div>
            <div class="form-group">
                <label for="starttime">Start time</label>
                <input type="datetime-local" name="start_time" class="form-control" id="start_time">
            </div>
            <div class="form-group">
                <label for="endtime">End time</label>
                <input type="datetime-local" name="end_time" class="form-control" id="end_time">
            </div>
            <div class="form-group">
                <label for="participants">Participants</label>
                <input type="checkbox" id="participant" name="partcipant_id" value="Participant">
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