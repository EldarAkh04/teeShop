import "./Buttons.css"

export default function buttons(){
    const BiscuitName = ['Rose', 'Caramel & Salt'];
    const BiscuitPicture = ['https://i.imgur.com/90I2Ste.png', 'https://i.imgur.com/mcOV5rF.png'];
    const BiscuitPrice = ['8,49$', '6,99$'];

    return(
        <div className="divForTea">
            {BiscuitName.map((name, index) => (
                <button className="Buttons">
                    <h2>{name}</h2>
                    <img className="buttonImg" src={BiscuitPicture[index]} />
                    <h3>{BiscuitPrice[index]}</h3>
                </button>
            ))}
        </div>
    );
}