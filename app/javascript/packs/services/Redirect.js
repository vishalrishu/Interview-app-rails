import Error404 from "../views/pages/Error404.js";
import routes from "../app.js";



let Redirect = async (path) => {

    let parsedURL = path
    console.log("parsed url");
    console.log(parsedURL);
    var content;
    let page = routes[parsedURL] ? routes[parsedURL] : Error404

    location.hash = path;
    content.innerHTML = await page.render();

    await page.after_render();
}

export default Redirect;