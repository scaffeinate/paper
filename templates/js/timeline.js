$(document).ready(function(){

  var source, template;

  $.backstretch('../assets/img/background-4.jpg', {speed: 1000});
  $('.cover-pic').backstretch([
    '../assets/img/img-1.jpg',
    '../assets/img/img-2.jpg', 
    '../assets/img/img-3.jpg',
    '../assets/img/img-4.jpg',
    '../assets/img/img-5.jpg',
    '../assets/img/img-6.jpg',
    '../assets/img/img-7.jpg',
    '../assets/img/img-8.jpg'
    ], {duration: 2500, fade: 1500});

  $('#new-micropost textarea').autosize();

  var notifications = {
    notifications: [
    { 
      title: 'New Post',
      post: '<span class="mention">@rails_freak</span> shared a new micropost<br>' +
      'Ruby on Rails is Awesome! <span class="link">p.co/RoRawsme</span>' +
      '<span class="hashtags">#Rails</span>'
    },
    {
      title: '@Mention',
      post: '<span class="mention">@rails_freak</span> mentioned you in a micropost'
    },
    {
      title: 'Trends',
      post: '<span class="hashtags">#Rails</span> - Topic you are following is trending!'
    },
    {
      title: 'Followers',
      post: 'Yay! <span class="mention">@rails_freak</span> and '+
      '<span class="mention">@Dev</span>' +
      'followed you'
    }
    ]
  };
  
  source = $("#notifications-template").html();
  template = Handlebars.compile(source);
  $("#notifications").html(template(notifications));

  var messages = {
    messages: [
    {
      user: '@rails_freak',
      message: 'Hey! Checkout my new post. Thanks! <span class="link">p.co/RoRawsme</span>'
    },
    {
      user: '@blogaholic',
      message: 'Hey man! Wassup?'
    },
    {
      user: '@uiux_',
      message: 'Medium\'s UI is f***ing awesome'
    },
    {
      user: '@Dev',
      message: 'What\'s your view on Websockets? Let me know'
    }
    ]
  };

  source = $("#messages-template").html();
  template = Handlebars.compile(source); 
  $("#messages").html(template(messages));

  var microposts = {
    microposts: [
    {
      avatar: 'img/avatar.png',
      name: 'Blogaholic',
      username: '@blogaholic',
      post: 'Building a Bootstrap Theme - Awesome post by <span class="mention">@uiux_</span>' +
      '<a href="#">p.co/btstrpThm</a>' +
      '<span class="hashtags">#Theme #Bootstrap</span>',
      time: '4 mins'
    },
    {
      avatar: 'img/avatar_2.png',
      name: 'UI UX Guy',
      username: '@uiux_',
      post: 'Published my post on Building a Bootstrap Theme <a href="#">p.co/btstrpThm</a>',
      time: '7 mins'
    },
    {
      avatar: 'img/avatar_3.png',
      name: 'Rails Freak',
      username: '@rails_freak',
      post: 'Ruby on Rails is Awesome! <a href="#">p.co/RoRawsme</a> <span class="hashtags">#Rails</span>',
      time: '9 mins'
    },
    {
      avatar: 'img/avatar_4.png',
      name: 'Developer',
      username: '@Dev',
      post: 'Websockets are future tech - We aren\'t there yet!' +
      '<span class="hashtags">#Websockets #Javascript</span>',
      time: '13 mins'
    },
    {
      avatar: 'https://en.gravatar.com/userimage/23763355/e7bbf514106dc2fd9ddb4e8160a72e8c.png',
      name: 'Sudharsanan M',
      username: '@sudharti',
      post: 'Why should you do Side Projects <a href="#">p.co/wsydSPr</a>',
      time: '14 mins'
    },
    {
      avatar: 'img/avatar_4.png',
      name: 'Developer',
      username: '@Dev',
      post: 'Awesome Read - How maintaining a Blog saved my ass' +
      '<a href="#">p.co/hmBsAs</a> <span class="hashtags">#Blog</span>',
      time: '15 mins'
    },
    {
      avatar: 'img/avatar_2.png',
      name: 'UI UX Guy',
      username: '@uiux_',
      post: 'Medium\'s theme is so f**cking good.' +
      '<a href="#">p.co/mdmThfg</a>' +
      '<span class="hashtags">#Medium #CSS</span>',
      time: '18 mins'
    },
    {
      avatar: 'img/avatar_3.png',
      name: 'Rails Freak',
      username: '@rails_freak',
      post: 'RT <span class="mention">@sudharti</span>' +
      'Front-End Javascript frameworks are clearly the future!' +
      '<span class="hashtags">#Javascript</span>',
      time: '19 mins'
    },
    {
      avatar: 'img/avatar.png',
      name: 'Blogaholic',
      username: '@blogaholic',
      post: 'How maintaining a Blog saved my ass' +
      '<a href="#">p.co/hmBsAs</a>' +
      '<span class="hashtags">#Blog</span>',
      time: '20 mins'
    },
    ]
  };

  source = $("#microposts-template").html();
  template = Handlebars.compile(source); 
  $("#microposts").html(template(microposts));

  var trends = {
    trends: [
    { trend: '#Theme' },
    { trend: '#Bootstrap' },
    { trend: '#Rails' },
    { trend: '#Blog' },
    { trend: '#Javascript' },
    ]
  };

  source = $("#trends-template").html();
  template = Handlebars.compile(source); 
  $("#trends").html(template(trends));

  var suggestions = {
    suggestions: [
    {
      avatar: 'img/avatar.png',
      name: 'Bootstrap',
      username: '@bootstrap',
    },
    {
      avatar: 'img/avatar_4.png',
      name: 'Dev',
      username: '@dev_',
    },
    {
      avatar: 'img/avatar_2.png',
      name: 'User123',
      username: '@user123',
    },
    {
      avatar: 'img/avatar_3.png',
      name: 'Rails',
      username: '@rails',
    },
    {
      avatar: 'img/avatar_3.png',
      name: 'Ruby User',
      username: '@ruby',
    }
    ]
  };

  source = $("#suggestions-template").html();
  template = Handlebars.compile(source);
  $("#suggestions").html(template(suggestions));

});
