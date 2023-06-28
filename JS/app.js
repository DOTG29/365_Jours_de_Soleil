const articles = document.getElementById('article')

const newArticle = [{
    title_day: "LUN",
    title_date: "20",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "MAR",
    title_date: "21",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "MER",
    title_date: "22",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "JEU",
    title_date: "23",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "VEN",
    title_date: "24",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "SAM",
    title_date: "25",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "DIM",
    title_date: "26",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "LUN",
    title_date: "27",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "LUN",
    title_date: "27",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
},{
    title_day: "LUN",
    title_date: "27",
    icon: "IMG/chance-storm.png",
    temp_max: "14",
    tem_min: "6"
}];

for (let article of newArticle) {
    articles.innerHTML += `
     <article class="article">
      <h2 class="title_day">${article.title_day}</h2>
      <p class="title_date">${article.title_date}</p>
      <img class="icon" src="${article.icon}" alt="img">
      <div class="container_temp">
        <p class="temp_max">${article.temp_max}</p>
        <p>|</p>
        <p class="temp_min">${article.tem_min}</p>
      </div>
     </article>`
    
}