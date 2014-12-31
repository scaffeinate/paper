$(document).ready(function(){
  var source, template;

  var posts = {
    posts: [
      {
        title: 'Why should you do Side Projects',
        avatar: 'https://en.gravatar.com/userimage/23763355/e7bbf514106dc2fd9ddb4e8160a72e8c.png',
        caption: 'The Power of Side Projects and the Impact it has on your Career',
        author: '@sudharti',
        time: 'seconds ago'
      },
      {
        title: 'Ruby on Rails is Awesome!',
        avatar: 'img/avatar_3.png',
        caption: 'RoR is one of the best MVC frameworks out there. Just hop on and start developing',
        author: '@rails_freak',
        time: '4 hours ago'
      },
      {
        title: 'Building a Bootstrap Theme',
        avatar: 'img/avatar_2.png',
        caption: 'Bootstrap is beautiful. But it is even more if you could build your own on top of it',
        author: '@uiux_',
        time: '5 hours ago'
      },
      {
        title: 'Medium\'s theme is so f**cking good.',
        avatar: 'img/avatar_2.png',
        caption: 'Medium\'s theme is the best CSS I have seen in my entire career. Hands down!',
        author: '@uiux_',
        time: '5 hours ago'
      },
      {
        title: 'Front-End Javascript frameworks are clearly the future!',
        avatar: 'https://en.gravatar.com/userimage/23763355/e7bbf514106dc2fd9ddb4e8160a72e8c.png',
        caption: 'How I think Emberjs and Angularjs will have an impact on the Web in the near future',
        author: '@sudharti',
        time: '5 hours ago'
      },
      {
        title: 'How maintaining a Blog saved my ass',
        avatar: 'img/avatar.png',
        caption: 'Literally saved my ass many times. You should start Blogging too. Here is why',
        author: '@blogaholic',
        time: '6 hours ago'
      },
      {
        title: 'Websockets are future tech - We aren\'t there yet!',
        avatar: 'img/avatar_4.png',
        caption: 'We aren\'t there yet!',
        author: '@Dev',
        time: '2 days ago'
      },
      {
        title: 'Server Deployment is a Pain in the Ass, Unless...',
        avatar: 'img/avatar_4.png',
        caption: 'It used to drive me nuts initially',
        author: '@Dev',
        time: '3 days ago'
      }
    ]
  };

  source = $("#posts-template").html();
  template = Handlebars.compile(source); 
  $("#posts").html(template(posts));

  $(".left-fixed").backstretch('../assets/img/background-3.jpg');
  
});