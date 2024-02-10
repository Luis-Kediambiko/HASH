function abrirmodal(a){var b=document.getElementById(a);b.style.display="flex"}function fecharmodal(a){var b=document.getElementById(a);b.style.display="none"}let nome=document.getElementById("nomeTeste"),sms=document.getElementById("smsTeste"),btnAdd=document.getElementById("btn-add"),main=document.getElementById("colo");function AddTeste(){let a=nome.value,b=sms.value;if(""!==a&&null!==a){main.innerHTML+=`<div class="swiper-slide">
                    <div class="testimonial-item">
                      <h3>${a}</h3>
                      <h4>Formando</h4>
                      <p>
                      ${b}
                      </p>
                    </div>
                  </div>
`}}