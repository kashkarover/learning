class Article {
  static name1 = 'Ravil';
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
  static createTodays() {
    return new this('Сегодняшний дайджест', new Date());
  }
}

let articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

articles.sort(Article.compare);
console.log(articles[0].title);

let article = Article.createTodays();
console.log(article);

console.log(Article.name1);
