// For Tabris.js 3.8.0+

import {Button, TextView, contentView} from 'tabris';

var myStack = new Stack({
  layoutData: "stretchX"
  }
);

var text1 = new TextInput({
  message: 'text1'
}).appendTo(myStack);

var btn1 = new Button({
 text: "Cliccami"
}).onSelect(clicked)
  .appendTo(myStack);


function clicked() {
 console.log("Clicked");
  text1.text = "clicked";
}
