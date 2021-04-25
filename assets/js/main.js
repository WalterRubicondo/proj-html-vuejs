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
        home: "Home",
        pages: "Pages",
        courses: "Courses",
        features: "Features",
        blog: "Blog",
        shop: "Shop",
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
          start: "Start here",
          story: "Succes story",
          blog: "Blog",
          courses: "Courses",
          contact: "Contact us"
        },
        infos: {
          membership: "Membership",
          guide: "Purchase guide",
          privacy: "Privacy polivy",
          services: "Terms of service",
        },
      }],
  },
  methods: {
  }
});
