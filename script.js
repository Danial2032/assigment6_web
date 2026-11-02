$(document).ready(function() {
  console.log("jQuery is ready!");

  let animated = false;

  function createSkillBar(name, width) {
    let $container = $('<div>', {
      'class': 'skill-bar-container',
      'data-width': width
    });

    let $span = $('<span>').text(name);
    let $bg = $('<div>', { 'class': 'skill-bar-bg' });
    let $fill = $('<div>', { 'class': 'skill-bar-fill' });

    $bg.append($fill);
    $container.append($span).append($bg);

    return $container; 
  }

  function getRandomWidth() {
    return Math.floor(Math.random() * 51) + 50;
  }


  $("#update-headline-btn").click(function() {
    $("#profile-title").text("Welcome to Danial's Portfolio");
    $(".intro-text").css("color", "#007BFF");
  });

  $("#light-theme-btn").click(function() { $("body").removeClass("dark-theme"); });
  $("#dark-theme-btn").click(function() { $("body").addClass("dark-theme"); });

  $("#hide-status-btn").click(function() { $("#status-message").hide(); });
  $("#show-status-btn").click(function() { $("#status-message").show(); });
  $("#toggle-status-btn").click(function() { $("#status-message").toggle(); });

  $("#fade-in-btn").click(function() { $(".gallery-img").fadeIn(); });
  $("#fade-out-btn").click(function() { $(".gallery-img").fadeOut(); });
  $("#fade-toggle-btn").click(function() { $(".gallery-img").fadeToggle(); });

  $(".collapsible-heading").click(function() {
    $($(this).attr("data-target")).slideToggle();
  });


  $("#add-skill-btn").click(function() {
    let val = $("#new-skill-input").val().trim();
    if (val) { 
      $("#skills-list").append($('<li>').text(val)); 
      
      let $newBar = createSkillBar(val, getRandomWidth());
      $(".custom-container").before($newBar);

      $("#new-skill-input").val(""); 
    }
  });

  $("#prepend-skill-btn").click(function() {
    let val = $("#new-skill-input").val().trim();
    if (val) { 
      $("#skills-list").prepend($('<li>').text(val)); 
      
      let $newBar = createSkillBar(val, getRandomWidth());
      $("#skills-list").after($newBar);

      $("#new-skill-input").val(""); 
    }
  });

  $("#remove-skill-btn").click(function() { 
    $("#skills-list li:last").remove(); 
    $(".skill-bar-container").last().remove();
  });


  let toggled = false;
  $("#change-link-btn").click(function() {
    toggled = !toggled;
    $("#social-link")
      .attr("href", toggled ? "https://linkedin.com" : "https://github.com")
      .text(toggled ? "LinkedIn Profile" : "GitHub Profile");
  });

  $("#form-name, #form-email").on("input", function() {
    let n = $("#form-name").val(), e = $("#form-email").val();
    $("#live-output").text(n || e ? `Name: ${n || '-'} | Email: ${e || '-'}` : "Start typing above...");
  });


  $('#animate-skills-btn').click(function() {
    $('.skill-bar-container').each(function() {
      let w = animated ? '0%' : $(this).attr('data-width') + '%'; 
      $(this).find('.skill-bar-fill').stop().animate({ width: w }, 600);
    });
    animated = !animated;
  });

});