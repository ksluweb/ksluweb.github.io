function gate() {
   var UserInput = prompt("デバッグページにアクセスすると，全チームの全投句を表示することになります．このことを理解してデバッグページにアクセスしたい場合は、以下に debug/debug_index と入力してください．","");
   location.href = UserInput + ".html";
   }

document.addEventListener('DOMContentLoaded', () => {
   const debugBtn = document.getElementById('debugbtn');
   if (debugBtn) {
      debugBtn.addEventListener('click', (event) => {
         event.preventDefault();
         gate();
      });
   }
});