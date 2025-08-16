document.addEventListener("DOMContentLoaded", function () {
  const navItems = [
    { text: 'Home', href: 'index.html', page: 'home' },
    { text: 'Watchlist', href: 'watchlist.html', page: 'watchlist' },
    {
      text: 'Alerts',
      page: 'alerts',
      dropdown: true,
      items: [
        { href: 'set-alerts.html', text: 'Set Alerts', page: 'setalerts' },
        { href: 'triggered-alerts.html', text: 'Alert Results', page: 'alertresults' },
        { href: 'manage-alerts.html', text: 'Manage Alerts', page: 'managealerts' }
      ]
    },
    {
      text: 'Settings',
      page: 'settings',
      dropdown: true,
      items: [
        { href: '#', text: 'Dark Mode', page: 'darkmode' },
        { href: '#', text: 'Compact View', page: 'compact' }
      ]
    }
  ];

  const navbar = document.getElementById('navbar');
  const ul = document.createElement('ul');

  navItems.forEach(item => {
    const li = document.createElement('li');

    if (item.dropdown) {
      const toggle = document.createElement('a');
      toggle.href = '#';
      toggle.className = 'dropdown-toggle';
      toggle.textContent = item.text;
      li.appendChild(toggle);

      const menu = document.createElement('ul');
      menu.className = 'dropdown-menu';

      item.items.forEach(subItem => {
        const subLi = document.createElement('li');
        const subLink = document.createElement('a');
        subLink.href = subItem.href;
        subLink.textContent = subItem.text;
        subLink.className = 'dropdown-link';
        subLi.appendChild(subLink);
        menu.appendChild(subLi);
      });

      li.appendChild(menu);

      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        closeAllDropdowns();
        menu.classList.toggle('open');
      });
    } else {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.text;
      li.appendChild(link);
    }

    ul.appendChild(li);
  });

  navbar.appendChild(ul);

  // Active link toggle
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
      menu.classList.remove('open');
    });
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown-toggle')) {
      closeAllDropdowns();
    }
  });
});

