 // Get references to the form and display area
 let form = document.getElementById('resume-form') as HTMLFormElement;
 let resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

 //Handle form submission
 form.addEventListener('submit', (event: Event) => {
   event.preventDefault(); //prevent page reload

   //collect input values
   const name = (document.getElementById('name') as HTMLInputElement).value
   const email = (document.getElementById('email') as HTMLInputElement).value
   const phone = (document.getElementById('phone') as HTMLInputElement).value
   const education = (document.getElementById('education') as HTMLInputElement).value
   const experience = (document.getElementById('experience') as HTMLInputElement).value
   const skills = (document.getElementById('skills') as HTMLInputElement).value

   // Generate the resume content dynamically
   const resumeHtml = `
     <h2> <b>Editable Resume </b> </h2>
     <h3>Personal Information</h3>
     <p><b>Name:</b><span contentediable="true"> ${name}</span></p>
     <p><b>Email:</b><span contentediable="true"> ${email}</span></p>
     <p><b>Phone:</b><span contentediable="true"> ${phone}</span></p>

     <h3>Education</h3>
     <p contentediable="true">>${education}</p>

     <h3>Experience</h3>
     <p contentediable="true">>${experience}</p>

     <h3>Skills</h3>
     <p contentediable="true">>${skills}</p>
   `;

   //Display the generated resume
   if(resumeDisplayElement){
     resumeDisplayElement.innerHTML = resumeHtml;
   }else {
     console.error('The resume display element is missing.');
   }
 });
