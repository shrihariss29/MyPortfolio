import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Aboutme = () => {
  return (
    <div className="carousel">
      <Carousel>
        {[1, 2, 3, 4].map((index) => (
          <Carousel.Item key={index}>
            <img className="carouselimg" src={require(`../assets/pic${index}.jpg`)} alt={`My pics in navbar ${index}`} loading="lazy" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
      <h2 className="aboutmetitle underline"> Who is Shrihari?</h2>
      <p className="aboutcontent">I'm Shrihari, pursuing B.Tech Computer science and engineering from Sastra deemed university.
        In my four years of university life, barring academic knowledge gain, I learnt many soft skills which are needed for my career and life.
        I'll consider myself as an extroverted person who doesn't have much hesitation speaking to new people and working as a team.
        During my university life, being a part of various clubs I've performed and managed various inter college as well as intra college events.
      </p>
      <br />
      <p className="aboutcontent">
        I can speak three languages which are Tamil, English, and Hindi. Basically, I am a developer and a data analyst. So would like to 
        develop a career around that. Apart from that, I'm an ardent fan of cricket, current affairs, and history. I would personally like to listen 
        to the opinion of the people and stating mine in a discussion. I'm a person who is open for unlearn and relearn when I feel what I learnt
        in the past have some flaws. On the whole, everything I express will have some satire.
      </p>

      <h2 className="aboutmetitle underline">Clubs I've been part of</h2>
      <div className="clubs">
        {[
          { name: "Daksh", color: "#E0F4FF", image: require("../assets/daksh.jpg"), description: "Was one of the organizers responsible for the promotions and outreach of our university's technical fest called Daksh. Learnt many things in the process about promoting a technical event. Learnt how to work as a team, the happenings, favoritism, drama and many other factors while working in a huge team and pulling off a big fest." },
          { name: "Entrepreneurship cell", color: "#ECE3CE", image: require("../assets/ecell.jpg"), description: "Was part of my university's Entrepreneurship cell and conducted many events. Had a very small but intact team, it was very challenging yet a very good experience. The teams I was a part of are event designing and social media management. Two contrasting teams and had very unique experiences." },
          { name: "Sastra tamizh sangam", color: "#98EECC", image: require("../assets/sts.jpg"), description: "Was a performer in Sastra tamizh sangam and now an organizer. Performed in many stages representing the club as well as the university. Apart from technical and management clubs, this is my very close to heart place where I can express my artistic self. Had a very good time and can take many memories for the rest of my life." }
        ].map((club, index) => (
          <div className="clubcard" key={index} style={{ backgroundColor: club.color }}>
            <img src={club.image} className="card-img-top clubimg" alt={club.name} loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">{club.name}</h5>
              <p className="card-text">{club.description}</p>
            </div>
          </div>
        ))}
      </div>

      <footer>Developed by Shrihari</footer>
    </div>
  );
};

export default Aboutme;
