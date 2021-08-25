import { Component } from 'react';
import './style.css';
import calorie from '../../asset/calorie.svg'
import carbs from '../../asset/carbs.svg'
import lipide from '../../asset/lipide.svg'
import protein from '../../asset/protein.svg'

class CardInfo extends Component
{

    render()
    {
        switch (this.props.type)
        {
            case "calorieCount": this.imgSrc = calorie; this.bgClass = 'calorie'; this.unit = "Kcal"; this.name = "Calories";  break;
            case "proteinCount":        this.imgSrc = protein; this.bgClass = 'proteine'; this.unit = "g"; this.name = "Protéines";  break;
            case "carbohydrateCount":   this.imgSrc = carbs; this.bgClass = 'carbs'; this.unit = "g"; this.name = "Glucides";  break;
            case "lipidCount":          this.imgSrc = lipide; this.bgClass = 'lipide'; this.unit = "g"; this.name = "Lipides";  break;
            default: break;
        }
        return (
            <div className="CardInfo" key="sdf" >
                <div className={`CardInfo_logo ${this.bgClass}`} ><img src={this.imgSrc} alt="" /></div>
                <div className="CardInfo_text">
                    <p className="CardInfo_text_number"> {this.props.value + this.unit}</p>
                    <p className="CardInfo_text_unit"> {this.name} </p>
                    </div>
                   
            </div>
        )
    }
}

export default CardInfo;
