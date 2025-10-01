import "./GiftButtons.css"

export default function buttons(){
    const giftName = ['Teapot with Mango & Black', 'Teapot with Thyme & Black', 'Teapot with Oolong tea'];
    const giftPicture = ['https://i.imgur.com/VvCihLX.png', 'https://i.imgur.com/2AFgYWT.png','https://i.imgur.com/OzZnYNe.png'];
    const giftPrice = ['39,99$', '39,99$', '54,99$'];

    return(
        <div className="divForTea">
            {giftName.map((name, index) => (
                <button className="GiftButtons">
                    <h2>{name}</h2>
                    <img className="buttonImg" src={giftPicture[index]} />
                    <h3>{giftPrice[index]}</h3>
                </button>
            ))}
        </div>
    );
}