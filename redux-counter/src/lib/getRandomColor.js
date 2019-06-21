export default function getRandomColor(){
    const colors = [
        '#FF0000',
        '#FF5E00',
        '#FFE400',
        '#ABF200',
        '#1DDB16',
        '#0054FF',
        '#00D8FF',
        '#0100FF',
        '#5F00FF',
        '#FF00DD',
        '#FF007F',
        '#000000',
        '#EAEAEA'
    ];

    const random = Math.floor(Math.random() * 13);
    
    return colors[random];
}