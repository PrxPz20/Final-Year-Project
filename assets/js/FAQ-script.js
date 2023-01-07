/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content 
*/

var acc = document.getElementsByClassName('item');
var i;
var len = acc.length;

for (i = 0; i < len; i++) {
  acc[i].addEventListener('click', function() {

      this.classList.toggle('active');
        var faq_answer = this.nextElementSibling;

        if (faq_answer.style.maxHeight) {
          faq_answer.style.maxHeight = null;
          console.log("IF");
        }
        else{
          faq_answer.style.maxHeight = faq_answer.scrollHeight + 'px';
          console.log("ELSE");
        }

    })
}
