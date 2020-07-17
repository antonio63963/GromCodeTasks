export const addImage = (imgSrc, callback) => {

    //TODO write your code here
    const addImageElem = document.querySelector('.page');
    
    const imageElem = document.createElement('img');
    imageElem.setAttribute('alt','somePhoto');
    imageElem.src = imgSrc;
    addImageElem.append(imageElem);
   
    const waitLoad = () => {
        callback(null, imageElem);
    };
    imageElem.addEventListener('load', waitLoad);
};

//callack example
const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};



//test call
addImage("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", onImageLoaded);