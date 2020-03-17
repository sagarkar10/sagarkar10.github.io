skills = document.getElementById('plot-skills');

var data_science_skills = {
    Python:85,
    Matlab:70,
    R:40,
    TF:50,
    Keras:70,
    Scikit:80,
    OpenCV:70,
    Numpy:80,
    Pandas:85,
    Stats:75,
    Visualization:70
}


var dev_skills = {
    Unix:90,
    NoSQL:80,
    SQL:65,
    GIT:80,
    Docker:60,
    AWS:70,
    Kubernetes:50,
    CPP:65,
    Js:35,
    Java:15,
    CI_CD:10
}

var skill_levels = {
    "Yeah, Heard of It": 0.5,
    "Sure, Why Not": 15.5,
    "Compatible": 40.5,
    "Statistically Good": 60.5,
    "Awesome":85.5,
    "RockStar *":100
}

var data = [
    {
        x: Object.keys(data_science_skills),
        y: Object.values(data_science_skills),
        type: 'bar',
        hoverinfo: 'none',
        marker: {
            color: '673ab7'
        },
        name: "Data Science"
    },
    {
        x: Object.keys(dev_skills),
        y: Object.values(dev_skills),
        type: 'bar',
        hoverinfo: 'none',
        marker: {
            color: '5B74F5'
        },
        name:"Software Development"

    }
];
var layout = {
    title: 'Bar Plot of My Skills',
    font:{
    family: 'Special Elite, Raleway, sans-serif'
  },
    margin: {
        l: 150,
        r: 5,
        t: 100,
        b: 100
    },
    paper_bgcolor: '#f5f5f5',
    plot_bgcolor: '#f5f5f5',
    yaxis: {
        tickmode: "array",
        tickvals: Object.values(skill_levels),
        ticktext: Object.keys(skill_levels),
        range: [0, 100.5],
        showgrid: true,
        showline: true
    },
    showlegend: true
};

Plotly.newPlot(skills, data, layout, {displayModeBar: false});
