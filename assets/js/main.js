Vue.config.devtools = true;

Vue.component('countdown', {
  template: '#countdown-template',
  mounted() {
    window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }
});

Vue.filter('two_digits', (value) => {
  if (value < 0) {
    return '00';
  }
  if (value.toString().length <= 1) {
    return `0${value}`;
  }
  return value;
});

var app = new Vue({
  el: '#root',
  data: {
    navbar:[
    {
      logo: "dark-logo.png",
      menu: {
        'Home': "https://www.google.it",
        'Pages': "https://www.google.it",
        'Courses': "https://www.google.it",
        'Features': "https://www.google.it",
        'Blog': "https://www.google.it",
        'Shop': "https://www.google.it",
      },
    }],
    footer: [
      {
        adress: {
          location: "382 NE 191st St # 87394 Miami, FL 33179-3899",
          telNumber: "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday",
          email: "support@maxcoach.com"
        },
        explore: {
          'Start here': "https://www.google.it",
          'Succes story': "https://www.google.it",
          'Blog': "https://www.google.it",
          'Courses': "https://www.google.it",
          'Contact us': "https://www.google.it"
        },
        infos: {
          'Membership': "https://www.google.it",
          'Purchase guide': "https://www.google.it",
          'Privacy policy': "https://www.google.it",
          'Terms of service': "https://www.google.it",
        },
        photos: {
          firstphoto: "artist-blog-03-480x356.jpeg",
          secondphoto: "artist-event-03-250x300.jpg",
          thirdphoto: "artist-event-02-250x300.jpg",
        }
      }],
      social: {
        'twitter': "fab fa-twitter",
        'facebook': "fab fa-facebook-f",
        'instagram': "fab fa-instagram",
        'linkedin': "fab fa-linkedin",
      },
  },
  methods: {
  }
});
