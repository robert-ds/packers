const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
  name: "Robert Vásquez",
  nickname: "robert-ds",
  description: "Systems Engineer oriented towards analysis, design and development of software systems based on web technologies",
  avatar: "https://pbs.twimg.com/profile_images/1536373351538630656/L61WsOPY_400x400.jpg",
  social: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/",
      username: "robert-vasquez",
    },
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "robertds_",
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      username: "robert_ds.me",
    },
    {
      name: "youtube",
      url: "https://youtube.com/",
      username: "@robert-ds",
    },
    {
      name: "github",
      url: "https://github.com/",
      username: "robert-ds",
    },
  ],
  links: [
    {
      name: "website",
      url: "https://robert-ds.github.io/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "frontend mentor",
      url: "https://www.frontendmentor.io/profile/robert-ds",
      color: "yellow",
      emoji: "💬",
    },{
      name: "dev to",
      url: "https://dev.to/robert_ds",
      color: "green",
      emoji: "⚡",
    },
  ],
  footer: "Made with Love on Venezuela",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links?.map((link) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>`;
  }).join('');

  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
}

main();