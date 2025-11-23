window.onload = function(){ 
    document.querySelector('#push').onclick = function(){
        let input = document.querySelector('#newtask input');

        if(input.value.length == 0){
            alert("Введите текст задачи!");
        } else {

            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span>${input.value}</span>
                    <button class="delete">
                        <!-- SVG корзина -->
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#fff" d="M9 3V4H4V6H5V19A2 2 0 0 0 7 21H17A2 2 0 0 0 19 19V6H20V4H15V3H9M7 6H17V19H7V6Z" />
                        </svg>
                    </button>
                </div>
            `;

            input.value = "";

            let deleteButtons = document.querySelectorAll(".delete");

            deleteButtons.forEach(btn => {
                btn.onclick = function(){
                    this.parentNode.remove();
                }
            });
        }
    }
}
