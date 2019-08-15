function bio() {
    let content = "";

    content += `
    <h3>
        About Eric Loux
    </h3>

    <p>
        When I was young, I was introduced to computers through my brother's Nintendo and the computer in my dad's basement. I remember being 
        five or so and having to ask my family to help navigate MS-DOS to get me to the games. As I got older I got more and more involved with 
        computers, finally taking my first programming class when I was 15. I had no idea what I was doing that first semester but decided to come 
        back for the next, when it finally clicked for me, and from that point on I was hooked. After high school I went to Baker University, a small 
        private college twenty minutes from my parents' Kansas home. Unfortunately, due to my scholarships running out after four years, I took a 
        few years to step back and figure out my life. Eventually finding myself operating a state-of-the-art inkjet glass decorating machine, I 
        started to get involved with learning Excel and VBA, creating tools to track maintenance and consumption metrics. Eventually getting a chance 
        to move to Nashville to work at a construction and mining equipment company, I jumped on the opportunity and have been living in Tennessee 
        since December of 2017. In 2019, I joined the Savvy Coders boot camp, where I added JavaScript, HTML, and CSS to my skillset. From here I'm 
        currently working on returning to school and finishing my degree at Middle Tennessee State University.
    </p>

    <p>
        As a person, I love creating, which is hopefully evident from the programming projects I have here. In addition to that, I've also had an original 
        piece for string quartet premiere in Ireland, won a film festival in the "Best Video with Original Music" category, skydived 20 times,
         and built a raft 
        from soda bottles (and floated across a pond on it!), among other adventures.
    </p>

    <br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {bio};