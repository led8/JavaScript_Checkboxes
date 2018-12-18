const checkboxes = document.querySelectorAll('input');

let firstCheck;
let lastCheck;
let inBetween = false;

function handleCheck(e) {

  firstCheck = e.currentTarget;

  if (e.shiftKey && e.currentTarget.checked) {
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

  lastCheck = e.currentTarget;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
});

