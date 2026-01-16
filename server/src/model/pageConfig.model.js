const mongoose = require("mongoose");

const pageConfig = new mongoose.Schema({
  info: {
    author: "KienVu",
    ver: "1.0",
  },
  homepage: {
    banner: [{ title: String, banner_img: String }],
    about: {
      title: String,
      desc: String,
      video: String,
    },
    intro_app: {
      img: String,
      title: String,
      benefits: [],
    },
    commitment: {
      title: String,
      desc: String,
      cards: [
        {
          icon: String,
          title: String,
          desc: String,
        },
      ],
    },
    faq: {
      title: String,
      sentence: [{ q: String, a: String }],
    },
  },
  intro: {
    slider: [
      {
        title: String,
        img_banner: String,
      },
    ],
    vision: {
      img: String,
      title: String,
      desc: String,
    },
    mission: {
      img: String,
      title: String,
      sentence: {
        highlight: String,
        desc: String,
      },
    },
    brandstory: {
      img: String,
      title: String,
      sentence: String,
      quote: String,
    },
    stats: [{ number: String, desc: String }],
  },
  service: {
    banner: {
      title: String,
      desc: String,
      img: String,
    },
    services: {
      title: String,
      desc: String,
    },
    booking_guide: {
      title: String,
      desc: String,
      steps: [{ title: String, desc: String, img: String }],
    },
    cta: {
      title: String,
      desc: String,
    },
  },
  training: {
    banner: {
      title: String,
      desc: String,
    },
  },
  benefits: {
    title: String,
    desc: String,
    cards: [{ icon: String, title: String, desc: String }],
    cta: {
      title: String,
      desc: String,
    },
  },
  news: {
    banner: {
      title: String,
      desc: String,
    },
    cta: {
      title: String,
      desc: String,
    },
  },
  contact: {
    banner:{
        title: String,
        desc: String
    },
    info: {
        title: String,
        cards: [{icon: String, title: String, desc: String}]
    },
    cta: {
        title: String, 
        desc: String
    }
  }
});
