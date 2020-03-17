var options = {
  strings: [
      "Hello! I’m <i>Sagar</i>, welcome to my website ^1000.<br>" +
      "I am a CS Graduate from NIT, Silchar.<br>" +
      "Working as a Machine Learning Engineer.<br>" +
      "Look around to know more about me."
  ],
  typeSpeed: 40,
  showCursor:false,
  cursorChar:'|',
    onComplete: function(self){self.showCursor=false; var typed = new Typed('#typed-string2', options2);}
};

var talk_to_me_about = [
    "Programming",
    "Data",
    "AI",
    "Python",
    "Optimization",
    "Automation",
    "Mathematics",
    "Science",
    "Paradoxes",
    "Philosophies",
    "Movies",
    "Ghazals",
    "Life",
    "Hacks"
]
var options2= {
    strings: talk_to_me_about.map(x=> "Talk to me about <b>"+ String(x) +"</b> ^500"),
    typeSpeed: 50,
    shuffle: true,
    backSpeed: 100,
    showCursor: true,
    cursorChar: '_',
    smartBackspace: true,
    loop:true
};

var typed = new Typed('#typed-string', options);


