import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", api => {
  
  $( document ).ready(function() {
    const user = api.getCurrentUser();
    $('h1.hello-world').html("You have " 
    + user.unread_notifications + " unread notifications, and "
    + user.unread_private_messages + " unread private messages");
  });

  api.addNavigationBarItem({
    name: "link-to-movies-category",
    displayName: "movies",
    href: "/c/movies",
    title: "link title"
  })

  api.decorateWidget('post:after', helper => {
    return helper.h('p', 'A TEXT AFTER EACH POST');
  });

  const h = require("virtual-dom").h;

  api.createWidget("my-first-widget", {
    tagName: "div.my-widget",

    html() {
      return h('p', "My First Widget!!!");
    }
  });

  api.changeWidgetSetting('post-avatar', 'size', '90');

  //api.changeWidgetSetting('home-logo', 'href', 'https://google.com');

  api.addUserMenuGlyph({
    label: 'Mentions',
    className: 'demo',
    icon: 'info',
    href: 'https://www.discourse.org/about'
  });


});


