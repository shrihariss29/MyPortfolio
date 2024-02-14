const Projects = () => {

    return <div class="mainprojects">
      <p class="quote animate" style={{fontSize:"35px"}} >Works i did that excites me</p>
        <div class="projectcard">

        <div class="card" style={{backgroundColor: "blanchedalmond"}}>
         <img src={require("../assets/Mldlpic.png")} class="card-img-top projimg" alt="Machine learning"/>
           <div class="card-body">
            <h5 class="card-title" style={{color: "brown"}}>Credit card fraud detection using machine learning and deep learning </h5>
              <p class="card-text" >This is my project in which i took the several machine learning algorithm and convolutional neural
               network and passed it through "creditcard.csv" dataset.I noticed convolutional nueral network perfroms better than the machine
               learning algorithms taken.</p>
               <a href="https://github.com/shrihariss29/Credit-card-fraud-project" target="_blank" class="btn btn-primary">GitHub link</a>
            </div>
         </div>

         <div class="card" style={{backgroundColor: "#96EFFF"}}>
         <img src={require("../assets/Htmlpic.png")} class="card-img-top projimg" alt="html tag"/>
           <div class="card-body">
            <h5 class="card-title" style={{color: "blue"}}>Portfolio website using react.js, HTML and CSS</h5>
              <p class="card-text" >This project is done using react.js primarily. This portfolio contains all the necessary information 
              about myself. It is hosted via GitHub pages.This has the scope of many future add-ons which can be added in future.</p>
               <a href="https://github.com/shrihariss29/Portfolio-2" target="_blank" class="btn btn-primary">GitHub link</a>
            </div>
         </div>

         <div class="card" style={{backgroundColor: "#C7DCA7"}}>
         <img src={require("../assets/dapic.png")} class="card-img-top projimg" alt="html tag"/>
           <div class="card-body">
            <h5 class="card-title" style={{color: "green"}}>Data analysis using titanic.csv dataset</h5>
              <p class="card-text">Data analysis using titanic dataset is a based on the sinking of titanic ship. It consists the data 
              of passenger who travelled in the ship during the accident. Based on the specific passesger's sex,age,ticket type and other
              parameters, chances of their survival rate is calculated.</p>
               <a href="https://github.com/shrihariss29/Titanic-dataset-project" target="_blank" class="btn btn-primary">GitHub link</a>
            </div>
         </div>
        </div>

        <div class="card" style={{backgroundColor: "#DDE6ED"}}>
         <img src={require("../assets/decisiontree.png")} class="card-img-top projimg" alt="ML certificate"/>
           <div class="card-body">
            <h5 class="card-title" style={{color: "Black"}}>Machine learning - basic to advanced (Certification)</h5>
              <p class="card-text">This is a course in where i started to learn about machine learning and data analytics.
              It is very fascinating to learn it, because it feels like we are predicting the future. Learnt the deep intricacies
              and insights in this area.</p>
              <a href={require("../assets/MLcertificate.png")} target="_blank" class="btn btn-primary">Certificate</a>
            </div>
         </div>

         <div class="card" style={{backgroundColor: "#FFBF9B"}}>
         <img src={require("../assets/excellogo.jpg")} class="card-img-top projimg" alt="excel"/>
           <div class="card-body">
            <h5 class="card-title" style={{color: "maroon"}}>Excel basics for data analytics (Certification)</h5>
              <p class="card-text"> Working with Microsoft excel is a very important skill for a data analyst. Learnt many
              applications of excel and felt that it is very underrated and useful tool. Had a chance to use it in my real
              life applications also.</p>
               <a href={require("../assets/Excelcertificate.png")} target="_blank" class="btn btn-primary">Certificate</a>
            </div>
         </div>

        <div class="card" style={{backgroundColor: "#F8EDE3"}}>
        <img src={require("../assets/Htmlpic.png")} class="card-img-top projimg" alt="html tag"/>
          <div class="card-body">
           <h5 class="card-title" style={{color: "#16213E"}}>The Complete 2023 Web Development Bootcamp (Certification)</h5>
             <p class="card-text">The course which made me felt so excited as well as confident. I felt empowered and skilled after 
             finishing this course. The feel of creating something new is surreal. Mrs.Angela Yu is the instructor of this course and 
             i am very thankful for her. This website is developed by the skill which i gained there.</p>
             <a href={require("../assets/udemy.png")} target="_blank" class="btn btn-primary">Certificate</a>
           </div>
        </div>
        <footer>Developed by Shrihari</footer>
    </div>;
  };
  
  export default Projects;
