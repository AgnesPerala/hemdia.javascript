
async function loadJson(){
    try {
        const response = await fetch('myjson.json')
        if (!response) {
            // throw error massage
        } 
        const data = await response.json();
        //const stringdata = JSON.stringify(data, null, 2)

        //resume
        const resumeHtml = data.resume.map(resume =>
        `<article>
            <h3 class="subheading"> ${resume.title}</h3>
            <p> ${resume.time}</p>
            <p> ${resume.place}</p>
            <p> ${resume.description}</p>
        </article>`
        ).join('');
        document.getElementById('resume').innerHTML = resumeHtml;

        //education
        const educationHtml = data.education.map(education =>
            `<article>
                <h5 class="subheading"> ${education.title}</h5>
                <p> ${education.time}</p>
                <p> ${education.school}</p>
            </article>`
            ).join('');
            document.getElementById('education').innerHTML = educationHtml;

        //about    
        const aboutHtml = data.about.map(about =>
            `
                <p> ${about.description}</p>
            `
            ).join('');
            document.getElementById('about').innerHTML = aboutHtml;

        //contact    
        const contactHtml = data.contact.map(contact =>
            `<section>
                <h2 class="subheading"> ${contact.title}</h2>
                <p> ${contact.phone}</p>
                <p> ${contact.email}</p>
                <p> ${contact.home}</p>
            </section>`
            ).join('');
            document.getElementById('contact').innerHTML = contactHtml;

        //knowledge
        const knowledgeHtml = data.knowledge.map(knowledge =>
            `
                <p> ${knowledge.title}</p>
            `
            ).join('');
            document.getElementById('knowledge').innerHTML = knowledgeHtml;

        //certificate
        const certificateHtml = data.certificate.map(certificate =>
            `
                <p> ${certificate.title}</p>
            `
            ).join('');
            document.getElementById('certificate').innerHTML = certificateHtml;

        //reference
        const referenceHtml = data.reference.map(reference =>
            `
                <p> ${reference.description}</p>
            `
            ).join('');
            document.getElementById('reference').innerHTML = referenceHtml;
    } catch (error) {
        // skriva ut ett felmedelande 
    }
}
loadJson();