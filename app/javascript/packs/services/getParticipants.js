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
export default getParticipants;