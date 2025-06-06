const fileUpload = document.querySelector('#fileUpload');
const btnUpload = document.querySelector('.uploadButton');
let meme = null;
const iconhome = document.querySelector('.icon-home')


fileUpload.addEventListener('click', selectPic);
btnUpload.addEventListener('click', uploadMeme);
iconhome.addEventListener('click', ()=> {
    window.location.href="../html/home.html"
})
async function selectPic(){
    const file = fileUpload.files[0]

    if (file) {
        meme=file;
        const reader = new FileReader();
        reader.onload = (e) => {
            const newMeme = document.querySelector('.newMeme')
            newMeme.style.backgroundImage = `url('${e.target.result}')`
            newMeme.style.backgroundRepeat = 'no-repeat';
        }
        reader.readAsDataURL(file);
    }
}

async function uploadMeme() {
    try {
        if (meme) {
            const formData = new FormData;
            formData.append('meme',meme);

            const response = await fetch('http://127.0.0.1:3000/api/memes/uploadMeme', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });
        } else{
            alert('Válassz ki egy képet!')
        }
    } catch (error) {
        console.log(error)
    }
}