like = 1
function adicionarLike() {
    if(like == 1){
        botao.innerHTML = like + " Like"
        like = like - 1
    } else {
        botao.innerHTML = like + " Likes"
        like = like + 1
    }

}