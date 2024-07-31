var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "main-2",
  "level": "1",
  "url": "main-2.html",
  "type": "Chapter",
  "number": "1",
  "title": "page 1",
  "body": "page 1   "
},
{
  "id": "main-3",
  "level": "1",
  "url": "main-3.html",
  "type": "Chapter",
  "number": "2",
  "title": "page 2",
  "body": "page 2   Click Here   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
