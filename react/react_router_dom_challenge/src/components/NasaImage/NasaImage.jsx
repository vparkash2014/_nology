import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const randomDate = () => {
    const startDate = new Date(1996, 0 , 1);
    const endDate = new Date();

    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

}

const dateObjToStr = (dateObj) => {
    const year = dateObj.getFullYear().toString();

    const monthObj = dateObj.getMonth() + 1;
    const monthStr = monthObj.toString();
    const monthFixed = monthStr.length === 1 ? "0" + monthStr : monthStr;

    const dateStr = dateObj.getDate().toString();
    const dateFixed = dateStr.length === 1 ? "0" + dateStr : dateStr;

    return `${year}-${monthFixed}-${dateFixed}`;
}

const urlStr = () => {
    const dateStr = dateObjToStr(randomDate());
    const url = 'https://api.nasa.gov/planetary/apod?api_key=';
    const api_key = 'ZgpDOl3YhC0v5xlpXpkVxceElBYpx4ycjIeEhmAU';
    
    return `${url}${api_key}&date=${dateStr}`
}

const nasaRequest = async () => {
    const url = urlStr()
    const response = await fetch(url);
    const data = await response.json();

    return data
}

const fetchImg = async (setResult) => {
    const nasaImg = await nasaRequest();
    setResult([nasaImg.url, nasaImg.title])
} 


const NasaImage = () => {
    const [nasaPhoto, setNasaPhoto] = useState(0);
    const [result, setResult] = useState(null);

    useEffect(()=> {

        if (nasaPhoto) {
            console.log('running fetch');
            fetchImg(setResult);
        };

    },[nasaPhoto])

    return (
        <div>
            <Button variant="info" onClick={() => setNasaPhoto(Math.random())}>Link here if you want a random NASA Photo</Button>
            <div>
                {result ? <img src={result[0]} />: ''}
                {result ? <p>{result[1]}</p> : ''}
            </div>
        </div>
    );
};

export default NasaImage;