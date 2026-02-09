const mongoose = require("mongoose");

const pageConfig = new mongoose.Schema({
  info: {
    author: {type:String, default: "KienVu"},
    ver: {type: String, default: "1.0"},
  },
  homepage: {
    banner: [{ title: String, banner_img: String, _id:false }],
    slogan: String,
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
          _id: false
        },
      ],
    },
    faq: {
      title: String,
      sentences: [{ question: String, answer: String, _id: false }],
    },
  },
  about: {
    slider: [
      {title: String, img: String, _id: false}, 
    ],
    vision:[
      {title: String, img: String, desc: [], _id: false}
    ],
    stats: [
      {title: String, number: String, _id: false}
    ]
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
      steps: [{ title: String, desc: String,step_number: Number ,img: String, _id: false }],
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
      img: String
    },
    benefit: {
      title: String,
      desc: String,
      cards: [
      {icon: String, title: String, desc: String, _id: false}
    ]}
  },
  news: {
    title: String,
    desc: String,
    img_url: String,
    cta: {
      title: String,
      desc: String,
    },
  },
  contact: {
    banner:{
        title: String,
        desc: String,
        img: String
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

module.exports = mongoose.model("page_config", pageConfig)
