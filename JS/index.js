var allQuote=document.getElementById("parent-quote");





var i=0;
function changeQuote(){
    var pQuotes =[`<p>“Some people never go crazy. What truly horrible lives they must lead.”</p>
    <p>― Charles Bukowski</p>`,
    ` <p>“Life is like riding a bicycle. To keep your balance, you must keep moving.”</p>
    <p>― Albert Einstein</p>`, 
    ` <p>“It matters not what someone is born, but what they grow to be.”</p>
    <p>― J.K. Rowling, Harry Potter and the Goblet of Fire</p>`,
    ` <p>“Not all those who wander are lost.”</p>
    <p>― J.R.R. Tolkien, The Fellowship of the Ring</p>`, 
    ` <p>“If I had a flower for every time I thought of you...I could walk through my garden forever.”</p>
    <p>― Alfred Tennyson</p>`, 
    ` <p>“If you can make a woman laugh, you can make her do anything.”</p>
    <p>― Marilyn Monroe</p>`,    
    ` <p>“The difference between genius and stupidity is: genius has its limits.”</p>
    <p>― Alexandre Dumas-fils</p>`,    
    ` <p>“It is what you read when you don't have to that determines what you will be when you can't help it.”</p>
    <p>― Oscar Wilde</p>`,  

]
    allQuote.innerHTML=pQuotes[i];
    i++;
    if(i> pQuotes.length-1){
        i=0;
    }
}