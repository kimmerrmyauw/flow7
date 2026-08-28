
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I’m so proud of how hard you work every day. Even when you’re busy, you still make time to treat me with love and care. Thank you for always making an effort, even in the little things. Please remember to take care of yourself and get enough rest. I love you so much, and I’ll always be here cheering you on. 🤍').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
