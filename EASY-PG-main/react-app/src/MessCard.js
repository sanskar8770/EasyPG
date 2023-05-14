import React, {useState} from "react"; 
import Stars from './Stars';
import Interested from './Interested';
import { base_path } from './utils.js';

const MessCard= props => {
    // let den=0;
    // if(props.mess.rating_clean!==0)
    // den++;
    // if(props.mess.rating_food!==0)
    // den++;
    // if(props.mess.rating_safety!==0)
    // den++;
    // if(props.mess.rating_service!==0)
    // den++;
    // if(den==0)
    // den++;
    const [menu,setMenu]= useState(props.mess.menu);
    // let text;
    // if(props.mess.is_owner){
    //     text=<input class="form-control form-control-sm" type="text" value={menu} onChange={updateMenu} /> 
    //     // <textarea class="form-control" rows="1" value={menu} onChange={updateMenu}></textarea>
    // }
    // else{
    //     text= <input class="form-control form-control-sm" type="text" placeholder={ props.mess.menu } readOnly={true}/>
    // }
    
    // state= {
    //     menu: props.mess.menu
    // };
    const updateMenu=(event) =>{
            setMenu(event.target.value)
            fetch(`${base_path}/api/update_menu.php?mess_id=${props.mess.id}&menu=${menu}`)
                .then(response => response.json())
                .then(responseData => {
                    if (responseData.success) {
                        console.log('Success');
                        // this.setState({
                        //     menu: event.target.value
                        // });
                        
                    }
                    else{
                        console.log(responseData.message);
                    }
                    // } else if (!responseData.success && !responseData.is_logged_in) {
                    //     console.log('Not logged in!');
                    //     window.$("#login-modal").modal("show");
                    // }
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                });
        
       
    }
    let total_rating = (parseFloat(props.mess.rating_food) +parseFloat(props.mess.rating_service)) / 2;
    total_rating = Math.round(total_rating * 10) / 10;
    total_rating = total_rating.toFixed(1);

    // let gender_image;
    // if (props.mess.gender === "male") {
    //     gender_image = <img src={base_path + "/img/male.png"} alt="male" />;
    // } else if (props.mess.gender === "female") {
    //     gender_image = <img src={base_path + "/img/female.png"} alt="female" />;
    // } else {
    //     gender_image = <img src={base_path + "/img/unisex.png"} alt="unisex" />;
    // }

    let charge = new Intl.NumberFormat().format(props.mess.charge);
    let charge_breakfast = new Intl.NumberFormat().format(props.mess.charge_breakfast);
    let charge_monthly = new Intl.NumberFormat().format(props.mess.charge_monthly);

    return (
        <div className={`mess-card mess-id-${props.mess.id} row`}>
            <div className="image-container col-md-4">
                <img src={base_path + "/" + props.mess.image} alt="mess" />
            </div>

            <div className="content-container col-md-8">
                <div className="row no-gutters justify-content-between">
                    <Stars rating={total_rating} />

                    <Interested
                        is_interested={props.mess.is_interested}
                        toggleInterested={props.toggleInterested}
                        user_count={props.mess.interested_users_count}
                    />
                </div>

                <div className="detail-container">
                    <div className="mess-name">{props.mess.name}</div>
                    <div className="mess-address">{props.mess.address}</div>
                    {/* <div className="mess-gender">
                        {gender_image}
                    </div> */}
                </div>

                <div className="row no-gutters">
                    <div className="charge-container col-6">
                        <div className="charge">Monthly : ₹ {charge_monthly}/-</div>
                        {/* <div className="charge-unit">(includes lunch and dinner)</div> */}
                        
                    </div>
                    <div className="charge-container col-6">
                        <div className="charge">Lunch/Dinner : ₹ {charge}/-</div>
                        
                    </div>
                    <div className="charge-container col-6">
                        <div className="charge">Breakfast : ₹ {charge_breakfast}/-</div>
                        
                    </div>
                     
                    <div className="charge-container col-6">
                        <div className="charge">Menu  
                        {/* {text} */}
                        <input class="form-control form-control-sm" type="text" value={menu} onChange={updateMenu} />
                        </div>
                        
                    </div>
                    
                    {/* else{
                        <div className="charge-container col-6">
                        <div className="charge">Menu  
                        
                       
                        </div>
                        
                        </div>
                    }  */}
                    <div className="button-container col-6">
                        <a href="#" className="btn btn-primary">Order</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessCard;
