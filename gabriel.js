
btn.addEventListener('click', function() {
    let nome = document.querySelector("#nomeInput").value;
    let texto = document.querySelector("#textoInput").value;
    let coment = document.getElementById('coment');
    let feedback =  document.createElement('div');
    feedback.innerHTML= "<h3>"+ nome +"</h3>"+"<p>"+texto+"</p>";
    coment.appendChild(feedback);
    });