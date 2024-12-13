// FUNCTIONS

function createCardMember(member) {
    const {name, role, email, img} = member;


const card = `
    <div class="col">
        <div class="img-card img-fluid">
            <img src="${img}" alt="${name}">
        </div>
        <div class="details">
            <h3>${name}</h3>
            <p>${role}</p>
            <a href=${email}</a>
        </div>
    </div>
            `;
    return card;
}

function renderTeam(){
    let listItems="";
    for(let i = 0; i < teamMembers.length; i++) {
        listItems += createCardMember(teamMembers[i])
    }
teamContainer.innerHTML = listItems;

}


const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

// DOM ELEMENT

const teamContainer = document.querySelector(".row");
const nameElm = document.getElementById(".name");
const roleElm = document.getElementById(".role");
const imgElm = document.getElementById(".img");
const emailElm = document.getElementById(".email");

renderTeam();