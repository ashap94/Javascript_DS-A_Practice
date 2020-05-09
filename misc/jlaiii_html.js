function start(number, replace) {
  setTimeout(() => {
    let money = String(number).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,");
    document.querySelectorAll("*").forEach((node) => {
      if (node.innerHTML == replace) {
        node.innerHTML = "$" + money;
      }
    });
  }, 300);
}
