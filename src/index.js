const checkboxes = document.querySelectorAll('input');

let firstCheck;
let lastCheck;
let inBetween = false;

function handleCheck(e) {

  firstCheck = this;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === firstCheck || checkbox === lastCheck) {
        inBetween = !inBetween
        console.log("INTERVAL");
      };
      if (inBetween) {
        checkbox.checked = true;
       };
    });
  };

  lastCheck = this;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
});

