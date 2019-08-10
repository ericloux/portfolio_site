function gratuity() {
    let content = "";

    content += `
    <h3>
        About Eric Loux
    </h3>

    <p>
        As a former pizza delivery driver, one of the things that I would often do is keep a list of all the tips I made in a single night. 
        This was ostenibly for tax records, but the truth is that I just liked to see the data and compare where I was getting the best tips 
        during the night. Naturally, most of those receipts just ended up discarded on my floorboard at the end of my shift, but after 
        thinking about what I wanted my capstone project for Savvy Coders to entail, I remembered my tip lists and thought that I could turn 
        them into a nice project through the addition of some other features.
    </p>

    <p>
        Although the list was the primary function, I got so carried away that it was actually the last thing that I implemented. I decided 
        that I was going to use a map API to be able to track the tip information geographically as well. After searching through a couple 
        of options, I settled on the Google Maps API. Knowing that learning the API was going to take some work, I focused primarily on 
        the map functionality. I'm glad that I did, too, because some of the quirks of using markers meant that it ended up being easier to 
        store the list of tips as an array of Google Maps markers, rather than an array of other objects that encapsulated those markers.
    </p>

    <p>
        In addition to the map, the app also has full CRUD functionality on the list. The user can add a tip record by clicking on the "Add 
        Tip" button. Tips can be read, updated, and deleted in the tip list that is accessed at the bottom of the screen. Because I love 
        the canvas element so much, I also decided to draw a quartile graph, as well as the sum and average. The date range for calculation 
        can also be modified
    </p>

    <p>
        Although the project as is meets the requirements that I wanted, there are a few improvements that I want to make. First, the quartile 
        graph doesn't work correctly when there are less than four tips entered. Second, it would make sense to duplicate the date selection 
        dialogue to be included on the list of tips, as well as potentially in its own popup window. Lastly, the entire site was designed 
        on a computer, rather than a mobile device. Because of that, the GUI isn't optimized to be displayed on a phone screen. But of course, 
        what programmer ever feels like there aren't improvements that can be made to their application?
    </p>

    <p>
        You can visit Gratuity Acuity here: <form action="//gratuityacuity.com" target="_blank"><button class="link" id="gratuity">Gratuity Acuity</button></form>
    </p>
    
    <br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {gratuity};