$(document).ready(function() {

	/* Navigation Functions */

	if ($(window).scrollTop()===0){
		$('#main-nav').removeClass('scrolled');
	}
	else{
		$('#main-nav').addClass('scrolled');
	}

	$(window).scroll(function(){
		if ($(window).scrollTop()===0){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');
		}
	});

  /* ScrollTo Links */

  $('a.scrollto').click(function(e){
    // TODO Fix scrolling on small devices

    $('html,body').scrollTo(this.hash, this.hash, {gap:{y:-130},animation:  {easing: 'easeInOutCubic', duration: 1600}});
    e.preventDefault();

    if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
  });

  var skills = [
    ['Software Development', 8], ['.NET', 8], ['XML', 7], ['SQL', 6], ['JavaScript', 6], ['Microsoft SQL Server', 6], ['C#', 6],
    ['ASP.NET', 5], ['HTML 5', 5], ['Python', 4], ['Scrum', 4], ['UML', 4], ['WCF', 4], ['LINQ', 4], ['CSS', 4], ['jQuery', 4], ['Visual Studio', 4],
    ['Open Source', 3], ['JSON', 3], ['Agile Web Development', 3],
    ['Virtualization', 2], ['Scripting', 2], ['Tomcat', 2], ['Unix Shell Scripting', 2], ['ASP.NET MVC', 2], ['ADO.NET', 2],
    ['Entity Framework', 2], ['MySQL', 2], ['Extreme Programming', 2], ['Wireframes', 2], ['TFS', 2], ['Ruby', 1], ['PHP', 1],
    ['C++', 1], ['Oracle Application...', 12], ['XHTML', 12], ['CSS3', 12], ['Twitter Bootstrap', 12], ['Test Driven Development', 1],
    ['Linux System...', 1], ['Ubuntu', 1], ['Debian', 1], ['AngularJS', 1], ['OmniGraffle', 1], ['Visio', 1], ['Git', 1], ['MSBuild', 1],
    ['IDE', 1], ['Eclipse', 1],, ['Apache"],', 1],
    ];

  WordCloud(document.getElementById('canvas-skills'),
  {
    list: skills,
    gridSize: 30,
    weightFactor: 10,
    fontFamily: 'Open Sans, sans-serif',
    color: function() {
      return (['#2f2f2f', '#02779E' , '#44A2A7'])[Math.floor(Math.random() * 3)]
    },
    backgroundColor: '#fff',
    shuffle: true,
    rotateRatio: 0.5
  });
});
