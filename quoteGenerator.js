console.log('it works!');
// Prompt will show the fully quote you want to see while you are typing.

const quote = prompt("Please add a word to make a full quote");

//To set the var list of part sentences we use fonction with array.

    var listWord ={ quote1:["An ideas is salvation","by imagination","when I"],
quote2:["working", "on a problem", "I never think"],
quote3:["big", "soft", "I mean"],
quote4:["equal", "something", "rare"],
quote5:["dig", "fun", "happy"]

    }
// Variable

var indexQuote = {
  textOut: listWord
};

 // Generate a random base on part of the sentences to return the ensemblance of all part sentences.
 
 function generatePart() {
  var combination = document.showQuote("valueImput").value;
   var quoteIndex = '';
  for ( var i = 0; i < combination.length; i++){
    if (document.showQuote("quote").value=== 'textOut'){;
    sub = indexQuote.textOut;
     
  }
    // combination of the part sentences
     quoteIndex += sub.quote1[Math.floor(Math.random()*sub.quote1.length)]+ '' + sub.quote2[Math.floor(Math.random()*sub.quote2.length)]+ '' + sub.quote3[Math.floor(Math.random()*sub.quote3.length)]+ '' + sub.quote4[Math.floor(Math.random()*sub.quote4.length)]+ '' + sub.quote5[Math.floor(Math.random()*sub.quote5.length)]+ '.' ;
  }
  return " Here quote:" + quoteIndex;
}

  function quoteCopleat(){
    var quoteCom = document.showQuote("rare");
    quoteCom.innertext = generatePart()
  }
  quoteCopleat();



