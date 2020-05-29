// --------------------------------
//  Define Data Sources
// --------------------------------
let getInterviews = async() => {
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/home`, options)
        const json = await response.json();
        return json;
    } catch(err) {
        console.log('Error getting data', err)
    }
}

let Home = {
    render : async () => {
        let interviews = await getInterviews();
        let view =  /*html*/`
        <section class="section">
        <h1> Interview List </h1>
        <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Start Time</th>
            <th>End Time </th>
          </tr>
        </thead>
    
        <tbody>
        ${ interviews.map(interview =>
            `
            <tr>
                <td> ${interview.description} </td>
                <td> ${interview.start_time} </td>
                <td> ${interview.end_time} </td>
                <td><a href="#">Edit</a></td>
                <td><a href="#">Delete</a></td>
            </tr>
            `)
        }
        </tbody>
      </table>
                <div class="text-center">
                    <a onclick = "window.location.href= '/#/interviews/new'">
                    Create new Interview
                    </a>
                </div>
                <div class="text-center">
                    <a onclick = "window.location.href= '/#/participants/new'">
                    Create new Participant
                    </a>
                </div>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;