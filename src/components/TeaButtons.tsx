import "./TeaButtons.css"

export default function buttons(){
    const teaName = ['Earl Greay', 'Mango & Black', 'Thyme & Black', 'Peach & Black Tea'];
    const teaPicture = ['https://i.imgur.com/M5d7VHF.png', 'https://i.imgur.com/BMlU1Fg.png', 'https://i.imgur.com/w7hqgGl.png', 'https://i.imgur.com/MfwllGJ.png'];
    const teaPrice = ['7,99$', '9,99$', '12,99$', '9,99$'];

    return(
        <div className="divForTea">
            {teaName.map((name, index) => (
                <button className="teaButtons">
                    <h2>{name}</h2>
                    <img className="buttonImg" src={teaPicture[index]} />
                    <h3>{teaPrice[index]}</h3>
                </button>
            ))}
        </div>
    );
}