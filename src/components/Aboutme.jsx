import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Aboutme = () => {
    return (

    <div class="carousel">
    <Carousel>
      <Carousel.Item>
       <img class="carouselimg" src={require("../assets/pic1.jpg")} alt="Mypics in navbar"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="carouselimg" src={require("../assets/pic2.jpg")} alt="Mypics in navbar"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="carouselimg" src={require("../assets/pic3.jpg")} alt="Mypics in navbar"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="carouselimg" src={require("../assets/pic4.jpg")} alt="Mypics in navbar"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />

    <h2 class="aboutmetitle underline"> Who is Shrihari?</h2>

    <p class="aboutcontent">I'm Shrihari, pursuing B.Tech Computer science and engineering from Sastra deemed university.
    In my four years of university life, barring academic knowledge gain, i learnt many soft skills which are needed for my career and life. 
    I'll consider myself as an extroverted person who doesn't have much hesitation speaking to new people and working as a team.
    During my university life, being a part of various clubs i've performed and managed various inter college as well as intra college events
    </p>
    <br/>
    <p class="aboutcontent">
      I can speak three languages which are Tamizh, English and Hindi. Basically i am a developer and a data analyst. So would like to 
      develop a career around that. Apart from that I'm an ardent fan of cricket,current affairs and history. I would personally like to listen 
      to opinion of the people and stating mine in a discussion. I'm a person who is open for unlearn and relearn when i feel what i learnt
      in the past have some flaws. On the whole, everything i express will have some satire xd
    </p>

    <h2 class="aboutmetitle underline">Clubs i've been part of</h2>

    <div class="clubs">
    <div class="clubcard" style={{backgroundColor: "#E0F4FF"}}>
         <img src={require("../assets/daksh.jpg")} class="card-img-top clubimg" alt="daksh"/>
           <div class="card-body">
            <h5 class="card-title" style={{color: "blue"}}>Daksh</h5>
              <p class="card-text" style={{fontSize:"18px"}}>Was one of the organizers responsible for the promotions and outreach of our university's technical fest called Daksh
        Learnt many thing in the process about promoting a technical event. Learnt how to work as a team,the happenings, favourism,drama and 
        many other factors while working in a huge team and pulling off a big fest.</p>
            </div>
         </div>
    </div>
    <div class="clubs">
    <div class="clubcard" style={{backgroundColor: "#ECE3CE"}}>
         <img src={require("../assets/ecell.jpg")} class="card-img-top clubimg" alt="ecell"/>
           <div class="card-body">
            <h5 class="card-title" style={{color:"brown"}}>Entrepreneurship cell</h5>
              <p class="card-text" style={{fontSize:"18px"}}>Was part of my university's Entrepreneurship cell and conducted many events.
              Had a very small but intact team, it was very challenging yet a very good experience. The teams i was a part of are
              event designing and social media management. Two contrasting teams and had a very unique experieces.</p>
            </div>
         </div>
    </div>
    <div class="clubs">
    <div class="clubcard" style={{backgroundColor: "#98EECC"}}>
         <img src={require("../assets/sts.jpg")} class="card-img-top clubimg" alt="sts"/>
           <div class="card-body">
            <h5 class="card-title" style={{color: "green"}}>Sastra tamizh sangam</h5>
              <p class="card-text" style={{fontSize:"18px"}}>Was a performer in sastra tamizh sangam and now an organizer. Performed in many stages 
          representing the club as well as the university. Apart from technical and management clubs, this is my very close to heart
          place where i can express my artistic self. Had a very good time and can take many memories for the rest of my life.
          </p>
            </div>
         </div>
    </div>
    <footer>Developed by Shrihari</footer>
    </div>
    );
  };
  
  export default Aboutme;