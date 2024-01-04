const Home = () => {
    return(
    <div class="home">
        <div class="quote animate">
          <p>Made the Machine learn, </p>
          <p>variable speak & People happy</p>
       </div>
        <p class="welcome animate" >Welcome to my portfolio, It's Shrihari here</p>
        <p class="welcome animate">This website is created with react.js and CSS</p>
        <div class="homecard" style={{backgroundColor: "#eaeaea"}}>
         <img src={require("../assets/mypic.JPG")} class="card-img-top projimg" alt="Machine learning"/>
           <div class="card-body">
              <p class="card-text" style={{fontSize:"20px"}}>An enthusiastic learner and a problem solver looking for an opportunity where I can contribute to 
               the growth of the organization and enhance my skillsets and abilities.</p>
            </div>
         </div>

         <div class="educard" style={{backgroundColor: "#eaeaea"}}>
           <div class="card-body">
           <h1 style={{margin:"50px"}}>Education</h1>
            <div class="eduincard">
             <h3>Sastra deemed university</h3>
             <h5>Thanjavur</h5>
             <h6>2020-2024</h6>
             <h6>CGPA : 7.59</h6>
             <br/>
            </div>

            <div class="eduincard">
            <h3>Sri Vageesha Vidhyashram</h3>
            <h5>Srirangam,trichy</h5>
            <h6>2018-2020</h6>
            <h6>XII percentage : 89</h6>
            <br/>
            </div>
            <div class="eduincard">
            <h3>Sai Vidhyalaya</h3>
            <h5>Lalgudi,Trichy</h5>
            <h6>2005-2018</h6>
            <h6>CGPA : 7.59</h6>
            </div>
           </div>
         </div>
         <footer>Developed by Shrihari</footer>
    </div>
      );
  };
  
  export default Home;