document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { mainNav.classList.remove('open'); });
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Animated stat counters
  var counters = document.querySelectorAll('[data-count]');
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var isDecimal = target % 1 !== 0;
    var duration = 1400;
    var start = performance.now();

    function tick(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    }
    requestAnimationFrame(tick);
  }

  if (counters.length) {
    if ('IntersectionObserver' in window) {
      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { countObserver.observe(el); });
    } else {
      counters.forEach(animateCount);
    }
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', function () {
      var wasActive = item.classList.contains('active');
      item.parentElement.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('active');
      });
      if (!wasActive) item.classList.add('active');
    });
  });

  // Contact form submit (no backend — shows success state)
  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.style.display = 'none';
      success.classList.add('active');
    });
  }

});
