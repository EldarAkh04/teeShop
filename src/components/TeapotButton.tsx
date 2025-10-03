import "./Buttons.css"

export default function buttons(){
    const teapotName = ['Japanese Bird','Butterfly','Koi-fish', 'Red Flower'];
    const teapotPicture = ['https://i.imgur.com/2N7VYL6.png','https://i.imgur.com/vnWJIgT.png','https://i.imgur.com/VzJM7m4.png','https://i.imgur.com/k55vxFa.png'];
    const teapotPrice = ['49,99$','24,99$','34,99$','27,99$'];

    return(
        <div className="divForTea">
            {teapotName.map((name, index) => (
                <button className="Buttons">
                    <h2>{name}</h2>
                    <img className="buttonImg" src={teapotPicture[index]} />
                    <h3>{teapotPrice[index]}</h3>
                </button>
            ))}
        </div>
    );
}