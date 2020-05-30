"use strict";

import Error404     from './views/pages/Error404.js'
import Utils        from './services/Utils.js'
import ShowInterview from './views/pages/ShowInterview.js';
import Home from './views/pages/Home.js';
import NewInterview from './views/pages/NewInterview.js';
import EditInterview from './views/pages/EditInterview.js';
import Participants from './views/pages/Participants.js';
import NewParticipant from './views/pages/NewParticipant.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Home
    , '/interview/:id'      : ShowInterview
    , '/interview/:id/edit'   : EditInterview
    , '/new_interview'      : NewInterview
    , '/participants' : Participants
    , '/new_participant' : NewParticipant
    ,
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const content = null || document.getElementById('page_container');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()
    console.log(request);
    // debugger
    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");
    console.log("Parsed url");
    console.log(parsedURL);

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
