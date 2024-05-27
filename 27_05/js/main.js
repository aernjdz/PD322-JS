// Task1
document.write("<h2 style='color:green'>Task 1</h2>");
class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
      this.fontSize = fontSize;
      this.fontColor = fontColor;
      this.fontFamily = fontFamily;
    }
  
    print(text) {
      document.write(`<p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily};">${text}</p>`);
    }
  }

  
const myPrinter = new PrintMachine('20px', 'red', 'Arial');
const myPrinter2 = new PrintMachine("20px","green","Time New Roman")
myPrinter.print("Test1 Task1");
myPrinter2.print("Test2 Task1");

//Task 2
document.write("<h2 style='color:green'>Task 2</h2>");
class News {
  constructor(title, text, tags, publicationDate) {
    this.title = title;
    this.text = text;
    this.tags = tags;
    this.publicationDate = new Date(publicationDate);
  }

  print() {
    const today = new Date();
    const timeDiff = today - this.publicationDate;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = 7 * oneDay;
    let dateStr;

    if (timeDiff < oneDay) {
      dateStr = 'today';
    } else if (timeDiff < oneWeek) {
      const daysAgo = Math.floor(timeDiff / oneDay);
      dateStr = `${daysAgo} days ago`;
    } else {
      const day = this.publicationDate.getDate().toString().padStart(2, '0');
      const month = (this.publicationDate.getMonth() + 1).toString().padStart(2, '0');
      const year = this.publicationDate.getFullYear();
      dateStr = `${day}.${month}.${year}`;
    }

    document.write(`
      <div style="font-family: Arial, sans-serif;  text-align: left; line-height: 1.5; max-width:500px">
        <h1 style="font-size: 24px;">${this.title}</h1>
        <p style="font-size: 14px;">${dateStr}</p>
        <p style="font-size: 16px;">${this.text}</p>
        <p style="font-size: 14px;">${this.tags.join(' ')}</p>
      </div>
    `);
  }
}
const newsArticle = new News(
  'What is Lorem Ipsum?',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  ['#lorem', '#ipsum', '#text'],
  Date.now()
);
const newsArticle2 = new News(
  'What is Lorem Ipsum?',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  ['#lorem', '#ipsum', '#text'],
  "2024-05-26"
);
const newsArticle3 = new News(
  'What is Lorem Ipsum?',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  ['#lorem', '#ipsum', '#text'],
  "2024-04-26"
);

newsArticle.print();
newsArticle2.print();
newsArticle3.print();
console.log(Date.now())

//Task 3
document.write("<h2 style='color:green'>Task 3</h2>");
class NewsManager {
  constructor() {
    this.newsList = [];
  }
  get newsCount() {
    return this.newsList.length;
  }

  addNews(news) {
    this.newsList.push(news);
  }

  deleteNews(title) {
    this.newsList = this.newsList.filter(news => news.title !== title);
  }

  sortNewsByDate() {
    this.newsList.sort((a, b) => b.publicationDate - a.publicationDate);
  }

  searchNewsByTag(tag) {
    return this.newsList.filter(news => news.tags.includes(tag));
  }

  printAllNews() {
    this.newsList.forEach(news => news.print());
  }
}

const newsManager = new NewsManager();

// Додавання новин
const news1 = new News(
  'First News Headline',
  'First news text.',
  ['tag1', 'tag2'],
  '2024-05-26'
);
const news2 = new News(
  'Second News Headline',
  'Second news text.',
  ['tag2', 'tag3'],
  '2024-05-25'
);
const news3 = new News(
  'Third News Headline',
  'Third news text.',
  ['tag1', 'tag3'],
  '2024-05-27'
);
newsManager.addNews(news1);
newsManager.addNews(news2);
newsManager.addNews(news3);

document.write(`<h2>Number of news articles: ${newsManager.newsCount}</h2>`);

document.write('<h2>1. All news articles:</h2>');
newsManager.printAllNews();


newsManager.deleteNews('Second News Headline');
document.write('<h2>2. All After deleting "Second News Headline":</h2>');
newsManager.printAllNews();

newsManager.sortNewsByDate();
document.write('<h2>3. After sorting by date:</h2>');
newsManager.printAllNews();


const searchResults = newsManager.searchNewsByTag('tag1');
document.write('<h2>4. Search results for tag "tag1":</h2>');

searchResults.forEach(news => news.print());