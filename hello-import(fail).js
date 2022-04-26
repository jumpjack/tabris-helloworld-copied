   
// For Tabris.js 3.8.0+

import {Button, TextView, contentView, TextInput, Stack, Page, NavigationView } from 'tabris';

var myStack = new Stack({
  alignment:  "stretchX",
  layoutData: "stretch"
  }
);


var text1 = new TextInput({
  message: 'text1',
  alignment : "centerX"
}).appendTo(myStack);


var btn1 = new Button({
 text: "Click me",
 alignment : "centerX"
}).onSelect(clicked)
  .appendTo(myStack);


var pageMain = new Page({title: 'Hello!'});
pageMain.append(myStack);

var navView = new NavigationView({layoutData: 'stretch', drawerActionVisible: false})
  .append(pageMain)
  .appendTo(contentView);

console.log("Started!");

function clicked() {
 console.log("Clicked");
  text1.text = "clicked";
}
