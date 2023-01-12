function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;

	this.info = () =>
		`title: ${title},\nauthor: ${author},\nNumber of Pages: ${pages}`;
}

const x = new Book("mah", "ahn", 365);
console.log(x.info());
