interface CardsViewInteface{
    img: string,
    heading: string,
    info: string
}

export default function CardsView(props: CardsViewInteface){
    const imageClassName = "card-view-image cs-icon " + props.img;
    return (
        <div className="card-view">
            <i className={imageClassName}>
            </i>
            <div className="card-view-content">
                <h5>
                    {props.heading}
                </h5>
                <p>
                    {props.info}
                </p>
            </div>
        </div>
    );
}
