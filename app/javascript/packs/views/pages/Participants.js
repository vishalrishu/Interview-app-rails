import Redirect from "../../services/Redirect";

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

window.deleteParticipant = async (id) => {
    const confirm = window.confirm("Are you sure? ");
    if(confirm){
         const options = {
             method: 'DELETE',
             headers: {
              'Content-Type': 'application/json',
             }
         };
         try {
             const response = await fetch(`http://localhost:3000/participants/${id}`, options)
             const json = await response.json();
             console.log(json)
             if(json.success){
              alert('DELETED');
              location.reload();
             }
             else{
              alert('Not deleted');
             }
             return json
         } catch (err) {
             console.log('Error getting documents', err)
         }
    }
}

let Participants = {
    render : async () => {
        let participants = await getParticipants();
        let view =  /*html*/`
            <section class="section">
                <h1> Participants </h1>
                <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Role</th>
          </tr>
        </thead>
    
        <tbody>
        ${ participants.map(p =>
            `
            <tr>
                <td> ${p.name} </td>
                <td> ${p.email} </td>
                <td> ${p.address} </td>
                <td> ${p.role} </td>
                <td><a class="navbar-item" onclick="deleteParticipant(${p.id})">  Delete </a></td>
            </tr>
            `)
        }
        </tbody>
      </table>
            </section>
            
            <div class="text-center">
                <a onclick = "window.location.href= '/#/'">
                Interview List
                </a>
            </div>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Participants;