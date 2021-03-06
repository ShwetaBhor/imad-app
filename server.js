var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
 'article-1': { 
    name:  'Article-one by Miss. Shweta Bhor',
    heading: 'This is my Article-one',
    date : '15 march 2018',
    content: ` 
    <p>
            This is the content for my article one.
          </p> `
    },
 'article-2': { 
    name:  'Article-two by Miss. Shweta Bhor',
    heading: 'This is my Article-two',
    date : '15 march 2018',
    content: ` 
    <p>
            This is the content for my article two.
          </p> `
    },
 'article-3': { 
    name:  'Article-three by Miss. Shweta Bhor',
    heading: 'This is my Article-Three',
    date : '15 march 2018',
    content:`  
    <p>
            This is the content for my article twthree.
          </p>`
          }
          
};

function createTemplate(data) {
    
    var name  = data.name;
    var heading = data.heading;
    var date= data.date;
    var content=data.content;
    var htmlTamplate = `
          <html>
            <head>
                <title>
                   ${name}
                    </title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />  
                  <link href="/ui/style.css" rel="stylesheet" />
                
                </head>
            <body>
                <div class ="container">
                <div>
                    <a href="/">home</a>
                    </div>
                <hr/> 
                <h3>
                    ${heading}
                </h3>
                
                <div>
                  ${date}
                </div>
                 <div>
                   ${content}
                </div>
                </div>
                </body>    
                
                </html>`
                ;
    return htmlTamplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});


app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
