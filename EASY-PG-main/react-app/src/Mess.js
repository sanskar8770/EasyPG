import React, { Component } from 'react';
import FilterBar from './FilterBar';
import FilterModal from './FilterModal';
import MessCard from './MessCard';
import MessCard2 from './MessCard2';
import Nomess from './Nomess';
import { base_path } from './utils.js';

class mess extends Component {

    state = {
        messes: [],
        sort: "none",
        filter: {
            gender: "none"
        } 
       // isEditing: false
    };
    componentDidMount() {
        const search = window.location.search;//return query string part of url including ?
        const params = new URLSearchParams(search);//API to convert search query to object
        const city_name = params.get('city');

        fetch(`${base_path}/api/get_messes_by_city.php?city=${city_name}`)//API to fetch messes object it returns a promise
            .then(response => response.json())//response.json() is an api which parse the response to object . it also returns a promise
            .then(responseData => {
                this.setState({
                    messes: responseData
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    toggleInterested = mess_id => {
        fetch(`${base_path}/api/toggle_interested_mess.php?mess_id=${mess_id}`)
            .then(response => response.json())
            .then(responseData => {
                if (responseData.success) {
                    console.log('Success');
                    this.updateInterested(mess_id);
                } else if (!responseData.success && !responseData.is_logged_in) {
                    console.log('Not logged in!');
                    window.$("#login-modal").modal("show");
                }
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    updateInterested = mess_id => {
        let updated_messes = [...this.state.messes];
        updated_messes.forEach((mess) => {
            if (mess.id === mess_id) {
                mess.is_interested = !mess.is_interested;
                if (mess.is_interested) {
                    mess.interested_users_count++;
                } else {
                    mess.interested_users_count--;
                }
            }
        });
    

        this.setState({
            messes: updated_messes
        });
    }

    updateSort = sort => {
        this.setState({
            sort: sort
        });
    }
    // setMenu=menu =>{
    //     this.setState({
    //         menu: menu
    //     });
    // }
    //updateMenu=Event =>

    updateFilter = gender => {
        this.setState({
            filter: {
                gender: gender
            }
        });
    }

    render() {
        let messes = [...this.state.messes];

        // Sorting
        if (this.state.sort !== "none") {
            if (this.state.sort === "desc") {
                messes.sort((a, b) => b.rent - a.rent);
            } else {
                messes.sort((a, b) => a.rent - b.rent);
            }
        }

        // Filter
        if (this.state.filter.gender !== "none") {
            messes = messes.filter(mess =>
                mess.gender === this.state.filter.gender
            );
        }

        let mess_cards,mess_cards2;
        if (messes.length > 0) {
            mess_cards = messes.filter(mess=>
                mess.is_owner).map(mess =>
                
                    // if(mess.is_owner){
                        <MessCard
                        key={mess.id}
                        mess={mess}
                        // isEditing={this.state.isEditing}
                        toggleInterested={() => this.toggleInterested(mess.id)}
                        />
                    // }
                    // else{
                    //     <MessCard2
                    //     key={mess.id}
                    //     mess={mess}
                    //     // isEditing={this.state.isEditing}
                    //     toggleInterested={() => this.toggleInterested(mess.id)}
                    //     />
                    // }
                
            
               
            );
            mess_cards2 = messes.filter(mess=>
                mess.is_owner==false).map(mess =>
                
                    // if(mess.is_owner){
                        <MessCard2
                        key={mess.id}
                        mess={mess}
                        // isEditing={this.state.isEditing}
                        toggleInterested={() => this.toggleInterested(mess.id)}
                        />
                    // }
                    // else{
                    //     <MessCard2
                    //     key={mess.id}
                    //     mess={mess}
                    //     // isEditing={this.state.isEditing}
                    //     toggleInterested={() => this.toggleInterested(mess.id)}
                    //     />
                    // }
                
            
               
            );
        } else {
            mess_cards = <Nomess />;
        }


        return (
            <>
                <div className="page-container">
                    {/* <FilterBar
                        currentSort={this.state.sort}
                        updateSort={this.updateSort}
                        currentFilter={this.state.filter}
                    /> */}

                    {mess_cards}
                    {mess_cards2}
                </div>

                {/* <FilterModal
                    currentFilter={this.state.filter}
                    updateFilter={this.updateFilter}
                /> */}
            </>
        );
    }
}

export default mess;
